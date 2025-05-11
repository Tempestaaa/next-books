import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StarIcon } from "lucide-react";

export default function FilterByRating() {
  return (
    <AccordionItem value="rating">
      <AccordionTrigger>Rating</AccordionTrigger>

      <AccordionContent className="flex-center gap-0.5">
        {[...Array(5)].map((_, id) => (
          <div
            key={id}
            className="flex-center gap-1 text-transparent group cursor-pointer"
          >
            <StarIcon fill="var(--muted)" className="group-hover:hidden" />
            <StarIcon fill="var(--star)" className="hidden group-hover:block" />
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
