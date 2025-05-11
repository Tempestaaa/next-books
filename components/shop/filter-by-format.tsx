import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { FORMATS } from "@/types/book.type";

export default function FilterByFormat() {
  return (
    <AccordionItem value="format">
      <AccordionTrigger>Format</AccordionTrigger>

      <AccordionContent>
        {FORMATS.map((item) => (
          <label key={item} className="flex-center gap-2 cursor-pointer py-0.5">
            <Checkbox />
            <p>{item}</p>
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
