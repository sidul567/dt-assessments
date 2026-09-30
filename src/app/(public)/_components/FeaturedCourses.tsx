import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/common/CourseCard";
import { COURSE_CATEGORIES, FEATURED_COURSES } from "@/constants/courses";

export function FeaturedCourses() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 lg:px-0">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-[-0.44px] text-neutral-950 lg:text-[44px] lg:leading-[1.2]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="max-w-3xl text-base text-neutral-400 lg:text-lg lg:leading-[1.6]">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different fields,
          from technology to the arts, and make a difference in your career
          and life.
        </p>
      </div>

      <Tabs defaultValue={COURSE_CATEGORIES[0]} className="">
        <TabsList className="h-auto! flex-wrap justify-center gap-4 bg-transparent p-0">
          {COURSE_CATEGORIES.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="h-auto! flex-none grow-0 rounded-3xl border-none bg-neutral-50 px-4 py-3 text-base font-medium text-neutral-700 shadow-none data-active:bg-secondary-400 data-active:text-neutral-950 data-active:shadow-none leading-[19px]"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_COURSES.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
    </section >
  );
}
