import ProductCard from "@/components/product/product-card";
import books from "@/data/books";

type Props = {
  size?: "sm" | "md" | "lg";
};

export default function ProductLayout({ size = "md" }: Props) {
  return (
    <div
      className={`grid gap-4 ${
        size === "sm"
          ? "grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]"
          : size === "md"
          ? "grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]"
          : "grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]"
      }`}
    >
      {books.map((item) => (
        <ProductCard key={item.id} book={item} isSmaller />
      ))}
    </div>
  );
}
