"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Check, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const initialForm = {
    name: '',
    price: '',
    category_id: '',
    type: 'product',
    image_url: '',
    description: '',
    colors: '',
    sizes: '',
    additional_images: ''
  };
  
  const [formData, setFormData] = useState(initialForm);

  const fetchData = async () => {
    const [prodRes, catRes] = await Promise.all([
      supabase.from('products').select('*').order('created_at', { ascending: false }),
      supabase.from('Catagories').select('*')
    ]);
    if (prodRes.data) setProducts(prodRes.data);
    if (catRes.data) {
      setCategories(catRes.data);
      if (catRes.data.length > 0 && !formData.category_id) {
        setFormData(prev => ({ ...prev, category_id: catRes.data[0].id }));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (status: 'draft' | 'published') => {
    if (!formData.name || !formData.price || !formData.category_id) {
      toast.error("Please fill in all required fields");
      return;
    }

    const productData = {
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      category_id: formData.category_id,
      type: formData.type,
      image_url: formData.image_url,
      description: formData.description,
      status,
      colors: formData.colors ? formData.colors.split(',').map(s => s.trim()).filter(Boolean) : null,
      sizes: formData.sizes ? formData.sizes.split(',').map(s => s.trim()).filter(Boolean) : null,
      additional_images: formData.additional_images ? formData.additional_images.split(',').map(s => s.trim()).filter(Boolean) : null,
    };

    if (editingId) {
      const { error } = await supabase.from('products').update(productData).eq('id', editingId);
      if (error) {
        if (error.message.includes('column')) toast.error("Database schema error: Please run the SQL command to add colors/sizes columns.");
        else toast.error(error.message);
      } else toast.success("Product updated");
    } else {
      const { error } = await supabase.from('products').insert([productData]);
      if (error) {
        if (error.message.includes('column')) toast.error("Database schema error: Please run the SQL command to add colors/sizes columns.");
        else toast.error(error.message);
      } else toast.success("Product added");
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({ ...initialForm, category_id: categories[0]?.id || '' });
    fetchData();
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category_id: product.category_id,
      type: product.type,
      image_url: product.image_url || '',
      description: product.description || '',
      colors: product.colors ? product.colors.join(', ') : '',
      sizes: product.sizes ? product.sizes.join(', ') : '',
      additional_images: product.additional_images ? product.additional_images.join(', ') : '',
    });
    setEditingId(product.id);
    setIsAdding(true);
  };

  const toggleStatus = async (product: any) => {
    const newStatus = product.status === 'published' ? 'draft' : 'published';
    const { error } = await supabase.from('products').update({ status: newStatus }).eq('id', product.id);
    if (error) toast.error(error.message);
    else {
      toast.success(`Product ${newStatus}`);
      fetchData();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) toast.error(error.message);
    else {
      toast.success("Product deleted");
      fetchData();
    }
  };

  const getCategoryName = (id: string) => {
    return categories.find(c => c.id === id)?.name || 'Unknown';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Products & Memberships</h1>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold">
            <Plus size={18} className="mr-2" /> Add Item
          </Button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white p-8 border border-black/10 shadow-sm mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
            {editingId ? 'Edit Item' : 'Add New Item'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Name *</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Price ($) *</label>
              <input type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Category *</label>
              <select value={formData.category_id} onChange={e => setFormData({...formData, category_id: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none">
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Type</label>
              <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none">
                <option value="product">Product (Swag)</option>
                <option value="subscription">Subscription (Membership)</option>
              </select>
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Main Image URL</label>
              <input type="text" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="/zipgray.png" className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Additional Images (comma separated URLs)</label>
              <input type="text" value={formData.additional_images} onChange={e => setFormData({...formData, additional_images: e.target.value})} placeholder="/zipblue.png, /zipblack.png" className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Colors (comma separated)</label>
              <input type="text" value={formData.colors} onChange={e => setFormData({...formData, colors: e.target.value})} placeholder="Sport Graphite, Black, Sport Royal" className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Sizes (comma separated)</label>
              <input type="text" value={formData.sizes} onChange={e => setFormData({...formData, sizes: e.target.value})} placeholder="S, M, L, XL, XXL" className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={4} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none resize-none"></textarea>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => handleSave('published')} className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold px-8">
              Publish
            </Button>
            <Button onClick={() => handleSave('draft')} variant="outline" className="rounded-none border-black text-black hover:bg-gray-100 uppercase tracking-widest font-bold px-8">
              Save as Draft
            </Button>
            <Button onClick={() => { setIsAdding(false); setEditingId(null); setFormData({ ...initialForm, category_id: categories[0]?.id || '' }); }} variant="ghost" className="rounded-none text-muted-foreground hover:text-black uppercase tracking-widest font-bold px-8 ml-auto">
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
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Type</th>
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
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${product.type === 'subscription' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                      {product.type === 'subscription' ? 'Membership' : 'Product'}
                    </span>
                  </td>
                  <td className="p-4">${Number(product.price).toFixed(2)}</td>
                  <td className="p-4 text-sm text-muted-foreground">{getCategoryName(product.category_id)}</td>
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
                    <button onClick={() => handleDelete(product.id)} className="p-2 text-muted-foreground hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-muted-foreground">No items found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}