import Image from "next/image";
import { PARTNER_LOGOS } from "@/constants/partners";

export function PartnerLogos() {
  return (
    <section className="bg-neutral-50 py-10 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 lg:flex-nowrap lg:gap-x-18 lg:px-0">
        {PARTNER_LOGOS.map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="h-8 w-auto shrink-0 md:h-9 lg:h-auto"
          />
        ))}
      </div>
    </section>
  );
}
