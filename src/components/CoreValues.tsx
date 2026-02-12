import { Shield, Lightbulb, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const CoreValues = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      titleKey: "coreValues.values.compliance.title",
      descriptionKey: "coreValues.values.compliance.description",
    },
    {
      icon: Lightbulb,
      titleKey: "coreValues.values.experience.title",
      descriptionKey: "coreValues.values.experience.description",
    },
    {
      icon: Cpu,
      titleKey: "coreValues.values.aiPowered.title",
      descriptionKey: "coreValues.values.aiPowered.description",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('coreValues.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('coreValues.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.titleKey}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {t(value.titleKey)}
                </h3>

                <p className="text-muted-foreground">
                  {t(value.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
