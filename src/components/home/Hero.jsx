import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "../../assets/home-hero.jpg";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-brand-dark">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <motion.img
        src={heroImage}
        alt="Planet Space Investment"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "easeOut",
        }}
      />

      {/* =========================================================
          PREMIUM DARK OVERLAY
      ========================================================= */}

      {/* Overall dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />

      {/* =========================================================
          GOLD ATMOSPHERE
      ========================================================= */}
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}

      {/* Large left circle */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.4,
        }}
        className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full border border-white/10"
      />

      {/* Inner left circle */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.7,
        }}
        className="absolute -left-20 top-44 h-[260px] w-[260px] rounded-full border border-brand-gold/10"
      />

      {/* Right circle */}
      <motion.div
        initial={{
          opacity: 0,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.8,
        }}
        className="absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full border border-brand-gold/15"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-20 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-4xl"
          >

            {/* =====================================================
                GOLD ACCENT LINE
            ===================================================== */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 85,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mb-7 h-[3px] rounded-full bg-brand-gold"
            />

            {/* =====================================================
                EYEBROW
            ===================================================== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-brand-gold sm:text-sm sm:tracking-[0.45em]"
            >
              REAL ESTATE • INVESTMENT • LUXURY LIVING
            </motion.p>

            {/* =====================================================
                MAIN HEADING
            ===================================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Building
              <br />

              <span className="text-white">
                Futures Through
              </span>

              <span className="mt-2 block text-brand-gold">
                Smart Investments
              </span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="mt-8 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
            >
              Discover premium communities crafted for modern living,
              exceptional comfort and long-term value. Every development is
              designed to inspire confidence and create lasting wealth.
            </motion.p>

            {/* =====================================================
                CTA BUTTONS
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.15,
                duration: 0.8,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >

              {/* Primary CTA */}
              <motion.a
                href="#communities"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-gold px-8 py-4 font-semibold text-brand-dark shadow-[0_15px_40px_rgba(200,155,60,0.25)] transition-all duration-300 hover:bg-[#d8ad4d]"
              >
                Explore Communities

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#coming-soon"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-brand-gold hover:bg-white/15"
              >
                Upcoming Projects

                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold transition-transform duration-300 group-hover:scale-150" />
              </motion.a>

            </motion.div>

            {/* =====================================================
                TRUST DETAILS
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/50"
            >
              <span>
                Premium Communities
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-brand-gold sm:block" />

              <span>
                Secure Investments
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-brand-gold sm:block" />

              <span>
                Built For Tomorrow
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
            Scroll
          </span>

          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2">
            <ChevronDown
              size={15}
              className="text-brand-gold"
            />
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}