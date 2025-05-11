import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer border-2 border-transparent duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-xs hover:bg-background hover:text-foreground border-foreground",
        destructive:
          "bg-destructive text-background shadow-xs hover:bg-background hover:text-destructive hover:border-destructive focus-visible:ring-destructive/20",
        outline:
          "border-muted bg-background shadow-xs hover:bg-foreground hover:text-background hover:border-foreground",
        ghost: "hover:bg-foreground hover:text-background",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
