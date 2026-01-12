import { MenuItem } from "@/lib/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar({
  title,
  menu,
  current
}: {
  title: string;
  menu?: MenuItem[];
  current?: string;
}) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="sticky top-28">
        <h3 className="text-lg font-bold text-primary dark:text-primary mb-6 font-display uppercase tracking-wider">
          {title}
        </h3>
        {menu && menu.length > 0 && (
          <>
            {/* separator */}
            <div className="w-8 h-0.5 bg-primary mb-6" />
            <ul className="space-y-4 font-medium text-sm text-gray-500">
              {menu.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    className={cn("block hover:text-primary dark:hover:text-primary transition-colors py-1",
                      current === href && "text-primary font-bold"
                    )}
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
