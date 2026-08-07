import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`max-w-4xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >
      {badge && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[5px] text-brand-gold font-semibold mb-4"
        >
          {badge}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className={`mt-6 text-lg leading-8 ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}