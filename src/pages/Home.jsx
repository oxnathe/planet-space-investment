import Hero from "../components/home/Hero";
import CommunitiesGrid from "../components/home/CommunitiesGrid";
import BrochureCTA from "../components/home/BrochureCTA";
import ComingSoon from "../components/home/ComingSoon";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CommunitiesGrid />
      <BrochureCTA />
      <ComingSoon />
    </>
  );
}