"use client";

import { useEffect } from "react";

export function MswProvider() {
  useEffect(() => {
    async function init() {
      if (process.env.NEXT_PUBLIC_MSW !== "true") {
        return;
      }

      const { worker } = await import("@/mocks/browser");

      await worker.start({
        onUnhandledRequest: "bypass",
      });
    }

    init();
  }, []);

  return null;
}
