import { motion } from "framer-motion";

export default function PageHero({
  title,
  subtitle,
  image,
  badge,
  height = "min-h-screen",
}) {
  return (
    <section
      className={`relative ${height} flex items-center justify-center bg-cover bg-center overflow-hidden pt-28 lg:pt-20`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1B2A]/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">

          {badge && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[5px] text-[#C89B3C] font-semibold mb-5 text-sm md:text-base"
            >
              {badge}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold leading-tight text-4xl sm:text-5xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-base md:text-xl text-gray-200 leading-8 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

        </div>
      </div>
    </section>
  );
}