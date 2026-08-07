import heroImage from "../../assets/estate-hero.png";

export default function EstateHero() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-6xl font-bold mb-6">
          Our Estates
        </h1>

        <p className="text-xl max-w-2xl">
          Discover premium residential communities designed for
          comfortable living and long-term investment.
        </p>
      </div>
    </section>
  );
}