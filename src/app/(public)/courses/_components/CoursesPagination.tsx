import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface CoursesPaginationProps {
  totalPages: number;
  currentPage?: number;
  className?: string;
}

export function CoursesPagination({
  totalPages,
  currentPage = 1,
  className,
}: CoursesPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <PaginationRoot className={className}>
      <PaginationContent className="gap-6">
        <PaginationItem>
          <PaginationLink
            href={`?page=${previousPage}`}
            variant="outline"
            aria-label="Go to previous page"
          >
            <ChevronLeftIcon className="size-6 text-neutral-700" />
          </PaginationLink>
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <Link
              href={`?page=${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                "font-heading text-xl font-semibold tracking-[-0.2px]",
                page === currentPage ? "text-neutral-200" : "text-neutral-950"
              )}
            >
              {page}
            </Link>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink
            href={`?page=${nextPage}`}
            variant="outline"
            aria-label="Go to next page"
          >
            <ChevronRightIcon className="size-6" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
