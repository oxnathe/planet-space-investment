import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-amber-400 text-sm font-semibold mb-6">
            Contact Planet Space
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Let's Start a
            <br />
            <span className="text-amber-400">
              Conversation.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
            Whether you're searching for your dream home, exploring investment
            opportunities, or have questions about our developments, our team
            is ready to guide you every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:08121072066"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              <PhoneCall size={18} />
              Call Us
            </a>

            <Link
              to="/estate"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Estates
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-2">
                Phone
              </p>
              <p className="text-white font-medium">
                0812 107 2066
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-2">
                Email
              </p>
              <p className="text-white font-medium break-all">
                info@planetspaceinvestment.ng
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-2">
                Office
              </p>
              <p className="text-white font-medium">
                Lekki–Epe Expressway
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}