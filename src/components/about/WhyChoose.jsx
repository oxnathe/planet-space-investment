import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Landmark,
  HandCoins,
  Building2,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Investments",
    description:
      "Every property is carefully planned and backed by transparent documentation for your peace of mind.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Our developments are strategically located in fast-growing areas with excellent accessibility.",
  },
  {
    icon: HandCoins,
    title: "Flexible Payment Plans",
    description:
      "Affordable payment options designed to make property ownership easier for individuals and families.",
  },
  {
    icon: Building2,
    title: "Modern Communities",
    description:
      "Thoughtfully designed estates featuring quality infrastructure and contemporary living spaces.",
  },
  {
    icon: Landmark,
    title: "Secure Documentation",
    description:
      "Every investment is supported by proper legal documentation and a transparent acquisition process.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our experienced team is committed to guiding you through every step of your investment journey.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-white">
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
            Why Planet Space
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Why Investors Choose Us
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            We combine innovation, integrity, and thoughtful planning to create
            premium real estate opportunities that deliver lasting value.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-8 mt-20 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-slate-900" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-8 h-1 w-0 rounded-full bg-amber-400 transition-all duration-500 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}