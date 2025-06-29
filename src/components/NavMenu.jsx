import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & close icons
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import Logo from "./Logo";

const navItem = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "About", href: "#about", type: "scroll" },
  { name: "Work", href: "#work", type: "scroll" },
  { name: "Blog", href: "/blogs", type: "route" },
  { name: "Contact", href: "#contact", type: "scroll" },
];

export default function NavMenu() {
  const [activeSection, setActiveSection] = useState("home"); // default active
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItem
      .filter((item) => item.type === "scroll")
      .map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation (optional)
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      {/* Desktop menu */}
      <nav className="hidden md:flex items-center gap-7 text-lg text-white">
        {navItem.map((item) =>
          item.type === "scroll" ? (
            <ScrollLink
              key={item.name}
              to={item.href.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-textAccent"
              className={`cursor-pointer transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-textAccent font-medium"
                  : ""
              }`}
            >
              {item.name}
            </ScrollLink>
          ) : (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive ? "text-textAccent font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          )
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-white text-[27px] focus:outline-none"
        aria-label="Open menu"
      >
        <HiMiniBars3BottomRight />
      </button>

      {/* Mobile side drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-4/5 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-xl focus:outline-none"
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        {/* Nav list vertical */}
        <ul className="flex flex-col gap-6 p-5 text-base">
          {navItem.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.name}
                to={item.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-textAccent"
                className={`cursor-pointer transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-textAccent font-semibold"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </ScrollLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors ${
                    isActive ? "text-textAccent font-semibold" : ""
                  }`
                }
                onClick={handleLinkClick}
              >
                {item.name}
              </NavLink>
            )
          )}
        </ul>
        <div className="px-4">
          <a
            href="/resume.pdf"
            download="Layek_Resume.pdf"
            className="py-2 px-5 rounded-full text-back bg-textPrimary flex items-center gap-[2px]md:hidden w-full text-center text-black justify-center"
            onClick={handleLinkClick}
          >
            Download CV
            <span>
              <LuDownload />
            </span>
          </a>
        </div>
      </div>

      {/* Overlay behind drawer when open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
