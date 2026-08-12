import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function CommunityCard({
  name,
  location,
  tag,
  image,
}) {
  return (
    <Link
      to="/estate#communities"
      className="block"
      aria-label={`View ${name} on Estate page`}
    >
      <motion.div
        whileHover="hover"
        className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
      >
        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div className="relative h-[420px] overflow-hidden">

          <motion.img
            src={image}
            alt={`${name} - ${location}`}
            className="h-full w-full object-cover"
            variants={{
              hover: {
                scale: 1.08,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* ===================================================
              TAG
          =================================================== */}
          {tag && (
            <div className="absolute left-5 top-5 rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-dark shadow-lg">
              {tag}
            </div>
          )}

          {/* ===================================================
              ARROW
          =================================================== */}
          <motion.div
            variants={{
              hover: {
                rotate: 0,
                scale: 1.1,
              },
            }}
            initial={{
              rotate: -15,
            }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-dark"
          >
            <ArrowUpRight size={20} />
          </motion.div>

          {/* ===================================================
              CARD CONTENT
          =================================================== */}
          <div className="absolute bottom-0 left-0 right-0 p-6">

            <h3 className="font-display text-2xl text-white">
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
              <MapPin size={15} className="text-brand-gold" />
              {location}
            </div>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}