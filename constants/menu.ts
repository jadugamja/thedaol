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
