import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { LocalSection } from "@/components/sections/LocalSection";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAMid } from "@/components/sections/CTAMid";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Problems />
        <Services />
        <Pricing />
        <LocalSection />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTAMid />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
