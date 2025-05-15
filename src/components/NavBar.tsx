
import React from "react";

const NavBar = () => (
  <nav className="w-full flex justify-end items-center py-4 px-6 md:px-10 bg-white shadow-sm sticky top-0 z-30">
    <div className="flex items-center">
      {/* Logo placeholder, replace src with real logo if uploaded */}
      <img
        src="/placeholder.svg"
        alt="Logo"
        className="w-12 h-12 object-cover rounded-full shadow-md border border-gray-100"
      />
    </div>
  </nav>
);

export default NavBar;
