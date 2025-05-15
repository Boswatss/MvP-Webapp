
import React, { useState } from "react";
import menuData from "../data/menu";

const MenuSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center mt-6 mb-10">
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mb-8 px-6 py-3 bg-highlight rounded-full shadow hover:scale-105 transition-transform text-lg font-semibold font-kanit text-gray-900 hover:bg-highlight/90 focus:outline-none focus:ring-2 focus:ring-orange-200 duration-200"
        >
          ดูเมนู&nbsp;⭣
        </button>
      )}

      {/* Animated Menu Grid */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          open
            ? "max-h-[1000px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-90 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 md:px-0">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-card hover:shadow-2xl transition-all duration-200 hover:scale-105 flex flex-col items-center p-4 mb-3 animate-fade-in"
            >
              <img
                src={item.img}
                alt={item.nameEN}
                className="w-24 h-24 rounded-full object-cover shadow mb-4 ring-1 ring-gray-200"
                loading="lazy"
              />
              <div className="text-md font-kanit text-gray-900 text-center">{item.nameTH}</div>
              <div className="text-sm text-gray-500 font-prompt text-center mt-1">{item.nameEN}</div>
            </div>
          ))}
        </div>
        {/* Hide Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-3 bg-gray-200 rounded-full transition hover:bg-gray-300 shadow text-md font-kanit text-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-100 duration-200"
          >
            ซ่อนเมนู&nbsp;⤴
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
