import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  TrendingUp,
} from "lucide-react";

import whyChooseImage from "../../assets/why-choose-us.webp";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Our experienced team provides honest advice and dependable real estate solutions tailored to your goals.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "We prioritize quality in every project, ensuring lasting value through careful planning and execution.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Every client receives personalized attention, transparent communication, and dedicated support.",
  },
  {
    icon: TrendingUp,
    title: "Investment Growth",
    description:
      "We help you identify opportunities that maximize returns and build long-term wealth through real estate.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={whyChooseImage}
              alt="Planet Space Investment"
              className="rounded-[35px] shadow-2xl w-full h-[600px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl px-8 py-6">
              <h3 className="text-5xl font-bold text-[#C89B3C]">
                10+
              </h3>

              <p className="text-[#0D1B2A] font-semibold mt-2">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold mb-3">
              WHY CHOOSE US
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] leading-tight">
              Your Trusted Partner in

              <span className="block text-[#C89B3C]">
                Real Estate Excellence
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-8 mb-10">
              At Planet Space Investment, we combine industry expertise,
              integrity, and innovation to deliver exceptional real estate
              services. From property acquisition to construction and
              management, we are committed to helping our clients achieve
              lasting success.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.5,
                    }}
                    className="bg-gray-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0D1B2A] flex items-center justify-center mb-5">
                      <Icon
                        size={26}
                        className="text-[#C89B3C]"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-[#0D1B2A] mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}