import React, { Suspense, useMemo } from "react";
import { LayoutTemplate } from "lucide-react";
import { useTranslations } from "next-intl";
import { fetchProjectCategory, fetchProjects } from "@/app/services/projects";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import clsx from "clsx";
import FilterSkeleton from "@/components/FilterSkeleton";
import ProjectSkeletonCard from "@/components/ProjectSkeletonCard";

export default function GallerySection({
  projectCategory,
}: {
  projectCategory: string;
}) {
  const t = useTranslations("gallery");
  const categoryList = React.use(fetchProjectCategory());
  const defaultCategoryObj = useMemo(
    () => categoryList.find((item) => item.name === projectCategory || "all"),
    [categoryList, projectCategory]
  );
  const projects = React.use(fetchProjects(defaultCategoryObj?.id || 3));

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
            {/* {loadingFilters && (
              <>
                <FilterSkeleton/>
              </>
            )} */}
            <Suspense fallback={<FilterSkeleton />}>
              {categoryList?.map((filter) => (
                <Link
                  key={filter.id}
                  href={{
                    search: `project-category=${filter.name}`,
                  }}
                  className={clsx(
                    "px-6 py-2 rounded-full transition-all cursor-pointer duration-300 capitalize hover:bg-primary/20",
                    projectCategory === filter.name ||
                      (!projectCategory && filter.name === "all")
                      ? "bg-primary text-primary-container font-semibold"
                      : "bg-transparent text-primary"
                  )}
                >
                  {t(`filter.${filter.name}`)}
                </Link>
              ))}
            </Suspense>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<ProjectSkeletonCard />}>
              {projects &&
                projects.length > 0 &&
                projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              {(!projects || projects.length < 1) && (
                <span className="w-full flex items-center justify-center flex-col gap-5 col-span-3 pt-16">
                  <span className="flex items-center justify-center shadow-sm text-red-900 bg-red-100 p-6 rounded-full">
                    <LayoutTemplate />
                  </span>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-500 font-medium">
                    {t("no_projects")}
                  </p>
                </span>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
