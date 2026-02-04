import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      window.open("https://my.feishu.cn/base/PbOGbNyDTafAgjsCVanc5nNknEf?table=tblF2uHEbr9qyOBj&view=vewVVTKBvh", "_blank");
      setIsLoading(false);
    }, 1500);
  };
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald/5 to-transparent rounded-full" />
      </div>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(158 64% 52%) 1px, transparent 1px), linear-gradient(90deg, hsl(158 64% 52%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-emerald text-sm font-medium">Singapore Government Grants Specialists</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Stop Leaving Your Growth Capital on the Table.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Last year, Singapore SMEs missed over{' '}
            <span className="text-emerald font-bold">S$50M</span>{' '}
            in unclaimed grants. Find out your recovery potential in 60 seconds.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
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
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(220 20% 97%)"/>
        </svg>
      </div>
    </section>
  );
};
export default HeroSection;
