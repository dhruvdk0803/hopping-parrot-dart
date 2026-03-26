"use client";
import { motion } from "framer-motion";

const events = [
  { org: "Varsity Skateboarding Org", date: "March 28, 2026", venue: "Golf Ranch Shoal Creek", status: "Active" },
  { org: "Young Life Blue Springs", date: "April 27, 2026", venue: "Adams Pointe Golf Club", status: "Active" },
  { org: "Valor Ranch", date: "May 8, 2026", venue: "Paradise Pointe Golf Complex", status: "Active" },
  { org: "LevelUp Kids", date: "September 21, 2026", venue: "Shoal Creek Golf Course", status: "Coming Soon" },
  { org: "Haiti Joy Hope", date: "TBD", venue: "TBD", status: "Past Partner" },
];

export function KcNonprofitsEvents() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">Featured Events</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="overflow-x-auto border border-black/10"
        >
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-5 font-bold uppercase tracking-widest text-sm">Organization</th>
                <th className="p-5 font-bold uppercase tracking-widest text-sm">Event Date</th>
                <th className="p-5 font-bold uppercase tracking-widest text-sm">Venue</th>
                <th className="p-5 font-bold uppercase tracking-widest text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-black/10 hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-medium">{event.org}</td>
                  <td className="p-5 text-gray-600">{event.date}</td>
                  <td className="p-5 text-gray-600">{event.venue}</td>
                  <td className="p-5">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      event.status === 'Active' ? 'bg-primary/10 text-primary' :
                      event.status === 'Coming Soon' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}