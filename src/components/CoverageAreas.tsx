import { Brain, Globe, Leaf, Zap, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const CoverageAreas = () => {
  const { t } = useTranslation();

  const areas = [
    {
      icon: Brain,
      labelKey: "coverageAreas.areas.aiAdoption.label",
      tagKey: "coverageAreas.areas.aiAdoption.tag",
      badgeKey: "coverageAreas.areas.aiAdoption.badge",
      valueKey: "coverageAreas.areas.aiAdoption.value"
    },
    {
      icon: Globe,
      labelKey: "coverageAreas.areas.globalExpansion.label",
      tagKey: "coverageAreas.areas.globalExpansion.tag",
      badgeKey: "coverageAreas.areas.globalExpansion.badge",
      valueKey: "coverageAreas.areas.globalExpansion.value"
    },
    {
      icon: Leaf,
      labelKey: "coverageAreas.areas.sustainability.label",
      tagKey: "coverageAreas.areas.sustainability.tag",
      badgeKey: "coverageAreas.areas.sustainability.badge",
      valueKey: "coverageAreas.areas.sustainability.value"
    },
    {
      icon: Zap,
      labelKey: "coverageAreas.areas.productivity.label",
      tagKey: "coverageAreas.areas.productivity.tag",
      badgeKey: "coverageAreas.areas.productivity.badge",
      valueKey: "coverageAreas.areas.productivity.value"
    },
    {
      icon: Users,
      labelKey: "coverageAreas.areas.talent.label",
      tagKey: "coverageAreas.areas.talent.tag",
      badgeKey: "coverageAreas.areas.talent.badge",
      valueKey: "coverageAreas.areas.talent.value"
    },
    {
      icon: Award,
      labelKey: "coverageAreas.areas.ip.label",
      tagKey: "coverageAreas.areas.ip.tag",
      badgeKey: "coverageAreas.areas.ip.badge",
      valueKey: "coverageAreas.areas.ip.value"
    },
  ];

  return (
    <section id="coverage" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('coverageAreas.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('coverageAreas.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={area.labelKey}
              className="group relative p-6 rounded-2xl bg-card border border-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge */}
              <div className="absolute -top-2 right-4">
                <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald text-white rounded-md shadow-sm">
                  {t(area.badgeKey)}
                </span>
              </div>

              <div className="relative flex flex-col items-center text-center gap-4 pt-2">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                  <area.icon className="w-7 h-7 text-emerald" />
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {t(area.labelKey)}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono block mb-2">
                    {t(area.tagKey)}
                  </span>
                  <span className="text-sm font-semibold text-emerald">
                    {t(area.valueKey)}
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
