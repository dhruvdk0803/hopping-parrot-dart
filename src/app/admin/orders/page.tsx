"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (data) setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from('orders').update({ status: newStatus }).eq('id', id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Order marked as ${newStatus}`);
      fetchOrders();
    }
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Orders</h1>
      </div>

      <div className="bg-white border border-black/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-black/10">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Order ID / Date</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Customer</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Total</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b border-black/5 hover:bg-gray-50 transition-colors align-top">
                  <td className="p-4">
                    <div className="font-mono text-xs text-muted-foreground mb-1">{order.id.split('-')[0]}...</div>
                    <div className="text-sm">{new Date(order.created_at).toLocaleDateString()}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium">{order.customer_name}</div>
                    <div className="text-sm text-muted-foreground">{order.email}</div>
                  </td>
                  <td className="p-4 font-bold">${Number(order.total).toFixed(2)}</td>
                  <td className="p-4">
                    <select 
                      value={order.status} 
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className={`text-xs font-bold uppercase tracking-wider px-2 py-1 border-none focus:ring-0 cursor-pointer ${
                        order.status === 'paid' ? 'bg-primary/10 text-primary' : 
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : 
                        'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="shipped">Shipped</option>
                    </select>
                  </td>
                  <td className="p-4 text-sm">
                    <ul className="list-disc list-inside text-muted-foreground">
                      {order.items && Array.isArray(order.items) ? order.items.map((item: any, i: number) => (
                        <li key={i}>{item.name} (x{item.quantity || 1})</li>
                      )) : <li>No items data</li>}
                    </ul>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}