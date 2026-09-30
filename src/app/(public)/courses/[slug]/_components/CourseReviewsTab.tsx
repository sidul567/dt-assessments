"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RatingStarIcon } from "@/components/icons/RatingStarIcon";
import type { CourseDetail } from "@/types/course";

interface CourseReviewsTabProps {
  course: CourseDetail;
}

function StarRow({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex items-start gap-1", className)}>
      {Array.from({ length: 5 }, (_, index) => (
        <RatingStarIcon
          key={index}
          className={
            index < rating
              ? "size-6 text-neutral-700"
              : "size-6 text-neutral-200"
          }
        />
      ))}
    </div>
  );
}

export function CourseReviewsTab({ course }: CourseReviewsTabProps) {
  const [activeFilter, setActiveFilter] = useState<number | "all">("all");

  const filteredReviews = useMemo(
    () =>
      activeFilter === "all"
        ? course.reviews
        : course.reviews.filter((review) => review.rating === activeFilter),
    [activeFilter, course.reviews]
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          What Learners Are Saying
        </h2>
        <p className="text-base leading-relaxed text-neutral-700">
          {course.reviewsIntro}
        </p>

        <div className="flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:p-10">
          <div className="flex shrink-0 flex-col items-center justify-center gap-1 rounded-lg bg-secondary-400 p-10">
            <p className="text-sm font-medium text-neutral-950">Ratings</p>
            <p className="font-heading text-4xl font-semibold tracking-[-0.36px] text-neutral-950">
              {course.overallRating}
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col gap-1">
            {course.ratingBreakdown.map((row) => (
              <div key={row.stars} className="flex w-full items-center gap-4">
                <div className="relative h-2 flex-1 rounded-3xl bg-neutral-100">
                  <div
                    className="absolute inset-y-0 left-0 rounded-3xl bg-secondary-400"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <StarRow rating={row.stars} className="shrink-0 gap-1" />
                <span className="w-10 shrink-0 text-right text-base text-neutral-700">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          Individual Reviews:
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "rounded-3xl px-4 py-3 text-base font-medium",
              activeFilter === "all"
                ? "bg-secondary-400 text-neutral-950"
                : "bg-neutral-50 text-neutral-700"
            )}
          >
            All rating
          </button>

          {[5, 4, 3, 2, 1].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() => setActiveFilter(stars)}
              className={cn(
                "flex items-center gap-1 rounded-3xl px-4 py-3 text-base font-medium",
                activeFilter === stars
                  ? "bg-secondary-400 text-neutral-950"
                  : "bg-neutral-50 text-neutral-700"
              )}
            >
              <RatingStarIcon className="size-6" />
              {stars}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-6 rounded-3xl outline outline-solid outline-neutral-200 p-6 sm:p-10"
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={52}
                      height={52}
                      className="size-13 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-medium text-neutral-950">
                        {review.name}
                      </p>
                      <p className="text-base text-neutral-700">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <StarRow rating={review.rating} />
                </div>
                <p className="text-base text-neutral-700">{review.timeAgo}</p>
              </div>
              <p className="text-base text-neutral-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
