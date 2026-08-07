import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileCheck,
  Hammer,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description:
      "We begin by understanding your goals, budget, and property requirements to recommend the best solution.",
  },
  {
    number: "02",
    icon: Search,
    title: "Property Search & Planning",
    description:
      "Our team identifies suitable properties or develops a tailored strategy for your investment or project.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Documentation",
    description:
      "We handle due diligence, legal documentation, and every important detail to ensure a smooth transaction.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Execution",
    description:
      "Whether it's construction, development, management, or acquisition, we deliver with professionalism and quality.",
  },
  {
    number: "05",
    icon: KeyRound,
    title: "Delivery & Support",
    description:
      "We hand over your completed project or property and continue providing reliable after-service support.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold mb-3">
            OUR PROCESS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Work
          </h2>

          <p className="mt-6 text-gray-300 leading-8 max-w-3xl mx-auto">
            From the first conversation to project completion, our structured
            process ensures transparency, efficiency, and exceptional results
            every step of the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-[#C89B3C]/30"></div>

          <div className="grid lg:grid-cols-5 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-[#C89B3C] flex items-center justify-center shadow-xl">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Step Number */}
                  <p className="text-[#C89B3C] text-sm font-bold tracking-[3px] mt-6">
                    STEP {step.number}
                  </p>

                  {/* Card */}
                  <div className="mt-5 bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}