import ProductLayout from "@/components/product/product-layout";
import RightHeader from "@/components/shop/right-header";

export default function ShopRight() {
  return (
    <div className="flex-1 py-4 space-y-2">
      <RightHeader />
      <ProductLayout />
    </div>
  );
}
