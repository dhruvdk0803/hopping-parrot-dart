"use client";
import { motion } from "framer-motion";

export function FounderStory() {
  return (
    <motion.section
      className="py-24 sm:py-32 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="w-full">
            <img
              src="/jeff-mccubbins.jpeg"
              alt="Jeff McCubbins, Founder of Serving Kingdom KC"
              className="w-full object-cover filter grayscale"
            />
          </div>
          <div className="border-l-4 border-primary pl-8 md:pl-12">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Beginning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My story of Serving Kingdom KC really begins with a passion for two things: golf and giving back. For years, I've been involved in the Kansas City nonprofit community, and I've seen firsthand the incredible work being done. I also saw the constant struggle for funding and resources.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Turning Point</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In January 2024, after organizing a particularly successful charity golf tournament, a thought struck me: what if we could do this at scale? What if we could create a model that wasn't just about a single event, but about building a sustainable platform to support multiple nonprofits through professionally managed, high-impact golf events? That was the spark.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is to help all nonprofits, big or small, leverage the power of a premium golf event without the typical risks and overhead. We handle the logistics, the marketing, and the execution, allowing our partners to focus on what they do best: serving our community. We're here to multiply their impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}