import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SourceIcon } from "@/components/icons/SourceIcon";
import { VideoCamIcon } from "@/components/icons/VideoCamIcon";
import { BadgeIcon } from "@/components/icons/BadgeIcon";
import { ConnectIcon } from "@/components/icons/ConnectIcon";
import type { CourseDetail } from "@/types/course";
import { cn } from "cn";

interface CourseSidebarProps {
  course: CourseDetail;
  className?: string;
}

const INCLUDES = [
  { Icon: SourceIcon, label: "Learning Resources" },
  { Icon: VideoCamIcon, label: "Quality Lesson Videos" },
  { Icon: BadgeIcon, label: "Certificate of Completion" },
  { Icon: ConnectIcon, label: "Private Consultation" },
];

export function CourseSidebar({ course, className }: CourseSidebarProps) {
  return (
    <div className={
      cn(
        "flex w-full flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 lg:w-95 lg:shrink-0 lg:p-10",
        className
      )
    }>
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          {course.curriculumTitle}
        </h2>

        <ol className="flex flex-col gap-3 text-base">
          {course.lessons.map((lesson) => (
            <li
              key={lesson.order}
              className="flex items-start justify-between gap-4"
            >
              <span className="flex items-start gap-2 font-medium text-neutral-950">
                <span className="w-6 shrink-0">{lesson.order}</span>
                <span className="leading-4.75">{lesson.title}</span>
              </span>
              <span className="shrink-0 text-primary-800">
                {lesson.duration}
              </span>
            </li>
          ))}
          <li className="text-neutral-700">{course.moreLessonsLabel}</li>
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <p className="max-w-83 text-base text-neutral-700 leading-6.25">
          {course.enrollPrompt}
        </p>

        <p className="flex items-end gap-1">
          <span className="font-heading text-4xl font-semibold tracking-[-0.36px] text-primary-800 leading-[38px]">
            ${course.price}
          </span>
          <span className="text-base text-neutral-700">
            {course.priceUnit}
          </span>
        </p>

        <Button>{course.enrollCta}</Button>
      </div>

      <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950 leading-6">
        This course include
      </h2>

      <ul className="flex flex-col gap-3">
        {INCLUDES.map(({ Icon, label }) => (
          <li
            key={label}
            className="flex items-start gap-2 text-base text-neutral-700 leading-6.5"
          >
            <Icon className="size-6 shrink-0 text-primary-800" />
            {label}
          </li>
        ))}
      </ul>

      <hr className="border-neutral-200" />

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <Image
            src={course.authorAvatar}
            alt=""
            width={52}
            height={52}
            className="size-13 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium text-neutral-950">
              {course.authorDisplayName}
            </p>
            <p className="text-base text-neutral-700">{course.authorRole}</p>
          </div>
        </div>

        <p className="text-base text-neutral-700">{course.enrollPrompt}</p>

        <Button variant="outline" className="w-fit text-base font-medium py-2 leading-[18px]">
          See Full Profile
        </Button>
      </div>
    </div>
  );
}
