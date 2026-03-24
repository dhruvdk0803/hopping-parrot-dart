"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

// 1. Create an inner component that uses useSearchParams
function OrderProcessor() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [status, setStatus] = useState('Processing your order...');

  useEffect(() => {
    const updateOrder = async () => {
      if (orderId) {
        const { error } = await supabase
          .from('orders')
          .update({ status: 'paid' })
          .eq('id', orderId);
          
        if (!error) {
          setStatus('Payment successful! Your order has been confirmed.');
        } else {
          setStatus('Order recorded, but there was an issue updating the status.');
        }
      } else {
        setStatus('No order ID found.');
      }
    };

    updateOrder();
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-12 border border-black/10 max-w-lg w-full text-center shadow-xl">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-4">Thank You!</h1>
        <p className="text-muted-foreground mb-8">{status}</p>
        
        <Button asChild className="w-full h-14 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors">
          <Link href="/store">Return to Store</Link>
        </Button>
      </div>
    </div>
  );
}

// 2. Export a wrapper component that provides the Suspense boundary
export function SuccessContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-muted-foreground uppercase tracking-widest font-bold">Loading order details...</div>
      </div>
    }>
      <OrderProcessor />
    </Suspense>
  );
}