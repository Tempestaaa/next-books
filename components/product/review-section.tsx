import ReviewsLayout from "@/components/product/reviews-layout";
import WriteReview from "@/components/product/write-review";

export default function ReviewSection() {
  return (
    <div className="flex-1 space-y-8">
      <WriteReview />
      <ReviewsLayout />
    </div>
  );
}
