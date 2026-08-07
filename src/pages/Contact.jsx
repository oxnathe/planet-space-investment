import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <GoogleMap />
    </>
  );
}