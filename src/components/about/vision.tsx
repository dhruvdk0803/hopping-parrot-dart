"use client";
import { motion } from "framer-motion";

export function AboutVision() {
  return (
    <section className="relative py-32 sm:py-40 text-white overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/_jqs5BrtMe8?autoplay=1&loop=1&playlist=_jqs5BrtMe8&controls=0&rel=0&playsinline=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120vh] min-w-[213.33vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-80"
          title="YouTube video player"
        ></iframe>
      </div>

      {/* Overlays to ensure text readability over the video */}
      <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-bold uppercase tracking-widest mb-8 text-white/90 drop-shadow-md">
            Our Vision for Faith-Based Nonprofit Fundraising
          </h2>
          
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight drop-shadow-xl">
              Our vision is to create a sustainable ecosystem of support for Kansas City charities. We operate on the principle of Kingdom giving — the belief that collective effort and faith-based nonprofit fundraising can drive monumental change.
            </p>
            <div className="w-24 h-1 bg-white/50 shadow-sm"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium drop-shadow-lg">
              We aim to help all the nonprofits we work with achieve their financial needs through expertly managed events. By taking the burden of event planning and execution off their shoulders, we enable these organizations to focus on what they do best: doing amazing work and expanding their vital services in the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}