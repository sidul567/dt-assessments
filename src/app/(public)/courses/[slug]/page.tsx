import Image from "next/image";
import { CourseHero } from "./_components/CourseHero";
import { CourseOverview } from "./_components/CourseOverview";
import { COURSE_DETAILS } from "@/constants/courseDetails";

export default async function CourseDetailsPage() {
  const course = COURSE_DETAILS["build-digital-asset"];

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
