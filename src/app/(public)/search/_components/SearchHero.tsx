import Image from "next/image";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchHero() {
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

        <form
          role="search"
          action="/search"
          className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        >
          <label htmlFor="search-page-query" className="sr-only">
            Search for a course, topic, or creator
          </label>
          <Input
            id="search-page-query"
            name="q"
            type="search"
            placeholder="Search"
            icon={<SearchIcon className="size-6 shrink-0 text-neutral-400" />}
            className="text-lg text-neutral-950 placeholder:text-neutral-400"
            wrapperClassName="sm:w-[461px]"
          />
          <Button type="submit" className="gap-2">
            Courses
            <ChevronDownIcon className="size-6" />
          </Button>
        </form>
      </div>
    </section>
  );
}
