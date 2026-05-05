import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/integrations/supabase/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  try {
    if (!sig || !endpointSecret) throw new Error('Missing signature or secret');
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle successful checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.order_id;

    if (orderId) {
      // Capture the actual customer details from Stripe
      const customerEmail = session.customer_details?.email || 'guest@example.com';
      const customerName = session.customer_details?.name || 'Guest Checkout';

      // Update order status to paid AND save the customer's real details.
      // We use .eq('status', 'pending') to ensure we don't process duplicates.
      const { error } = await supabase
        .from('orders')
        .update({ 
          status: 'paid',
          email: customerEmail,
          customer_name: customerName
        })
        .eq('id', orderId)
        .eq('status', 'pending');

      if (error) {
        console.error('Error updating order status:', error);
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
      }
      
      console.log(`Order ${orderId} successfully marked as paid for ${customerEmail}.`);
    }
  }

  return NextResponse.json({ received: true });
}