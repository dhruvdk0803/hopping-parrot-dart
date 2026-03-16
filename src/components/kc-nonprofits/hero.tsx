"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function KcNonprofitsHero() {
  return (
    <section className="relative text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="KC Nonprofits Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          KC Nonprofits
        </h1>
        <div className="w-24 h-1 bg-primary my-8 mx-auto"></div>
        <p className="text-xl md:text-2xl text-gray-200">
          Explore and connect with verified Kansas City nonprofit organizations.
        </p>
      </motion.div>
    </section>
  );
}