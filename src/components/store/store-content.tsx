"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export function StoreContent() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      const [catRes, prodRes] = await Promise.all([
        supabase.from('Catagories').select('*').order('created_at', { ascending: true }),
        supabase.from('products').select('*').eq('status', 'published')
      ]);

      if (catRes.data && catRes.data.length > 0) {
        setCategories(catRes.data);
        setActiveTab(catRes.data[0].id);
      }
      if (prodRes.data) {
        setProducts(prodRes.data);
      }
      setLoading(false);
    };

    fetchStoreData();
  }, []);

  const handleAddToCart = (product: any) => {
    setCart(prev => [...prev, product]);
    toast.success(`${product.name} added to cart`, {
      style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
    });
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Checkout failed. Please check Stripe configuration.");
      }
    } catch (error) {
      toast.error("An error occurred during checkout.");
    }
  };

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center">Loading store...</div>;
  }

  const activeProducts = products.filter(p => p.category_id === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-white text-black min-h-screen relative">
      <div className="container mx-auto px-4">
        
        {/* Cart Summary (Floating) */}
        {cart.length > 0 && (
          <div className="fixed bottom-8 right-8 z-50 bg-black text-white p-6 shadow-2xl border border-white/20 max-w-sm w-full">
            <h3 className="font-bold uppercase tracking-widest mb-4">Your Cart ({cart.length})</h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400">Total:</span>
              <span className="text-xl font-bold">${cart.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)}</span>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full h-12 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors"
            >
              Checkout
            </Button>
          </div>
        )}

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-black/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors duration-300 relative pb-2 ${
                activeTab === cat.id ? "text-primary" : "text-muted-foreground hover:text-black"
              }`}
            >
              {cat.name}
              {activeTab === cat.id && (
                <motion.div 
                  layoutId="storeTab"
                  className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {activeProducts.map((product) => (
                <div key={product.id} className="group flex flex-col border border-black/10 p-4 hover:border-black transition-colors duration-300">
                  <div className="relative aspect-square mb-6 overflow-hidden bg-gray-50">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">No Image</div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <p className="text-xl font-bold mb-6">${Number(product.price).toFixed(2)}</p>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="mt-auto w-full h-12 rounded-none bg-black hover:bg-primary text-white text-xs uppercase tracking-widest font-bold transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              ))}
              {activeProducts.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-12">No products available in this category.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}