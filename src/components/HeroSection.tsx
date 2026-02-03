import { ArrowRight, TrendingUp, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(45 93% 47%) 1px, transparent 1px), linear-gradient(90deg, hsl(45 93% 47%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">Singapore Government Grants Specialists</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            2026: Don't Miss Out on{' '}
            <span className="text-gradient-gold">Government Grants</span>{' '}
            Anymore.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Unlock high-impact funding to scale your business. We bridge the gap between complex policies and your growth.
          </p>

          {/* Key Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-primary-foreground">S$1M+</p>
                <p className="text-sm text-primary-foreground/60">Maximum Funding</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <Percent className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-primary-foreground">Up to 70%</p>
                <p className="text-sm text-primary-foreground/60">Co-funding Rate</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="group bg-gold-gradient text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-gold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get My 2026 Grant Blueprint
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(220 20% 97%)"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
