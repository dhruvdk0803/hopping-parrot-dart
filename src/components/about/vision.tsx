"use client";
import { motion } from "framer-motion";

export function AboutVision() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-12">
            Our Vision for Faith-Based Nonprofit Fundraising
          </h2>
          
          <div className="border-l-4 border-primary pl-6 md:pl-10 space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>
              Our vision is to create a sustainable ecosystem of support for Kansas City charities. We operate on the principle of Kingdom giving — the belief that collective effort and faith-based nonprofit fundraising can drive monumental change.
            </p>
            <p>
              We aim to help all the nonprofits we work with achieve their financial needs through expertly managed events. By taking the burden of event planning and execution off their shoulders, we enable these organizations to focus on what they do best: doing amazing work and expanding their vital services in the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}