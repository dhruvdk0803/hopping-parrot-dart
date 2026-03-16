"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function VisionHero() {
  return (
    <section className="relative text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.nef"
          alt="Vision Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <motion.div
        className="relative z-20 max-w-3xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Our Vision
        </h1>
        <div className="w-24 h-1 bg-primary my-6"></div>
        <p className="text-xl md:text-2xl text-gray-200">
          Golf with a Purpose.
        </p>
      </motion.div>
    </section>
  );
}