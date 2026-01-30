"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavItem = {
  icon: string;
  href: string;
  label: string;
  active?: boolean;
  dimension?: number;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    active: true,
    label: "Dashboard",
    icon: "/svgs/home.svg",
  },
  {
    href: "/",
    active: true,
    label: "Listings",
    icon: "/svgs/toolbox.svg",
  },
  {
    href: "/",
    active: true,
    dimension: 22,
    label: "Users",
    icon: "/svgs/profile.svg",
  },
  {
    href: "/",
    active: true,
    label: "Request",
    icon: "/svgs/article.svg",
  },
  {
    href: "/",
    active: true,
    label: "Applications",
    icon: "/svgs/scroll.svg",
  },
  {
    href: "/",
    active: true,
    label: "Tasks",
    icon: "/svgs/task-square.svg",
  },
];

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="flex md:flex-row sm:gap-2">
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => setActiveIndex(index)}
          className={`shrink-0 group relative flex-1 p-4.5 pb-5.5  md:py-1.5 md:px-2  lg:py-2 flex justify-center items-center gap-1 lg:gap-2 rounded-none md:rounded-lg transition-all duration-300 ease-out overflow-hidden ${
            index === activeIndex
              ? "bg-[#176D5826]/30 md:bg-[#176D5826]"
              : "bg-transparent hover:bg-[#176D5826]/50 transition-discrete"
          }`}
        >
          <div
            className={`md:hidden absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#176D58] rounded-full transition-all duration-300 ease-out ${
              index === activeIndex
                ? "w-[calc(100vw/6)] opacity-100"
                : "w-0 opacity-0"
            }`}
          />

          <Image
            src={item.icon}
            alt={item.label}
            width={item.dimension || 24}
            height={item.dimension || 24}
            className="shrink-0 transition-all duration-300 ease-out min-w-5 md:scale-[0.8] lg:scale-100 group-hover:brightness(0) group-hover:saturate(100%) group-hover:invert(35%) group-hover:sepia(28%) group-hover:saturate(1247%) group-hover:hue-rotate(125deg) group-hover:brightness(91%) group-hover:contrast(90%)"
            style={{
              filter:
                index === activeIndex
                  ? "brightness(0) saturate(100%) invert(35%) sepia(28%) saturate(1247%) hue-rotate(125deg) brightness(91%) contrast(90%)"
                  : "none",
            }}
          />

          <p
            className={`hidden md:block text-xs min-[850px]:text-sm transition-all duration-300 ease-out ${
              index === activeIndex
                ? "font-semibold text-[#176D58] scale-100"
                : "font-medium text-[#3D3D3D] group-hover:text-[#176D58]"
            }`}
          >
            {item.label}
          </p>
        </Link>
      ))}
    </nav>
  );
}
