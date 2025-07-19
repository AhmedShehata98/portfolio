import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { useLocaleSwitcher } from "@/app/hooks/useLocaleSwitcher";
export default function LanguageToggle() {
  const t = useTranslations("language");
  const locale = useLocale();
  const { switchLocale } = useLocaleSwitcher();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="btn-outlined"
          aria-label={t("toggle")}
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-surface border-outline-variant">
        <DropdownMenuItem
          onClick={() => switchLocale()}
          className={
            locale === "en"
              ? "bg-primary-container text-primary-container-foreground"
              : ""
          }
        >
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale()}
          className={
            locale === "ar"
              ? "bg-primary-container text-primary-container-foreground"
              : ""
          }
        >
          {t("arabic")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
