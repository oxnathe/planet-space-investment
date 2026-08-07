import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

const leaders = [
  {
    name: "John Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    bio: "John leads Planet Space with a passion for creating sustainable communities and delivering long-term value through innovative real estate developments.",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    bio: "Jane oversees project execution and customer experience, ensuring every development reflects our commitment to quality and excellence.",
  },
];

export default function Leadership() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            Leadership
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Meet The People Behind Planet Space
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our leadership team combines years of experience,
            strategic thinking, and a shared commitment to building
            exceptional communities.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              whileHover={{
                y: -10,
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                <div className="absolute bottom-6 left-6 flex gap-3">

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-amber-400 transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-amber-400 transition"
                  >
                    <Mail size={18} />
                  </a>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-slate-900">
                  {leader.name}
                </h3>

                <p className="text-amber-500 font-semibold mt-2">
                  {leader.position}
                </p>

                <p className="mt-6 text-slate-600 leading-8">
                  {leader.bio}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 group-hover:text-amber-500 transition">
                  View Profile

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}