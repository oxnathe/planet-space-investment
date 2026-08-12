import EstateCard from "./EstateCard";

import estate1 from "../../assets/estate1.webp";
import estate2 from "../../assets/estate2.webp";
import estate3 from "../../assets/estate3.jpg";
import estate4 from "../../assets/estate4.jpg";

const estates = [
  {
    title: "Geneva Prime Estate",
    location: "Ketu-Epe, Lagos State",
    description:
      "A prime residential development in the rapidly growing Ketu-Epe corridor, offering an excellent opportunity for homeowners and investors seeking long-term value.",
    image: estate1,
    status: "Now Selling",
  },
  {
    title: "The Luxe Apartment Mainland",
    location: "Ipaja-Ayoba, Lagos State",
    description:
      "A thoughtfully designed residential development offering modern living and comfort in a well-connected part of Lagos Mainland.",
    image: estate2,
    status: "Sold Out",
  },
  {
    title: "The Luxe Apartment Lekki",
    location: "Lekki-Ajah, Lagos State",
    description:
      "An upcoming luxury residential development in the Lekki-Ajah corridor, designed for contemporary living and future-focused investment.",
    image: estate3,
    status: "Coming Soon",
  },
  {
    title: "The Signature Duplex",
    location: "Chaplin Court, Ogombo Road, Lekki",
    description:
      "An exclusive collection of signature duplex residences currently under development, combining contemporary design, comfort, and premium living in Lekki.",
    image: estate4,
    status: "Under Construction",
  },
];

export default function EstateGrid() {
  return (
    <section
      id="communities"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#c89b3c] font-semibold">
            Our Estates
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Communities
          </h2>
        </div>

        {/* Estate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {estates.map((estate) => (
            <EstateCard
              key={estate.title}
              {...estate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}