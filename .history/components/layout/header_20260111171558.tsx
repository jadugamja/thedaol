export default function Header () {
  return (
          <header
        class="header-nav fixed z-50 w-full bg-white/50 hover:bg-white backdrop-blur-md border-b border-gray-200 transition-all duration-300"
      >
        <div class="max-w-5xl mx-auto px-6">
          <!-- Flex Container -->
          <div class="flex justify-between relative">
            <!-- Logo -->
            <div class="flex items-start py-3 min-h-9">
              <a class="flex items-center py-3 gap-2" href="/">
                <img
                  alt="Company Logo"
                  class="h-5 w-auto"
                  src="./images/logo-icon.png"
                />
                <div class="flex flex-col leading-none">
                  <img
                    alt="Company Logo"
                    class="h-4 w-auto"
                    src="./images/logo-black.png"
                  />
                </div>
              </a>
            </div>

            <div class="hidden md:flex flex-col items-start">
              <nav class="py-3 min-h-9 flex items-center">
                <ul class="flex items-center space-x-2">
                  <li class="nav-item">
                    <a href="company/about.html" class="nav-link">Company</a>
                  </li>
                  <li class="nav-item">
                    <a href="business/ai.html" class="nav-link">Business</a>
                  </li>
                  <li class="nav-item">
                    <a href="projects.html" class="nav-link">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>

              <div class="submenu-container w-full">
                <div class="flex items-start gap-12 pb-6 pl-2">
                  <div class="submenu-section">
                    <ul class="submenu-list">
                      <li>
                        <a href="company/about.html" class="submenu-item"
                          >회사소개</a
                        >
                      </li>
                      <li>
                        <a href="company/history.html" class="submenu-item"
                          >연혁</a
                        >
                      </li>
                      <li>
                        <a href="company/organization.html" class="submenu-item"
                          >조직도</a
                        >
                      </li>
                      <li>
                        <a href="company/partnership.html" class="submenu-item"
                          >협력사</a
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="submenu-section">
                    <ul class="submenu-list">
                      <li>
                        <a href="business/ai.html" class="submenu-item"
                          >AI Solution</a
                        >
                      </li>
                      <li>
                        <a href="business/si-sm.html" class="submenu-item"
                          >SI/SM</a
                        >
                      </li>
                      <li>
                        <a href="business/consulting.html" class="submenu-item"
                          >IT Consulting</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center py-2 min-h-9 md:hidden">
              <button
                class="text-text-main hover:text-primary transition-colors"
              >
                <span class="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

  );
}