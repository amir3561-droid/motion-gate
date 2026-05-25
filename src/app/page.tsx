import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingSupport } from "../components/ui/FloatingSupport";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Audience } from "../components/sections/Audience";
import { Pricing } from "../components/sections/Pricing";
import { ContactCTA } from "../components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Audience />
        <Pricing />
        <ContactCTA />
      </div>
      
      <Footer />
      <FloatingSupport />
    </main>
  );
}
