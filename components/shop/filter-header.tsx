"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function FilterHeader() {
  const searchParams = useSearchParams();

  return (
    <div className="flex-center gap-4 justify-between h-16">
      <header className="font-heading text-4xl flex-center gap-2">
        <p>Filters</p>
        {searchParams.size !== 0 && <span>({searchParams.size})</span>}
      </header>

      {searchParams.size !== 0 && (
        <Button variant="destructive" className="">
          Clear
        </Button>
      )}
    </div>
  );
}
