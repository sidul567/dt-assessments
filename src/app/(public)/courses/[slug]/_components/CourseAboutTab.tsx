import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import type { CourseDetail } from "@/types/course";

interface CourseAboutTabProps {
  course: CourseDetail;
}

export function CourseAboutTab({ course }: CourseAboutTabProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Description
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-neutral-700">
          {course.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Sneak Peak
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {course.sneakPeek.map((image) => (
            <div
              key={image}
              className="relative aspect-167/125 overflow-hidden rounded-2xl bg-neutral-100"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="167px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Key Points
        </h2>
        <ul className="flex flex-col gap-3">
          {course.keyPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-base leading-relaxed text-neutral-700"
            >
              <CheckCircleIcon className="size-6 shrink-0 text-primary-800" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
