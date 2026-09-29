import Image from "next/image";
import { HeroOrnament } from "@/components/common/HeroOrnament";
import { Button } from "@/components/ui/button";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-16 text-neutral-50 lg:flex lg:min-h-160 lg:items-center lg:py-0">
      <Image
        src="/images/hero-grid.svg"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover"
      />

      {/* Decorative 3D ornaments (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <HeroOrnament
          image="/images/ornaments/cta-spiral-lime.png"
          className="absolute top-[-33.2%] bottom-[54.3%] left-10 w-96.25 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cta-spiral-white.png"
          className="absolute top-[1.02%] bottom-[63.11%] left-[calc(50%-454.5px)] w-43.75 -translate-x-1/2 -scale-x-100"
        />

        <HeroOrnament
          image="/images/ornaments/cta-blob-white.png"
          className="absolute top-[1.23%] bottom-[22.95%] left-[calc(50%+891px)] w-92.5 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cta-triangle-lime.png"
          className="absolute top-0 bottom-[61.48%] left-[calc(50%+454px)] w-47 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cta-zigzag-lime-lg.png"
          className="absolute top-[59.22%] bottom-[-26.84%] left-[calc(50%+555px)] w-82.5 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cta-cone-white.png"
          className="absolute top-[46.11%] bottom-[15.37%] left-20 w-47 -translate-x-1/2"
        />

        <HeroOrnament
          image="/images/ornaments/cta-donut-lime.png"
          className="absolute top-[61.27%] bottom-[-31.35%] left-[calc(50%-529px)] w-85.5 -translate-x-1/2"
        />
      </div>

      <div className="relative mx-auto flex max-w-[964px] flex-col items-center gap-10 px-6 py-18 text-center lg:px-0 lg:py-24">
        <h2 className="max-w-[710px] font-heading text-3xl font-semibold tracking-[-0.44px] text-neutral-50 lg:text-[44px] lg:leading-[1.2]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-base leading-[1.6] text-neutral-100 lg:text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize
          our Course Editor, and showcase your expertise by publishing your
          finest course on the ByteSpace Course Library.
        </p>
        <Button type="button">Join as Creator</Button>
      </div>
    </section>
  );
}
