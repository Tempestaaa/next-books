import StarRating from "@/components/product/star-rating";
import { Button } from "@/components/ui/button";
import { findAuthor, findGenres, findPublisher } from "@/lib/books";
import { formatDate, formatUSD } from "@/lib/utils";
import { Book, FORMATS } from "@/types/book.type";
import { DotIcon, ShoppingCartIcon, StarIcon } from "lucide-react";

type Props = {
  book: Book;
};

export default function DetailsRight({ book }: Props) {
  const author = findAuthor(book.authorId);
  const publisher = findPublisher(book.publisherId);
  const genres = findGenres(book.genreIds);

  return (
    <section className="flex-1 flex flex-col gap-2">
      {/* Title */}
      <header className="font-heading font-bold text-4xl">{book.title}</header>

      {/* Author & Average rating */}
      <div className="flex-center gap-2">
        <p className="font-heading text-xl">{author?.name}</p>

        <DotIcon className="text-muted" />

        <StarRating rating={book.averageRating} showScore />
      </div>

      {/* Genres */}
      <div className="flex-center gap-2">
        {genres.map((item) => (
          <div
            key={item.id}
            className="py-1 px-0.5 text-foreground/70 text-sm border-b-2 hover:text-foreground hover:border-foreground cursor-pointer duration-300"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="line-clamp-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae,
        necessitatibus eos illo excepturi inventore. Ullam aut ducimus
        cupiditate ipsa aspernatur? Veniam error magnam repellat esse recusandae
        incidunt minus libero tempore amet vitae, expedita impedit, praesentium
        iste sequi sint, id illo totam possimus delectus et quasi! Ut, atque
        perferendis, optio voluptatum, deserunt adipisci illo aliquid expedita
        nesciunt possimus omnis molestias aut facere reiciendis cum beatae animi
        quam facilis fugit est? Atque veniam necessitatibus porro nesciunt,
        exercitationem iste quibusdam distinctio quaerat?
      </p>

      {/* Extra information */}
      <div className="mt-2">
        <Information label="Publisher" value={publisher?.name} />
        <Information
          label="First publish"
          value={formatDate(book.publicationDate, "en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
        <Information label="ISBN" value={book.isbn} />
        <Information label="Language" value={book.language} />
        <Information label="Pages" value={book.pageCount} />
      </div>

      {/* Format */}
      <div className="flex-center gap-2">
        <span className="font-heading mr-6">Edition</span>
        {FORMATS.map((item) => (
          <div
            key={item}
            className={`px-2 py-1 rounded text-sm border-2 ${
              item === book.format &&
              "text-background bg-foreground border-foreground"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Price */}
      <div>
        <div className="font-heading">Price</div>
        <div className="text-4xl">
          <span>{formatUSD(book.price)}</span>
          {book.salePrice && (
            <span className="ml-4 text-2xl text-muted">
              <s>{formatUSD(book.salePrice)}</s>
            </span>
          )}
        </div>
      </div>

      <Button className="mt-auto w-fit !px-12 py-6">
        <ShoppingCartIcon />
        <span>Add to Cart</span>
      </Button>
    </section>
  );
}

const Information = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="flex-center py-0.5">
      <header className="w-40 font-heading">{label}</header>
      <p className="flex-1 text-sm text-foreground/70">{value}</p>
    </div>
  );
};
