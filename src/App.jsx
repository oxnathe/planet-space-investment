import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppWidget from "./components/widgets/WhatsAppWidget";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Estate from "./pages/Estate";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <ScrollToTop />

      <Navbar />

      <main className="flex-1 pt-20 lg:pt-0">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/estate" element={<Estate />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>

      <Footer />

      <WhatsAppWidget />

    </div>
  );
}