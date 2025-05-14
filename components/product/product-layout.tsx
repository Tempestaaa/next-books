import ProductCard from "@/components/product/product-card";
import books from "@/data/books";

type Props = {
  isSmaller?: boolean;
};

export default function ProductLayout({ isSmaller = false }: Props) {
  const smaller = isSmaller
    ? "grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]"
    : "grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]";

  return (
    <div className={`grid gap-4 ${smaller}`}>
      {books.map((item) => (
        <ProductCard key={item.id} book={item} isSmaller />
      ))}
    </div>
  );
}
