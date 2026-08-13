import { motion } from "framer-motion";
import {
  Rocket,
  Building2,
  MapPinned,
  Landmark,
  Trophy,
} from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Started Operations",
    description:
      "Planet Space Investment began operations with a clear ambition to create trusted real estate opportunities, combining strategic investments, thoughtful planning, and a commitment to long-term value.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "First Estate Development",
    description:
      "We marked a major milestone with the launch of our first estate development, laying the foundation for a growing portfolio of thoughtfully planned communities.",
    icon: Building2,
  },
  {
    year: "2023",
    title: "Luxury Community — Geneva Prime",
    description:
      "We introduced Geneva Prime, our luxury community designed to bring together premium living, strategic location, modern infrastructure, and exceptional investment potential.",
    icon: MapPinned,
  },
  {
    year: "2024",
    title: "Became Incorporated",
    description:
      "Planet Space Investment reached a new stage of growth by becoming incorporated, strengthening our corporate foundation and positioning the company for sustainable expansion and greater opportunities.",
    icon: Landmark,
  },
  {
    year: "2026",
    title: "Growing the Future",
    description:
      "We continue to shape the future of modern living through the development of our Luxe Apartments and Signature Duplexes, creating distinctive spaces designed for contemporary lifestyles, lasting value, and legacy.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            Our Journey
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Milestones That Define Us
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            From our beginnings to the developments shaping tomorrow, every
            milestone reflects our commitment to excellence, innovation, and
            creating lasting value.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-amber-400 rounded-full" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative mb-20 flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div
                    className={`${
                      isLeft
                        ? "md:mr-14 text-left"
                        : "md:ml-14 text-left"
                    } rounded-3xl bg-white p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition duration-300`}
                  >
                    <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 mb-5">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-amber-400 shadow-xl z-10">
                  <Icon className="w-7 h-7 text-slate-900" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}