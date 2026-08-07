import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Estate", path: "/estate" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const transparent = location.pathname === "/" && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent py-6"
            : "bg-brand-dark/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Planet Space"
                className="h-11 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative text-sm uppercase tracking-[3px] text-white transition-colors duration-300 hover:text-brand-gold"
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-brand-gold transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[100] bg-brand-dark"
          >
            <div className="flex justify-end p-8">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="text-white" size={34} />
              </button>
            </div>

            <nav className="mt-20 flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl uppercase tracking-[4px] transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-brand-gold"
                        : "text-white hover:text-brand-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}