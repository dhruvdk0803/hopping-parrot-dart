"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const memberships = [
  { name: "Custom Sponsor Membership", price: 416.67, interval: "per month" },
  { name: "Sponsor with Team 6 Package", price: 700, interval: "per month" },
  { name: "Sponsor with Team 3 Package", price: 400, interval: "per month" },
  { name: "Team 6 Package", price: 400, interval: "per month" },
  { name: "Team 3 Package", price: 250, interval: "per month" },
  { name: "Sponsorship 6 Package", price: 225, interval: "per month" },
  { name: "Sponsorship 3 Package", price: 125, interval: "per month" },
];

const skSwag = [
  { name: "Team 365 Men's Zone Performance Quarter-Zip", price: 42, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2000&auto=format&fit=crop" },
  { name: "Russell Athletic Crewneck Sweatshirt", price: 50, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop" },
  { name: "Tultex Long Sleeve T-Shirt", price: 35, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
  { name: "Bella + Canvas Heather CVC T-Shirt", price: 32, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
  { name: "Core 365 Performance Polo", price: 42, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2000&auto=format&fit=crop" },
  { name: "Richardson Laser Perf R-Flex Cap", price: 35, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000&auto=format&fit=crop" },
  { name: "Richardson 225 Casual Performance Hat", price: 37, image: "https://images.unsplash.com/photo-1556306535-0f09a536f0ab?q=80&w=2000&auto=format&fit=crop" },
];

const loadingGolfSwag = [
  { name: "Bella + Canvas Hoodie", price: 50, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop" },
  { name: "Gildan Heavy Blend Hoodie", price: 48, image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=2000&auto=format&fit=crop" },
  { name: "Next Level Long Sleeve", price: 28, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
  { name: "Tultex Long Sleeve", price: 25, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2000&auto=format&fit=crop" },
  { name: "Bella + Canvas T-Shirt", price: 20, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
  { name: "Tultex Fine Jersey T-Shirt", price: 20, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
  { name: "Richardson Umpqua Snapback", price: 32, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000&auto=format&fit=crop" },
  { name: "Flexfit Ultrafiber Mesh Cap", price: 30, image: "https://images.unsplash.com/photo-1556306535-0f09a536f0ab?q=80&w=2000&auto=format&fit=crop" },
  { name: "Port Authority Trucker Cap", price: 23, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2000&auto=format&fit=crop" },
];

const tabs = ["Membership Packages", "Serving Kingdom Swag", "Loading Golf Swag"];

export function StoreContent() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleAddToCart = (item: string) => {
    toast.success(`${item} added to cart`, {
      style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
    });
  };

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
                {memberships.map((pkg, index) => (
                  <div key={pkg.name} className="border border-black p-8 flex flex-col bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-6 pr-4">{pkg.name}</h3>
                    <div className="mb-8 flex-grow">
                      <span className="text-4xl font-bold tracking-tighter group-hover:text-primary transition-colors">${pkg.price}</span>
                      <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">{pkg.interval}</span>
                    </div>
                    <Button 
                      onClick={() => handleAddToCart(pkg.name)}
                      className="w-full h-[52px] rounded-none bg-black hover:bg-primary text-white text-sm uppercase tracking-widest font-bold transition-colors"
                    >
                      Subscribe
                    </Button>
                  </div>
                ))}
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
                {skSwag.map((product, index) => (
                  <div key={product.name} className="group flex flex-col">
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100 border border-black/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                      />
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
                {loadingGolfSwag.map((product, index) => (
                  <div key={product.name} className="group flex flex-col">
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100 border border-black/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                      />
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
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}