"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItems[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ری اکت و نکست",
    href: "/courses",
  },
  {
    title: "مطالب و مقالات",
    href: "/blog",
  },
];

export const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((menuItem) => {
        const isActive = pathname === menuItem.href;
        return (
          <li key={`navigation-${menuItem.href}`}>
            <Link
              className={`dark:hover:text-primary transition-colors pb-2 ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30'}`}
              href={menuItem.href}
            >
              {menuItem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
