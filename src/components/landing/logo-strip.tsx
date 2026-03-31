"use client";

import Image from "next/image";

const logos = [
  { src: "/younglife-logo.jpeg", alt: "Young Life Blue Springs" },
  { src: "/varsity-skate-logo.jpg", alt: "Varsity Skateboarding" },
  { src: "/valor-ranch-logo.jpeg", alt: "Valor Ranch" },
  { src: "/loading-golf-logo.png", alt: "Loading Golf" },
  { src: "/bridge-integrative-logo.jpg", alt: "Bridge Integrative Medicine" },
  { src: "/smithville-golf-logo.png", alt: "Smithville Golf" },
  { src: "/golf-ranch-logo.jpg", alt: "Golf Ranch" },
];

export function LogoStrip() {
  // We duplicate the logos array once per container to ensure it's wide enough 
  // to fill even ultra-wide monitors before the loop resets.
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white border-b border-black/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-70">
          Trusted by organizations across Kansas City
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* First Container */}
        <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee group-hover:[animation-play-state:paused]">
          {extendedLogos.map((logo, index) => (
            <div 
              key={`set1-${logo.alt}-${index}`} 
              className="relative h-16 md:h-20 w-32 md:w-40 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Second Container (Identical clone that follows right behind the first) */}
        <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {extendedLogos.map((logo, index) => (
            <div 
              key={`set2-${logo.alt}-${index}`} 
              className="relative h-16 md:h-20 w-32 md:w-40 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}