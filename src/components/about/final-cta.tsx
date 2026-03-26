"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutFinalCta() {
  return (
    <section className="py-24 bg-white text-black text-center border-t border-black/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-10">
            Ready to make an impact?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/memberships">Explore Sponsorship Opportunities</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}