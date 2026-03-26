"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Header, Image & Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                The Story Behind Serving Kingdom KC
              </h2>
              <div className="w-12 h-1 bg-black mb-10"></div>
              
              {/* Jeff McCubbins Image */}
              <div className="relative w-full aspect-[4/3] mb-10 overflow-hidden border border-black/10">
                <Image 
                  src="/jeff-mccubbins.jpeg" 
                  alt="Jeff McCubbins, Founder of Serving Kingdom KC" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <p className="text-2xl md:text-3xl font-medium text-primary italic leading-snug border-l-4 border-primary pl-6">
                "Our journey began with a simple question: How can we keep the money we raise right here in the local Kansas City area?"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-gray-600 pt-2 lg:pt-0"
          >
            <p>
              The story of Serving Kingdom KC started four years ago when our founder, Jeff McCubbins, served on an advisory board headquartered in Oklahoma. For three years, Jeff led their golf tournaments, helping them significantly increase their net proceeds. During this time, generous donors, sponsors, players, and volunteers consistently asked how they could ensure their contributions stayed local to benefit Kansas City charities.
            </p>
            <p>
              As a volunteer, Jeff had no control over where those funds were directed. Encouraged by the community's desire for local impact, he decided to take action. In January 2025, Serving Kingdom KC was officially born as a dedicated 501(c)(3) organization.
            </p>
            <p>
              Before launching, we surveyed 15 to 20 nonprofits in Kansas City to understand their event strategies and average net revenue. The findings were eye-opening. We realized that with our expertise in nonprofit golf event organizing, Serving Kingdom KC could help many of these organizations increase their net profits by five times or more per event.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}