import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Estate", path: "/estate" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const location = useLocation();

  // Handle footer navigation
  const handleNavigation = (path) => {
    // If clicking the page you're already on,
    // React Router will not change the route.
    // So manually scroll to the top.
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full border border-brand-gold/20" />

        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* ===================================================
            MAIN FOOTER CONTENT
        =================================================== */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-3">

          {/* =================================================
              LOGO & DESCRIPTION
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              aria-label="Planet Space Investment Home"
              className="inline-block"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/logo.png"
                alt="Planet Space Investment"
                className="mb-8 h-12 w-auto"
              />
            </Link>

            <p className="max-w-sm leading-8 text-white/70">
              Planet Space Investment develops premium estates and investment
              opportunities designed to create lasting value for homeowners
              and investors across Nigeria.
            </p>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 h-[3px] w-16 bg-brand-gold" />

            <h3 className="mb-8 text-2xl font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className="group relative w-fit text-white/70 transition hover:text-white"
                >
                  {link.name}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              CONNECT WITH US
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 h-[3px] w-16 bg-brand-gold" />

            <h3 className="mb-8 text-2xl font-semibold">
              Connect With Us
            </h3>

            {/* Social Media */}
            <div className="flex gap-4">

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planet Space Investment on Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#1877F2]"
              >
                <Facebook size={18} />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/planetspacelimited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planet Space Investment on Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <Instagram size={18} />
              </motion.a>

            </div>

            <p className="mt-8 leading-7 text-white/60">
              Stay connected with Planet Space Investment for the latest estate
              launches, investment opportunities and project updates.
            </p>
          </motion.div>

        </div>

        {/* ===================================================
            BOTTOM FOOTER
        =================================================== */}
        <div className="flex flex-col items-center justify-center gap-4 pt-10 text-sm text-white/60 md:flex-row md:justify-between">

          <p>
            © {new Date().getFullYear()} Planet Space Investment. All rights reserved.
          </p>

          <Link
            to="/contact"
            onClick={() => handleNavigation("/contact")}
            className="group relative"
          >
            Contact Us

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </Link>

        </div>

      </div>
    </motion.footer>
  );
}