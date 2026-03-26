"use client";
import { motion } from "framer-motion";

export function AboutJoinMission() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white text-center relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
            Join Our Mission
          </h2>
          
          <div className="space-y-8 text-xl md:text-3xl leading-snug text-gray-300 mb-16 font-medium">
            <p>
              Whether you are a nonprofit looking to elevate your next fundraising event, a business seeking impactful sponsorship opportunities, or an individual who wants to play golf for a cause, there is a place for you in our tribe.
            </p>
            <p>
              Together, we can make a lasting difference. We look forward to discussing how we can help your nonprofit or how you can get involved in our upcoming events.
            </p>
            <p className="italic text-primary pt-4">
              Take care and be blessed!
            </p>
          </div>

          <div className="inline-flex flex-col items-center mt-8">
            <span className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Jeff McCubbins
            </span>
            <div className="w-12 h-1 bg-primary mb-4"></div>
            <span className="text-sm md:text-base uppercase tracking-widest text-gray-400 font-bold">
              Executive Director & Founder, Serving Kingdom KC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}