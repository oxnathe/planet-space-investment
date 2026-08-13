import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-dark">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-dark/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Contact Planet Space
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Let&apos;s Start a
            <br />
            <span className="text-brand-gold">
              Conversation.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Whether you&apos;re searching for your dream home, exploring investment
            opportunities, or have questions about our developments, our team
            is ready to guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* Call Us */}
            <a
              href="tel:08121072066"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 font-semibold text-brand-dark transition hover:bg-[#d8ad4d]"
            >
              <PhoneCall size={18} />
              Call Us
            </a>

            {/* View Estates */}
            <Link
              to="/estate"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-brand-dark"
            >
              View Estates
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">

            {/* Phone */}
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-brand-gold">
                Phone
              </p>

              <p className="font-medium text-white">
                0812 107 2066
              </p>
            </div>

            {/* Email */}
            <div className="min-w-0">
              <p className="mb-2 text-sm uppercase tracking-widest text-brand-gold">
                Email
              </p>

              <p className="whitespace-nowrap text-sm font-medium text-white sm:text-base">
                info@planetspaceinvestment.ng
              </p>
            </div>

            {/* Office */}
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-brand-gold">
                Office
              </p>

              <p className="font-medium text-white">
                Lekki–Epe Expressway
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}