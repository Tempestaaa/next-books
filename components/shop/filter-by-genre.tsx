import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import bookGenres from "@/data/genres";

export default function FilterByGenre() {
  return (
    <AccordionItem value="genre">
      <AccordionTrigger>Genre</AccordionTrigger>

      <AccordionContent>
        {bookGenres.map((item) => (
          <label
            key={item.id}
            className="flex-center gap-2 cursor-pointer py-0.5"
          >
            <Checkbox />
            <p>{item.name}</p>
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
