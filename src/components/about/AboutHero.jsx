import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-amber-400 text-sm font-semibold mb-6">
            About Planet Space
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Building Communities.
            <br />
            <span className="text-amber-400">
              Creating Lasting Value.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
            Planet Space is committed to developing premium residential
            communities and investment opportunities that combine thoughtful
            planning, modern infrastructure, and long-term value.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/estate"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Explore Estates
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}