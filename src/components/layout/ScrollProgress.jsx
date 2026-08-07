import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-brand-gold origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}