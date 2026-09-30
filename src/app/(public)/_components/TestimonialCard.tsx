import Image from "next/image";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-3xl bg-white p-6 lg:max-w-[374px]">
      <Image
        src={testimonial.avatar}
        alt=""
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <div>
        <h3 className="font-heading text-xl font-semibold tracking-[-0.2px] text-neutral-950">
          {testimonial.name}
        </h3>
        <p className="text-lg text-primary-800">{testimonial.role}</p>
      </div>
      <p className="text-lg leading-[1.6] text-neutral-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}
