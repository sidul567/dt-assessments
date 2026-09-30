import { VideoCamIcon } from "@/components/icons/VideoCamIcon";
import type { CourseDetail } from "@/types/course";

interface CourseLessonsTabProps {
  course: CourseDetail;
}

export function CourseLessonsTab({ course }: CourseLessonsTabProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Explore the Modules
        </h2>
        <p className="text-base leading-relaxed text-neutral-700">
          {course.modulesIntro}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Lesson List
        </h2>
        <ul className="flex flex-col gap-6">
          {course.modules.map((module) => (
            <li key={module.title} className="flex items-center gap-3.25">
              <span className="flex size-18 shrink-0 items-center justify-center rounded-3xl bg-secondary-400">
                <VideoCamIcon className="size-10 text-neutral-950" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium text-neutral-950">
                  {module.title}
                </p>
                <p className="text-base leading-relaxed text-neutral-700">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Lesson Content
        </h2>
        <p className="text-base leading-relaxed text-neutral-700">
          {course.lessonContentText}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Lesson Progress Tracking
        </h2>
        <p className="text-base leading-relaxed text-neutral-700">
          {course.progressTrackingText}
        </p>

        <div className="flex flex-col items-start gap-2 rounded-2xl border border-neutral-200 bg-white p-4 backdrop-blur-[10px]">
          <p className="text-sm font-medium text-neutral-950">
            Learning Progress
          </p>
          <p className="font-heading text-4xl font-semibold tracking-[-0.36px] text-neutral-950">
            {course.learningProgress}%
          </p>
          <div className="relative h-2 w-full max-w-50 rounded-3xl bg-neutral-100">
            <div
              className="absolute inset-y-0 left-0 rounded-3xl bg-secondary-400"
              style={{ width: `${course.learningProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
