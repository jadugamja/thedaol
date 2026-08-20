export type MenuItem = {
  name: string;
  href: string;
};

export const COMPANY_MENU: MenuItem[] = [
  { name: "회사소개", href: "/company/about" },
  { name: "연혁", href: "/company/history" },
  { name: "조직도", href: "/company/organization" },
  { name: "협력사", href: "/company/partners" },
] as const;

export const BUSINESS_MENU: MenuItem[] = [
  { name: "AI Solution", href: "/business/ai" },
  { name: "SI / SM", href: "/business/si-sm" },
  { name: "IT Consulting", href: "/business/consulting" },
] as const;

export const PROJECTS_MENU: MenuItem[] = [
  { name: "Project Gallery", href: "/projects" },
  { name: "로컬 LLM", href: "/projects/local-llm" },
  { name: "AX Consulting", href: "/projects/ax-consulting" },
  { name: "마케팅 컨설팅", href: "/projects/marketing-consulting" },
  {
    name: "지방의회 의안관리 솔루션",
    href: "/projects/local-council-solution",
  },
] as const;
