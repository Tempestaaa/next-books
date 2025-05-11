import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterByAvailability() {
  return (
    <AccordionItem value="availability">
      <AccordionTrigger>Availability</AccordionTrigger>

      <AccordionContent>
        <label className="flex-center gap-2 cursor-pointer">
          <Checkbox />
          <p>In stock</p>
        </label>
      </AccordionContent>
    </AccordionItem>
  );
}
