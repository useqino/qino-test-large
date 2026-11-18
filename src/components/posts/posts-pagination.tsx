import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PostsPaginationProps = {
  page: number;
  pageCount: number;
};

type PageItem = { type: "page"; page: number } | { type: "ellipsis"; after: number };

function getPageHref(page: number) {
  return page == 1 ? "/posts" : `/posts/page/${page}`;
}

// The first, last, and current pages with their neighbors. A gap of one page
// shows that page; longer gaps collapse into an ellipsis.
function getPageItems(page: number, pageCount: number) {
  const pages = [...new Set([1, page - 1, page, page + 1, pageCount])]
    .filter((p) => p >= 1 && p <= pageCount)
    .sort((a, b) => a - b);

  const items: Array<PageItem> = [];
  for (const [index, p] of pages.entries()) {
    const previous = pages[index - 1];
    if (previous != undefined && p - previous == 2) {
      items.push({ type: "page", page: previous + 1 });
    } else if (previous != undefined && p - previous > 2) {
      items.push({ type: "ellipsis", after: previous });
    }
    items.push({ type: "page", page: p });
  }
  return items;
}

export function PostsPagination({ page, pageCount }: PostsPaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getPageHref(page - 1)} />
          </PaginationItem>
        )}
        {getPageItems(page, pageCount).map((item) =>
          item.type == "page" ? (
            <PaginationItem key={item.page}>
              <PaginationLink
                href={getPageHref(item.page)}
                isActive={item.page == page}
              >
                {item.page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={`ellipsis-${item.after}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ),
        )}
        {page < pageCount && (
          <PaginationItem>
            <PaginationNext href={getPageHref(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
