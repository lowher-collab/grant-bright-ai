import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreValues from "@/components/CoreValues";
import CoverageAreas from "@/components/CoverageAreas";
import WorkflowSection from "@/components/WorkflowSection";
import LeadForm from "@/components/LeadForm";
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
        <div id="coverage">
          <CoverageAreas />
        </div>
        <div id="process">
          <WorkflowSection />
        </div>
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
