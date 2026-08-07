import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-dark"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">

        <motion.img
          src="/images/logo.png"
          alt="Planet Space"
          className="mx-auto h-20 w-auto"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="mx-auto mt-8 h-1 bg-brand-gold rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

      </div>
    </motion.div>
  );
}