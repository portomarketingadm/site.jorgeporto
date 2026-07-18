import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { Solution } from "@/components/sections/Solution";
import { About } from "@/components/sections/About";
import { Numbers } from "@/components/sections/Numbers";
import { Training } from "@/components/sections/Training";
import { Audience } from "@/components/sections/Audience";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Speaking } from "@/components/sections/Speaking";
import { ContentInstagram } from "@/components/sections/ContentInstagram";
import { ContactForm } from "@/components/sections/ContactForm";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diagnosis />
        <Solution />
        <About />
        <Numbers />
        <Training />
        <Audience />
        <HowItWorks />
        <Speaking />
        <ContentInstagram />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
