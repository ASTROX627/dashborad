// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { mockCourses, mockPosts } from "./data";
import { API_URL } from "@/configs/global";

export const handlers = [
  http.get(
    `${API_URL}/courses/newest/:count`,
    ({ params }) => {
      const count = Number(params.count);
      return HttpResponse.json(mockCourses.slice(0, count));
    },
  ),

  http.get(`${API_URL}/blog/newest/:count`, ({ params }) => {
    const count = Number(params.count);
    return HttpResponse.json(mockPosts.slice(0, count));
  }),
];
