import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function HeroSection() {
  const tHero = useTranslations("hero");
  const tAbout = useTranslations("about");
  return (
    <section className="app-container pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-bounce-in animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-tertiary rounded-full mix-blend-multiply filter blur-xl animate-bounce-in animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-bounce-in animation-delay-3000"></div>
      </div>

      <div className="md:py-20 relative z-10">
        <div>
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in-up">
            <Image
              src={"/profile-photo.png"}
              alt="Ahmed Shehata"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-lg object-cover"
            />
          </div>

          {/* Main Title */}
          <h1 className="material-display-large mb-4 text-gradient-primary animate-fade-in-up stagger-1">
            {tHero("title")}
          </h1>

          {/* Subtitle */}
          <p className="material-headline-medium mb-1 text-muted-foreground animate-fade-in-up stagger-2">
            {tHero("subtitle")}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up stagger-3">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="material-body-medium text-muted-foreground">
              {tHero("location")}
            </span>
          </div>

          {/* Description */}
          <p className="material-body-large mb-8 text-foreground max-w-2xl mx-auto animate-fade-in-up stagger-4">
            {tHero("description")}
          </p>

          {/* Tech Stack */}
          <div className="mb-12 animate-fade-in-up stagger-5">
            <h3 className="material-headline-small text-primary mb-4">
              {tHero("techStack")}
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 max-w-3xl mx-auto">
              {[
                "React.js",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "Express",
                "Tailwind CSS",
                "MongoDB",
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Git",
              ].map((tech) => (
                <p
                  key={tech}
                  className="px-4 py-2 bg-primary-container max-sm:text-sm text-primary-container-foreground rounded-full material-label-medium"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-6">
            <Button asChild className="btn-filled hover-lift min-w-48">
              <Link href="/#gallery">
                {tHero("cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild className="btn-outlined hover-lift min-w-48">
              <Link href="/#contact">{tHero("contact")}</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up stagger-7">
            <div className="text-center">
              <div className="material-display-small text-primary mb-2">2+</div>
              <div className="material-body-medium text-muted-foreground">
                {tAbout("experience")}
              </div>
            </div>
            <div className="text-center">
              <div className="material-display-small text-primary mb-2">9+</div>
              <div className="material-body-medium text-muted-foreground">
                {tAbout("projects")}
              </div>
            </div>
            <div className="text-center">
              <div className="material-display-small text-primary mb-2">
                10+
              </div>
              <div className="material-body-medium text-muted-foreground">
                {tAbout("clients")}
              </div>
            </div>
            <div className="text-center">
              <div className="material-display-small text-primary mb-2">
                77%
              </div>
              <div className="material-body-medium text-muted-foreground">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
