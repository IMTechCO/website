import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Technologies from "@/components/sections/Technologies";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problems />
        <Services />
        <Method />
        <Technologies />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}