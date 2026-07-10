"use client";

import { IS_DEVELOPMENT } from "@/configs/global";
import { useEffect, useState } from "react";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(IS_DEVELOPMENT);

  useEffect(() => {
    async function init() {
      if (IS_DEVELOPMENT) {
        const { worker } = await import("@/mocks/browser");
        await worker.start({ onUnhandledRequest: "bypass" });
      }
      setReady(true);
    }
    init();
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
