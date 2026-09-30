import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PublicLayout from "./(public)/layout";

export default function NotFound() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-primary-800 px-6 pt-56 pb-24 text-center md:pt-100 md:pb-32 lg:pt-130 lg:pb-30">
        <Image
          src="/images/hero-grid.svg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="pointer-events-none object-cover"
        />

        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 bg-linear-to-b from-secondary-400 via-secondary-400/80 to-transparent bg-clip-text font-heading text-[10rem] leading-none font-semibold tracking-[-0.01em] whitespace-nowrap text-transparent md:top-40 md:text-[20rem] lg:text-[30rem]"
        >
          404
        </p>

        <div className="relative mx-auto flex max-w-[935px] flex-col items-center gap-8">
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl lg:text-[72px] lg:leading-[1.2] lg:tracking-[-0.72px]">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-lg text-neutral-100">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
