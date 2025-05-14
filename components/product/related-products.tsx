import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import books from "@/data/books";

type Props = {
  slug: string;
};

export default function RelatedProducts({ slug }: Props) {
  const relatedBooks = books.filter((item) => item.slug !== slug);

  return (
    <aside className="w-64 px-2 space-y-8">
      <header className="font-heading text-2xl">Related products</header>

      <div className="flex flex-col gap-4">
        {relatedBooks.slice(0, 3).map((item) => (
          <ProductCard key={item.id} book={item} isSmaller />
        ))}

        <Button variant="ghost">See all</Button>
      </div>
    </aside>
  );
}
