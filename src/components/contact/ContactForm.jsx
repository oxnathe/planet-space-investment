import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  const [searchParams] = useSearchParams();

  const isWaitingList =
    searchParams.get("type") === "waiting-list";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white">

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 lg:p-14"
          >

            <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
              {isWaitingList ? "Waiting List" : "Send A Message"}
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              {isWaitingList
                ? "Join Our Waiting List"
                : "We'd Love To Hear From You"}
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              {isWaitingList
                ? "Complete the form below and we'll notify you as soon as our upcoming estates become available."
                : "Complete the form below and one of our representatives will contact you shortly."}
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                />

                <select
                  name="subject"
                  defaultValue={
                    isWaitingList
                      ? "Waiting List"
                      : "General Inquiry"
                  }
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                >
                  <option>General Inquiry</option>
                  <option>Buy a Plot</option>
                  <option>Waiting List</option>
                  <option>Partnership</option>
                  <option>Customer Support</option>
                </select>

              </div>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us how we can help..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-amber-400"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-300 transition"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </motion.div>

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[650px]"
          >

            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop"
              alt="Planet Space Office"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/70" />

            <div className="relative h-full flex flex-col justify-end p-12 text-white">

              <h3 className="text-4xl font-bold mb-6">
                Visit Our Office
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <MapPin className="text-amber-400 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Office Address
                    </h4>

                    <p className="text-slate-300 mt-2 leading-7">
                      Muniru Plaza,
                      <br />
                      Opp. Ojaja Mall,
                      <br />
                      Adesanya,
                      <br />
                      Lekki–Epe Expressway.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone className="text-amber-400 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>

                    <p className="text-slate-300 mt-2">
                      0812 107 2066
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Mail className="text-amber-400 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <p className="text-slate-300 mt-2 break-all">
                      info@planetspaceinvestment.ng
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}