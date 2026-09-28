import Image from "next/image";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarStack } from "@/components/common/AvatarStack";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 text-neutral-50 md:pt-40 lg:pt-42.25">
      <Image
        src="/images/hero-grid.svg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="pointer-events-none object-cover"
      />

      {/* Decorative flourishes (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute left-10 top-24 size-24 rotate-12 rounded-[40%] border-[6px] border-secondary-400/80" />
        <div className="absolute right-16 top-16 size-0 border-x-[22px] border-b-[38px] border-x-transparent border-b-white/80" />
        <div className="absolute bottom-10 left-24 size-28 rounded-full border-[18px] border-white/70" />
        <div className="absolute bottom-24 right-28 size-14 rotate-45 rounded-lg bg-secondary-400/70" />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 text-center lg:gap-[60px] lg:px-0">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight text-neutral-50 sm:text-5xl lg:text-[72px] lg:leading-[1.2] lg:tracking-[-0.72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-100 lg:max-w-none lg:text-lg lg:leading-[1.6]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <form
          role="search"
          className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-start sm:justify-center"
        >
          <div className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-neutral-white px-6 py-3 sm:w-[461px]">
            <SearchIcon className="size-6 shrink-0 text-neutral-400" />
            <label htmlFor="course-search" className="sr-only">
              Search for a course, topic, or creator
            </label>
            <input
              id="course-search"
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="shrink-0 rounded-3xl bg-secondary-400 px-6 py-3 text-lg font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
          >
            Search
          </button>
        </form>

        <div className="relative mt-4 flex w-full max-w-[578px] justify-center lg:mt-8">
          <div className="relative aspect-[578/541] w-full">
            <Image
              src="/images/hero-blob.svg"
              alt=""
              aria-hidden="true"
              width={1149}
              height={1149}
              className="pointer-events-none absolute left-1/2 top-[13%] w-[150%] max-w-none -translate-x-1/2"
            />

            <Image
              src="/images/hero-photo.png"
              alt="Student wearing headphones smiling while holding a laptop"
              fill
              priority
              className="relative rounded-3xl object-cover"
            />

            <div className="absolute -left-[4%] top-[23%] hidden max-w-[220px] items-start rounded-2xl bg-neutral-white/95 p-4 text-left text-neutral-950 shadow-lg backdrop-blur-md sm:flex">
              <div>
                <p className="text-base font-medium">UI/UX Design</p>
                <p className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                  <span>200 Courses</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>1000+ Students</span>
                </p>
              </div>
            </div>

            <div className="absolute left-[71%] top-[26%] hidden flex-col items-start gap-2 rounded-2xl bg-neutral-white/95 p-4 text-left text-neutral-950 shadow-lg backdrop-blur-md sm:flex">
              <p className="text-sm font-medium">Learning Progress</p>
              <p className="font-heading text-4xl font-semibold tracking-[-0.48px] lg:text-5xl">
                55%
              </p>
              <div className="relative h-2 w-[200px] rounded-full bg-neutral-50">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-secondary-400" />
              </div>
            </div>

            <div className="absolute -left-[18%] top-[60%] hidden max-w-[258px] flex-col items-start gap-2 rounded-2xl bg-neutral-white/95 p-4 text-left text-neutral-950 shadow-lg backdrop-blur-md sm:flex">
              <div>
                <p className="text-base font-medium">Happy Students</p>
                <p className="flex items-center gap-1 text-xs text-neutral-400">
                  <span className="text-neutral-950">4.5 (240)</span>
                  <StarIcon className="size-4 text-secondary-400" />
                </p>
              </div>
              <AvatarStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
