"use client";
import { motion } from "framer-motion";

const holeInOne = [
  {
    title: "Tesla Model 3 Hole-in-One Contest",
    price: "$765–$1,340",
    desc: "A hole-in-one wins a new Tesla Model 3 (valued up to $50,000). A hole-in-one contest for a car is a staple at many golf events — and this one stops players in their tracks."
  },
  {
    title: "$15,000 Cash Hole-in-One Contest",
    price: "$354–$557",
    desc: "Exactly how it sounds — a perfect shot wins $15,000 cash. Simple, exciting, and highly effective for driving player registrations."
  },
  {
    title: "Pebble Beach Hole-in-One Contest",
    price: "$295–$436",
    desc: "Win a 2-night holiday for two, including a round at the world-famous Pebble Beach Golf Links. A dream prize that resonates with every golfer on the course."
  }
];

const formats = [
  {
    title: "Million Dollar Shot",
    price: "$250",
    desc: "Give one lucky golfer the chance to take a single shot for $1,000,000. This is a massive draw for VIP sponsors and creates unforgettable moments."
  },
  {
    title: "Par 3 Challenge — 9 Holes",
    price: "$1,685–$1,925",
    desc: "A fast-paced, exciting format that changes the dynamic of your event and keeps players engaged from start to finish."
  }
];

const comprehensive = [
  {
    title: "Tee-to-Green Event Package",
    price: "$1,575",
    desc: "An exciting, comprehensive package designed to attract both players and sponsors. Everything you need for a great event, bundled together for maximum impact."
  },
  {
    title: "Brand Your Event Sign & Banner Package",
    price: "$635",
    desc: "Ensure your sponsors get the recognition they deserve with professional, custom-branded signage displayed prominently across the course."
  }
];

const ProductCard = ({ item, index }: { item: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className="bg-white border border-black/10 p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
  >
    <h4 className="text-lg font-bold uppercase tracking-widest text-black mb-2">
      {item.title}
    </h4>
    <div className="text-2xl font-bold text-primary mb-6">
      {item.price}
    </div>
    <p className="text-gray-600 leading-relaxed text-base flex-grow">
      {item.desc}
    </p>
  </motion.div>
);

export function StorePackages() {
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
            Popular Tournament Packages & Contests
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take your event to the next level with our most popular add-ons. These packages are proven to generate excitement on the course and provide excellent ROI for your corporate sponsors.
          </p>
        </motion.div>

        {/* Hole-in-One Contests */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Hole-in-One Contests</h3>
            <p className="text-gray-600 text-lg">
              Nothing generates buzz quite like the chance to win big. Add a high-value prize to your par-3 holes to attract players and premium sponsors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {holeInOne.map((item, i) => <ProductCard key={item.title} item={item} index={i} />)}
          </div>
        </div>

        {/* Exciting Event Formats */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Exciting Event Formats & Shootouts</h3>
            <p className="text-gray-600 text-lg">
              Looking for golf tournament fundraising ideas beyond the traditional 4-person scramble?
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((item, i) => <ProductCard key={item.title} item={item} index={i} />)}
          </div>
        </div>

        {/* Comprehensive Event Packages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Comprehensive Event Packages</h3>
            <p className="text-gray-600 text-lg">
              Simplify your planning with all-in-one solutions designed for nonprofit and charity golf events.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comprehensive.map((item, i) => <ProductCard key={item.title} item={item} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  );
}