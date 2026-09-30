import Image from "next/image";
import { CourseCard } from "@/components/common/CourseCard";
import { AvatarStack } from "@/components/common/AvatarStack";
import { StarIcon } from "@/components/icons/StarIcon";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { FEATURED_COURSES } from "@/constants/courses";

const LEARNER_STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CREATOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function PlatformHighlights() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <Image
          src="/images/showcase/glow-lime-lg.svg"
          alt=""
          width={1025}
          height={711}
          className="absolute left-0 top-0 w-280 max-w-none"
        />
        <Image
          src="/images/showcase/glow-lime-sm.svg"
          alt=""
          width={425}
          height={554}
          className="absolute left-0 bottom-0 w-98 max-w-none"
        />
        <Image
          src="/images/showcase/glow-blue.svg"
          alt=""
          width={800}
          height={712}
          className="absolute right-0 bottom-0 w-150 max-w-none"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-18 lg:gap-60 px-6 lg:px-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-10 lg:w-1/2 lg:translate-y-20">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.44px] text-neutral-950 lg:text-[44px] lg:leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-md text-lg leading-[1.6] text-neutral-700">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <div className="flex items-end gap-10 lg:gap-14">
              {LEARNER_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-3xl font-medium leading-[44px] tracking-[-0.36px] text-primary-800 lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-lg text-neutral-700">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[460px] lg:w-1/2 lg:max-w-[621px]">
            <Image
              src="/images/showcase/spiral-lime.svg"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              className="pointer-events-none absolute -right-8 top-25 z-7 w-32 lg:w-44"
            />

            <div className="w-[280px] sm:w-[373px]">
              <CourseCard course={FEATURED_COURSES[0]} />
            </div>

            <Image
              src="/images/showcase/student-laptop.png"
              alt="Student smiling while holding a laptop and wearing headphones"
              width={516}
              height={483}
              className="pointer-events-none absolute right-0 top-2 w-[210px] object-contain sm:w-[577px] drop-shadow-2xl z-5"
            />

            <div className="absolute right-0 top-55 hidden max-w-[220px] flex-col items-start gap-2 rounded-2xl bg-neutral-white/95 p-4 text-left text-neutral-950 shadow-lg backdrop-blur-md sm:flex z-6">
              <p className="text-sm font-medium">Learning Progress</p>
              <p className="font-heading text-4xl font-semibold tracking-[-0.48px]">
                55%
              </p>
              <div className="relative h-2 w-[200px] rounded-full bg-neutral-50">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-secondary-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.44px] text-neutral-950 lg:text-[44px] lg:leading-[1.2]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-md text-lg leading-[1.6] text-neutral-700">
              <span className="font-bold text-neutral-950">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {CREATOR_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-end gap-2">
                  <CheckCircleIcon className="size-6 shrink-0 text-primary-800" />
                  <span className="text-lg font-medium text-neutral-950">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full max-w-[400px] lg:w-1/2 lg:max-w-[541px]">
            <Image
              src="/images/showcase/spiral-lime.svg"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              className="pointer-events-none absolute right-8 top-30 z-7 w-28 lg:w-44 rotate-45"
            />

            <Image
              src="/images/showcase/student-headset.png"
              alt="Creator wearing a headset holding a tablet"
              width={500}
              height={500}
              className="pointer-events-none mx-auto w-[220px] object-contain sm:w-[435px] relative z-3"
            />  

            <div className="absolute left-0 top-8 hidden w-[232px] flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50 sm:flex">
              <div>
                <p className="text-base font-medium leading-[1.2]">
                  Total Revenue
                </p>
                <p className="text-[10px] leading-[1.2]">July 1-28</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-heading text-2xl font-semibold tracking-[-0.24px]">
                  $120.29
                </span>
              </div>
              <div className="relative h-2 w-full rounded-full bg-white">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-secondary-400" />
              </div>
            </div>

            <div className="absolute left-0 top-[168px] hidden w-[134px] flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50 sm:flex">
              <div>
                <p className="text-base font-medium leading-[1.2]">
                  Year to Date
                </p>
                <p className="text-[10px] leading-[1.2]">2023</p>
              </div>
              <span className="font-heading text-2xl font-semibold tracking-[-0.24px]">
                $1,200.38
              </span>
              <span className="w-fit rounded-3xl bg-secondary-500 px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                +12$
              </span>
            </div>

            <div className="absolute bottom-6 right-0 hidden w-[220px] flex-col items-start justify-center gap-2 rounded-2xl bg-neutral-white/95 p-4 shadow-lg backdrop-blur-md sm:flex">
              <div>
                <p className="text-base font-medium text-neutral-950">
                  Happy Students
                </p>
                <p className="flex items-center gap-1 text-xs text-neutral-400">
                  <span className="font-bold text-neutral-950">4.5</span>
                  <span>(240)</span>
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
