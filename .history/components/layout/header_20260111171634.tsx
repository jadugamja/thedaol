export default function Header() {
  return (
    <header className="header-nav fixed z-50 w-full bg-white/50 hover:bg-white backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between relative">
          <div className="flex items-start py-3 min-h-9">
            <a className="flex items-center py-3 gap-2" href="/">
              <img
                alt="Company Logo"
                className="h-5 w-auto"
                src="./images/logo-icon.png"
              />
              <div className="flex flex-col leading-none">
                <img
                  alt="Company Logo"
                  className="h-4 w-auto"
                  src="./images/logo-black.png"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:flex flex-col items-start">
            <nav className="py-3 min-h-9 flex items-center">
              <ul className="flex items-center space-x-2">
                <li className="nav-item">
                  <a href="company/about.html" className="nav-link">
                    Company
                  </a>
                </li>
                <li className="nav-item">
                  <a href="business/ai.html" className="nav-link">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a href="projects.html" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="submenu-container w-full">
              <div className="flex items-start gap-12 pb-6 pl-2">
                <div className="submenu-section">
                  <ul className="submenu-list">
                    <li>
                      <a href="company/about.html" className="submenu-item">
                        회사소개
                      </a>
                    </li>
                    <li>
                      <a href="company/history.html" className="submenu-item">
                        연혁
                      </a>
                    </li>
                    <li>
                      <a
                        href="company/organization.html"
                        className="submenu-item"
                      >
                        조직도
                      </a>
                    </li>
                    <li>
                      <a
                        href="company/partnership.html"
                        className="submenu-item"
                      >
                        협력사
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="submenu-section">
                  <ul className="submenu-list">
                    <li>
                      <a href="business/ai.html" className="submenu-item">
                        AI Solution
                      </a>
                    </li>
                    <li>
                      <a href="business/si-sm.html" className="submenu-item">
                        SI/SM
                      </a>
                    </li>
                    <li>
                      <a
                        href="business/consulting.html"
                        className="submenu-item"
                      >
                        IT Consulting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
