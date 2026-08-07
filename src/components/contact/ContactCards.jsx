import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "0812 107 2066",
    sub: "Monitored during business hours",
    href: "tel:08121072066",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@planetspaceinvestment.ng",
    sub: "We'll respond as soon as possible",
    href: "mailto:info@planetspaceinvestment.ng",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Muniru Plaza",
    sub: "Opp. Ojaja Mall, Adesanya, Lekki–Epe Expressway",
    href: "https://maps.google.com/?q=Muniru+Plaza+Opp+Ojaja+Mall+Adesanya+Lekki+Epe+Expressway",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Tuesday – Friday",
    sub: "8:30 AM – 6:00 PM",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            Contact Information
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            We're Here To Help
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Reach out to us using any of the options below. Our team is
            always ready to answer your questions and guide you through
            your real estate journey.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>

                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-lg font-semibold text-slate-800 hover:text-amber-500 transition"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-slate-800">
                    {card.value}
                  </p>
                )}

                <p className="mt-4 text-slate-600 leading-7">
                  {card.sub}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}