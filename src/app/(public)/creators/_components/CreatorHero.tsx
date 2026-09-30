import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Creator } from "@/types/creator";

interface CreatorHeroProps {
  creator: Creator;
}

export function CreatorHero({ creator }: CreatorHeroProps) {
  const stats = [
    { value: creator.productsCount, label: "Products" },
    { value: creator.followersCount, label: "Followers" },
  ];

  return (
    <section className="relative overflow-hidden bg-primary-800 pt-28 pb-16 text-neutral-50 md:pt-40 md:pb-20 lg:pt-43">
      <Image
        src="/images/hero-grid.svg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="pointer-events-none object-cover"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={96}
              height={96}
              className="size-24 rounded-3xl object-cover"
            />

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-heading text-3xl font-semibold tracking-[-0.36px] lg:text-4xl">
                  {creator.name}
                </h1>
                <span className="rounded-3xl bg-secondary-400 px-6 py-2 text-base font-medium text-neutral-950 backdrop-blur-xl">
                  Creator
                </span>
              </div>
              <p className="text-lg">{creator.title}</p>
            </div>
          </div>

          <div className="flex flex-col text-lg">
            {creator.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-4">
            {stats.map(({ value, label }) => (
              <li key={label}>
                <Button
                  asChild
                  className="bg-white backdrop-blur-xl hover:bg-white"
                >
                  <span>
                    <span className="text-primary-800">{value}</span>
                    {label}
                  </span>
                </Button>
              </li>
            ))}
          </ul>

          <Button>Follow</Button>
        </div>
      </div>
    </section>
  );
}
