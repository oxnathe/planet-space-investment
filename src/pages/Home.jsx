import SEO from "../components/SEO";

import Hero from "../components/home/Hero";
import CommunitiesGrid from "../components/home/CommunitiesGrid";
import BrochureCTA from "../components/home/BrochureCTA";
import ComingSoon from "../components/home/ComingSoon";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <>
      <SEO
        title="Planet Space Investment | Real Estate & Property Investment in Lagos"
        description="Planet Space Investment develops premium real estate communities in Lagos, offering quality properties, smart investment opportunities and exceptional living."
        path="/"
      />

      <Hero />
      <Stats />
      <CommunitiesGrid />
      <BrochureCTA />
      <ComingSoon />
    </>
  );
}