import Image from "next/image";
import { Card } from "../ui/card";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";

export default function AboutSection() {
  const t = useTranslations("about");
  const skills = [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Express",
    "MongoDB",
    "Git",
  ];

  const stats = [
    { value: "5+", label: t("experience") },
    { value: "50+", label: t("projects") },
    { value: "30+", label: t("clients") },
  ];

  return (
    <section id="about" className="app-container py-20 bg-gradient-surface">
      <div>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="material-display-medium mb-4 text-gradient-primary animate-fade-in-up">
              {t("title")}
            </h2>
            <p className="material-headline-small text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up stagger-2">
              <p className="material-body-large text-foreground leading-relaxed">
                {t("description")}
              </p>

              {/* Skills */}
              <div>
                <h3 className="material-headline-small mb-4 text-primary">
                  {t("skills")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary-container text-secondary-container-foreground hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-outline-variant">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="material-display-small text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="material-body-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in-up stagger-3">
              <Card className="card-elevated p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/profile-photo.png"}
                    alt="Ahmed Shehata"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="material-headline-small mb-2 text-primary">
                  Ahmed Shehata
                </h3>
                <p className="material-body-medium text-muted-foreground mb-2">
                  Frontend Web Developer
                </p>
                <p className="material-body-small text-muted-foreground">
                  Alexandria, Egypt
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
