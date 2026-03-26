"use client";
import { motion } from "framer-motion";

const gifts = [
  {
    title: "Weekend Warrior Golf Kit",
    price: "$26.17",
    desc: "A fresh, fun kit ideal for golfers looking to enjoy their day on the course. Birdies and beverages included."
  },
  {
    title: "Triple Bogey Kit",
    price: "$16.35",
    desc: "Essential gear for every player, perfect for a fun giveaway that fits any budget."
  },
  {
    title: "Custom Golf Tournament Pin Flags",
    price: "$40.00",
    desc: "High-quality, branded pin flags that serve as excellent sponsor recognition on every hole and make memorable keepsakes for players to take home."
  }
];

export function StoreGifts() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-t border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Golf Tournament Player Gifts & Goodie Bags
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The right golf tournament player gifts in the goodie bag can make a lasting impression and keep your event top-of-mind long after the final putt drops. We offer access to thousands of products, from budget-friendly essentials to high-end customized prizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-gray-50 border border-black/10 p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            >
              <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-2">
                {item.title}
              </h4>
              <div className="text-2xl font-bold text-primary mb-6">
                {item.price}
              </div>
              <p className="text-gray-600 leading-relaxed text-base flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}