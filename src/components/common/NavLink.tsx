"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary-400 after:transition-[width] after:duration-300 hover:after:w-full focus-visible:after:w-full",
        isActive ? "font-medium after:w-full" : "font-normal"
      )}
    >
      {children}
    </Link>
  );
}
