import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

import cooImage from "../../assets/coo.png";
import wilsonImage from "../../assets/wilson.png";

/* =====================================================
   LEADERS
===================================================== */

const leaders = [
  {
    name: "Emmanuel Gwachie Onwuka",
    position: "Founder/Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    imagePosition: "center 15%",
    bio: "Emmanuel leads Planet Space Investment LTD with a passion for building lasting legacies in real estate and delivering long-term value through innovative real estate opportunities.",
  },

  {
    name: "Precious Onyinyechi Ndukwe-Onwuka",
    position: "Co-Founder/MD/COO",
    image: cooImage,
    imagePosition: "center 15%",
    bio: "Precious pilots Planet Space Investment LTD's vision in customer experience and sales, overseeing project execution and ensuring every development reflects our commitment to quality and excellence.",
  },
];

/* =====================================================
   TEAM MEMBERS
===================================================== */

const teamMembers = [
  {
    name: "Wilson Utieyin",
    position: "Technology & Software Engineer",
    image: wilsonImage,
    imagePosition: "center 0%",
    instagram: "https://www.instagram.com/utiwilx1/",
  },

  {
    name: "Raphael Raphal",
    position: "Visual & Brand Designer",
    image: null,
    imagePosition: "center 15%",
    instagram: "#",
  },

  {
    name: "Blessing Blessing",
    position: "Content & Communications Specialist",
    image: null,
    imagePosition: "center 15%",
    instagram: "#",
  },

  {
    name: "Victor Vicctor",
    position: "Operations & Equipment Specialist",
    image: null,
    imagePosition: "center 15%",
    instagram: "#",
  },
];

/* =====================================================
   LEADERSHIP COMPONENT
===================================================== */

export default function Leadership() {
  return (
    <section className="py-24 lg:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-4">
            Leadership & Team
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900">
            The People Behind Planet Space
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our team brings together leadership, creativity, technology,
            operational expertise, and a shared commitment to building
            exceptional communities.
          </p>

        </motion.div>


        {/* =================================================
            LEADERS
        ================================================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-slate-200
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* =================================================
                  LEADER IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  aspect-square
                  overflow-hidden
                  bg-slate-100
                "
              >

                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    objectPosition: leader.imagePosition,
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                />

                {/* Bottom Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/60
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* Leader Social Buttons */}

                <div className="absolute bottom-5 left-5 flex gap-3">

                  <a
                    href="#"
                    aria-label={`LinkedIn - ${leader.name}`}
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      hover:bg-amber-400
                      transition
                      duration-300
                    "
                  >
                    <Linkedin size={17} />
                  </a>

                </div>

              </div>


              {/* =================================================
                  LEADER INFORMATION
              ================================================= */}

              <div className="p-6 sm:p-7">

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-slate-900
                  "
                >
                  {leader.name}
                </h3>

                <p className="text-amber-500 font-semibold mt-2">
                  {leader.position}
                </p>

                <p className="mt-5 text-slate-600 leading-7">
                  {leader.bio}
                </p>

                <button
                  className="
                    mt-6
                    font-semibold
                    text-slate-900
                    hover:text-amber-500
                    transition
                  "
                >
                  View Profile
                </button>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            TEAM HEADING
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24 mb-12"
        >

          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm font-semibold mb-3">
            Our Team
          </p>

          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
            The Team Making It Happen
          </h3>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Behind every Planet Space project is a team of dedicated
            professionals working together to turn ideas into reality.
          </p>

        </motion.div>


        {/* =================================================
            TEAM MEMBERS
        ================================================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {teamMembers.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-slate-200
                bg-white
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  TEAM MEMBER IMAGE

                  Large image area
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  aspect-square
                  overflow-hidden
                  bg-slate-100
                "
              >

                {member.image ? (

                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      objectPosition: member.imagePosition,
                    }}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />

                ) : (

                  <div
                    className="
                      w-full
                      h-full
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-slate-100
                      to-slate-200
                    "
                  >

                    <div
                      className="
                        w-20
                        h-20
                        rounded-full
                        bg-[#0D1B2A]
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <span
                        className="
                          text-2xl
                          font-bold
                          text-[#C89B3C]
                        "
                      >
                        {member.name.charAt(0)}
                      </span>

                    </div>

                  </div>

                )}

              </div>


              {/* =================================================
                  SMALL TEAM INFORMATION CARD

                  Reduced padding and spacing so the image
                  remains the dominant part of the card.
              ================================================= */}

              <div className="px-4 py-4 sm:px-5 sm:py-4">

                <h4
                  className="
                    text-lg
                    sm:text-xl
                    font-bold
                    text-slate-900
                    leading-tight
                  "
                >
                  {member.name}
                </h4>

                <p
                  className="
                    text-amber-500
                    font-semibold
                    text-xs
                    sm:text-sm
                    mt-1.5
                    leading-5
                  "
                >
                  {member.position}
                </p>


                {/* =================================================
                    INSTAGRAM ONLY
                ================================================= */}

                <div className="mt-3">

                  <a
                    href={member.instagram}
                    target={member.instagram !== "#" ? "_blank" : undefined}
                    rel={
                      member.instagram !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`Instagram - ${member.name}`}
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                      text-slate-800
                      hover:bg-amber-400
                      hover:text-slate-900
                      transition
                      duration-300
                    "
                  >
                    <Instagram size={17} />

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}