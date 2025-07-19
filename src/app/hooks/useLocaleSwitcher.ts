import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export const useLocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "ar" ? "en" : "ar" });
  };

  return { switchLocale };
};
