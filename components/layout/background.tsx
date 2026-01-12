"use client";

import { usePathname } from "next/navigation";

export default function Background() {
  const pathname = usePathname();
  
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-linear-to-b from-surface-light via-white to-white -z-10" />
      <div className="absolute inset-0 z-10 opacity-30 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[40px_40px] bg-grid-mask-light" />
    </div>
  );
}