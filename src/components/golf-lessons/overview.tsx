"use client";
import { motion } from "framer-motion";

const expectations = [
  {
    title: "Premium Facility",
    desc: "Covered, heated hitting bays with premium mats and balls."
  },
  {
    title: "Data-Driven Feedback",
    desc: "Access to Toptracer technology in every bay, providing real-time shot trace, carry distance, club data, and scoring diagnostics."
  },
  {
    title: "Actionable Instruction",
    desc: "Simple, easy-to-understand guidance that you can take home and keep building on, so your progress does not stop when the lesson ends."
  },
  {
    title: "Holistic Growth",
    desc: "Encouragement, accountability, and a focus on character development alongside swing mechanics — because Coach Kobe believes in growing the whole person, not just the swing."
  }
];

export function GolfLessonsOverview() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Lessons That Fit Your Game
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            No two swings are the same, and your private golf lessons should not be either. Loading Golf offers one-on-one and small-group instruction tailored to your specific needs, goals, and experience level.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every session takes place at Golf Ranch Shoal Creek, a premium, tech-enabled practice facility in the Northland.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-center mb-12">
            What to Expect During Your Lesson
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white border border-black/10 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold uppercase tracking-widest text-black mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}