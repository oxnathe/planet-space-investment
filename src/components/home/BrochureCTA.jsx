import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function BrochureCTA() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-brand-dark">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <motion.img
        src="/images/community-2.jpg"
        alt="Featured Development"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      />

      {/* =========================================================
          DARK OVERLAY
      ========================================================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041634]/95 via-[#041634]/80 to-black/60" />

      {/* =========================================================
          GOLD GLOW
      ========================================================= */}
      <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-brand-gold/10 blur-[120px]" />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}

      {/* Left circle */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="absolute -left-20 top-16 h-72 w-72 rounded-full border border-brand-gold/20"
      />

      {/* Right circle */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 0.3,
        }}
        className="absolute -right-24 bottom-10 h-96 w-96 rounded-full border border-white/10"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 flex min-h-[650px] items-center justify-center px-6 py-24">

        <div className="mx-auto max-w-3xl text-center">

          {/* =====================================================
              GOLD ACCENT LINE
          ===================================================== */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto mb-8 h-[3px] rounded-full bg-brand-gold"
          />

          {/* =====================================================
              SUBTITLE
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-brand-gold sm:text-sm sm:tracking-[0.5em]"
          >
            FEATURED DEVELOPMENT
          </motion.p>

          {/* =====================================================
              HEADING
          ===================================================== */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          >
            A New Standard
            <br />
            <span className="text-brand-gold">
              of Luxury Living
            </span>
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
          >
            Explore our latest development with detailed floor plans,
            flexible payment options, premium amenities and everything
            you need to make an informed investment.
          </motion.p>

          {/* =====================================================
              DOWNLOAD BUTTON
          ===================================================== */}
          <motion.a
            href="/files/geneva-application-form.pdf"
            download="Geneva-Application-Form.pdf"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 0 35px rgba(212,175,55,.45)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-brand-gold bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:bg-brand-gold hover:text-brand-dark"
          >

            {/* =================================================
                BOUNCING DOWNLOAD ICON
            ================================================= */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Download size={20} />
            </motion.div>

            Download Application Form

          </motion.a>

          {/* =====================================================
              FILE INFORMATION
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="mt-5 text-xs tracking-wide text-white/40"
          >
            Geneva Application Form • PDF
          </motion.p>

        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-brand-dark to-transparent" />

    </section>
  );
}