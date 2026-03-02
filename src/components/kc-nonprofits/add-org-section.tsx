"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AddOrgSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <motion.div
        className="container mx-auto px-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Don’t See Your Organization?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Join the directory to increase your visibility, connect with potential volunteers, and expand your impact across the Kansas City area.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-lg h-14 px-8 uppercase tracking-widest"
        >
          <a 
            href="https://uncoverkc.org/add-directory-listing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Add Your Nonprofit
          </a>
        </Button>
      </motion.div>
    </section>
  );
}