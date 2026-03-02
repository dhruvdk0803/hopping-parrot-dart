"use client";
import { motion } from "framer-motion";
import { Heart, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Expands Nonprofit Impact",
    description: "Provides critical funding to organizations doing the heavy lifting in our city."
  },
  {
    icon: Heart,
    title: "Strengthens Local Missions",
    description: "Empowers ministries and charities to reach more people with essential services."
  },
  {
    icon: Users,
    title: "Builds Kingdom Community",
    description: "Unites believers and businesses around a shared purpose of generosity."
  }
];

export function WhyItMatters() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Your Gift Matters
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 border border-white/20 flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}