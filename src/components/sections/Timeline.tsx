"use client";
import React from "react";
import { Card } from "@/components/ui/card";
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
              {loading && (
                <div className="!w-full flex items-center justify-center h-64">
                  <Card className="bg-card text-card-foreground w-[90%] flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 px-5 shadow-sm ms-auto">
                    <div className="animate-pulse">
                      <div className="flex items-center gap-8 mb-4">
                        <div className="w-10/12 h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      </div>
                      <div className="w-3/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="w-2/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="w-11/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2 mt-6"></div>
                      <div className="w-8/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="w-10/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="flex items-center justify-start gap-3 flex-wrap mt-8">
                        <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-14 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-14 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {!loading &&
                timeline &&
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
