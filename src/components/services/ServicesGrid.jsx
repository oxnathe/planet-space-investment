import { motion } from "framer-motion";
import {
  Building2,
  KeyRound,
  BriefcaseBusiness,
  Landmark,
  Hammer,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Property Sales",
    icon: Building2,
    description:
      "Find premium residential and commercial properties carefully selected to deliver lasting value, security, and excellent investment opportunities.",
  },
  {
    title: "Property Rentals",
    icon: KeyRound,
    description:
      "Explore quality rental homes, apartments, office spaces, and commercial properties that suit your lifestyle and business needs.",
  },
  {
    title: "Property Management",
    icon: BriefcaseBusiness,
    description:
      "We provide professional property management services that maximize returns while maintaining your investment to the highest standards.",
  },
  {
    title: "Real Estate Development",
    icon: Landmark,
    description:
      "From land acquisition to project completion, we develop modern residential and commercial communities built for long-term value.",
  },
  {
    title: "Construction",
    icon: Hammer,
    description:
      "Our experienced construction team delivers quality workmanship, innovative designs, and durable structures for every project.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold mb-3">
            WHAT WE OFFER
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A]">
            Our Real Estate Services
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Planet Space Investment offers comprehensive real estate solutions
            tailored to meet the needs of individuals, families, investors, and
            businesses across every stage of property ownership.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * 0.15,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}