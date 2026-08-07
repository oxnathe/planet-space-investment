import { MapPin } from "lucide-react";

export default function EstateCard({
  image,
  title,
  location,
  description,
  status,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition duration-500">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">

        <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-4">
          {status}
        </span>

        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={18} />
          <span className="ml-2">{location}</span>
        </div>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <button className="mt-6 text-[#c89b3c] font-semibold hover:underline">
          View Estate →
        </button>

      </div>
    </div>
  );
}