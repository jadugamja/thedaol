import Link from "next/link";

const SUB_MENU_ITEMS = {
  company: [
    { href: "/company/about", label: "회사소개" },
    { href: "/company/history", label: "연혁" },
    { href: "/company/organization", label: "조직도" },
    { href: "/company/partnership", label: "협력사" },
  ],
  business: [
    { href: "/business/ai", label: "AI Solution" },
    { href: "/business/si-sm", label: "SI / SM" },
    { href: "/business/consulting", label: "IT Consulting" },
  ],
};

export default function SubMenu() {
  return (
    <div className="submenu-container w-full">
      <div className="flex items-start gap-12 pb-6 pl-2">
        <div className="submenu-section">
          <ul className="submenu-list">
            {SUB_MENU_ITEMS["company"].map(({ href, label }) => (
              <SubMenuLink key={label} href={href} label={label} />
            ))}
          </ul>
        </div>

        <div className="submenu-section">
          <ul className="submenu-list">
            {SUB_MENU_ITEMS["business"].map(({ href, label }) => (
              <SubMenuLink key={label} href={href} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 

const SubMenuLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link href={href} className="submenu-item">
        {label}
      </Link>
    </li>
  )
}