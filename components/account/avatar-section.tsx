import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";

export default function AvatarSection() {
  return (
    <div className="flex-center gap-4 justify-between">
      <div className="flex gap-4">
        <Avatar className="size-16">
          <AvatarImage />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-between">
          <p className="font-heading">Username</p>
          <p className="text-sm text-foreground/70">Customer</p>
          <p className="text-sm text-muted">Leeds, United Kingdom</p>
        </div>
      </div>

      <Button variant="outline">
        <span className="text-sm">Edit</span>
        <PenIcon className="size-3" />
      </Button>
    </div>
  );
}
