"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutFinalCta() {
  return (
    <section className="py-24 bg-primary text-white text-center border-t border-white/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-black hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">View Upcoming Tournaments</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/contact">Partner With Us</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/memberships">Explore Sponsorship Opportunities</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}