"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import MainMenu from "./main-menu";
import SubMenu from "./sub-menu";
import { MdMenu, MdClose, MdChevronRight } from "react-icons/md";

const MOBILE_MENU_SECTIONS = [
  {
    title: "Company",
    items: [
      { label: "회사소개", href: "/company/about" },
      { label: "연혁", href: "/company/history" },
      { label: "조직도", href: "/company/organization" },
      { label: "협력사", href: "/company/partners" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "AI Solution", href: "/business/ai" },
      { label: "SI / SM", href: "/business/si-sm" },
      { label: "IT Consulting", href: "/business/consulting" },
    ],
  },
];

export default function Header() {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSubmenuVisible(false);
    setTimeout(() => setIsSubmenuVisible(true), 1000);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-nav fixed z-50 w-full bg-white/60 hover:bg-white backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between relative">
            <Logo onClick={handleLinkClick} />
            <div className="hidden md:flex flex-col items-start">
              <MainMenu onLinkClick={handleLinkClick} />
              <SubMenu isVisible={isSubmenuVisible} onLinkClick={handleLinkClick} />
            </div>

            <div className="flex items-center py-2 min-h-9 md:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="text-text-main hover:text-primary transition-colors"
                aria-label="메뉴 열기"
              >
                <MdMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={handleMobileMenuToggle}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-text-main">Menu</h2>
            <button
              onClick={handleMobileMenuToggle}
              className="text-text-main hover:text-primary transition-colors"
              aria-label="메뉴 닫기"
            >
              <MdClose className="text-2xl" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-6 text-text-main">
            <nav className="space-y-8">
              {MOBILE_MENU_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-bold tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={handleMobileLinkClick}
                          className="flex items-center justify-between text-text-main hover:text-primary transition-colors py-2"
                        >
                          <span>{item.label}</span>
                          <MdChevronRight className="text-xl opacity-30" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Additional Links */}
              <div>
                <ul className="space-y-3 pt-4 border-t border-gray-200">
                  <li>
                    <Link
                      href="/projects"
                      onClick={handleMobileLinkClick}
                      className="flex items-center justify-between text-text-main hover:text-primary transition-colors py-2 font-medium"
                    >
                      <span>Projects</span>
                      <MdChevronRight className="text-xl opacity-30" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={handleMobileLinkClick}
                      className="flex items-center justify-between text-text-main hover:text-primary transition-colors py-2 font-medium"
                    >
                      <span>Contact</span>
                      <MdChevronRight className="text-xl opacity-30" />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
