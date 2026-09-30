import { CategoryCard } from "./CategoryCard";
import { COURSE_CATEGORY_ITEMS } from "@/constants/categories";

export function CourseCategories() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto flex flex-col items-center gap-12 px-6 lg:px-0">
        <div className="flex flex-col items-center gap-4 text-center max-w-[1200px]">
          <h2 className="max-w-[792px] font-heading text-3xl font-semibold tracking-[-0.36px] text-neutral-950 lg:text-4xl lg:leading-[1.2]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[917px] text-base text-neutral-400 lg:text-lg lg:leading-[1.6]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-10">
          {COURSE_CATEGORY_ITEMS.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              Icon={category.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
