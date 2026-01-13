import Link from "next/link";

const MAIN_MENU_ITEMS = [
  { href: "/company/about", label: "Company" },
  { href: "/business/ai", label: "Business" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function MainMenu({ onLinkClick } : { onLinkClick: () => void; }) {
  return (
    <nav className="py-3 min-h-9 flex items-center">
      <ul className="flex items-center space-x-2">
        {MAIN_MENU_ITEMS.map(({ href, label }) => (
          <MainMenuLink key={label} href={href} label={label} onClick={onLinkClick} />
        ))}
      </ul>
    </nav>
  )
}

const MainMenuLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void; }) => {
  return (
    <li className="nav-item">
      <Link href={href} className="nav-link" onClick={onClick}>
        {label}
      </Link>
    </li>
  )
}