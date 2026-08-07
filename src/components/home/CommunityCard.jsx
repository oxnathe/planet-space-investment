import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function CommunityCard({
  image,
  name,
  location,
  tag,
}) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-xl"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.8 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      {/* Luxury Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-brand-gold/10 to-transparent"></div>

      {/* Tag */}
      {tag && (
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="absolute left-5 top-5 rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-dark shadow-lg"
        >
          {tag}
        </motion.div>
      )}

      {/* Bottom Glass Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">

          <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
            <MapPin size={16} />
            {location}
          </div>

          <div className="flex items-center justify-between">

            <h3 className="font-display text-2xl text-white">
              {name}
            </h3>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-brand-dark shadow-lg"
            >
              <ArrowUpRight size={18} />
            </motion.div>

          </div>

        </div>

      </div>

    </motion.a>
  );
}