import InteractiveRating from "@/components/product/interactive-rating";
import StarRating from "@/components/product/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function WriteReview() {
  return (
    <div className="space-y-8">
      <header className="font-heading text-2xl">Write review</header>

      <div className="flex gap-6">
        <Avatar className="size-12 shadow-md">
          <AvatarImage />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-4 flex-1">
          <Textarea placeholder="Type here" className="h-24 resize-none" />

          <div className="flex-center justify-between gap-4">
            <InteractiveRating />
            <Button className="px-8">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
