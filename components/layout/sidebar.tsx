import UserMenu from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="min-w-60 px-2">
      <ul className="flex flex-col h-full">
        <UserMenu />

        <Button asChild variant="destructive" className="font-heading mt-auto">
          <li>Delete account</li>
        </Button>
      </ul>
    </aside>
  );
}
