"use client";
import { motion } from "framer-motion";

export function KcNonprofitsMission() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              At Serving Kingdom KC, our mission is to empower the organizations that are doing the heavy lifting in our community. We believe that when we support local nonprofits in KC, we build a stronger, more resilient city for everyone.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              Through our professionally managed charity golf tournaments and fundraising events, we help Kansas City charities multiply their impact, increase their net profits, and reach new audiences. This page is dedicated to highlighting the incredible organizations we partner with and providing you with a directory to discover causes you can champion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl bg-black"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Nf2F9mH5rGY?si=JJwyJzIWUoQGb7g5&controls=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}