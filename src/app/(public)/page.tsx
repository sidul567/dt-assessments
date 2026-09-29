import { Hero } from "@/components/common/Hero";
import { PartnerLogos } from "@/components/common/PartnerLogos";
import { FeaturedCourses } from "@/components/common/FeaturedCourses";
import { PlatformHighlights } from "@/components/common/PlatformHighlights";
import { CourseCategories } from "@/components/common/CourseCategories";
import { CreatorCta } from "@/components/common/CreatorCta";
import { Testimonials } from "@/components/common/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <FeaturedCourses />
      <CourseCategories />
      <PlatformHighlights />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
