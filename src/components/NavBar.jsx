import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 z-50 bg-surface transition-all duration-300
        ${scrolled ? "sticky shadow-md" : "relative"}
        ${scrolled ? "bg-surfaceDark" : "bg-surface"}
      `}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-5 px-10 lg:px-5">
        <Logo />
        <div className="flex items-center gap-7">
          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
