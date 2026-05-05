import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/integrations/supabase/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, items, amount } = body;

    let lineItems: any[] = [];
    let totalAmount = 0;
    let orderItems = [];

    if (type === 'cart') {
      if (!items || items.length === 0) {
        return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
      }

      // Fetch prices from Supabase to ensure security (never trust frontend prices)
      const productIds = items.map((item: any) => item.id);
      const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .in('id', productIds);

      if (error || !products) throw new Error('Failed to fetch products from database');

      for (const item of items) {
        const product = products.find(p => p.id === item.id);
        if (!product) continue;

        const quantity = item.quantity || 1;
        totalAmount += Number(product.price) * quantity;
        
        orderItems.push({
          ...item,
          price: product.price, // Use DB price
          name: product.name
        });

        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${product.name} ${item.selectedColor ? `(${item.selectedColor})` : ''} ${item.selectedSize ? `[${item.selectedSize}]` : ''}`.trim(),
              images: product.image_url ? [product.image_url] : [],
            },
            unit_amount: Math.round(Number(product.price) * 100), // Convert to cents
          },
          quantity: quantity,
        });
      }
    } else if (type === 'donation') {
      if (!amount || amount <= 0) {
        return NextResponse.json({ error: 'Invalid donation amount' }, { status: 400 });
      }
      
      totalAmount = Number(amount);
      orderItems = [{ name: 'Donation', price: totalAmount, quantity: 1 }];
      
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation to Serving Kingdom KC',
          },
          unit_amount: Math.round(totalAmount * 100), // Convert to cents
        },
        quantity: 1,
      });
    } else {
      return NextResponse.json({ error: 'Invalid checkout type' }, { status: 400 });
    }

    // Create pending order in Supabase
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        customer_name: 'Guest Checkout',
        email: 'guest@example.com',
        phone: 'N/A', // Required by schema
        items: orderItems,
        total: totalAmount,
        status: 'pending'
      }])
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error('Failed to create order record');
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${siteUrl}/store/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
      cancel_url: `${siteUrl}/${type === 'donation' ? 'donate' : 'store'}`,
      metadata: {
        order_id: order.id,
        type: type
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}