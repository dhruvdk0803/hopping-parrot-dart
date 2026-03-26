"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function StoreIntro() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-black/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
                Elevate Your Golf Tournament Fundraiser
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600">
              <p>
                We understand that the details make the difference. A well-executed golf tournament fundraiser requires engaging contests, professional signage, and memorable gifts that keep players coming back year after year.
              </p>
              <p>
                Through our partnership with Perfect Golf Event, we offer a comprehensive catalog of items at a variety of price points to suit your specific needs and budget. You can also request a free virtual proof on any item to see exactly how your sponsor logos will look before you buy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full aspect-[4/3] overflow-hidden border border-black/10 shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
              alt="Golf tournament setup and prizes" 
              fill 
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}