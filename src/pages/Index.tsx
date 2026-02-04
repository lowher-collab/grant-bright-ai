import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreValues from "@/components/CoreValues";
import CoverageAreas from "@/components/CoverageAreas";
import SuccessStories from "@/components/SuccessStories";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="values">
          <CoreValues />
        </div>
        <CoverageAreas />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
