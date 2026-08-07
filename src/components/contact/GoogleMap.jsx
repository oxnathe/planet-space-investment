import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function GoogleMap() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            Visit Our Office
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            We'd Love To Welcome You
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Visit our office to discuss your real estate goals,
            investment opportunities, or schedule a private consultation
            with one of our experts.
          </p>

        </motion.div>

        {/* Map */}

        <motion.div
          initial={{ opacity: 0, scale: .97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-3xl shadow-2xl border border-slate-200"
        >

          <iframe
            title="Planet Space Office"
            src="https://maps.google.com/maps?q=Muniru%20Plaza%20Opp.%20Ojaja%20Mall%20Adesanya%20Lekki-Epe%20Expressway&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[550px] border-0"
            loading="lazy"
            allowFullScreen
          />

        </motion.div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-12 bg-slate-900 rounded-3xl p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10"
        >

          <div className="flex items-start gap-5">

            <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center flex-shrink-0">

              <MapPin className="text-slate-900" size={30} />

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                Planet Space Investment
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                Muniru Plaza,
                <br />
                Opp. Ojaja Mall,
                <br />
                Adesanya,
                <br />
                Lekki–Epe Expressway,
                Lagos, Nigeria.
              </p>

            </div>

          </div>

          <a
            href="https://maps.google.com/?q=Muniru+Plaza+Opp+Ojaja+Mall+Adesanya+Lekki+Epe+Expressway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-300 transition"
          >
            <Navigation size={18} />

            Get Directions

          </a>

        </motion.div>

      </div>
    </section>
  );
}