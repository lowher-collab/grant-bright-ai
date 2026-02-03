import { Brain, Globe, Leaf, Zap, Users, Award } from "lucide-react";

const areas = [
  { icon: Brain, label: "AI Adoption", tag: "#AI_Adoption" },
  { icon: Globe, label: "Global Expansion", tag: "#Global_Expansion" },
  { icon: Leaf, label: "Sustainability", tag: "#Sustainability" },
  { icon: Zap, label: "Productivity Upgrade", tag: "#Productivity_Upgrade" },
  { icon: Users, label: "Talent Development", tag: "#Talent_Development" },
  { icon: Award, label: "Intellectual Property", tag: "#Intellectual_Property" },
];

const CoverageAreas = () => {
  return (
    <section className="py-20 bg-secondary/50">
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
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-xl transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                  <area.icon className="w-7 h-7 text-gold group-hover:text-gold-light transition-colors" />
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {area.label}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">
                    {area.tag}
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
