import FilterByAvailability from "@/components/shop/filter-by-availability";
import FilterByFormat from "@/components/shop/filter-by-format";
import FilterByGenre from "@/components/shop/filter-by-genre";
import FilterByPrice from "@/components/shop/filter-by-price";
import FilterByRating from "@/components/shop/filter-by-rating";
import FilterHeader from "@/components/shop/filter-header";
import { Accordion } from "@/components/ui/accordion";

export default function ShopLeft() {
  return (
    <div className="w-60 py-4 space-y-2">
      <FilterHeader />

      <Accordion type="multiple">
        <FilterByGenre />
        <FilterByPrice />
        <FilterByFormat />
        <FilterByAvailability />
        <FilterByRating />
      </Accordion>
    </div>
  );
}
