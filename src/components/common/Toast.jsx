import { motion } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Toast({ message, type = "success", onClose }) {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, x: 30 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -30, x: 30 }}
      transition={{ duration: 0.35 }}
      className="fixed top-6 right-6 z-[9999] w-[calc(100%-3rem)] max-w-sm"
    >
      <div className="relative flex items-start gap-4 rounded-2xl bg-[#0D1B2A] px-5 py-4 shadow-2xl border border-white/10">

        {/* Icon */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            isSuccess ? "bg-[#C89B3C]" : "bg-red-500"
          }`}
        >
          {isSuccess ? (
            <CheckCircle size={20} className="text-[#0D1B2A]" />
          ) : (
            <XCircle size={20} className="text-white" />
          )}
        </div>

        {/* Message */}
        <div className="flex-1 pr-5">
          <p className="font-semibold text-white">
            {isSuccess ? "Message received!" : "Something went wrong"}
          </p>

          <p className="mt-1 text-sm leading-5 text-slate-300">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-slate-400 transition hover:text-white"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>

      </div>
    </motion.div>
  );
}