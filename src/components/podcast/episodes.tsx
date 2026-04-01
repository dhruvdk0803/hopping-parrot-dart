"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

const videos = [
  "https://www.youtube.com/embed/C0PYII4V058?si=Jt5Lzf_SxjL0NRvl",
  "https://www.youtube.com/embed/G98JdreH6BE?si=G0QiuljOwuTbpLJX",
  "https://www.youtube.com/embed/3ZSCEnaSDPQ?si=AXe0gW0LZlSpUUU_",
  "https://www.youtube.com/embed/96z0bNBr0lE?si=1xJ7CtK--vUdk5wB",
  "https://www.youtube.com/embed/6sC5vS2DD3Q?si=IyDUP-jODWqi0oLm",
  "https://www.youtube.com/embed/hRpv-4Svlgw?si=pO3l-6pGmqE_SlfL"
];

export function PodcastEpisodes() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 max-w-7xl">
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="w-full aspect-video bg-black border border-black/10 shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <iframe 
                className="w-full h-full"
                src={src} 
                title={`YouTube video player ${index + 1}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
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
            <a href="https://www.youtube.com/@ServingKingdomKC" target="_blank" rel="noopener noreferrer">
              View All Episodes on YouTube
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}