import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/integrations/supabase/client';

// Initialize Stripe with a dummy key if env var is missing to prevent build errors
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Calculate total including quantity
    const total = items.reduce((sum: number, item: any) => sum + (Number(item.price) * (item.quantity || 1)), 0);

    // Create a pending order in Supabase
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        customer_name: 'Guest Checkout', // In a real app, get this from auth or checkout session
        email: 'guest@example.com',
        items: items,
        total: total,
        status: 'pending'
      }])
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }

    // If no Stripe key is configured, simulate a successful checkout redirect
    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn('No STRIPE_SECRET_KEY found. Simulating checkout success.');
      return NextResponse.json({ url: `/store/success?order_id=${order.id}` });
    }

    // Create Stripe Checkout Session
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name} ${item.selectedColor ? `(${item.selectedColor})` : ''} ${item.selectedSize ? `[${item.selectedSize}]` : ''}`.trim(),
          images: item.image_url ? [item.image_url] : [],
        },
        unit_amount: Math.round(Number(item.price) * 100), // Convert to cents
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/store/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/store`,
      metadata: {
        order_id: order.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}