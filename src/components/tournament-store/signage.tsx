"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function StoreSignage() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] overflow-hidden border border-white/20 shadow-lg order-2 lg:order-1"
          >
            <Image 
              src="https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop" 
              alt="Custom golf tournament signage and banners" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
                Custom Signage, Banners & More
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Professional presentation matters. Our signage and banner packages help you create a polished, sponsor-friendly event environment that impresses players and corporate partners alike. From tee box signs to hole banners, every item can be customized with your event branding and sponsor logos.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}