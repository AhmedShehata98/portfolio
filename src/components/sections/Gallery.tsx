"use client";

import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { supabase } from "@/app/utils/supabase";
import ProjectCard from "../ProjectCard";
import { Project } from "@/types/gallery";
import { ProjectCategories } from "@/types/projects";

export default function GallerySection() {
  const t = useTranslations("gallery");
  const [categoryList, setCategoryList] = useState<ProjectCategories[]>([]);
  const [activeFilter, setActiveFilter] = useState<ProjectCategories | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [loadingFilters, setLoadingFilter] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjectCategory = async () => {
      try {
        setLoadingFilter(true);
        const { data, error } = await supabase
          .from("project_category")
          .select("*");
        if (error) {
          return;
        }
        setLoadingFilter(false);
        setCategoryList(data);
        setActiveFilter(data.find((category) => category.name === "all"));
      } catch (error) {
        console.log("Error while fetching projects category: ", error);
        setLoadingFilter(false);
        setCategoryList([]);
      }
    };
    fetchProjectCategory();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const projectsQuery = supabase
          .from("projects")
          .select(
            `
          id,
          thumbnail,
          title,
          description,
          tech_stack,
          live_demo_url,
          repo_url,
          created_at,
          category_id (
            id,
            name
          )
        `
          )
          .order("created_at", { ascending: false });

        if (activeFilter && activeFilter?.name !== "all") {
          projectsQuery.eq("category_id", activeFilter.id);
        }

        const { data, error } = await projectsQuery;

        if (error) {
          throw error;
        }
        if (!data) {
          throw new Error("projects not found");
        }

        setLoading(false);
        setProjects(data);
      } catch (error) {
        console.log("error while fetch projects: ", error);
        setLoading(false);
        setProjects([]);
      }
    };
    fetchProjects();
  }, [activeFilter]);

  return (
    <section id="gallery" className="app-container py-20 bg-background">
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up stagger-2">
            {loadingFilters && (
              <>
                <span className="flex items-center justify-center w-30 h-10 bg-card rounded-full animate-pulse">
                  <span className="inline-block h-1/3 w-1/2 bg-primary rounded-lg animate-pulse"></span>
                </span>
                <span className="flex items-center justify-center w-20 h-10 bg-card rounded-full animate-pulse">
                  <span className="inline-block h-1/3 w-1/2 bg-primary rounded-lg animate-pulse"></span>
                </span>
                <span className="flex items-center justify-center w-24 h-10 bg-card rounded-full animate-pulse">
                  <span className="inline-block h-1/3 w-1/2 bg-primary rounded-lg animate-pulse"></span>
                </span>
              </>
            )}
            {!loadingFilters &&
              categoryList?.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all cursor-pointer duration-300 hover:bg-primary/20 ${
                    activeFilter?.id === filter.id
                      ? "bg-primary"
                      : "bg-transparent text-primary"
                  }`}
                >
                  {t(`filter.${filter.name}`)}
                </Button>
              ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && (
              <>
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm p-4">
                  <div className="w-full h-48 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="w-full h-7 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-6 animate-pulse"></div>
                  <div className="flex flex-col gap-3">
                    <div className="w-11/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-3  animate-pulse"></div>
                    <div className="w-10/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                  <div className="w-full flex items-center gap-3 mt-4 animate-pulse">
                    <div className="w-10/12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                    <div className="w-12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm p-4">
                  <div className="w-full h-48 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="w-full h-7 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-6 animate-pulse"></div>
                  <div className="flex flex-col gap-3">
                    <div className="w-11/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-3  animate-pulse"></div>
                    <div className="w-10/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                  <div className="w-full flex items-center gap-3 mt-4 animate-pulse">
                    <div className="w-10/12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                    <div className="w-12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm p-4">
                  <div className="w-full h-48 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="w-full h-7 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-6 animate-pulse"></div>
                  <div className="flex flex-col gap-3">
                    <div className="w-11/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md mt-3  animate-pulse"></div>
                    <div className="w-10/12 h-5 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                  <div className="w-full flex items-center gap-3 mt-4 animate-pulse">
                    <div className="w-10/12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                    <div className="w-12 h-10 flex items-center justify-between px-6 dark:bg-gray-600 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
              </>
            )}
            {!loading &&
              projects &&
              projects.length > 0 &&
              projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            {!loading && (!projects || projects.length < 1) && (
              <span className="w-full flex items-center justify-center flex-col gap-5 col-span-3 pt-16">
                <span className="flex items-center justify-center shadow-sm text-red-900 bg-red-100 p-6 rounded-full">
                  <LayoutTemplate />
                </span>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-500 font-medium">
                  {t("no_projects")}
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
