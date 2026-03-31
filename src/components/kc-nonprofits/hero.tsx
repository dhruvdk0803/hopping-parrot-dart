"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function KcNonprofitsHero() {
  return (
    <section className="relative text-white min-h-[70vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Serving Kingdom KC supporting local nonprofits in Kansas City through charity golf events"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-5xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-10 leading-tight">
          Support Local Nonprofits in Kansas City
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">View Upcoming Charity Events</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/donate">Donate to Support Our Mission</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}