"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "When I started golf, I was so bad I stopped keeping score and just counted how many balls I had left. In my very first lesson, Kobe changed my grip and within five swings I was hitting straighter than ever. Ten sessions later, I'm on the fairway 75% of the time. Before Kobe, I'd used my clubs maybe three times—now I'm hitting long and feeling confident. The first time I nailed one down the middle, I felt like I'd won the Masters. If you need a golf coach, call Kobe—you'll thank me later.",
    name: "Michael Morris, Big Mike Sells KC"
  },
  {
    quote: "Working with Coach Kobe was a total game-changer. He doesn't just tweak your swing – he explains the why behind it so it sticks. After just a couple sessions, I was working the ball like never before, and I finally stopped slicing it off the planet. If you're serious about shaving strokes, Kobe's your guy.",
    name: "Brian Folkers"
  },
  {
    quote: "I came to Kobe never having swung a club before, and honestly I was nervous. He broke everything down in a way that made it simple and fun – no overthinking, just small wins. By the end of my very first lesson I was making solid contact and actually enjoying the game. If you're brand new to golf, he makes it feel totally approachable.",
    name: "John Fadel"
  }
];

export function GolfLessonsTestimonials() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Real Results from Kansas City Golfers
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Do not just take our word for it. Here is what local players have to say about their experience with Coach Kobe:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col hover:border-primary transition-colors duration-300 relative"
            >
              <div className="absolute -top-6 -left-2 text-[8rem] font-bold text-white/5 leading-none pointer-events-none select-none">
                "
              </div>
              <p className="text-gray-300 leading-relaxed text-lg italic mb-8 flex-grow relative z-10">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}