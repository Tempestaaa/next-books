import { Book } from "@/types/book.type";
import Image from "next/image";

type Props = {
  book: Pick<Book, "coverImage">;
};

export default function DetailsLeft({ book }: Props) {
  const { coverImage } = book;

  return (
    <div className="w-1/3 space-y-4 shrink-0">
      <div className="relative w-[90%] h-140 rounded overflow-hidden shadow-md shadow-muted">
        <Image
          src={coverImage}
          alt="book's cover"
          fill
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
