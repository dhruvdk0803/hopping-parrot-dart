"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Package, CheckCircle, ShoppingCart, Tags } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    publishedProducts: 0,
    totalOrders: 0,
    totalCategories: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [productsRes, publishedRes, ordersRes, categoriesRes] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact', head: true }),
        supabase.from('products').select('id', { count: 'exact', head: true }).eq('status', 'published'),
        supabase.from('orders').select('id', { count: 'exact', head: true }),
        supabase.from('Catagories').select('id', { count: 'exact', head: true })
      ]);

      setStats({
        totalProducts: productsRes.count || 0,
        publishedProducts: publishedRes.count || 0,
        totalOrders: ordersRes.count || 0,
        totalCategories: categoriesRes.count || 0
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-8 uppercase">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Products</p>
            <p className="text-3xl font-bold">{stats.totalProducts}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-primary text-white flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Published</p>
            <p className="text-3xl font-bold">{stats.publishedProducts}</p>
          </div>
        </div>

        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 text-black flex items-center justify-center">
            <ShoppingCart size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Orders</p>
            <p className="text-3xl font-bold">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center">
            <Tags size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Categories</p>
            <p className="text-3xl font-bold">{stats.totalCategories}</p>
          </div>
        </div>
      </div>
    </div>
  );
}