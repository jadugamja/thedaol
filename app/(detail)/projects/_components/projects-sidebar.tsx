"use client";

import Sidebar from "@/components/layout/sidebar";
import { PROJECTS_MENU } from "@/constants/menu";
import { usePathname } from "next/navigation";

export default function ProjectsSidebar() {
  const pathname = usePathname();

  return <Sidebar title="Projects" menu={PROJECTS_MENU} current={pathname} />;
}
