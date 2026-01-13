import Link from "next/link";

const SUB_MENU_ITEMS = {
  company: [
    { href: "/company/about", label: "회사소개" },
    { href: "/company/history", label: "연혁" },
    { href: "/company/organization", label: "조직도" },
    { href: "/company/partners", label: "협력사" },
  ],
  business: [
    { href: "/business/ai", label: "AI Solution" },
    { href: "/business/si-sm", label: "SI / SM" },
    { href: "/business/consulting", label: "IT Consulting" },
  ],
};

export default function SubMenu({
  isVisible,
  onLinkClick,
}: {
  isVisible: boolean;
  onLinkClick: () => void;
}) {
  return (
    <div
      className={`submenu-container w-full ${
        !isVisible ? "opacity-0 max-h-0" : ""
      }`}
    >
      <div className="flex items-start gap-12 pb-6 pl-2">
        <div className="submenu-section">
          <ul className="submenu-list">
            {SUB_MENU_ITEMS["company"].map(({ href, label }) => (
              <SubMenuLink
                key={label}
                href={href}
                label={label}
                onClick={onLinkClick}
              />
            ))}
          </ul>
        </div>

        <div className="submenu-section">
          <ul className="submenu-list">
            {SUB_MENU_ITEMS["business"].map(({ href, label }) => (
              <SubMenuLink
                key={label}
                href={href}
                label={label}
                onClick={onLinkClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const SubMenuLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <li>
      <Link href={href} className="submenu-item" onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};
