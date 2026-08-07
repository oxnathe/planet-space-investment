import { Link } from "react-router-dom";

export default function UpcomingProjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0d1b2a] rounded-3xl p-16 text-white">
          <p className="uppercase tracking-widest text-[#c89b3c]">
            Coming Soon
          </p>

          <h2 className="text-4xl font-bold mt-4">
            More Exceptional Communities Are On The Way
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl">
            We continue to acquire strategic locations across Nigeria to deliver
            secure investments and beautiful communities for our clients.
          </p>

          <Link
            to="/contact?type=waiting-list"
            className="inline-block mt-10 bg-[#c89b3c] text-white px-8 py-4 rounded-full hover:bg-[#b5882f] transition"
          >
            Join Waiting List
          </Link>
        </div>
      </div>
    </section>
  );
}