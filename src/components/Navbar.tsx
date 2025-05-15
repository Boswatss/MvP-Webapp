
import React from "react";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav className="w-full px-3 md:px-0 py-4 flex items-center justify-between sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
    {/* Left: View Menu Button */}
    <button
      className="rounded-full bg-highlight text-gray-900 font-semibold px-5 py-2 text-base shadow transition-transform hover:scale-105"
      onClick={onMenuClick}
    >
      ดูเมนู
    </button>
    {/* Center: (optional, space for future nav links) */}
    <div className="flex-1"></div>
    {/* Right: Logo */}
    <div className="flex-shrink-0 flex items-center">
      <img
        src="/placeholder.svg"
        alt="MvP Logo"
        className="w-10 h-10 object-cover rounded-full bg-gray-200 border border-gray-300 shadow-md"
      />
    </div>
  </nav>
);

export default Navbar;
