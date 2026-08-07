import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional real estate developments that provide lasting value, inspire confidence, and create thriving communities where people can live, work, and invest with peace of mind.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Africa's most trusted real estate brand by shaping sustainable communities through innovation, integrity, and world-class developments.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            What Drives Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Mission & Vision
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Every development we undertake is guided by a commitment to
            excellence, innovation, and creating value for our clients and
            communities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {card.title}
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}