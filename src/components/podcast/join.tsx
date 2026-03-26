"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    title: "Subscribe",
    desc: "Never miss an episode. Subscribe to our channel on YouTube and your favorite podcast platforms including Spotify and Apple Podcasts."
  },
  {
    title: "Be a Guest",
    desc: "Are you a nonprofit leader or a business owner passionate about corporate social responsibility and community giving in Kansas City? We would love to hear your story. Contact us to inquire about being a guest on the show."
  },
  {
    title: "Share",
    desc: "Help us spread the word by sharing your favorite episodes with your network. Every share puts our mission in front of someone new."
  }
];

export function PodcastJoin() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Join the Conversation
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The Kingdom Conversations podcast is more than just a show; it is a community. We invite you to engage with us, share your thoughts, and become part of the movement to support local nonprofits in KC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="border border-white/20 p-8 md:p-10 hover:border-primary transition-colors duration-300 bg-white/5 flex flex-col"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">
                {block.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base flex-grow">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}