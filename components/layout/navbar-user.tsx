import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BellIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarUser() {
  const users: { name: string; href: string }[] = [
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Notifications",
      href: "/notifications",
    },
    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="flex-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Cart</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <BellIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-48 max-w-60 overflow-hidden">
          <DropdownMenuLabel className="font-heading text-xl line-clamp-1">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          {users.map((item) => (
            <Link key={item.href} href={item.href}>
              <DropdownMenuItem>{item.name}</DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuSeparator />

          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
