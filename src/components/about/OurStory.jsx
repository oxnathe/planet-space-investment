import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
              alt="Modern real estate development"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-amber-400 rounded-3xl p-8 shadow-xl hidden md:block">
              <h3 className="text-4xl font-bold text-slate-900">15+</h3>
              <p className="text-slate-800 font-medium mt-2">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-5">
              Our Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Creating Exceptional Communities
              <span className="text-amber-500"> for the Future.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-8 mb-6">
              Planet Space was founded with a clear vision—to redefine real
              estate through carefully planned communities that combine quality,
              innovation, and long-term value.
            </p>

            <p className="text-slate-600 text-lg leading-8 mb-6">
              Every project is designed with people in mind, offering secure
              investments, modern infrastructure, and environments where
              families and businesses can thrive.
            </p>

            <p className="text-slate-600 text-lg leading-8">
              Today, Planet Space continues to build trusted developments that
              create opportunities for homeowners and investors while shaping
              vibrant communities for generations to come.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}