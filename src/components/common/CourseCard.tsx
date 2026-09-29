import Image from "next/image";
import Link from "next/link";
import { SignalIcon } from "@/components/icons/SignalIcon";
import { RatingStarIcon } from "@/components/icons/RatingStarIcon";
import { AvatarStack } from "@/components/common/AvatarStack";
import type { Course } from "@/types/course";

const CARD_AVATARS = [
  "/images/avatars-sm/avatar-1.png",
  "/images/avatars-sm/avatar-2.png",
  "/images/avatars-sm/avatar-3.png",
  "/images/avatars-sm/avatar-4.png",
];

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex w-full flex-col rounded-3xl border border-neutral-200 bg-white p-[15px] sm:max-w-[373px]"
    >
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-neutral-800">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="373px"
          className="object-cover"
        />
        <div className="absolute bottom-[15px] left-3 flex gap-3">
          <span className="rounded-3xl bg-neutral-50/60 px-3 py-1.5 text-xs font-medium text-neutral-700 backdrop-blur-sm">
            {course.lessons} Lessons
          </span>
          <span className="rounded-3xl bg-neutral-50/60 px-3 py-1.5 text-xs font-medium text-neutral-700 backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-3xl bg-neutral-50/60 px-3 py-1.5 text-xs font-medium text-neutral-700 backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4 overflow-hidden">
          <div>
            <h3 className="truncate font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
              {course.title}
            </h3>
            <p className="text-xs text-neutral-700">
              by <span className="text-primary-800">{course.author}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700">
              <SignalIcon className="size-5" />
              {course.level}
            </span>
            <AvatarStack
              avatars={CARD_AVATARS}
              size={32}
              overlap={8}
              badgeLabel={course.studentsLabel}
              badgeClassName="bg-secondary-400 text-neutral-950"
            />
          </div>

          <p className="flex items-end gap-1">
            <span className="font-heading text-xl font-semibold tracking-[-0.2px] text-primary-800">
              ${course.price}
            </span>
            <span className="text-xs text-neutral-700">/lifetime</span>
          </p>
        </div>

        <span className="flex shrink-0 items-center gap-1 text-lg text-neutral-700">
          {course.rating}
          <RatingStarIcon className="size-6 text-neutral-200" />
        </span>
      </div>
    </Link>
  );
}
