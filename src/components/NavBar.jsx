import NavMenu from "./NavMenu";
import { LuDownload } from "react-icons/lu";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="bg-surface">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-5">
        <Logo />
        <div className="flex items-center gap-7">
          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
