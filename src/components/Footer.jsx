import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-gray-400 text-sm py-4 px-6 border-t border-teal-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left">
          © 2025 MyPortfolio. All rights reserved.
        </div>

        {/* Center Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-teal-400 transition">Terms & Conditions</a>
        </div>

        {/* Right Side: Social + Credit */}
        <div className="flex items-center gap-4">
          {/* Icons */}
          <a href="#" className="bg-teal-400 text-black p-2 rounded-full hover:bg-teal-300 transition">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="bg-teal-400 text-black p-2 rounded-full hover:bg-teal-300 transition">
            <FaTwitter size={14} />
          </a>
          {/* Credit */}
          <span className="ml-2 text-sm">
            Built by <a href="#" className="text-teal-400 hover:underline">YourName</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
