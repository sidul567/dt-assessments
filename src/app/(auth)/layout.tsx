import Image from "next/image";
import Link from "next/link";
import { LogoMini } from "@/components/icons/LogoMini";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-primary-800">
      <Image
        src="/images/hero-grid.svg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="pointer-events-none object-cover"
      />

      <header className="relative mx-auto flex h-20 w-full max-w-[1200px] items-center px-6 md:h-[120px] lg:px-0">
        <Link href="/" aria-label="ByteSpace home">
          <LogoMini />
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-10 px-6 pb-16 lg:flex-row lg:items-start lg:justify-between lg:px-0">
        {children}
      </main>
    </div>
  );
}
