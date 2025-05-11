import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function NavbarSearch() {
  return (
    <form className="flex-center border-2 border-muted shadow pr-4 has-[:focus]:border-foreground duration-300 rounded group">
      <Input placeholder="Search" className="w-60 border-0 shadow-none peer" />
      <SearchIcon className="size-4 text-muted peer-focus:text-foreground duration-300" />
    </form>
  );
}
