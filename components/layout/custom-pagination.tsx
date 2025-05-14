import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {};

export default function CustomPagination({}: Props) {
  return (
    <Pagination className="h-fit">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-foreground text-background border-2 border-foreground hover:text-foreground hover:bg-background"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
