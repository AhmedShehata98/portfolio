"use client";

import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/app/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme");

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "system":
        return <Monitor className="h-5 w-5" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="btn-outlined cursor-pointer hover:!bg-primary"
          aria-label={t("toggle")}
        >
          {getThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-surface border-outline-variant">
        <DropdownMenuItem
          className="cursor-pointer group"
          onClick={() => setTheme("light")}
        >
          <Sun className="group-hover:text-primary h-4 w-4 mr-2" />
          <p className="group-hover:text-primary">{t("light")}</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer group"
          onClick={() => setTheme("dark")}
        >
          <Moon className="group-hover:text-primary h-4 w-4 mr-2" />
          <p className="group-hover:text-primary">{t("dark")}</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer group"
          onClick={() => setTheme("system")}
        >
          <Monitor className="group-hover:text-primary h-4 w-4 mr-2" />
          <p className="group-hover:text-primary">System</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
