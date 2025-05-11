"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function FilterByPrice() {
  return (
    <AccordionItem value="price">
      <AccordionTrigger>Price</AccordionTrigger>

      <AccordionContent className="h-16 grid-center">
        <RangeSlider defaultValue={[0, 100]} />
      </AccordionContent>
    </AccordionItem>
  );
}
