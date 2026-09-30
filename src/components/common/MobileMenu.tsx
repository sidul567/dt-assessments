"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative flex size-10 items-center justify-center rounded-full text-neutral-50 focus-visible:outline-2 focus-visible:outline-secondary-400"
      >
        <span
          className={`absolute h-0.5 w-6 bg-current transition-transform ${
            isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-current transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-current transition-transform ${
            isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col gap-1 bg-primary-800 px-6 pb-6 font-medium text-neutral-50 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-3">
            <Link href="/login" className="rounded-lg px-3 py-3">
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-secondary-400 px-3 py-3 text-center text-neutral-950"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
