import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import contactOffice from "../../assets/contact-office.jpg";
import { sendEmail } from "../../email";

export default function ContactForm() {
  const [searchParams] = useSearchParams();

  const isWaitingList =
    searchParams.get("type") === "waiting-list";

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      setSending(true);

      await sendEmail(data);

      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

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
                : "We&apos;d Love To Hear From You"}
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              {isWaitingList
                ? "Complete the form below and we&apos;ll notify you as soon as our upcoming estates become available."
                : "Complete the form below and one of our representatives will contact you shortly."}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-400"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
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
                required
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-amber-400"
              />

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending
                  ? "Sending..."
                  : isWaitingList
                    ? "Join Waiting List"
                    : "Send Message"}

                {!sending && <Send size={18} />}
              </button>
            </form>
          </motion.div>

          {/* ================= OFFICE IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[650px] overflow-hidden"
          >
            <img
              src={contactOffice}
              alt="Planet Space Office"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-slate-950/60" />

            {/* Office information */}
            <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">

              <h3 className="text-4xl font-bold mb-6">
                Visit Our Office
              </h3>

              <div className="space-y-6">

                {/* Address */}

                <div className="flex gap-4">
                  <MapPin className="text-amber-400 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold">
                      Office Address
                    </h4>

                    <p className="text-slate-300 mt-2 leading-7">
                      Muniru Plaza,
                      <br />
                      Opp. Ojaja Mall,
                      <br />
                      Abraham Adesanya,
                      <br />
                      Lekki–Epe Expressway.
                    </p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex gap-4">
                  <Phone className="text-amber-400 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>

                    <p className="text-slate-300 mt-2">
                      0812 107 2066
                    </p>
                  </div>
                </div>

                {/* Email */}

                <div className="flex gap-4">
                  <Mail className="text-amber-400 mt-1 shrink-0" />

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

      {/* ================= SUCCESS TOAST ================= */}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-6 right-6 z-[9999] max-w-sm rounded-2xl bg-[#0D1B2A] px-6 py-5 text-white shadow-2xl border border-[#C89B3C]/40"
        >
          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C89B3C] text-[#0D1B2A] font-bold">
              ✓
            </div>

            <div>
              <p className="font-semibold text-lg">
                {isWaitingList
                  ? "You're on the list!"
                  : "Message received!"}
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {isWaitingList
                  ? "Thank you for your interest. Our team will be in touch."
                  : "Thank you for contacting Planet Space Investment. Our team will get back to you shortly."}
              </p>
            </div>

          </div>
        </motion.div>
      )}

    </section>
  );
}