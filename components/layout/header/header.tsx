import Logo from "./logo";
import MainMenu from "./main-menu";
import SubMenu from "./sub-menu";

export default function Header() {
  return (
    <header className="header-nav fixed z-50 w-full bg-white/60 hover:bg-white backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between relative">
          <Logo />
          <div className="hidden md:flex flex-col items-start">
            <MainMenu />
            <SubMenu />
          </div>

          <div className="flex items-center py-2 min-h-9 md:hidden">
            <button className="text-text-main hover:text-primary transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
