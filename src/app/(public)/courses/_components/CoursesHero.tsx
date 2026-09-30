import Image from "next/image";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { SearchForm } from "@/components/common/SearchForm";

interface CoursesHeroProps {
  defaultQuery?: string;
}

export function CoursesHero({ defaultQuery }: CoursesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 pb-16 text-neutral-50 md:pt-40 md:pb-20">
      <Image
        src="/images/hero-grid.svg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="pointer-events-none object-cover"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center lg:px-0">
        <h1 className="font-heading text-3xl font-semibold tracking-[-0.36px] text-neutral-50 lg:text-4xl">
          Find Your Next Course
        </h1>

        <SearchForm
          id="search-page-query"
          placeholder="Search"
          defaultQuery={defaultQuery}
        >
          Courses
          <ChevronDownIcon className="size-6" />
        </SearchForm>
      </div>
    </section>
  );
}
