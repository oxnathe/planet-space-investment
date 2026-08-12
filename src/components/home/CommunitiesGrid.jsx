import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CommunityCard from "./CommunityCard";

const communities = [
  {
    name: "The Luxe Apartment",
    location: "Lekki, Lagos",
    tag: "New Launch",
    image: "/images/community-1.jpg",
  },
  {
    name: "Geneva Prime",
    location: "Ketu-Epe, Lagos",
    tag: "Selling Fast",
    image: "/images/community-2.jpeg",
  },
  {
    name: "The Luxe Apartment",
    location: "Ipaja-Ayobo, Lagos",
    tag: "Featured",
    image: "/images/community-3.jpeg",
  },
  {
    name: "The Signature Duplex",
    location: "Chaplain Court, Lekki, Lagos",
    image: "/images/community-4.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function CommunitiesGrid() {
  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* =====================================================
          DECORATIVE GOLD GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>

            {/* Gold Line */}
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 80,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-5 h-[3px] rounded-full bg-brand-gold"
            />

            {/* Eyebrow */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold sm:text-sm sm:tracking-[0.5em]">
              OUR COMMUNITIES
            </p>

            {/* Heading */}
            <h2 className="font-display text-4xl leading-tight text-brand-dark sm:text-5xl md:text-6xl">
              Discover Where
              <br />
              <span className="text-brand-gold">
                Your Next Investment
              </span>{" "}
              Begins
            </h2>

          </div>

          {/* View All */}
          <motion.div
            whileHover={{
              x: 5,
            }}
            className="self-start lg:self-auto"
          >
            <Link
              to="/estate"
              className="group inline-flex items-center gap-2 font-medium text-brand-dark transition-colors duration-300 hover:text-brand-gold"
              aria-label="View all Planet Space communities"
            >
              View All Communities

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

        </motion.div>

        {/* ===================================================
            COMMUNITY CARDS
        =================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4"
        >
          {communities.map((community) => (
            <motion.div
              key={community.name}
              variants={item}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <CommunityCard {...community} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}