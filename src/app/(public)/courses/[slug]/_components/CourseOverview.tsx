import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CourseAboutTab } from "./CourseAboutTab";
import { CourseLessonsTab } from "./CourseLessonsTab";
import { CourseReviewsTab } from "./CourseReviewsTab";
import type { CourseDetail } from "@/types/course";

interface CourseOverviewProps {
  course: CourseDetail;
}

const COURSE_TABS = ["About", "Lessons", "Reviews"];

export function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <div className="flex max-w-[723px] flex-col gap-10">
      <Tabs defaultValue={COURSE_TABS[0]} className="gap-10">
        <TabsList className="h-auto! flex-wrap justify-start gap-4 bg-transparent p-0">
          {COURSE_TABS.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="h-auto! flex-none grow-0 rounded-3xl border-none bg-neutral-50 px-4 py-3 text-base font-medium text-neutral-700 shadow-none data-active:bg-secondary-400 data-active:text-neutral-950 data-active:shadow-none"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="About">
          <CourseAboutTab course={course} />
        </TabsContent>

        <TabsContent value="Lessons">
          <CourseLessonsTab course={course} />
        </TabsContent>

        <TabsContent value="Reviews">
          <CourseReviewsTab course={course} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
