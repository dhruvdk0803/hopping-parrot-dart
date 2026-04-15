"use client";
import { motion } from "framer-motion";

const topics = [
  {
    title: "Kingdom Giving",
    desc: "Exploring what it means to live generously and support local causes from a faith-based perspective. We dig into the \"why\" behind giving and how businesses and individuals can align their resources with their values."
  },
  {
    title: "Nonprofit Leadership",
    desc: "Candid conversations with the directors of Kansas City charities about the realities of running an organization and overcoming fundraising hurdles. These are the stories you do not often hear."
  },
  {
    title: "Community Impact",
    desc: "Highlighting the incredible work being done by our partner organizations and the lives being changed across the Kansas City metro. Real results from real people."
  },
  {
    title: "The Power of Connection",
    desc: "How networking, corporate sponsorships, and events like our charity golf tournaments in Kansas City build a stronger, more unified community. Learn how a single event can open doors that last for years."
  }
];

export function PodcastTopics() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            What We Talk About
          </h2>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            The Serving Kingdom KC Conversations podcast goes beyond the golf course to discuss the core values that drive our mission. Every episode is designed to inspire, educate, and equip our listeners to serve their communities better.
          </p>
          <p className="text-lg text-gray-600 mt-4 font-medium">
            Key topics covered on the show:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="border-l-2 border-primary pl-6 md:pl-8 py-2"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">
                {topic.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {topic.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}