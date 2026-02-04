import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    
    // Show loading animation for 1.5 seconds before redirecting
    setTimeout(() => {
      navigate("/auth");
    }, 1500);
  };

  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
            Ready to recover your unclaimed capital?
          </h2>

          {/* CTA Button */}
          <Button
            onClick={handleClick}
            disabled={isLoading}
            size="lg"
            className="group bg-emerald-gradient text-white font-bold px-10 py-7 text-lg rounded-xl success-glow hover:scale-105 transition-all duration-300 disabled:opacity-100 disabled:cursor-wait"
          >
            {isLoading ? (
              <span className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                AI is scanning latest ESG guidelines...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Check My Grant Eligibility Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
