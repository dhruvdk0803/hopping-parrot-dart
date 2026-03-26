"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Brand Visibility",
    desc: "Showcase your business to a captive audience of community leaders, executives, and passionate golfers across multiple premium events."
  },
  {
    title: "Community Impact",
    desc: "Fulfill your corporate social responsibility goals by directly funding vital Kansas City nonprofits and charities."
  },
  {
    title: "Client Entertainment",
    desc: "Treat your top clients, partners, or employees to an exceptional day on the course at some of the best venues in the metro."
  },
  {
    title: "Networking Opportunities",
    desc: "Build meaningful relationships with other purpose-driven businesses and individuals who share your commitment to the community."
  }
];

export function WhySponsor() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Why Sponsor a Charity Golf Tournament?
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="border border-black/10 p-8 hover:border-primary transition-colors duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}