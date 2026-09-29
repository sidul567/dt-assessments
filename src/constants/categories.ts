import type { ComponentType, SVGProps } from "react";
import { DesignIcon } from "@/components/icons/DesignIcon";
import { DevelopmentIcon } from "@/components/icons/DevelopmentIcon";
import { ITSoftwareIcon } from "@/components/icons/ITSoftwareIcon";
import { BusinessIcon } from "@/components/icons/BusinessIcon";
import { MarketingIcon } from "@/components/icons/MarketingIcon";
import { PhotographyIcon } from "@/components/icons/PhotographyIcon";

export interface CourseCategoryItem {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const COURSE_CATEGORY_ITEMS: CourseCategoryItem[] = [
  { name: "Design", Icon: DesignIcon },
  { name: "Development", Icon: DevelopmentIcon },
  { name: "IT & Software", Icon: ITSoftwareIcon },
  { name: "Business", Icon: BusinessIcon },
  { name: "Marketing", Icon: MarketingIcon },
  { name: "Photography", Icon: PhotographyIcon },
];
