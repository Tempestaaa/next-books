"use client";

import CustomOptions from "@/components/shop/custom-options";
import { Options } from "@/types/common.type";
import { useSearchParams } from "next/navigation";

export default function RightHeader() {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre")?.split("-").join(" ");

  const sortOptions: Options[] = [
    {
      name: "Featured",
      value: "featured",
    },
    {
      name: "New released",
      value: "new",
    },
    {
      name: "Price: Low to High",
      value: "asc",
    },
    {
      name: "Price: High to Low",
      value: "desc",
    },
  ];

  return (
    <div className="flex-center gap-4 justify-between">
      <header className="font-heading text-4xl h-16 flex-center justify-center-safe">
        <p>{genre ?? "All products"}</p>
      </header>

      <CustomOptions array={sortOptions} />
    </div>
  );
}
