import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-[#0D1B2A] px-8 py-20 md:px-16 text-center"
        >

          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C89B3C]/10"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5"></div>

          <div className="relative z-10 max-w-4xl mx-auto">

            <p className="uppercase tracking-[5px] text-[#C89B3C] font-semibold mb-4">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Turn Your Real Estate Vision
              <span className="block text-[#C89B3C]">
                Into Reality
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
              Whether you&apos;re buying your first property, expanding your
              investment portfolio, planning a development project, or
              looking for trusted property management, Planet Space
              Investment is ready to help you every step of the way.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#C89B3C] hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition duration-300"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/estate"
                className="inline-flex items-center justify-center gap-3 border border-white text-white hover:bg-white hover:text-[#0D1B2A] font-semibold px-8 py-4 rounded-full transition duration-300"
              >
                Explore Properties
                <Phone size={20} />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}