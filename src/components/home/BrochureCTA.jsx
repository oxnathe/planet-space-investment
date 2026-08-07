import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function BrochureCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* Background Image */}
      <motion.img
        src="/images/community-2.jpg"
        alt="Featured Development"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041634]/90 via-[#041634]/70 to-black/50" />

      {/* Decorative Circles */}
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full border border-brand-gold/20"></div>

      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full border border-white/10"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          {/* Gold Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 h-[3px] rounded-full bg-brand-gold"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 uppercase tracking-[8px] text-brand-gold text-sm"
          >
            FEATURED DEVELOPMENT
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl leading-tight text-white md:text-6xl"
          >
            A New Standard
            <br />
            of Luxury Living
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80"
          >
            Explore our latest development with detailed floor plans,
            flexible payment options, premium amenities and everything you
            need to make an informed investment.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/files/brochure.pdf"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(212,175,55,.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-brand-gold bg-white/10 px-8 py-4 text-white backdrop-blur-lg transition-all"
          >
            <Download size={20} />
            Download Brochure
          </motion.a>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-brand-dark to-transparent"></div>

    </section>
  );
}