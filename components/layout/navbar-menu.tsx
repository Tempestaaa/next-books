"use client";

import bookGenres from "@/data/genres";
import { BookGenre } from "@/types/book.type";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const links: { name: string; href: string; children?: BookGenre[] }[] = [
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Genres",
      href: "/genres",
      children: bookGenres.slice(0, 11),
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <menu className="h-full flex-center gap-2">
      {links.map((item) => (
        <li
          key={item.href}
          className={`relative flex-center group overflow-hiddens hover:overflow-visible hover:bg-foreground hover:text-background rounded ${
            isActive(item.href) && "bg-foreground text-background"
          }`}
        >
          <Link
            href={item.href}
            className="font-heading font-medium block size-full p-1"
          >
            {item.name}
          </Link>

          {item.children && (
            <ul className="absolute top-full left-0 p-2 rounded w-160 hidden group-hover:grid grid-cols-2 shadow-md bg-background z-20">
              {item.children.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/genres?name=${s.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    className="block duration-300 p-2 rounded h-20 max-h-20 overflow-hidden hover:bg-foreground text-foreground hover:text-background"
                  >
                    <header className="font-heading font-medium">
                      {s.name}
                    </header>
                    <p className="text-muted text-sm line-clamp-2">
                      {s.description}
                    </p>
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/genres"
                  className="font-heading font-medium block h-full hover:bg-foreground text-foreground hover:text-background rounded p-2"
                >
                  More...
                </Link>
              </li>
            </ul>
          )}

          {item.children && (
            <span>
              <ChevronDownIcon className="size-3 group-hover:rotate-180 duration-300 stroke-3 mr-1" />
            </span>
          )}
        </li>
      ))}
    </menu>
  );
}
