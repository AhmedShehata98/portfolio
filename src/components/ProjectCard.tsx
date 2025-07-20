"use client";
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Project } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("gallery");
  return (
    <Card
      key={project.id}
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm group pt-0 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <figure className="h-52 min-h-52 aspect-video bg-primary flex items-center justify-center text-6xl mb-5">
        <Image
          src={project.thumbnail}
          alt={project.title}
          objectFit="cover"
          width={500}
          height={300}
          className="w-full h-full rounded-lg object-cover transition-all duration-300 group-hover:h-fit group-hover:scale-95"
        />
      </figure>

      {/* Project Content */}
      <div className="h-full px-5 flex flex-col justify-between items-start">
        <h3 className="text-xl font-medium tracking-normal leading-snug mb-2 text-primary">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-base font-normal tracking-normal leading-relaxed text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project?.tech_stack?.split(",").map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="uppercase px-2 py-1 bg-tertiary-container text-tertiary-container-foreground text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full flex gap-3 mt-auto">
          <Button size="sm" className="btn-filled flex-1" asChild>
            <Link
              href={project.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="w-4 h-4 mr-2" />
              {t("liveDemo")}
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="btn-outlined hover:text-gray-300"
            asChild
          >
            <Link
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
