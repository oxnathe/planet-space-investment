import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="relative h-screen min-h-[750px] overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src="/images/coming-soon.jpg"
        alt="Planet Space Heights"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-[#041634]" />

      {/* Decorative Circles */}
      <div className="absolute top-20 left-16 h-72 w-72 rounded-full border border-white/10"></div>

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full border border-brand-gold/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto mb-8 h-[3px] rounded-full bg-brand-gold"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2, duration: .6 }}
            className="mb-4 uppercase tracking-[8px] text-brand-gold"
          >
            THE SIGNATURE DUPLEX
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .4, duration: .8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
          >
            Unveiling Soon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .7, duration: .8 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80"
          >
            Experience a new era of luxury living where thoughtful design,
            premium locations and timeless architecture come together.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(212,175,55,.45)",
            }}
            whileTap={{ scale: .97 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-brand-gold bg-white/10 backdrop-blur-lg px-8 py-4 text-white"
          >
            <Download size={18} />
            Download Brochure
          </motion.button>

        </div>
      </div>

      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-brand-dark to-transparent"></div>
    </section>
  );
}