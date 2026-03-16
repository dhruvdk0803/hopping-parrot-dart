"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function TribeHero() {
  return (
    <section className="relative text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Tribe Background"
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
          My Tribe
        </h1>
        <div className="w-24 h-1 bg-primary my-8"></div>
        <p className="text-xl md:text-2xl text-gray-200 font-medium">
          Good golf — and good life — happens with the right people around you.
        </p>
      </motion.div>
    </section>
  );
}