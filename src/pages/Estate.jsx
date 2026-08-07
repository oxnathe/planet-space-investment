import EstateHero from "../components/estate/EstateHero";
import FeaturedEstate from "../components/estate/FeaturedEstate";
import EstateGrid from "../components/estate/EstateGrid";
import UpcomingProjects from "../components/estate/UpcomingProjects";

export default function Estate() {
  return (
    <>
      <EstateHero />
      <FeaturedEstate />
      <EstateGrid />
      <UpcomingProjects />
    </>
  );
}