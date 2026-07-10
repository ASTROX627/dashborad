import { http, HttpResponse } from "msw";
import { mockCourses, mockPosts } from "./data";
export const handlers = [
  http.get(
    "https://api.classbon.com/api/courses/newest/:count",
    ({ params }) => {
      const count = Number(params.count);
      return HttpResponse.json(mockCourses.slice(0, count));
    },
  ),

  http.get("https://api.classbon.com/api/blog/newest/:count", ({ params }) => {
    const count = Number(params.count);
    return HttpResponse.json(mockPosts.slice(0, count));
  }),
];
