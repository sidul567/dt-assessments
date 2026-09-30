import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINK_GROUPS, FOOTER_LEGAL_LINKS } from "@/constants/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons/Logo";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white text-neutral-950">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 py-12 md:py-16 lg:gap-[130px] lg:px-0 lg:py-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-24">
          <div className="flex flex-col gap-11 lg:max-w-[528px]">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex w-fit items-center gap-2"
                aria-label="ByteSpace home"
              >
                <Logo
                />
              </Link>
              <p className="text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by
                joining our newsletter.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  variant="outline"
                  className="text-base placeholder:text-neutral-950"
                  wrapperClassName="sm:w-[376px]"
                />
                <Button type="submit">Search</Button>
              </div>
              <p className="text-xs leading-[1.6] lg:max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:w-[580px] lg:gap-10">
            {FOOTER_LINK_GROUPS.map((group, index) => (
              <ul key={index} className="flex flex-col gap-4 text-sm">
                {group.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-neutral-200 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
