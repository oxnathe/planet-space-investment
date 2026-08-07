import EstateCard from "./EstateCard";

import estate1 from "../../assets/estate1.png";
import estate2 from "../../assets/estate2.png";
import estate3 from "../../assets/estate3.png";

const estates = [
  {
    title: "Planet Gardens",
    location: "Uyo, Akwa Ibom",
    description:
      "Premium residential plots in a fast-growing neighborhood with excellent accessibility.",
    image: estate1,
    status: "Selling",
  },
  {
    title: "Planet Heights",
    location: "Port Harcourt",
    description:
      "A modern estate designed for families seeking luxury, comfort, and long-term value.",
    image: estate2,
    status: "Available",
  },
  {
    title: "Planet Smart City",
    location: "Lagos",
    description:
      "A futuristic community with modern infrastructure and smart living solutions.",
    image: estate3,
    status: "Coming Soon",
  },
];

export default function EstateGrid() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-[#c89b3c] font-semibold">
            Our Estates
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Communities
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {estates.map((estate) => (
            <EstateCard key={estate.title} {...estate} />
          ))}

        </div>

      </div>

    </section>
  );
}