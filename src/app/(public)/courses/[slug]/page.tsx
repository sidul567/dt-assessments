import Image from "next/image";
import { notFound } from "next/navigation";
import { CourseHero } from "./_components/CourseHero";
import { CourseSidebar } from "./_components/CourseSidebar";
import { CourseOverview } from "./_components/CourseOverview";
import { COURSE_DETAILS } from "@/constants/courseDetails";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = COURSE_DETAILS[slug];

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-primary-800 pb-16 pt-28 md:pt-40 lg:pt-52">
        <Image
          src="/images/hero-grid.svg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="pointer-events-none object-cover"
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:flex-row lg:px-0">
          <CourseHero course={course} />
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <CourseOverview course={course} />
        </div>
      </section>
    </>
  );
}
