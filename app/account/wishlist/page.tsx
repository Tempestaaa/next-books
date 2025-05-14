import AccountHeader from "@/components/account/account-header";
import CustomPagination from "@/components/layout/custom-pagination";
import ProductLayout from "@/components/product/product-layout";
import CustomOptions from "@/components/shop/custom-options";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Options } from "@/types/common.type";
import { SearchIcon } from "lucide-react";

export default function WishListPage() {
  const sorts: Options[] = [
    {
      name: "Newest",
      value: "newest",
    },
    {
      name: "Oldest",
      value: "oldest",
    },
  ];

  return (
    <>
      <AccountHeader header="Wishlist" />

      <div className="flex-center gap-4 justify-between">
        <div className="flex-center gap-2 flex-1">
          <Input
            placeholder="Search"
            className="max-w-100 focus-visible:border-foreground"
          />
          <Button className="!px-6">
            <SearchIcon />
          </Button>
        </div>

        <CustomOptions array={sorts} />
      </div>

      {/* Todo: Add scroll infinite instead of pagination */}
      <div className="pb-4 overflow-y-auto">
        <ProductLayout />
      </div>
    </>
  );
}
