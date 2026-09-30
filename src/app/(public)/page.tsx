import { Hero } from "./_components/Hero";
import { PartnerLogos } from "./_components/PartnerLogos";
import { FeaturedCourses } from "./_components/FeaturedCourses";
import { PlatformHighlights } from "./_components/PlatformHighlights";
import { CourseCategories } from "./_components/CourseCategories";
import { CreatorCta } from "./_components/CreatorCta";
import { Testimonials } from "./_components/Testimonials";

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
