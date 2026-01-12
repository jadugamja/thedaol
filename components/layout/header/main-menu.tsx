import Link from "next/link";

const MAIN_MENU_ITEMS = [
  { href: "/company/about", label: "Company" },
  { href: "/business/ai", label: "Business" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function MainMenu() {
  return (
    <nav className="py-3 min-h-9 flex items-center">
      <ul className="flex items-center space-x-2">
        {MAIN_MENU_ITEMS.map(({ href, label }) => (
          <MainMenuLink key={label} href={href} label={label} />
        ))}
      </ul>
    </nav>
  )
}

const MainMenuLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="nav-item">
      <Link href={href} className="nav-link">
        {label}
      </Link>
    </li>
  )
}