import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Clients from "@/components/Clients";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Experience />
        <Method />
        <Clients />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}