"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop"
          alt="Golf course"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase"
          >
            Serving Kingdom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 md:mt-6 text-lg md:text-xl max-w-xl"
          >
            Supporting Kansas City Nonprofits Through Purpose-Driven Golf Events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-brand-green hover:bg-green-700 text-white uppercase tracking-widest w-full sm:w-auto px-8 h-14 text-base"
            >
              View Upcoming Tournaments
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest w-full sm:w-auto px-8 h-14 text-base"
            >
              Donate
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};