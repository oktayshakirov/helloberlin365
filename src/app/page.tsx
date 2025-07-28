import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TargetCustomers } from "@/components/TargetCustomers";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TargetCustomers />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
