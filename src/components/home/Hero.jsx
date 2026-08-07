import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">

      {/* Background Video */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero-video.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

      {/* Decorative Circles */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-white/10"></div>

      <div className="absolute right-12 bottom-16 h-96 w-96 rounded-full border border-brand-gold/20"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: .3, duration: .8 }}
              className="mb-6 h-[3px] rounded-full bg-brand-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4, duration: .6 }}
              className="uppercase tracking-[8px] text-brand-gold text-sm mb-5"
            >
              REAL ESTATE • INVESTMENT • LUXURY LIVING
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .6, duration: .8 }}
              className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-tight"
            >
              Building
              <br />
              Futures Through
              <span className="block text-brand-gold">
                Smart Investments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .9, duration: .8 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/80"
            >
              Discover premium communities crafted for modern living,
              exceptional comfort and long-term value. Every development is
              designed to inspire confidence and create lasting wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: .8 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{ scale: .97 }}
                href="#communities"
                className="rounded-full bg-brand-gold px-9 py-4 font-semibold text-brand-dark shadow-xl transition"
              >
                Explore Communities
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "#D4AF37",
                }}
                whileTap={{ scale: .97 }}
                href="#coming-soon"
                className="rounded-full border border-white/40 bg-white/10 px-9 py-4 text-white backdrop-blur-md"
              >
                Upcoming Projects
              </motion.a>

            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown
          className="text-white/70"
          size={36}
        />
      </motion.div>

    </section>
  );
}