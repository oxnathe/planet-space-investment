import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactCards() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      main: "0812 107 2066",
      description: "Monitored during business hours",
      type: "phone",
    },
    {
      icon: Mail,
      title: "Email Us",
      main: "info@planetspaceinvestment.ng",
      description: "We\u2019ll respond as soon as possible",
      type: "email",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      main: "Muniru Plaza",
      description:
        "Opp. Ojaja Mall, Abraham Adesanya, Lekki–Epe Expressway",
      type: "location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      main: "Monday – Friday",
      description: "8:30 AM – 6:00 PM",
      type: "hours",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm font-semibold mb-4">
            Contact Information
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F35]">
            We&apos;re Here To Help
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Reach out to us using any of the options below. Our team is
            always ready to answer your questions and guide you through
            your real estate journey.
          </p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="min-w-0 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* ================= ICON ================= */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFBB22] text-[#0B1F35]">
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* ================= TITLE ================= */}
                <h3 className="mt-8 text-2xl font-bold text-[#0B1F35]">
                  {card.title}
                </h3>

                {/* ================= MAIN INFORMATION ================= */}
                {card.type === "phone" ? (
                  <a
                    href="tel:+2348121072066"
                    className="mt-4 block text-lg font-medium text-[#0B1F35] hover:text-[#C89B3C] transition"
                  >
                    {card.main}
                  </a>
                ) : card.type === "email" ? (
                  <a
                    href="mailto:info@planetspaceinvestment.ng"
                    className="mt-4 block min-w-0 break-words text-base sm:text-lg font-medium leading-7 text-[#0B1F35] hover:text-[#C89B3C] transition"
                  >
                    {card.main}
                  </a>
                ) : (
                  <p className="mt-4 text-lg font-medium leading-7 text-[#0B1F35]">
                    {card.main}
                  </p>
                )}

                {/* ================= DESCRIPTION ================= */}
                <p className="mt-5 text-base leading-7 text-slate-600">
                  {card.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}