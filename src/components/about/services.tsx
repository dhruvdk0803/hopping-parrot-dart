"use client";
import { motion } from "framer-motion";

export function AboutServices() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">
            How We Support Local Nonprofits in KC
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We specialize in creating memorable, profitable events that connect passionate donors with worthy causes. Our core services include:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              title: "Charity Golf Tournaments",
              desc: "As a premier golf tournament fundraiser organizer in Kansas City, we handle everything from securing the course to managing sponsorships and player registration."
            },
            {
              title: "Corporate Sponsorships",
              desc: "We connect local businesses with meaningful nonprofit sponsorship opportunities in KC, helping them fulfill their corporate social responsibility goals while gaining valuable marketing exposure."
            },
            {
              title: "Comprehensive Event Support",
              desc: "Beyond the golf course, we assist with charity galas, silent auctions, and nonprofit raffle fundraisers to maximize revenue for our partners."
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">
                {service.title}:
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}