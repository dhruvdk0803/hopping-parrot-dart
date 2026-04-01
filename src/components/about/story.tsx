"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image & Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/jeff-mccubbins.jpeg" 
                alt="Jeff McCubbins, Founder of Serving Kingdom KC" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-snug">
                "Our journey began with a simple question: How can we keep the money we raise right here in the local Kansas City area?"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Title & Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              The Story Behind Serving Kingdom KC
            </h2>
            <div className="w-12 h-1 bg-primary mb-10"></div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600">
              <p>
                The story of Serving Kingdom KC started four years ago when our founder, Jeff McCubbins, served on an advisory board headquartered in Oklahoma. For three years, Jeff led their golf tournaments, helping them significantly increase their net proceeds. During this time, generous donors, sponsors, players, and volunteers consistently asked how they could ensure their contributions stayed local to benefit Kansas City charities.
              </p>
              <p>
                As a volunteer, Jeff had no control over where those funds were directed. Encouraged by the community's desire for local impact, he decided to take action. In January 2025, Serving Kingdom KC was officially born as a dedicated 501(c)(3) organization.
              </p>
              <p>
                Before launching, we surveyed 15 to 20 nonprofits in Kansas City to understand their event strategies and average net revenue. The findings were eye-opening. We realized that with our expertise in nonprofit golf event organizing, Serving Kingdom KC could help many of these organizations increase their net profits by five times or more per event.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}