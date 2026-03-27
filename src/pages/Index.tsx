import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import WhyHaPrixSection from "@/components/WhyHaPrixSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <SolutionsSection />
    <AboutSection />
    <WhyHaPrixSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
