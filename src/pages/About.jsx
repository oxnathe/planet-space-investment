import SEO from "../components/SEO";

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import WhyChoose from "../components/about/WhyChoose";
import Stats from "../components/about/Stats";
import Timeline from "../components/about/Timeline";
import Leadership from "../components/about/Leadership";

export default function About() {
  return (
    <>
      <SEO
        title="About Planet Space Investment | Trusted Real Estate Company in Lagos"
        description="Learn about Planet Space Investment, our vision, values, leadership, and commitment to delivering quality real estate opportunities in Lagos, Nigeria."
        path="/about"
      />

      <AboutHero />

      <OurStory />

      <MissionVision />

      <WhyChoose />

      <Stats />

      <Timeline />

      <Leadership />
    </>
  );
}