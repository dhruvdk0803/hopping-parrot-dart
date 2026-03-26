"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const recentEpisodes = [
  {
    id: 1,
    title: "Faith-Based Fundraising in KC",
    desc: "Join us as we discuss the unique challenges and incredible rewards of faith-based nonprofit fundraising in the Kansas City area.",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Power of Corporate Sponsorships",
    desc: "Learn how local businesses are stepping up to support Kansas City charities and the mutual benefits of corporate social responsibility.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Impact Beyond the Golf Course",
    desc: "A deep dive into how charity golf tournaments in Kansas City are creating lasting change for local nonprofits and the communities they serve.",
    image: "https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop"
  }
];

export function PodcastEpisodes() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Tune In to the Latest Episodes
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Featured Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full aspect-video bg-black mb-16 relative flex items-center justify-center border border-black/10 shadow-xl"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white font-bold uppercase tracking-widest text-sm md:text-base">
              [Embedded YouTube Playlist Here]
            </p>
          </div>
        </motion.div>

        {/* Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {recentEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white border border-black/10 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <Image 
                  src={episode.image} 
                  alt={`Kingdom Conversations podcast episode with [Guest Name] on faith-based nonprofit fundraising in Kansas City`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-tight mb-3 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {episode.desc}
                </p>
                <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white uppercase tracking-widest font-bold transition-colors mt-auto">
                  Listen Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild className="w-full sm:w-auto h-14 px-10 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://www.youtube.com/@JeffMcCubbins" target="_blank" rel="noopener noreferrer">
              View All Episodes on YouTube
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}