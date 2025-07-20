"use client";
import React from "react";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { supabase } from "@/app/utils/supabase";
import { WorkExperience } from "@/types/timeline";
import TimelineCard from "../TimelineCard";

export default function TimelineSection() {
  const t = useTranslations("timeline");

  const [timeline, setTimeline] = React.useState<WorkExperience[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchTimeline = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("timeline")
          .select("*")
          .order("employment_start_date", { ascending: false });

        if (error) throw error;
        setTimeline(data);
      } catch (error) {
        console.error("Error fetching timeline:", error);
      }
      setLoading(false);
    };
    fetchTimeline();
  }, []);

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
              {timeline &&
                timeline.length > 0 &&
                timeline.map((item, index) => (
                  <TimelineCard index={index} item={item} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
