import { homeByLocale } from "@/lib/v3-multilang-content";
import { MultiLocationHome } from "@/components/v3/multi-location-home";

export function HomeV3() {
  return <MultiLocationHome content={homeByLocale.en} />;
}
