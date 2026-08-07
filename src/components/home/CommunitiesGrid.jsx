import { motion } from "framer-motion";
import CommunityCard from "./CommunityCard";

const communities = [
  {
    name: "Edificio Residences",
    location: "Lekki, Lagos",
    tag: "New Launch",
    image: "/images/community-1.jpg",
  },
  {
    name: "Harborview Court",
    location: "Abuja",
    tag: "Selling Fast",
    image: "/images/community-2.jpg",
  },
  {
    name: "The Estate",
    location: "Ibeju-Lekki, Lagos",
    tag: "Featured",
    image: "/images/community-3.jpg",
  },
  {
    name: "Highland Heights",
    location: "Lekki, Lagos",
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
  },
};

export default function CommunitiesGrid() {
  return (
    <section id="communities" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>

            <div className="mb-5 h-[3px] w-20 bg-brand-gold"></div>

            <p className="mb-4 uppercase tracking-[8px] text-brand-gold">
              OUR COMMUNITIES
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-brand-dark">
              Discover Where
              <br />
              Your Next Investment Begins
            </h2>

          </div>

          <a
            href="/communities"
            className="text-brand-dark hover:text-brand-gold transition"
          >
            View All Communities →
          </a>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {communities.map((community) => (
            <motion.div
              key={community.name}
              variants={item}
              whileHover={{
                y: -10,
                transition: {
                  duration: .3,
                },
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