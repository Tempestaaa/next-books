import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatUSD } from "@/lib/utils";
import { Book } from "@/types/book.type";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: Book;
  isSmaller?: boolean;
};

export default function ProductCard({ book, isSmaller = false }: Props) {
  return (
    <div className="rounded overflow-hidden relative shadow">
      <section
        className={`bg-gradient-to-b from-muted to-background max-w-80 ${
          isSmaller ? "h-80" : "h-100"
        } rounded mx-auto flex-center justify-center-safe overflow-hidden`}
      >
        <Link
          href={`/shop/${book.slug}`}
          className="size-4/5 max-w-60 block relative mx-auto"
        >
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="rounded"
          />
        </Link>
      </section>

      <section className="p-4 flex flex-col gap-1 relative">
        {book.featured && (
          <div className="px-2 py-0.5 bg-green-600/30 rounded w-fit flex-center gap-2 absolute -top-2">
            <div className="bg-green-600 size-2 rounded-full" />
            <p className="text-xs">Featured</p>
          </div>
        )}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="w-fit">
              <header className="font-heading line-clamp-1 text-xl hover:underline underline-offset-2 text-left">
                {book.title}
              </header>
            </TooltipTrigger>
            <TooltipContent>{book.title}</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="h-[1px] bg-muted mb-2" />

        <div className="flex items-end-safe justify-between gap-4">
          <div>
            <p className="text-sm font-heading">Price</p>

            <div className="space-x-2">
              <span className="text-xl">{formatUSD(book.price)}</span>
              {book.salePrice && (
                <span className="text-muted">
                  <s>{formatUSD(book.salePrice)}</s>
                </span>
              )}
            </div>
          </div>

          <Button className="!px-4">
            <ShoppingCartIcon />
          </Button>
        </div>
      </section>
    </div>
  );
}
