"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', slug: '' });

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('Catagories').select('*').order('created_at', { ascending: false });
    if (data) setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSave = async () => {
    if (!formData.name || !formData.slug) {
      toast.error("Name and slug are required");
      return;
    }

    if (editingId) {
      const { error } = await supabase.from('Catagories').update(formData).eq('id', editingId);
      if (error) toast.error(error.message);
      else toast.success("Category updated");
    } else {
      const { error } = await supabase.from('Catagories').insert([formData]);
      if (error) toast.error(error.message);
      else toast.success("Category added");
    }

    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: '', slug: '' });
    fetchCategories();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('Catagories').delete().eq('id', id);
    if (error) toast.error(error.message);
    else {
      toast.success("Category deleted");
      fetchCategories();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight uppercase">Categories</h1>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold">
            <Plus size={18} className="mr-2" /> Add Category
          </Button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white p-8 border border-black/10 shadow-sm mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
            {editingId ? 'Edit Category' : 'Add New Category'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Name *</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Slug *</label>
              <input type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none" required />
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleSave} className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold px-8">
              Save
            </Button>
            <Button onClick={() => { setIsAdding(false); setEditingId(null); setFormData({ name: '', slug: '' }); }} variant="ghost" className="rounded-none text-muted-foreground hover:text-black uppercase tracking-widest font-bold px-8 ml-auto">
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="bg-white border border-black/10 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-black/10">
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Slug</th>
              <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat.id} className="border-b border-black/5 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">{cat.name}</td>
                <td className="p-4 text-muted-foreground">{cat.slug}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => { setFormData({ name: cat.name, slug: cat.slug }); setEditingId(cat.id); setIsAdding(true); }} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(cat.id)} className="p-2 text-muted-foreground hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr><td colSpan={3} className="p-8 text-center text-muted-foreground">No categories found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}