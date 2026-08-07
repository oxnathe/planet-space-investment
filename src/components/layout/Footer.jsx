import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Estate", path: "/estate" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full border border-brand-gold/20"></div>

        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full border border-white/10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-3">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/logo.png"
              alt="Planet Space"
              className="mb-8 h-12"
            />

            <p className="max-w-sm leading-8 text-white/70">
              Planet Space develops premium estates and investment
              opportunities designed to create lasting value for homeowners
              and investors across Nigeria.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 h-[3px] w-16 bg-brand-gold"></div>

            <h3 className="mb-8 text-2xl font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative w-fit text-white/70 transition hover:text-white"
                >
                  {link.name}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 h-[3px] w-16 bg-brand-gold"></div>

            <h3 className="mb-8 text-2xl font-semibold">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#1877F2]"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/planetspacelimited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/2349014641414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366]"
              >
                <MessageCircle size={18} />
              </motion.a>

            </div>

            <p className="mt-8 leading-7 text-white/60">
              Stay connected with Planet Space for the latest estate launches,
              investment opportunities and project updates.
            </p>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-center gap-4 pt-10 text-sm text-white/60 md:flex-row md:justify-between">

          <p>
            © {new Date().getFullYear()} Planet Space. All rights reserved.
          </p>

          <Link
            to="/contact"
            className="group relative"
          >
            Contact Us

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

      </div>
    </motion.footer>
  );
}