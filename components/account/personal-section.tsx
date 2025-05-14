import Item from "@/components/account/item";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";

export default function PersonalSection() {
  return (
    <div className="space-y-4">
      <div className="flex-center gap-4 justify-between">
        <header className="font-heading text-xl">Personal Information</header>
        <Button variant="outline">
          <span className="text-sm">Edit</span>
          <PenIcon className="size-3" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Item label="First Name" value="Icecream" />
        <Item label="Last Name" value="Stable" />
        <Item label="Email address" value="tiylar.giles@ymail.com" />
        <Item label="Phone" value="(715) 373-0491" />
        <Item
          label="Bio"
          value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab animi earum magnam sint odio atque sunt! Totam quas porro dolorem quos, dicta illum, omnis rerum aut voluptatem quam quidem praesentium!"
        />
      </div>
    </div>
  );
}
