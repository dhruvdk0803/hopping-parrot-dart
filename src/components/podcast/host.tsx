"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function PodcastHost() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-t border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
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
                src="/jeff-mccubbins.jpeg" 
                alt="Jeff McCubbins, host of the Serving Kingdom KC podcast and founder of Serving Kingdom KC" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
                Meet the Host — Jeff McCubbins
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600">
              <p>
                Jeff McCubbins is the founder of Serving Kingdom KC and the voice behind the Serving Kingdom KC podcast. With a deep-rooted passion for golf and an even deeper commitment to his faith, Jeff created Serving Kingdom KC to bridge the gap between corporate generosity and nonprofit needs in Kansas City.
              </p>
              <p>
                Through the podcast, Jeff aims to amplify the voices of those doing the hard work in the trenches of the nonprofit sector, providing them with a platform to share their vision and connect with a broader audience of supporters. His conversations are honest, grounded, and always centered on the belief that we are called to serve something greater than ourselves.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}