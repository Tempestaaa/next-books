import ShopLeft from "@/components/shop/shop-left";
import ShopRight from "@/components/shop/shop-right";

export default function ShopPage() {
  return (
    <div className="flex h-full gap-8">
      <ShopLeft />
      <ShopRight />
    </div>
  );
}
