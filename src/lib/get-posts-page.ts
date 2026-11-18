import { postCollection } from "../../qino/collections/posts";

export const POSTS_PER_PAGE = 24;

export function getPostsPage(page: number) {
  return postCollection.getPaginatedEntries(page, {
    view: "listing",
    perPage: POSTS_PER_PAGE,
  });
}
