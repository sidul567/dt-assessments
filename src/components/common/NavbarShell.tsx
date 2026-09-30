"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 120;

interface NavbarShellProps {
  className: string;
  children: React.ReactNode;
}

export function NavbarShell({ className, children }: NavbarShellProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastThreshold = currentScrollY > SCROLL_THRESHOLD;

      setIsScrolled(isPastThreshold);
      setIsHidden(isPastThreshold && currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "text-neutral-50 transition-transform duration-300",
        isHidden && "-translate-y-full",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden bg-primary-800 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      >
        <Image
          src="/images/hero-grid.svg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div
        className={cn(
          "relative mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 transition-[height] duration-300 lg:px-0",
          !isScrolled && "md:h-[120px]"
        )}
      >
        {children}
      </div>
    </header>
  );
}
