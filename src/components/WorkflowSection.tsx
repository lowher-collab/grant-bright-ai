import { Scan, Stethoscope, FileText, CheckCircle, BarChart3, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Scan,
    title: "Scan",
    description: "AI-automated profile assessment",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Diagnose",
    description: "Expert-led compliance review",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Apply",
    description: "Structured document submission",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: CheckCircle,
    title: "Approve",
    description: "Funding secured (Letter of Offer)",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Track",
    description: "Claim optimization & tracking",
    color: "from-gold to-gold-light",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Delivery Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A seamless 5-step journey from assessment to funding success
          </p>
        </div>

        {/* Desktop horizontal workflow */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-gold/50 to-primary/20 rounded-full" />
            
            <div className="flex justify-between items-start relative">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center w-1/5 relative group">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold text-primary text-xs font-bold flex items-center justify-center z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 mb-6`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-16 translate-x-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-gold" />
                    </div>
                  )}
                  
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center max-w-[140px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet vertical workflow */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-10 w-0.5 bg-gradient-to-b from-gold/50 via-gold to-gold/50" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-6 relative">
                  {/* Step indicator */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0 relative z-10`}>
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-primary text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
