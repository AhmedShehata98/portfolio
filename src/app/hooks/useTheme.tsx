import { useState, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: "light" | "dark";
}

export const useTheme = (): ThemeProps => {
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      let newActualTheme: "light" | "dark" = "light";

      if (theme === "system") {
        newActualTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      } else {
        newActualTheme = theme as "light" | "dark";
      }

      setActualTheme(newActualTheme);

      // Update document class
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newActualTheme);

      // Save theme to localStorage
      localStorage.setItem("theme", theme);
    };

    updateTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        updateTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return {
    theme,
    setTheme,
    actualTheme,
  };
};
