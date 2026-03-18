"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <motion.section 
      id="vision"
      className="py-24 sm:py-32 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="w-1 h-24 bg-primary mx-auto md:mx-0"></div>
          </div>
          <div className="md:col-span-11 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Our Vision for Kansas City</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mt-12">
          <div className="md:col-start-2 md:col-span-5 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              To unite communities and resources, creating a lasting impact on the lives of those in need throughout Kansas City.
            </p>
          </div>
          <div className="md:col-span-5 flex items-center text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Serving Kingdom KC was founded on the principle that collective effort can drive monumental change. We believe in the power of purpose-driven events to not only raise critical funds but also to build strong, supportive networks. By focusing on faith-based nonprofit fundraising and community giving KC, we provide a platform where generosity and connection lead to true community transformation. When you support local nonprofits KC through our events, you are investing directly in the future of our city.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}