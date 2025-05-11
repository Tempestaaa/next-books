import DetailsLeft from "@/components/product/details-left";
import DetailsRight from "@/components/product/details-right";
import { Book } from "@/types/book.type";

type Props = {
  book: Book;
};

export default function DetailsSection({ book }: Props) {
  return (
    <section className="flex gap-8">
      <DetailsLeft book={book} />
      <DetailsRight book={book} />
    </section>
  );
}
