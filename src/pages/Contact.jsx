import SEO from "../components/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Planet Space Investment | Lagos Real Estate"
        description="Contact Planet Space Investment for real estate investment opportunities, property enquiries, estate information, and professional assistance in Lagos, Nigeria."
        path="/contact"
      />

      <ContactHero />
      <ContactCards />
      <ContactForm />
      <GoogleMap />
    </>
  );
}