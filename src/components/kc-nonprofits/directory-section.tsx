"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DirectorySection() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <motion.div
        className="container mx-auto px-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Kansas City Nonprofits
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Discover and connect with organizations making a tangible difference in our community. Browse the comprehensive directory to find causes that align with your passion.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 uppercase tracking-widest"
        >
          <a 
            href="https://uncoverkc.org/directory-volunteer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Search KC Nonprofits
          </a>
        </Button>
      </motion.div>
    </section>
  );
}