"use client";

import React, { useState } from "react";
import { Github, Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GallerySection() {
  const t = useTranslations("gallery");
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Biometric", "Redux"],
      image: "💳",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Dashboard Design System",
      description: "Comprehensive design system for admin dashboards",
      category: "design",
      technologies: ["Figma", "Design Tokens", "Storybook", "React"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      category: "web",
      technologies: ["Vue.js", "Socket.io", "PostgreSQL", "Docker"],
      image: "📝",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "On-demand food delivery mobile application",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Google Maps", "Payment"],
      image: "🍔",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Brand Identity Package",
      description: "Complete brand identity design for tech startup",
      category: "design",
      technologies: ["Illustrator", "Photoshop", "Brand Guidelines", "Logo"],
      image: "🎨",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: t("filter.all") },
    { id: "web", label: t("filter.web") },
    { id: "mobile", label: t("filter.mobile") },
    { id: "design", label: t("filter.design") },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id ? "btn-filled" : "btn-outlined"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="card-elevated hover-lift group pt-0 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="h-52 aspect-video bg-primary flex items-center justify-center text-6xl mb-5">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="px-5 flex flex-col justify-between items-start">
                  <h3 className="material-headline-small mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="material-body-medium text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 bg-tertiary-container text-tertiary-container-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="w-full flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="btn-filled flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t("liveDemo")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-outlined"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
