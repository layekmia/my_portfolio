import NavMenu from "./NavMenu";
import { LuDownload } from "react-icons/lu";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="bg-surface">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-5">
       <Logo/>
        <div className="flex items-center gap-7">
          <NavMenu />
          <a href="/resume.pdf" download='Layek_Resume.pdf' className="py-2 px-5 rounded-full text-back bg-textPrimary flex items-center gap-[2px] max-md:hidden">
            Download CV
            <span>
              <LuDownload />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
