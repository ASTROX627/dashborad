import { API_URL } from "@/configs/global";
import { getNewestCourses } from "./courses";
import { mockCourses } from "@/mocks/data";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("getNewestCourses", () => {
  it("should return an array of CourseSummary Objects", async () => {
    const result = await getNewestCourses(4);
    expect(result).toHaveLength(4);
    expect(result).toEqual(mockCourses.slice(0, 4));
  });

  it("should throw an error if server returns an error", async () => {
    server.use(
      http.get(
        `${API_URL}/courses/newest/:count`,
        () => new HttpResponse(null, { status: 500 }),
      ),
    );

    await expect(getNewestCourses(4)).rejects.toThrow();
  });
});
