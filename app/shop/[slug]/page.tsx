import DetailsSection from "@/components/product/details-section";
import RelatedProducts from "@/components/product/related-products";
import ReviewSection from "@/components/product/review-section";
import { getBook } from "@/lib/books";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const book = getBook(slug);
  if (!book) return;

  return (
    <div className="py-4 space-y-14">
      <DetailsSection book={book} />
      <div className="flex gap-16">
        <ReviewSection />
        <RelatedProducts slug={slug} />
      </div>
    </div>
  );
}
