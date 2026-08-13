import { MapPin } from "lucide-react";
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
              The Signature Duplex
            </h2>

            <div className="flex items-center text-gray-500 mb-8">
              <MapPin size={20} />
              <span className="ml-2">
                Chaplin Court, Lekki
              </span>
            </div>

            <p className="text-gray-600 leading-8 mb-6">
              The Signature duplex is a beautifully designed 5-bedroom duplex currently under construction, thoughtfully planned for modern family living.
              Featuring spacious rooms, elegant architecture, and quality finishes, this property is taking shape to offer
              comfort, privacy, and style.
            </p>

            <p className="text-gray-600 leading-8 mb-10">
              Whether you&apos;re buying your first plot, building your dream home,
              or investing for the future, Planet Gardens provides lasting
              value in one of Nigeria&apos;s fastest-growing locations.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}