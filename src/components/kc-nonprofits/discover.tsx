"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function KcNonprofitsDiscover() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Discover More Kansas City Charities
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Are you looking for more ways to get involved? We encourage you to explore the diverse landscape of Kansas City charities making a difference every day.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            We proudly support the UnCoverKC initiative, a comprehensive directory designed to connect passionate volunteers and donors with vetted, impactful organizations. Whether you are passionate about faith-based nonprofit fundraising, youth development, veteran support, or community health, you can find a cause to champion.
          </p>
          <Button asChild className="h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://uncoverkc.org/directory-volunteer" target="_blank" rel="noopener noreferrer">
              Browse the UnCoverKC Directory
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}