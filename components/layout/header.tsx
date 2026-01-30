"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Profile } from "@/app/page";

type HeaderProps = {
  profile: Profile;
};

type NavItem = {
  href: string;
  icon: string;
  label: string;
  width: number;
  aspectRatio?: number;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    width: 28,
    label: "Budgeting",
    aspectRatio: 28 / 36,
    icon: "/svgs/budgeting.svg",
  },
  {
    href: "/",
    width: 26,
    label: "Calendar",
    icon: "/svgs/calendar.svg",
  },
  {
    href: "/",
    width: 24,
    label: "Documents",
    icon: "/svgs/document-text.svg",
  },
  {
    href: "/",
    width: 26,
    label: "Payout Center",
    icon: "/svgs/payout-center.svg",
  },
  {
    href: "/",
    width: 24,
    label: "Marketplace",
    icon: "/svgs/marketplace.svg",
  },
];

export default function Header({ profile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 md:static bg-[#105B48] border-b border-[#F4F4F5]">
      <div className="max-w-400 mx-auto px-4 sm:px-6 md:px-7 lg:px-8 py-4.5 sm:py-2 md:py-3">
        <div className="flex items-center justify-between">
          <Image
            alt="logo"
            width={200}
            height={27}
            src="/svgs/logo.svg"
            className="aspect-200/27 w-42 sm:w-44 md:w-48 lg:w-50"
          />

          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <nav className="hidden sm:flex sm:gap-px md:gap-1.5 shrink-0">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative p-3 aspect-square shrink-0 flex justify-center items-center rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#0d8567] opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-300 ease-out" />
                  <Image
                    alt="nav"
                    src={item.icon}
                    width={item.width}
                    height={item.width / (item.aspectRatio || 1)}
                    className="scale-[0.9] md:scale-100 relative z-10 transition-transform duration-300 ease-out"
                    style={{
                      width: `${item.width}px`,
                      aspectRatio: item.aspectRatio || 1,
                    }}
                  />
                </Link>
              ))}
            </nav>

            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden relative flex flex-col justify-between w-6 rounded-lg hover:bg-[#0d8567]/20 transition-colors duration-200"
            >
              <span
                className={`absolute w-full h-px bg-white rounded-full transition-all duration-300 ease-out origin-center ${
                  isMenuOpen
                    ? "rotate-45 scale-[0.85]"
                    : "rotate-0 -translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-full h-px bg-white rounded-full transition-all duration-300 ease-out origin-center ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute w-full h-px bg-white rounded-full transition-all duration-300 ease-out origin-center ${
                  isMenuOpen
                    ? "-rotate-45 scale-[0.85]"
                    : "rotate-0 translate-y-1.5"
                }`}
              />
            </button>

            <Link
              href="/"
              className="w-8 sm:w-9 md:w-10 aspect-square rounded-full bg-white text-teal-700 flex items-center justify-center font-bold text-base sm:text-lg uppercase shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {profile.firstName.charAt(0)}
            </Link>
          </div>
        </div>

        <div
          className={`h-max sm:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "opacity-100 pt-3 pb-2" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group relative py-3 flex items-center gap-3.5 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#0d8567] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out" />
                <Image
                  alt="nav"
                  src={item.icon}
                  width={item.width}
                  height={item.width / (item.aspectRatio || 1)}
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{
                    width: `${item.width}px`,
                    aspectRatio: item.aspectRatio || 1,
                  }}
                />
                <p>{item.label}</p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
