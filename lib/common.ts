import {
  BellIcon,
  HeartIcon,
  LogOutIcon,
  LucideIcon,
  SettingsIcon,
  ShoppingBagIcon,
  User2Icon,
  WalletIcon,
} from "lucide-react";

export const users: {
  id: string;
  icon?: LucideIcon;
  name?: string;
  href?: string;
  isDivider?: boolean;
}[] = [
  {
    id: "profile",
    icon: User2Icon,
    name: "Profile",
    href: "/account/profile",
  },
  {
    id: "wallet",
    icon: WalletIcon,
    name: "Wallet",
    href: "/account/wallet",
  },
  {
    id: "divider-1",
    isDivider: true,
  },
  {
    id: "orders",
    icon: ShoppingBagIcon,
    name: "Orders",
    href: "/account/orders",
  },
  {
    id: "wishlist",
    icon: HeartIcon,
    name: "Wishlist",
    href: "/account/wishlist",
  },
  {
    id: "divider-2",
    isDivider: true,
  },
  {
    id: "notifications",
    icon: BellIcon,
    name: "Notifications",
    href: "/account/notifications",
  },
  {
    id: "settings",
    icon: SettingsIcon,
    name: "Settings",
    href: "/account/settings",
  },
  {
    id: "divider-3",
    isDivider: true,
  },
  {
    id: "logout",
    icon: LogOutIcon,
    name: "Logout",
  },
];
