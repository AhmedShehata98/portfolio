import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 30 * 24 * 60 * 60,
  },
  // Used when no locale matches
  defaultLocale: "ar",
});
