import ProductCard from "@/components/product/product-card";
import books from "@/data/books";

export default function ProductLayout() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
      {books.map((item) => (
        <ProductCard key={item.id} book={item} isSmaller />
      ))}
    </div>
  );
}
