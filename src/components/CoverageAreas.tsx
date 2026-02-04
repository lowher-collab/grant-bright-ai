import { Brain, Globe, Leaf, Zap, Users, Award } from "lucide-react";

const areas = [
  { 
    icon: Brain, 
    label: "AI Adoption", 
    tag: "SPRING",
    badge: "Active Cycle",
    value: "Up to S$30k" 
  },
  { 
    icon: Globe, 
    label: "Global Expansion", 
    tag: "MRA",
    badge: "Funding Available",
    value: "Up to S$100k" 
  },
  { 
    icon: Leaf, 
    label: "Sustainability", 
    tag: "ESG Grant",
    badge: "Active Cycle",
    value: "Up to S$50k" 
  },
  { 
    icon: Zap, 
    label: "Productivity Upgrade", 
    tag: "PSG",
    badge: "Funding Available",
    value: "Up to S$50k" 
  },
  { 
    icon: Users, 
    label: "Talent Development", 
    tag: "SCTP",
    badge: "Active Cycle",
    value: "Up to S$70k" 
  },
  { 
    icon: Award, 
    label: "Intellectual Property", 
    tag: "IP Grant",
    badge: "Funding Available",
    value: "Up to S$40k" 
  },
];

const CoverageAreas = () => {
  return (
    <section id="coverage" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Grant Coverage Areas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive support across key business growth sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={area.tag}
              className="group relative p-6 rounded-2xl bg-card border border-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge */}
              <div className="absolute -top-2 right-4">
                <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald text-white rounded-md shadow-sm">
                  {area.badge}
                </span>
              </div>
              
              <div className="relative flex flex-col items-center text-center gap-4 pt-2">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                  <area.icon className="w-7 h-7 text-emerald" />
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {area.label}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono block mb-2">
                    {area.tag}
                  </span>
                  <span className="text-sm font-semibold text-emerald">
                    {area.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageAreas;
