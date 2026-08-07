import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Users,
  MapPinned,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: MapPinned,
    value: 12,
    suffix: "",
    label: "Communities Developed",
  },
  {
    icon: Award,
    value: 8,
    prefix: "₦",
    suffix: "B+",
    label: "Property Value",
  },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-amber-400 text-sm font-semibold mb-4">
            Our Impact
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Numbers That Speak
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Our achievements reflect years of dedication, trusted partnerships,
            and delivering value through premium real estate developments.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-10 text-center shadow-xl"
              >
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400">
                  <Icon className="h-8 w-8 text-slate-900" />
                </div>

                <h3 className="text-5xl font-bold text-white">
                  {inView && (
                    <>
                      {item.prefix}
                      <CountUp
                        end={item.value}
                        duration={2.5}
                        separator=","
                      />
                      {item.suffix}
                    </>
                  )}
                </h3>

                <p className="mt-5 text-slate-300 text-lg">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}