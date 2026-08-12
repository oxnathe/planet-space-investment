import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group bg-white rounded-[30px] shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500"
    >
      {/* Top Accent */}
      <div className="h-2 bg-[#C89B3C] w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-8">

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#0D1B2A] flex items-center justify-center mb-6 group-hover:bg-[#C89B3C] transition-all duration-500">
          <Icon
            size={30}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-8">
          {description}
        </p>

      </div>
    </motion.div>
  );
}