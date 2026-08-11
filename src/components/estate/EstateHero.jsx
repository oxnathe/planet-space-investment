import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EstateHero() {
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-amber-400 text-sm font-semibold mb-6">
            Our Estates
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Discover Your
            <br />
            <span className="text-amber-400">
              Perfect Space.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
            Explore thoughtfully planned residential communities designed
            for comfortable living, modern lifestyles, and long-term
            investment value.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Make an Inquiry
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Back Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}