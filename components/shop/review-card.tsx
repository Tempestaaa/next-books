import StarRating from "@/components/product/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { DotIcon } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="flex gap-6 p-2 border-2 border-transparent hover:border-foreground rounded duration-300">
      <Avatar className="size-12 shadow-md">
        <AvatarImage />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>

      <div className="space-y-3 text-sm">
        <div className="flex-center gap-4 justify-between">
          <div className="flex flex-col">
            <div className="flex-center gap-4">
              <p className="font-heading text-base">Test user</p>
              <StarRating rating={4} size="small" />
            </div>

            <p className="text-muted">England</p>
          </div>

          <div className="flex-center text-muted">
            <DotIcon className="size-6" />
            <p>
              {formatDate(new Date(), "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <p className="line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aliquam
          dignissimos rerum est eum optio, voluptates sed molestiae, dolor
          veniam illo. Beatae adipisci laboriosam ex praesentium ducimus
          voluptas quas dignissimos dolor optio, veniam iste minima, vero
          explicabo? Alias laudantium possimus similique fugiat recusandae
          repellendus qui, ipsum quibusdam voluptatum dicta consectetur omnis
          eligendi labore doloribus ducimus ipsam sit minima quis officia ipsa.
          Aperiam illo quod animi quia, velit sapiente debitis esse temporibus
          dolore adipisci veritatis laboriosam enim ut? Itaque, possimus
          corrupti.
        </p>
      </div>
    </div>
  );
}
