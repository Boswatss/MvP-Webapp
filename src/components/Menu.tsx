
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import menuData from "../data/menu";

const Menu = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className="container my-10 md:my-14">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold font-kanit text-gray-900">
          เมนู / Menu
        </h2>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-full px-4 py-1 bg-highlight text-gray-800 text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-150 animate-fade-in"
          aria-expanded={open}
        >
          {open ? (
            <>
              Hide&nbsp;
              <ChevronUp size={18} />
            </>
          ) : (
            <>
              Show&nbsp;
              <ChevronDown size={18} />
            </>
          )}
        </button>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        aria-hidden={!open}
      >
        {menuData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-card group p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-200 hover:scale-105 animate-fade-in"
          >
            <img
              src={item.img}
              alt={item.nameEN}
              className="w-24 h-24 object-cover rounded-full mb-4 shadow-md group-hover:scale-110 transition-transform"
              loading="lazy"
            />
            <div className="font-kanit text-md text-gray-900 text-center">
              {item.nameTH}
            </div>
            <div className="text-sm text-gray-500 font-prompt text-center mt-1">
              {item.nameEN}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
