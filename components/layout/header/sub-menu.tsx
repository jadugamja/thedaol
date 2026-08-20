import { BUSINESS_MENU, COMPANY_MENU } from "@/constants/menu";
import Link from "next/link";

const SUB_MENU_SECTIONS = [
  { title: "Company", items: COMPANY_MENU },
  { title: "Business", items: BUSINESS_MENU },
] as const;

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
        {SUB_MENU_SECTIONS.map(({ title, items }) => (
          <div key={title} className="submenu-section">
            <ul className="submenu-list" aria-label={`${title} 하위 메뉴`}>
              {items.map(({ href, name }) => (
                <SubMenuLink
                  key={href}
                  href={href}
                  label={name}
                  onClick={onLinkClick}
                />
              ))}
            </ul>
          </div>
        ))}
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
