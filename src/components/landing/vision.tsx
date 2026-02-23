"use client";

import { motion } from "framer-motion";

export const Vision = () => {
  return (
    <section id="vision" className="bg-white text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pl-8 border-l-4 border-brand-green"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
            Our Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              To be a catalyst for positive change in Kansas City, uniting communities and supporting vital nonprofit work through the shared passion for golf.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We believe that purpose-driven events can create a powerful ripple effect. By organizing premier golf tournaments, we provide a platform for businesses and individuals to connect, compete, and contribute to causes that are strengthening our city. Every swing, every sponsorship, and every donation directly fuels the missions of our nonprofit partners.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};