import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Estates",
  },
  {
    value: "500+",
    label: "Properties",
  },
  {
    value: "100%",
    label: "Trusted",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-brand-gold">
              {item.value}
            </h2>

            <p className="mt-4 uppercase tracking-widest text-white/70">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}