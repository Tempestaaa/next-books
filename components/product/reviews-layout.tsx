import CustomPagination from "@/components/layout/custom-pagination";
import CustomOptions from "@/components/shop/custom-options";
import ReviewCard from "@/components/shop/review-card";
import { Options } from "@/types/common.type";

export default function ReviewsLayout() {
  const sortOptions: Options[] = [
    {
      name: "New",
      value: "new",
    },
    {
      name: "Old",
      value: "old",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex-center gap-4 justify-between">
        <header className="font-heading text-2xl">Reviews</header>
        <CustomOptions array={sortOptions} />
      </div>

      <div className="flex flex-col gap-6">
        {[...Array(7)].map((_, id) => (
          <ReviewCard key={id} />
        ))}

        <CustomPagination />
      </div>
    </div>
  );
}
