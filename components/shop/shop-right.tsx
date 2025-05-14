import CustomPagination from "@/components/layout/custom-pagination";
import ProductLayout from "@/components/product/product-layout";
import RightHeader from "@/components/shop/right-header";

export default function ShopRight() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <RightHeader />
      <ProductLayout />

      <div className="mt-4">
        <CustomPagination />
      </div>
    </div>
  );
}
