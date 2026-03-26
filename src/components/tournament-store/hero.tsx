"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StoreHero() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop"
          alt="Serving Kingdom KC charity golf tournament store powered by Perfect Golf Event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-tight">
          Serving Kingdom KC Tournament Store
        </h1>
        
        <div className="w-24 h-1 bg-primary mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-200 mb-6 font-medium max-w-3xl leading-relaxed">
          Welcome to the Serving Kingdom KC Tournament Store, powered by our partners at Perfect Golf Event.
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-medium max-w-3xl leading-relaxed">
          Whether you are organizing a charity golf tournament in Kansas City or looking for ways to increase your event's fundraising potential, we have everything you need. From high-stakes hole-in-one contests to premium player gifts, our curated selection of tournament merchandise is designed to help you attract more players, sell more sponsorships, and ultimately raise more money for your cause.
        </p>

        <Button asChild className="w-full sm:w-auto h-14 px-10 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
          <a href="https://perfectgolfevent.com/home-skkc/" target="_blank" rel="noopener noreferrer">
            Browse the Full Tournament Store
          </a>
        </Button>
      </motion.div>
    </section>
  );
}