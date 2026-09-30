import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { CartIcon } from "@/components/icons/CartIcon";
import { NAV_LINKS } from "@/constants/navigation";
import { MobileMenu } from "@/components/common/MobileMenu";
import { NavbarShell } from "@/components/common/NavbarShell";
import { NavLink } from "@/components/common/NavLink";

interface NavbarProps {
  className: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <NavbarShell className={className}>
      <Link href="/" className="shrink-0" aria-label="ByteSpace home">
        <Logo />
      </Link>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-6 text-base md:flex"
      >
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-6 text-base md:flex">
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <Link href="/cart" aria-label="Cart">
          <CartIcon className="size-6" />
        </Link>
      </div>

      <MobileMenu />
    </NavbarShell>
  );
}
