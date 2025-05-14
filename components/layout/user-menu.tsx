"use client";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { users } from "@/lib/common";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isDropdownMenu?: boolean;
};

export default function UserMenu({ isDropdownMenu = false }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <>
      {users.map(({ id, icon, name, href, isDivider }) => {
        const Icon = icon as LucideIcon;
        const Item = () =>
          isDropdownMenu ? (
            <DropdownMenuItem className="flex-center gap-2 group">
              {icon && <Icon className="group-hover:text-background" />}
              <span>{name}</span>
            </DropdownMenuItem>
          ) : (
            <li
              className={`flex-center gap-3 group hover:text-background hover:bg-foreground p-2 rounded duration-300 ${
                href && isActive(href) && "text-background bg-foreground"
              }`}
            >
              {icon && <Icon className="group-hover:text-background size-5" />}
              <span>{name}</span>
            </li>
          );

        return (
          <div key={id}>
            {href ? (
              <Link href={href}>
                <Item />
              </Link>
            ) : isDivider ? (
              <DropdownMenuSeparator />
            ) : (
              <Item />
            )}
          </div>
        );
      })}
    </>
  );
}
