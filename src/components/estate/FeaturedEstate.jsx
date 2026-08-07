import { ArrowRight, MapPin } from "lucide-react";
import featuredImg from "../../assets/featured-estate.jpg";

export default function FeaturedEstate() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src={featuredImg}
              alt="Featured Estate"
              className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[4px] text-[#C8A35F] font-semibold mb-4">
              Featured Community
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F35] leading-tight mb-6">
              Planet Gardens Estate
            </h2>

            <div className="flex items-center text-gray-500 mb-8">
              <MapPin size={20} />
              <span className="ml-2">
                Uyo, Akwa Ibom State
              </span>
            </div>

            <p className="text-gray-600 leading-8 mb-6">
              Planet Gardens Estate is thoughtfully planned to offer residents
              a peaceful environment, excellent infrastructure, reliable
              security, and exceptional investment potential.
            </p>

            <p className="text-gray-600 leading-8 mb-10">
              Whether you're buying your first plot, building your dream home,
              or investing for the future, Planet Gardens provides lasting
              value in one of Nigeria's fastest-growing locations.
            </p>

            <button className="inline-flex items-center gap-3 bg-[#C8A35F] text-white px-8 py-4 rounded-full hover:bg-[#b58f4f] transition">
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}