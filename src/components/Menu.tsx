
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import menuData from "../data/menu";

const Menu = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="container my-10 md:my-14 animate-fade-in">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold font-kanit text-gray-900">
          เมนู / Menu
        </h2>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-full px-4 py-1 bg-highlight text-gray-800 text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-150"
          aria-expanded={open}
        >
          {open ? (
            <>
              ซ่อนเมนู <ChevronUp size={18} />
            </>
          ) : (
            <>
              แสดงเมนู <ChevronDown size={18} />
            </>
          )}
        </button>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        aria-hidden={!open}
      >
        {menuData.map((category) => (
          <div key={category.id} className="mb-8">
            <div className="mb-2 flex items-baseline gap-2">
              <span className="font-kanit text-lg md:text-xl font-bold text-gray-800">
                📌 {category.nameTH}
              </span>
              <span className="text-sm text-gray-500 font-prompt font-semibold ml-2">
                / {category.nameEN}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-card group p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-200 hover:scale-105 relative"
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.nameEN}
                      className="w-20 h-20 object-cover rounded-full mb-3 shadow-md group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-20 h-20 mb-3 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-400">
                      🍚
                    </div>
                  )}
                  <div className="font-kanit text-center text-base text-gray-900">{item.nameTH}</div>
                  <div className="text-xs text-gray-500 font-prompt mt-1 text-center mb-2">{item.nameEN}</div>
                  {item.desc && (
                    <div className="text-xs text-gray-500 font-prompt text-center mb-1">{item.desc}</div>
                  )}
                  {item.price && (
                    <div className="text-md font-bold text-highlight mt-auto pt-2">
                      {typeof item.price === "string"
                        ? `฿${item.price}`
                        : `฿${item.price.regular}${item.price.large ? ` / ฿${item.price.large}` : ""}`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
