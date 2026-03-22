"use client";
import { useState } from 'react';
import { useProducts } from '@/hooks/use-products';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Check, X } from 'lucide-react';

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct, mounted } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const initialForm = {
    name: '',
    price: '',
    category: 'Serving Kingdom Swag',
    type: 'Product',
    image_url: '',
    description: '',
    interval: ''
  };
  
  const [formData, setFormData] = useState(initialForm);

  if (!mounted) return null;

  const handleSave = (status: 'draft' | 'published') => {
    const productData = {
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      category: formData.category,
      type: formData.type as 'Product' | 'Subscription',
      image_url: formData.image_url,
      description: formData.description,
      interval: formData.interval,
      status
    };

    if (editingId) {
      updateProduct(editingId, productData);
    } else {
      addProduct(productData);
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData(initialForm);
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      type: product.type,
      image_url: product.image_url || '',
      description: product.description || '',
      interval: product.interval || ''
    });
    setEditingId(product.id);
    setIsAdding(true);
  };

  const toggleStatus = (product: any) => {
    updateProduct(product.id, { 
      status: product.status === 'published' ? 'draft' : 'published' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Products</h1>
        {!isAdding && (
          <Button 
            onClick={() => setIsAdding(true)}
            className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold"
          >
            <Plus size={18} className="mr-2" /> Add Product
          </Button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white p-8 border border-black/10 shadow-sm mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Product Name *</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Price ($) *</label>
              <input type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Category</label>
              <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none">
                <option value="Serving Kingdom Swag">Serving Kingdom Swag</option>
                <option value="Loading Golf Swag">Loading Golf Swag</option>
                <option value="Membership Packages">Membership Packages</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Type</label>
              <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none">
                <option value="Product">Product</option>
                <option value="Subscription">Subscription</option>
              </select>
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Image URL</label>
              <input type="text" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="https://..." className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
            </div>
            {formData.type === 'Subscription' && (
              <div className="flex flex-col md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Interval (e.g., "per month")</label>
                <input type="text" value={formData.interval} onChange={e => setFormData({...formData, interval: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
              </div>
            )}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none resize-none"></textarea>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => handleSave('published')} className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold px-8">
              Publish
            </Button>
            <Button onClick={() => handleSave('draft')} variant="outline" className="rounded-none border-black text-black hover:bg-gray-100 uppercase tracking-widest font-bold px-8">
              Save as Draft
            </Button>
            <Button onClick={() => { setIsAdding(false); setEditingId(null); setFormData(initialForm); }} variant="ghost" className="rounded-none text-muted-foreground hover:text-black uppercase tracking-widest font-bold px-8 ml-auto">
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="bg-white border border-black/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-black/10">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Image</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Price</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b border-black/5 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-12 h-12 object-cover bg-gray-100 border border-black/10" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 border border-black/10 flex items-center justify-center text-xs text-muted-foreground">No Img</div>
                    )}
                  </td>
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">${product.price.toFixed(2)} {product.interval && <span className="text-xs text-muted-foreground block">{product.interval}</span>}</td>
                  <td className="p-4 text-sm text-muted-foreground">{product.category}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${product.status === 'published' ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-600'}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button onClick={() => toggleStatus(product)} className="p-2 text-muted-foreground hover:text-black transition-colors" title={product.status === 'published' ? 'Unpublish' : 'Publish'}>
                      {product.status === 'published' ? <X size={18} /> : <Check size={18} />}
                    </button>
                    <button onClick={() => handleEdit(product)} className="p-2 text-muted-foreground hover:text-primary transition-colors" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => { if(confirm('Are you sure?')) deleteProduct(product.id); }} className="p-2 text-muted-foreground hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}