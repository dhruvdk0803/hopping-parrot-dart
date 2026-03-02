"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Loading Golf",
    copy: "Loading Golf isn’t just about lessons — it’s about intentional growth. Coach Kobe builds players on a foundation of faith, patience, and process, helping golfers develop character and confidence both on and off the course. A Kansas City native and professional instructor, Kobe makes the game approachable while sharpening the competitive edge that drives improvement.",
    buttonText: "Visit Loading Golf",
    buttonStyle: "border-primary text-primary hover:bg-primary hover:text-white",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    name: "Bridge Integrative Medicine",
    copy: "Dr. Bruce Rippee and his team combine compassion with advanced treatments to help patients move, perform, and recover at their best. From chiropractic care and rehab to non-surgical pain relief and weight management, their collaborative approach creates long-term solutions — keeping you strong and ready for the next round.",
    buttonText: "Visit Bridge Integrative Medicine",
    buttonStyle: "border-black text-black hover:bg-primary hover:border-primary hover:text-white",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    name: "Smithville Golf",
    copy: "For club alterations, repairs, and precision builds, Smithville Golf is our trusted choice. This family-owned shop blends industry expertise with personalized service — ensuring every golfer plays with confidence. From regrips to full custom builds, they keep your equipment dialed in.",
    buttonText: "Visit Smithville Golf",
    buttonStyle: "border-black text-black hover:bg-primary hover:border-primary hover:text-white",
    image: "https://images.unsplash.com/photo-1592555059503-0a774cb8d477?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    name: "Golf Ranch Shoal Creek",
    copy: "Golf Ranch Shoal Creek delivers a premium training environment with covered heated bays, advanced shot-tracing technology, and performance-driven design. Whether refining distances or tracking measurable improvement, it’s built for golfers serious about getting better.",
    buttonText: "Visit Golf Ranch",
    buttonStyle: "border-black text-black hover:bg-primary hover:border-primary hover:text-white",
    image: "https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop",
    link: "#"
  }
];

export function TribePartners() {
  return (
    <section className="bg-white text-black pb-24 sm:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24 md:gap-32">
          {partners.map((partner, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={partner.name} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <motion.div 
                  className="w-full md:w-1/2 overflow-hidden relative h-[400px] md:h-[600px]"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out hover:scale-[1.02]"
                  />
                </motion.div>

                <motion.div 
                  className="w-full md:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-6">
                    {partner.name}
                  </h2>
                  <div className="w-12 h-1 bg-primary mb-8"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {partner.copy}
                  </p>
                  <div>
                    <Button 
                      variant="outline" 
                      className={`h-[52px] px-8 rounded-none uppercase tracking-widest font-bold transition-colors duration-300 w-full sm:w-auto ${partner.buttonStyle}`}
                      asChild
                    >
                      <a href={partner.link}>{partner.buttonText}</a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}