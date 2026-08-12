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
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-brand-dark bg-cover bg-center pt-28 lg:pt-20`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-dark/70" />

      {/* Additional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center text-white">

          {/* Badge */}
          {badge && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[5px] text-brand-gold md:text-base"
            >
              {badge}
            </motion.p>
          )}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-200 md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}