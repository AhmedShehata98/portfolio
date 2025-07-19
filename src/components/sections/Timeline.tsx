import React from "react";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function TimelineSection() {
  const t = useTranslations("timeline");

  const timelineItems = [
    {
      id: 1,
      type: "experience",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Egypt",
      location: "Alexandria, Egypt",
      period: "2023 - Present",
      description:
        "Leading frontend development using React.js and Next.js for modern web applications. Implementing responsive designs with Tailwind CSS and managing state with advanced React patterns.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
      icon: <Briefcase className="w-5 h-5" />,
      current: true,
    },
    {
      id: 2,
      type: "experience",
      title: "Frontend Developer",
      company: "Digital Agency Cairo",
      location: "Cairo, Egypt",
      period: "2022 - 2023",
      description:
        "Developed responsive web applications using Vue.js and Nuxt.js. Collaborated with design teams to implement pixel-perfect UIs and optimize performance.",
      skills: ["Vue.js", "Nuxt.js", "JavaScript", "CSS", "MongoDB"],
      icon: <Briefcase className="w-5 h-5" />,
      current: false,
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Computer Science",
      company: "Alexandria University",
      location: "Alexandria, Egypt",
      period: "2018 - 2022",
      description:
        'Specialized in Software Engineering and Web Development. Graduated with honors, final project focused on "Modern Frontend Frameworks and Performance Optimization".',
      skills: [
        "Computer Science",
        "Software Engineering",
        "Web Development",
        "Algorithms",
      ],
      icon: <GraduationCap className="w-5 h-5" />,
      current: false,
    },
    {
      id: 4,
      type: "experience",
      title: "Junior Frontend Developer",
      company: "Startup Egypt",
      location: "Alexandria, Egypt",
      period: "2021 - 2022",
      description:
        "Built responsive web applications from scratch using HTML, CSS, and JavaScript. Learned modern frameworks and contributed to multiple client projects.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
      icon: <Briefcase className="w-5 h-5" />,
      current: false,
    },
    {
      id: 5,
      type: "education",
      title: "Frontend Development Bootcamp",
      company: "Code Academy Egypt",
      location: "Alexandria, Egypt",
      period: "2020 - 2021",
      description:
        "Intensive frontend development program covering modern web technologies, frameworks, and best practices in web development.",
      skills: ["React.js", "Vue.js", "JavaScript", "CSS", "HTML"],
      icon: <GraduationCap className="w-5 h-5" />,
      current: false,
    },
  ];

  return (
    <section id="timeline" className="app-container py-20 bg-gradient-surface">
      <div>
        <div className="xl:max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="material-display-medium mb-4 text-gradient-primary animate-fade-in-up">
              {t("title")}
            </h2>
            <p className="material-headline-small text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              {t("subtitle")}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute ltr:left-8 rtl:right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-60"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-8 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      item.current
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : item.type === "education"
                        ? "bg-tertiary text-tertiary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.icon}
                    {item.current && (
                      <div className="absolute -inset-1 rounded-full bg-primary animate-pulse opacity-75"></div>
                    )}
                  </div>

                  {/* Timeline Content */}
                  <Card className="card-elevated flex-1 hover-lift">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="material-headline-small text-primary mb-1">
                            {item.title}
                          </h3>
                          <p className="material-body-large text-foreground font-medium">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="material-body-medium">
                            {item.period}
                            {item.current && (
                              <Badge
                                variant="secondary"
                                className="ml-2 bg-primary text-primary-foreground"
                              >
                                {t("present")}
                              </Badge>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="material-body-medium">
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="material-body-medium text-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="px-3 py-1 bg-surface-container text-foreground border-outline-variant"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
