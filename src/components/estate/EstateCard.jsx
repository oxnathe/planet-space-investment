import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EstateCard({
  image,
  title,
  location,
  description,
  status,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= ESTATE CARD ================= */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition duration-500">

        {/* ================= IMAGE ================= */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6">

          {/* ================= STATUS ================= */}
          <motion.span
            animate={{
              opacity: [1, 0.45, 1],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-4"
          >
            {status}
          </motion.span>

          {/* ================= TITLE ================= */}
          <h3 className="text-2xl font-bold mb-3">
            {title}
          </h3>

          {/* ================= LOCATION ================= */}
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin size={18} />
            <span className="ml-2">{location}</span>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* ================= VIEW MORE ================= */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 text-[#c89b3c] font-semibold hover:underline"
          >
            View More →
          </button>

        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >

            {/* ================= MODAL ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >

              {/* ================= CLOSE BUTTON ================= */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* ================= MODAL IMAGE ================= */}
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status */}
                <motion.span
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 left-6 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                >
                  {status}
                </motion.span>
              </div>

              {/* ================= MODAL CONTENT ================= */}
              <div className="p-7 sm:p-10">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F35]">
                  {title}
                </h2>

                {/* Location */}
                <div className="mt-4 flex items-center text-gray-500">
                  <MapPin size={20} className="text-[#C89B3C]" />
                  <span className="ml-2">
                    {location}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Description */}
                <div className="text-gray-600 leading-8 text-base sm:text-lg">
                  <p>
                    {description}
                  </p>
                </div>

                {/* Additional information */}
                <div className="mt-8 rounded-2xl bg-[#0B1F35] p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3">
                    About This Community
                  </h3>

                  <p className="text-gray-300 leading-7">
                    This community is thoughtfully planned to provide
                    comfortable living, modern amenities, and long-term
                    investment value. Contact Planet Space Investment to
                    learn more about availability, pricing, and investment
                    opportunities.
                  </p>
                </div>

                {/* Close */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-[#C89B3C] px-7 py-3 font-semibold text-white transition hover:bg-[#b58f4f]"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}