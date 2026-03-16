"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function DonateHero() {
  return (
    <section className="relative text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Donate Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase">
          Make a Difference
        </h1>
        <div className="w-24 h-1 bg-primary my-8"></div>
        <p className="text-2xl md:text-3xl font-medium mb-4">
          Partner with us to serve and uplift Kansas City nonprofits.
        </p>
        <p className="text-lg text-gray-200 max-w-2xl">
          Your generosity directly fuels purpose-driven events that multiply impact across our community.
        </p>
      </motion.div>
    </section>
  );
}