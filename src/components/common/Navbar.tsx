import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { CartIcon } from "@/components/icons/CartIcon";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/components/common/MobileMenu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("text-neutral-50", className)}>
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:h-[120px] lg:px-0">
        <Link href="/" className="shrink-0" aria-label="ByteSpace home">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-base md:flex"
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={index === 0 ? "font-medium" : "font-normal"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 text-base md:flex">
          <Link href="/sign-in">Sign In</Link>
          <Link href="/join">Join Us</Link>
          <Link href="/cart" aria-label="Cart">
            <CartIcon className="size-6" />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
