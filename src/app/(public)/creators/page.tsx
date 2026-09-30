import { CreatorHero } from "./_components/CreatorHero";
import { FilterBar } from "@/components/common/FilterBar";
import { CourseCard } from "@/components/common/CourseCard";
import { FEATURED_COURSES } from "@/constants/courses";
import { FEATURED_CREATOR } from "@/constants/creators";

export default function CreatorsPage() {
  return (
    <>
      <CreatorHero creator={FEATURED_CREATOR} />

      <section className="bg-white py-18">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:px-0">
          <FilterBar />

          <div className="grid w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
