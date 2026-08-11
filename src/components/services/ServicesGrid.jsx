import { motion } from "framer-motion";
import {
  Landmark,
  Hammer,
  BriefcaseBusiness,
  Sofa,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  // ==========================================
  // 1. REAL ESTATE DEVELOPMENT
  // ==========================================
  {
    title: "Real Estate Development",
    icon: Landmark,
    description:
      "From land acquisition to project completion, we develop modern residential and commercial communities built for long-term value.",
  },

  // ==========================================
  // 2. CONSTRUCTION
  // ==========================================
  {
    title: "Construction",
    icon: Hammer,
    description:
      "Our experienced construction team delivers quality workmanship, innovative designs, and durable structures for every project.",
  },

  // ==========================================
  // 3. PROPERTY MANAGEMENT
  // ==========================================
  {
    title: "Property Management",
    icon: BriefcaseBusiness,
    description:
      "We provide professional property management services that maximize returns while maintaining your investment to the highest standards.",
  },

  // ==========================================
  // 4. INTERIOR DESIGN
  // ==========================================
  {
    title: "Interior Design",
    icon: Sofa,
    description:
      "Urban Design Style. A team of creatives bringing collective contemporary and luxury finishing ideas to life.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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

        {/* ==========================================
            SERVICES GRID
        ========================================== */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={index === 3 ? "lg:col-start-2" : ""}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}