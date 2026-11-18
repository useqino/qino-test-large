import { PostsIndex } from "@/components/posts/posts-index";
import { getPostsPage } from "@/lib/get-posts-page";

type PostsPageProps = {
  params: Promise<{ page: string }>;
};

export const dynamicParams = false;

// Page 1 lives at /posts.
export async function generateStaticParams() {
  const { pageCount } = await getPostsPage(1);
  return Array.from({ length: pageCount - 1 }, (_, i) => ({
    page: `${i + 2}`,
  }));
}

export default async function PostsPage({ params }: PostsPageProps) {
  const { page } = await params;
  return <PostsIndex page={Number(page)} />;
}
