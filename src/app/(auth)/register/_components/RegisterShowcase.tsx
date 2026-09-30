import { AvatarStack } from "@/components/common/AvatarStack";
import { CourseCard } from "@/components/common/CourseCard";
import { HeroOrnament } from "@/components/common/HeroOrnament";
import { StarIcon } from "@/components/icons/StarIcon";
import { FEATURED_COURSES } from "@/constants/courses";

const [, digitalAssetCourse, bigDataCourse] = FEATURED_COURSES;

export function RegisterShowcase() {
  return (
    <div className="relative text-neutral-50 lg:h-[784px] lg:w-[500px]">
      <div className="relative z-10 flex flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.2px]">
          Sign up and come in
        </h2>
        <p className="max-w-[475px] text-lg">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="absolute top-[274px] left-0.5 w-[373px]">
          <CourseCard course={digitalAssetCourse} linked={false} />
        </div>

        <div className="absolute top-[185px] left-[113px] w-[373px]">
          <CourseCard course={bigDataCourse} linked={false} />
        </div>

        <HeroOrnament
          image="/images/ornaments/cta-donut-lime.png"
          className="absolute top-[200px] left-[31px] size-[146px]"
        />

        <HeroOrnament
          image="/images/ornaments/cta-triangle-lime.png"
          className="absolute top-[582px] -left-6 size-[188px]"
        />

        <HeroOrnament
          image="/images/ornaments/spiral-white-sm.png"
          className="absolute top-[506px] left-[350px] size-[175px] z-2"
        />

        <div className="absolute top-[620px] left-[228px] flex w-[258px] flex-col gap-2 rounded-2xl bg-secondary-400 p-4 text-neutral-950 backdrop-blur-[10px]">
          <div>
            <p className="text-base font-medium">Happy Students</p>
            <p className="flex items-center gap-1 text-[10px] text-neutral-800">
              <span>
                <strong className="font-bold text-neutral-950">4.5</strong>{" "}
                (240)
              </span>
              <StarIcon className="size-4 text-primary-800" />
            </p>
          </div>
          <AvatarStack />
        </div>
      </div>
    </div>
  );
}
