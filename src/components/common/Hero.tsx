import Image from "next/image";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarStack } from "@/components/common/AvatarStack";
import { HeroOrnament } from "@/components/common/HeroOrnament";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

      {/* Decorative 3D ornaments (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden aspect-1440/1024 w-full lg:block"
      >
        <HeroOrnament
          image="/images/ornaments/spiral-lime.png"
          className="absolute -left-4 top-[21.58%] bottom-[40.82%] w-96.25"
        />

        <HeroOrnament
          image="/images/ornaments/spiral-white-sm.png"
          className="absolute left-[calc(50%-449.5px)] top-[46.58%] bottom-[36.33%] w-43.75 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/donut-white.png"
          className="absolute bottom-0 left-[calc(50%-531px)] top-[46.6%] w-85.5 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cone-lime.png"
          className="absolute -right-13 top-[21.58%] bottom-[42.29%] w-92.5"
        />

        <HeroOrnament
          image="/images/ornaments/triangle-white.png"
          className="absolute left-[calc(50%+480px)] top-[45.31%] bottom-[36.33%] w-47 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/spiral-white-lg.png"
          className="absolute left-[calc(50%+502px)] top-[50.63%] bottom-[2.15%] w-82.5 -translate-x-1/2"
        />
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
          action="/courses"
          className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-start sm:justify-center sm:items-center"
        >
          <label htmlFor="course-search" className="sr-only">
            Search for a course, topic, or creator
          </label>
          <Input
            id="course-search"
            name="q"
            type="search"
            placeholder="Course, topic, creator"
            icon={<SearchIcon className="size-6 shrink-0 text-neutral-400" />}
            className="text-lg text-neutral-950 placeholder:text-neutral-400"
            wrapperClassName="sm:w-[461px]"
          />
          <Button type="submit">Search</Button>
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
