import { CoursesHero } from "./_components/CoursesHero";
import { FilterBar } from "@/components/common/FilterBar";
import { Pagination } from "@/components/common/Pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/common/CourseCard";
import { COURSE_CATEGORIES, FEATURED_COURSES } from "@/constants/courses";

const COURSE_RESULTS = [
  ...FEATURED_COURSES,
  ...FEATURED_COURSES,
  ...FEATURED_COURSES,
];

const TOTAL_PAGES = 5;

interface CoursesPageProps {
  searchParams: Promise<{ page?: string; q?: string }>;
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { page, q } = await searchParams;
  const requestedPage = Number(page);
  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), TOTAL_PAGES)
    : 1;

  return (
    <>
      <CoursesHero defaultQuery={q} />

      <section className="bg-white py-18">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:px-0">
          <FilterBar />

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
            {COURSE_RESULTS.map((course, index) => (
              <CourseCard key={`${course.slug}-${index}`} course={course} />
            ))}
          </div>

          <Pagination
            totalPages={TOTAL_PAGES}
            currentPage={currentPage}
            className="mt-8"
          />
        </div>
      </section>
    </>
  );
}
