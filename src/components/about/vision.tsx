"use client";
import { motion } from "framer-motion";

export function AboutVision() {
  return (
    <section className="py-24 sm:py-32 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-bold uppercase tracking-widest mb-8 text-white/80">
            Our Vision for Faith-Based Nonprofit Fundraising
          </h2>
          
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Our vision is to create a sustainable ecosystem of support for Kansas City charities. We operate on the principle of Kingdom giving — the belief that collective effort and faith-based nonprofit fundraising can drive monumental change.
            </p>
            <div className="w-24 h-1 bg-white/30"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium">
              We aim to help all the nonprofits we work with achieve their financial needs through expertly managed events. By taking the burden of event planning and execution off their shoulders, we enable these organizations to focus on what they do best: doing amazing work and expanding their vital services in the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}