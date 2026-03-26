"use client";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Young Life Blue Springs",
    desc: "Young Life is a Christian ministry that reaches out to middle school, high school, and college students in all 50 states and in more than 100 countries around the world. The Blue Springs chapter is dedicated to building relationships with local youth, earning the right to be heard, and sharing the message of faith and hope.",
    impact: "Mentoring and supporting local youth through faith-based community building.",
    testimonial: "\"We see the value and additional connections that Serving Kingdom KC brings to our nonprofit.\" — Young Life Blue Springs",
  },
  {
    name: "Haiti Joy Hope",
    desc: "Haiti Joy Hope is committed to bringing sustainable change, education, and spiritual growth to communities in Haiti. While their work is international, their support base is deeply rooted right here in Kansas City.",
    impact: "Providing education, resources, and hope to vulnerable communities.",
    testimonial: "\"Working with Serving Kingdom KC infused new excitement into our team and had a real impact on our fundraising efforts. They brought energy, strategy and heart to every step of the process. Their support was exactly what we needed and we're truly grateful for their partnership.\" — Haiti Joy Hope",
  },
  {
    name: "LevelUp Kids",
    desc: "LevelUp Kids provides free, comprehensive dental and vision care to underserved children in the Northland of Kansas City. They ensure that every child has the opportunity to succeed in school and life by removing health-related barriers to learning.",
    impact: "Delivering essential healthcare services to local children in need.",
    event: "LevelUp Kids Golf Tournament — September 21st, 2026 at Shoal Creek Golf Course",
  },
  {
    name: "Varsity Skateboarding Organization",
    desc: "Varsity Skateboarding Organization uses the sport of skateboarding to engage youth, teach life skills, and build a supportive community. They provide a positive outlet and mentorship for young athletes across the metro area.",
    impact: "Empowering youth through sports, mentorship, and community engagement.",
    event: "March 28th, 2026 at Golf Ranch Shoal Creek",
  },
  {
    name: "Valor Ranch",
    desc: "Valor Ranch provides a safe, supportive environment for female veterans to heal, transition, and find renewed purpose after their military service. Their holistic approach focuses on mental, physical, and spiritual well-being.",
    impact: "Supporting female veterans through transition and healing programs.",
    event: "May 8th, 2026 at Paradise Pointe Golf Complex",
  }
];

export function KcNonprofitsPartners() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Our Nonprofit Partners
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are honored to work alongside some of the most dedicated faith-based and community-focused organizations in the region. By participating in a Serving Kingdom KC golf tournament fundraiser, you are directly supporting the vital work of these local heroes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white border border-black/10 p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4">{partner.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {partner.desc}
              </p>
              
              <div className="space-y-5 mt-auto pt-6 border-t border-black/10">
                <div>
                  <span className="font-bold uppercase tracking-widest text-xs text-primary block mb-1">Impact:</span>
                  <span className="text-sm font-medium">{partner.impact}</span>
                </div>
                
                {partner.testimonial && (
                  <div className="bg-gray-50 p-4 border-l-2 border-primary">
                    <p className="text-sm italic text-gray-700">{partner.testimonial}</p>
                  </div>
                )}
                
                {partner.event && (
                  <div>
                    <span className="font-bold uppercase tracking-widest text-xs text-black block mb-1">Upcoming Event:</span>
                    <span className="text-sm font-medium">{partner.event}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}