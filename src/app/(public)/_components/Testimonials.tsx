import Image from "next/image";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <Image
          src="/images/testimonials/blob-1.svg"
          alt=""
          width={1137}
          height={1137}
          className="absolute top-0 -right-60 w-[790px] max-w-none"
        />
        <Image
          src="/images/testimonials/blob-2.svg"
          alt=""
          width={672}
          height={672}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[467px] max-w-none"
        />
        <Image
          src="/images/testimonials/blob-4.svg"
          alt=""
          width={735}
          height={675}
          className="absolute left-0 bottom-0 w-[510px] max-w-none"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-18 px-6 lg:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-11">
          <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-[-0.44px] text-neutral-950 lg:text-[44px] lg:leading-[1.2]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-xl text-base text-neutral-700 lg:text-lg lg:leading-[1.6]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating
            on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
