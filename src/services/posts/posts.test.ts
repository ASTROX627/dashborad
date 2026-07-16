import { mockPosts } from "@/mocks/data";
import { getNewestPosts } from "./posts";
import { http, HttpResponse } from "msw";
import { server } from "@/mocks/server";
import { API_URL } from "@/configs/global";

describe("getNewestPosts", () => {
  it("should return an array of BlogPostSummary Objects", async () => {
    const result = await getNewestPosts(2);
    expect(result).toHaveLength(2);
    expect(result).toEqual(mockPosts.slice(0, 2));
  });

  it("should throw an error if server returns an error", async () => {
    server.use(
      http.get(
        `${API_URL}/blog/newest/:count`,
        () => new HttpResponse(null, { status: 500 }),
      ),
    );

    await expect(getNewestPosts(2)).rejects.toThrow();
  });
});
