"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";

export function StoreContent() {
  const [categories, setCategories] = useState<any[]>([]);
  const [swagProducts, setSwagProducts] = useState<any[]>([]);
  const [memberships, setMemberships] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<any[]>([]);

  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    const fetchStoreData = async () => {
      const [catRes, prodRes] = await Promise.all([
        supabase.from('Catagories').select('*').order('created_at', { ascending: true }),
        supabase.from('products').select('*').eq('status', 'published')
      ]);

      if (prodRes.data) {
        const subs = prodRes.data.filter(p => p.type === 'subscription');
        const swag = prodRes.data.filter(p => p.type !== 'subscription');
        
        setMemberships(subs);
        setSwagProducts(swag);

        if (catRes.data) {
          const swagCategories = catRes.data.filter(cat => 
            swag.some(p => p.category_id === cat.id)
          );
          setCategories(swagCategories);
          if (swagCategories.length > 0) {
            setActiveTab(swagCategories[0].id);
          }
        }
      }
      setLoading(false);
    };

    fetchStoreData();
  }, []);

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors?.[0] || "");
    setSelectedSize(product.sizes?.[0] || "");
    setQuantity(1);
    setActiveImage(product.image_url);
  };

  const handleAddToCart = (product: any, isSubscription = false) => {
    if (isSubscription) {
      setCart(prev => [...prev, { ...product, cart_id: Math.random().toString(36).substr(2, 9), quantity: 1 }]);
      toast.success(`${product.name} added to cart`, {
        style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
      });
    } else {
      openProductModal(product);
    }
  };

  const addToCartFromModal = () => {
    if (selectedProduct.colors?.length && !selectedColor) {
      toast.error("Please select a color"); return;
    }
    if (selectedProduct.sizes?.length && !selectedSize) {
      toast.error("Please select a size"); return;
    }
    
    const cartItem = {
      ...selectedProduct,
      cart_id: Math.random().toString(36).substr(2, 9),
      selectedColor,
      selectedSize,
      quantity
    };
    
    setCart(prev => [...prev, cartItem]);
    toast.success(`${quantity}x ${selectedProduct.name} added to cart`, {
      style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
    });
    setSelectedProduct(null);
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

  const activeProducts = swagProducts.filter(p => p.category_id === activeTab);

  return (
    <div className="bg-white text-black min-h-screen relative pb-24">
      
      {/* Cart Summary (Floating) */}
      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 bg-black text-white p-6 shadow-2xl border border-white/20 max-w-sm w-full max-h-[80vh] flex flex-col">
          <h3 className="font-bold uppercase tracking-widest mb-4">Your Cart ({cart.reduce((sum, item) => sum + (item.quantity || 1), 0)})</h3>
          <div className="overflow-y-auto flex-grow mb-4 space-y-4 pr-2">
            {cart.map((item, i) => (
              <div key={item.cart_id || i} className="flex justify-between text-sm border-b border-white/10 pb-3">
                <div>
                  <p className="font-bold">{item.name}</p>
                  {(item.selectedColor || item.selectedSize) && (
                    <p className="text-gray-400 text-xs mt-1">
                      {item.selectedColor} {item.selectedColor && item.selectedSize && '|'} {item.selectedSize}
                    </p>
                  )}
                  <p className="text-gray-400 text-xs mt-1">Qty: {item.quantity || 1}</p>
                </div>
                <p className="font-bold">${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-6 pt-4 border-t border-white/20">
            <span className="text-gray-400">Total:</span>
            <span className="text-xl font-bold">${cart.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 1)), 0).toFixed(2)}</span>
          </div>
          <Button 
            onClick={handleCheckout}
            className="w-full h-12 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors"
          >
            Checkout
          </Button>
        </div>
      )}

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2 gap-8 p-6 md:p-10 relative shadow-2xl"
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors">
                <X className="w-6 h-6" />
              </button>
              
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-50 border border-black/10 relative">
                  <img src={activeImage || selectedProduct.image_url} alt={selectedProduct.name} className="w-full h-full object-contain mix-blend-multiply p-4" />
                </div>
                {selectedProduct.additional_images?.length > 0 && (
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    <button onClick={() => setActiveImage(selectedProduct.image_url)} className={`w-20 h-20 border shrink-0 transition-colors ${activeImage === selectedProduct.image_url ? 'border-primary' : 'border-black/10 hover:border-black/30'}`}>
                      <img src={selectedProduct.image_url} className="w-full h-full object-contain mix-blend-multiply p-2" />
                    </button>
                    {selectedProduct.additional_images.map((img: string, i: number) => (
                      <button key={i} onClick={() => setActiveImage(img)} className={`w-20 h-20 border shrink-0 transition-colors ${activeImage === img ? 'border-primary' : 'border-black/10 hover:border-black/30'}`}>
                        <img src={img} className="w-full h-full object-contain mix-blend-multiply p-2" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-2 pr-8">{selectedProduct.name}</h2>
                <p className="text-2xl font-bold text-primary mb-6">${Number(selectedProduct.price).toFixed(2)}</p>
                <p className="text-gray-600 mb-8 whitespace-pre-wrap leading-relaxed">{selectedProduct.description}</p>

                {/* Colors */}
                {selectedProduct.colors?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-widest mb-3">Color: <span className="text-primary">{selectedColor}</span></p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.colors.map((color: string) => (
                        <button 
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-colors ${selectedColor === color ? 'border-primary bg-primary text-white' : 'border-black/20 hover:border-black'}`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {selectedProduct.sizes?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-widest mb-3">Size: <span className="text-primary">{selectedSize}</span></p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.sizes.map((size: string) => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[3rem] h-12 px-3 flex items-center justify-center text-sm font-bold uppercase tracking-wider border transition-colors ${selectedSize === size ? 'border-primary bg-primary text-white' : 'border-black/20 hover:border-black'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest mb-3">Quantity</p>
                  <div className="flex items-center border border-black/20 w-fit">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors">-</button>
                    <div className="w-14 h-12 flex items-center justify-center font-bold border-x border-black/20">{quantity}</div>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors">+</button>
                  </div>
                </div>

                <Button onClick={addToCartFromModal} className="w-full h-14 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold mt-auto transition-colors">
                  Add to Cart - ${(Number(selectedProduct.price) * quantity).toFixed(2)}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Memberships Section */}
      <section className="py-16 sm:py-24 border-b border-black/10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">Memberships & Packages</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6 mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Secure your spot in our upcoming events and maximize your impact with our monthly subscription packages.
            </p>
          </div>

          {memberships.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No membership packages available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memberships.map((membership, index) => (
                <motion.div
                  key={membership.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-black/10 p-8 flex flex-col hover:border-primary hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 min-h-[40px]">
                    {membership.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                      ${Number(membership.price).toFixed(2)}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                      per month
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-8 flex-grow text-gray-600 whitespace-pre-wrap">
                    {membership.description}
                  </p>
                  <Button 
                    onClick={() => handleAddToCart(membership, true)}
                    className="w-full h-12 rounded-none bg-black hover:bg-primary text-white text-xs uppercase tracking-widest font-bold transition-colors mt-auto"
                  >
                    Subscribe
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Swag / Merchandise Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">Merchandise & Swag</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Category Navigation */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-black/10 pb-6">
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
          )}

          {/* Products Grid */}
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
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow whitespace-pre-wrap">{product.description}</p>
                  <p className="text-xl font-bold mb-6">${Number(product.price).toFixed(2)}</p>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="mt-auto w-full h-12 rounded-none bg-black hover:bg-primary text-white text-xs uppercase tracking-widest font-bold transition-colors"
                  >
                    Select Options
                  </Button>
                </div>
              ))}
              {activeProducts.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-12">No products available in this category.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}