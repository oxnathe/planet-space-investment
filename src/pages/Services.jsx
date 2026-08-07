import ServiceHero from "../components/services/ServiceHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Process from "../components/services/Process";
import ServiceCTA from "../components/services/ServiceCTA";

export default function Services() {
  return (
    <>
      <ServiceHero />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <ServiceCTA />
    </>
  );
}