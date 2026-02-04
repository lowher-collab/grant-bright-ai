import { Quote } from "lucide-react";

const stories = [
  {
    role: "Local F&B Chain Founder",
    quote: "We recovered S$12,400 in digital subsidies we didn't know existed.",
    outcome: "S$12.4k Recovered",
    grant: "PSG",
  },
  {
    role: "Tech Trading SME MD",
    quote: "The MRA mapping was instant and clarified S$85k in expansion costs.",
    outcome: "S$85k Approved",
    grant: "MRA",
  },
  {
    role: "Logistics Operations Head",
    quote: "Caught the productivity grant deadline just in time. Seamless process.",
    outcome: "S$32k Secured",
    grant: "EDG",
  },
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real results from Singapore SMEs who recovered their unclaimed grants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 rounded-full bg-emerald flex items-center justify-center shadow-emerald">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="pt-4">
                {/* Role */}
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {story.role}
                </p>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{story.quote}"
                </blockquote>

                {/* Outcome */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Outcome:{' '}
                    <span className="font-bold text-emerald text-base">
                      {story.outcome}
                    </span>
                    <span className="text-muted-foreground"> ({story.grant})</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
