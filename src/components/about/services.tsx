"use client";
import { motion } from "framer-motion";

export function AboutServices() {
  const services = [
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
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                How We Support Local Nonprofits in KC
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We specialize in creating memorable, profitable events that connect passionate donors with worthy causes. Our core services include:
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className={`py-10 ${index === 0 ? 'pt-0 lg:pt-10' : ''} ${index !== services.length - 1 ? 'border-b border-black/10' : ''}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 text-black">
                  {service.title}:
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}