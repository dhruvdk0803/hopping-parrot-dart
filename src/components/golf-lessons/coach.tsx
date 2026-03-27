"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function GolfLessonsCoach() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-black/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-black/10 shadow-lg">
              <Image 
                src="/loading-golf-logo.png" 
                alt="Coach Kobe, professional golf instructor at Loading Golf in Kansas City" 
                fill 
                className="object-contain p-12 bg-black"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
                Meet Coach Kobe
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600">
              <p>
                Loading Golf is led by Coach Kobe, a Kansas City native and professional golf instructor. Coach Kobe is all about making the game feel approachable without losing the competitive edge that drives improvement.
              </p>
              <p>
                What sets Loading Golf apart is the foundation built on faith, patience, and hard work. Coach Kobe brings not only technical knowledge but a genuine passion for helping players grow both on and off the course. His coaching honors the process and encourages you every step of the way, perfectly aligning with the mission of Serving Kingdom KC.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}