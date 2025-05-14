import Item from "@/components/account/item";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";

export default function AddressSection() {
  return (
    <div className="space-y-4">
      <div className="flex-center gap-4 justify-between">
        <header className="font-heading text-xl">Address</header>
        <Button variant="outline">
          <span className="text-sm">Edit</span>
          <PenIcon className="size-3" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Item label="Country" value="United Kingdom" />
        <Item label="City/State" value="Leeds, East London" />
        <Item label="Postal Code" value="ERT 2354" />
      </div>
    </div>
  );
}
