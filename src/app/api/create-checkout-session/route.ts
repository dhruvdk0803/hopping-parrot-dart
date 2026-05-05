import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/integrations/supabase/client';

// Using the provided live key as a fallback if the environment variable is not set
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY || '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';

const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: '2023-10-16' as any, 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, items, amount } = body;

    // Dynamically get the website URL so it works in preview and production
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    let lineItems: any[] = [];
    let totalAmount = 0;
    let orderItems = [];

    if (type === 'cart') {
      if (!items || items.length === 0) {
        return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
      }

      // Fetch prices from Supabase to ensure security
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
          price: product.price,
          name: product.name
        });

        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${product.name} ${item.selectedColor ? `(${item.selectedColor})` : ''} ${item.selectedSize ? `[${item.selectedSize}]` : ''}`.trim(),
              images: product.image_url ? [product.image_url] : [],
            },
            unit_amount: Math.round(Number(product.price) * 100),
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
          unit_amount: Math.round(totalAmount * 100),
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
        phone: 'N/A',
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

    // Create Stripe session using automatic payment methods
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'hosted',
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/store/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
      cancel_url: `${origin}/${type === 'donation' ? 'donate' : 'store'}`,
      metadata: {
        order_id: order.id,
        type: type
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred' }, { status: 500 });
  }
}