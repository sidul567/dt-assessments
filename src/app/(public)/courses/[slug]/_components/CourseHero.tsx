import Image from "next/image";
import { SignalIcon } from "@/components/icons/SignalIcon";
import { RatingStarIcon } from "@/components/icons/RatingStarIcon";
import { PeopleIcon } from "@/components/icons/PeopleIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";
import type { CourseDetail } from "@/types/course";
import { CourseSidebar } from "./CourseSidebar";

interface CourseHeroProps {
  course: CourseDetail;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-3xl font-semibold tracking-[-0.36px] text-neutral-50 lg:text-4xl">
              {course.title}
            </h1>
            <p className="text-lg tracking-[-0.2px] text-neutral-50 lg:text-xl">
              {course.subtitle}
            </p>
          </div>

          <p className="text-lg font-medium text-neutral-50">
            by <span className="text-secondary-400">{course.author}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-base font-medium text-neutral-950">
              <SignalIcon className="size-6" />
              {course.level}
            </span>
            <span className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-base font-medium text-neutral-950">
              <RatingStarIcon className="size-6" />
              {course.rating} ({course.reviewCount} reviews)
            </span>
            <span className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-base font-medium text-neutral-950">
              <PeopleIcon className="size-6" />
              {course.studentsLabel}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-3xl bg-secondary-400 px-6 py-2 text-base font-medium text-neutral-950"
        >
          <ShareIcon className="size-6" />
          Share
        </button>
      </div>

      <div className="flex flex-col gap-10 lg:gap-16 lg:flex-row lg:items-start lg:justify-between relative">
        <div className="relative aspect-720/479 max-w-[720px] w-full overflow-hidden rounded-3xl bg-neutral-800">
          <Image
            src={course.heroVideo}
            alt={`${course.title} preview`}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-contain"
          />
          <button
            type="button"
            aria-label="Play course preview"
            className="absolute left-1/2 top-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-neutral-800 bg-neutral-900/25 text-neutral-50 backdrop-blur-xl"
          >
            <PlayIcon className="size-full" />
          </button>
        </div>
        <CourseSidebar 
          course={course} 
          className="absolute right-0"
        />
      </div>
    </div>
  );
}
