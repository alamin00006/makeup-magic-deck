import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <div id="features"><FeaturesSection /></div>
    <CurriculumSection />
    <div id="testimonials"><TestimonialsSection /></div>
    <PricingSection />
    <FooterSection />
  </main>
);

export default Index;
