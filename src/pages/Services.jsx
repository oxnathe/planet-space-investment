import SEO from "../components/SEO";

import ServiceHero from "../components/services/ServiceHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Process from "../components/services/Process";
import ServiceCTA from "../components/services/ServiceCTA";

export default function Services() {
  return (
    <>
      <SEO
        title="Real Estate Services | Planet Space Investment"
        description="Explore Planet Space Investment's real estate services, including property development, construction, investment opportunities, and professional real estate solutions in Lagos, Nigeria."
        path="/services"
      />

      <ServiceHero />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <ServiceCTA />
    </>
  );
}