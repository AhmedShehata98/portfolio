import React, { useMemo } from "react";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { WorkExperience } from "@/types/timeline";
import { useLocale, useTranslations } from "next-intl";

function TimelineCard({
  item,
  index,
}: {
  item: WorkExperience;
  index: number;
}) {
  const locale = useLocale();
  const t = useTranslations("timeline");

  const getRandomTimelineDotColor = useMemo(() => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const formattedDate = (date: string) => {
    return new Intl.DateTimeFormat(`${locale}-EG`, {
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };
  return (
    <div
      key={item.id}
      className={`flex items-start gap-8 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {/* Timeline Dot */}
      <div
        className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${getRandomTimelineDotColor}`}
      >
        <span className="isolate z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-building-icon lucide-building"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
          </svg>
        </span>
        {item.is_present && (
          <div
            className={`absolute -inset-1 rounded-full animate-pulse opacity-75 ${getRandomTimelineDotColor}`}
          ></div>
        )}
      </div>

      {/* Timeline Content */}
      <Card className="card-elevated flex-1 hover-lift">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="material-headline-large text-primary text-start mb-1">
                {item.job_title}
              </h3>
              <p className="material-body-medium text-start font-normal leading-relaxed tracking-wide text-foreground">
                {item.company_name}
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
              <Calendar className="w-4 h-4" />
              <span className="flex items-center justify-end gap-2 text-gray-300 text-sm md:text-base font-normal leading-relaxed tracking-wide ">
                {formattedDate(item.employment_start_date)}
                <p>-</p>
                {!item.is_present && formattedDate(item.employment_end_date)}
                {item.is_present && (
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
          <div className="flex items-center gap-3 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span className="w-full material-label-medium text-start text-muted-foreground">
              {item.location}
            </span>
          </div>

          {/* Description */}
          <p className="material-body-small md:text-base font-normal leading-relaxed tracking-wide text-foreground mb-4 text-start">
            {item.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item?.tech_stack?.split(",")?.map((skill) => (
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
  );
}

export default TimelineCard;
