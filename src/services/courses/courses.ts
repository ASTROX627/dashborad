import { CourseSummary } from "@/types/course-summary.interface";

import {API_URL, API_MOCKING_STATUS} from "@/configs/global";

const isMocking = API_MOCKING_STATUS === "enabled";

export async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `${API_URL}/courses/newest/${count}`,
    isMocking ? { cache: "no-store" } : { next: { revalidate: 24 * 60 * 60 } },
  );

  return res.json();
}
