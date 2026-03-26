"use client";
import { motion } from "framer-motion";

export function AboutJoinMission() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-10">
            Join Our Mission
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300 mb-16">
            <p>
              Whether you are a nonprofit looking to elevate your next fundraising event, a business seeking impactful sponsorship opportunities, or an individual who wants to play golf for a cause, there is a place for you in our tribe.
            </p>
            <p>
              Together, we can make a lasting difference. We look forward to discussing how we can help your nonprofit or how you can get involved in our upcoming events.
            </p>
            <p className="italic">
              Take care and be blessed!
            </p>
          </div>

          <div className="inline-block text-left">
            <p className="text-2xl font-bold text-white mb-1 border-b-2 border-primary pb-1 inline-block">
              Jeff McCubbins
            </p>
            <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
              Executive Director & Founder, Serving Kingdom KC
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}