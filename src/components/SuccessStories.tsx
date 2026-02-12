import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const SuccessStories = () => {
  const { t } = useTranslation();

  const stories = [
    {
      roleKey: "successStories.stories.story1.role",
      quoteKey: "successStories.stories.story1.quote",
      outcomeKey: "successStories.stories.story1.outcome",
      grantKey: "successStories.stories.story1.grant",
    },
    {
      roleKey: "successStories.stories.story2.role",
      quoteKey: "successStories.stories.story2.quote",
      outcomeKey: "successStories.stories.story2.outcome",
      grantKey: "successStories.stories.story2.grant",
    },
    {
      roleKey: "successStories.stories.story3.role",
      quoteKey: "successStories.stories.story3.quote",
      outcomeKey: "successStories.stories.story3.outcome",
      grantKey: "successStories.stories.story3.grant",
    },
  ];

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('successStories.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('successStories.subtitle')}
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
                  {t(story.roleKey)}
                </p>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{t(story.quoteKey)}"
                </blockquote>

                {/* Outcome */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {t('successStories.outcome')}{' '}
                    <span className="font-bold text-emerald text-base">
                      {t(story.outcomeKey)}
                    </span>
                    <span className="text-muted-foreground"> ({t(story.grantKey)})</span>
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
