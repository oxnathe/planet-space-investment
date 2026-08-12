import PageHero from "../common/PageHero";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export default function ServiceHero() {
  return (
    <PageHero
      badge="OUR SERVICES"
      title={
        <>
          Building Wealth Through
          <span className="block text-brand-gold">
            Smart Real Estate Solutions
          </span>
        </>
      }
      subtitle="Whether you're buying land, investing in premium estates, developing property, or seeking expert real estate advisory, Planet Space Investment provides trusted solutions designed for long-term value."
      image={heroImage}
    />
  );
}