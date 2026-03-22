"use client";
import { useProducts } from '@/hooks/use-products';
import { Package, CheckCircle, FileEdit } from 'lucide-react';

export default function AdminDashboard() {
  const { products, mounted } = useProducts();

  if (!mounted) return null;

  const total = products.length;
  const published = products.filter(p => p.status === 'published').length;
  const drafts = products.filter(p => p.status === 'draft').length;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-8 uppercase">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Total Products</p>
            <p className="text-3xl font-bold">{total}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-primary text-white flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Published</p>
            <p className="text-3xl font-bold">{published}</p>
          </div>
        </div>

        <div className="bg-white p-6 border border-black/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 text-black flex items-center justify-center">
            <FileEdit size={24} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Drafts</p>
            <p className="text-3xl font-bold">{drafts}</p>
          </div>
        </div>
      </div>
    </div>
  );
}