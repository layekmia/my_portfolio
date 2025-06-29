import { useEffect, useState } from "react";
import { FaHome, FaUser, FaCode, FaBlog, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { icon: <FaHome />, to: "home", type: "scroll", label: "Home" },
  { icon: <FaUser />, to: "about", type: "scroll", label: "About" },
  { icon: <FaCode />, to: "work", type: "scroll", label: "Work" },
  { icon: <FaEnvelope />, to: "contact", type: "scroll", label: "Contact" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const scrollItems = navItems.filter((item) => item.type === "scroll");
    const sectionIds = scrollItems.map((item) => item.to);

    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="fixed top-1/2 left-2 md:left-5 lg:left-8 -translate-y-1/2 flex flex-col gap-4 z-50">
      {navItems.map((item, idx) => (
        <ScrollLink
          key={idx}
          to={item.to}
          smooth={true}
          duration={500}
          offset={-70}
          title={item.label}
          onClick={() => setActiveSection(item.to)} // 👈 update on click
          className={`p-3 rounded-full transition-all cursor-pointer ${
            activeSection === item.to
              ? "bg-textAccent text-black"
              : "bg-surfaceDark text-textPrimary hover:bg-textAccent hover:text-black"
          }`}
        >
          {item.icon}
        </ScrollLink>
      ))}
    </div>
  );
};

export default Sidebar;
