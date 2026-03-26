"use client";
import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-12 text-center">
            The Story Behind Serving Kingdom KC
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
            <p className="font-medium text-2xl text-black text-center mb-12 italic">
              "Our journey began with a simple question: How can we keep the money we raise right here in the local Kansas City area?"
            </p>
            
            <p>
              The story of Serving Kingdom KC started four years ago when our founder, Jeff McCubbins, served on an advisory board headquartered in Oklahoma. For three years, Jeff led their golf tournaments, helping them significantly increase their net proceeds. During this time, generous donors, sponsors, players, and volunteers consistently asked how they could ensure their contributions stayed local to benefit Kansas City charities.
            </p>
            
            <div className="flex justify-center py-4">
              <div className="w-12 h-px bg-black/20"></div>
            </div>
            
            <p>
              As a volunteer, Jeff had no control over where those funds were directed. Encouraged by the community's desire for local impact, he decided to take action. In January 2025, Serving Kingdom KC was officially born as a dedicated 501(c)(3) organization.
            </p>
            
            <p>
              Before launching, we surveyed 15 to 20 nonprofits in Kansas City to understand their event strategies and average net revenue. The findings were eye-opening. We realized that with our expertise in nonprofit golf event organizing, Serving Kingdom KC could help many of these organizations increase their net profits by five times or more per event.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}