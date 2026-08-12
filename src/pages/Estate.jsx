import SEO from "../components/SEO";

import EstateHero from "../components/estate/EstateHero";
import FeaturedEstate from "../components/estate/FeaturedEstate";
import EstateGrid from "../components/estate/EstateGrid";
import UpcomingProjects from "../components/estate/UpcomingProjects";

export default function Estate() {
  return (
    <>
      <SEO
        title="Estates & Properties in Lagos | Planet Space Investment"
        description="Explore Planet Space Investment's residential estates and property developments across Lagos, including current and upcoming real estate investment opportunities."
        path="/estate"
      />

      <EstateHero />
      <FeaturedEstate />
      <EstateGrid />
      <UpcomingProjects />
    </>
  );
}