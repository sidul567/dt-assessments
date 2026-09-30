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
          <LogoMini className="h-8 w-auto" />
        </Link>
      </header>

      <main className="relative flex-1">{children}</main>
    </div>
  );
}
