import { SearchHero } from "./_components/SearchHero";
import { SearchFilterBar } from "./_components/SearchFilterBar";
import { Pagination } from "./_components/Pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/common/CourseCard";
import { COURSE_CATEGORIES, FEATURED_COURSES } from "@/constants/courses";

const SEARCH_RESULTS = [
  ...FEATURED_COURSES,
  ...FEATURED_COURSES,
  ...FEATURED_COURSES,
];

export default function SearchPage() {
  return (
    <>
      <SearchHero />

      <section className="bg-white py-18">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:px-0">
          <SearchFilterBar />

          <Tabs defaultValue={COURSE_CATEGORIES[0]}>
            <TabsList className="h-auto! flex-wrap justify-start gap-4 bg-transparent p-0">
              {COURSE_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="h-auto! flex-none grow-0 rounded-3xl border-none bg-neutral-50 px-4 py-3 text-base font-medium leading-[19px] text-neutral-700 shadow-none data-active:bg-secondary-400 data-active:text-neutral-950 data-active:shadow-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SEARCH_RESULTS.map((course, index) => (
              <CourseCard key={`${course.slug}-${index}`} course={course} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}
