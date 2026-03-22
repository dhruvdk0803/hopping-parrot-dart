"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useProducts } from "@/hooks/use-products";

const tabs = ["Membership Packages", "Serving Kingdom Swag", "Loading Golf Swag"];

export function StoreContent() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { products, mounted } = useProducts();

  const handleAddToCart = (item: string) => {
    toast.success(`${item} added to cart`, {
      style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
    });
  };

  if (!mounted) {
    return <div className="min-h-[50vh] flex items-center justify-center">Loading store...</div>;
  }

  const publishedProducts = products.filter(p => p.status === 'published');
  const memberships = publishedProducts.filter(p => p.category === 'Membership Packages');
  const skSwag = publishedProducts.filter(p => p.category === 'Serving Kingdom Swag');
  const loadingGolfSwag = publishedProducts.filter(p => p.category === 'Loading Golf Swag');

  return (
    <section className="py-16 sm:py-24 bg-white text-black min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-black/10 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors duration-300 relative pb-2 ${
                activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
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
            
            {/* Memberships Tab */}
            {activeTab === "Membership Packages" && (
              <motion.div
                key="memberships"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {memberships.map((pkg) => (
                  <div key={pkg.id} className="border border-black p-8 flex flex-col bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-6 pr-4">{pkg.name}</h3>
                    <div className="mb-8 flex-grow">
                      <span className="text-4xl font-bold tracking-tighter group-hover:text-primary transition-colors">${pkg.price}</span>
                      {pkg.interval && <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">{pkg.interval}</span>}
                    </div>
                    <Button 
                      onClick={() => handleAddToCart(pkg.name)}
                      className="w-full h-[52px] rounded-none bg-black hover:bg-primary text-white text-sm uppercase tracking-widest font-bold transition-colors"
                    >
                      Subscribe
                    </Button>
                  </div>
                ))}
                {memberships.length === 0 && <p className="col-span-full text-center text-muted-foreground py-12">No memberships available.</p>}
              </motion.div>
            )}

            {/* Serving Kingdom Swag Tab */}
            {activeTab === "Serving Kingdom Swag" && (
              <motion.div
                key="sk-swag"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8"
              >
                {skSwag.map((product) => (
                  <div key={product.id} className="group flex flex-col">
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100 border border-black/5">
                      {product.image_url ? (
                        <img 
                          src={product.image_url} 
                          alt={product.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-medium text-muted-foreground mb-6">${product.price}</p>
                    <Button 
                      onClick={() => handleAddToCart(product.name)}
                      variant="outline"
                      className="mt-auto w-full h-12 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
                {skSwag.length === 0 && <p className="col-span-full text-center text-muted-foreground py-12">No products available.</p>}
              </motion.div>
            )}

            {/* Loading Golf Swag Tab */}
            {activeTab === "Loading Golf Swag" && (
              <motion.div
                key="lg-swag"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8"
              >
                {loadingGolfSwag.map((product) => (
                  <div key={product.id} className="group flex flex-col">
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100 border border-black/5">
                      {product.image_url ? (
                        <img 
                          src={product.image_url} 
                          alt={product.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-medium text-muted-foreground mb-6">${product.price}</p>
                    <Button 
                      onClick={() => handleAddToCart(product.name)}
                      variant="outline"
                      className="mt-auto w-full h-12 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
                {loadingGolfSwag.length === 0 && <p className="col-span-full text-center text-muted-foreground py-12">No products available.</p>}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}