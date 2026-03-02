"use client";
import { motion } from "framer-motion";

export function MissionMessage() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto text-center space-y-8"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Your generosity fuels our mission to strengthen nonprofits throughout Kansas City. Every dollar helps provide hope, stability, and lasting impact.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            When the Body of Christ comes together in unity, incredible things happen. Your gift is more than support — it’s an act of faith that multiplies throughout our community.
          </p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight pt-8">
            Sow into good ground today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}