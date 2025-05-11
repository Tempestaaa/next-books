import ProductGrid from "@/components/product/product-grid";

type Props = {
  header: string;
};

export default function DisplayGrid({ header }: Props) {
  return (
    <article className="flex flex-col gap-6">
      <header className="font-heading text-6xl">{header}</header>

      <ProductGrid />
    </article>
  );
}
