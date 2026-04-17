import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

// Root path → always redirect to the default locale (Spanish)
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
