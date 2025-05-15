
import React from "react";

type NavbarProps = {
  onMenuClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => (
  <nav className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/80 sticky top-0 z-20">
    <button
      className="text-base font-medium px-4 py-2 rounded-full bg-highlight text-gray-800 shadow-md hover:scale-105 transition font-kanit"
      onClick={onMenuClick}
    >
      ดูเมนู
    </button>
    {/* Right-aligned logo placeholder */}
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center ml-3">
        <img
          src="/placeholder.svg"
          alt="Restaurant Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </nav>
);

export default Navbar;
