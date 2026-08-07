import PageHero from "../common/PageHero";
import heroImage from "../../assets/estate-hero.png";

export default function ServiceHero() {
  return (
    <PageHero
      badge="OUR SERVICES"
      title={
        <>
          Building Wealth Through
          <span className="block text-[#C89B3C]">
            Smart Real Estate Solutions
          </span>
        </>
      }
      subtitle="Whether you're buying land, investing in premium estates, developing property, or seeking expert real estate advisory, Planet Space Investment provides trusted solutions designed for long-term value."
      image={heroImage}
    />
  );
}