import { API_MOCKING_STATUS, API_URL } from "@/configs/global";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";

const isMocking = API_MOCKING_STATUS === "enabled";

export async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
  const res = await fetch(
    `${API_URL}/blog/newest/${count}`,
    isMocking ? { cache: "no-store" } : { next: { revalidate: 24 * 60 * 60 } },
  );
  return res.json();
}
