
import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import menuData from "../data/menu";

const MenuSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="container mx-auto py-10">
    <h2 className="font-kanit font-bold text-xl md:text-2xl mb-8 text-gray-900 text-center">
      เมนู / Menu
    </h2>
    <div className="flex flex-col gap-10">
      {menuData.map((category) => (
        <div key={category.id}>
          <div className="mb-3 flex items-baseline gap-2">
            <span className="font-kanit font-bold text-lg md:text-xl text-gray-800">
              📌 {category.nameTH}
            </span>
            <span className="text-sm text-gray-500 font-prompt font-semibold ml-2">
              / {category.nameEN}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-card group p-3 flex flex-col items-center hover:shadow-2xl transition-all duration-200 hover:scale-105 relative"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.nameEN}
                    className="w-20 h-20 object-cover rounded-full mb-3 shadow-md group-hover:scale-110 transition-transform duration-150"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-20 h-20 mb-3 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-400">
                    🍚
                  </div>
                )}
                <div className="font-kanit text-center text-base text-gray-900">{item.nameTH}</div>
                <div className="text-xs text-gray-500 font-prompt mt-1 text-center">{item.nameEN}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
));

MenuSection.displayName = "MenuSection";

const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setShowMenu(true);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 130);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar onMenuClick={handleMenuClick} />
      <main className="flex-1 flex flex-col gap-8 lg:gap-12 py-6">
        {/* Add other homepage sections here if needed */}
        {showMenu && <MenuSection ref={menuRef} />}
      </main>
      <footer className="w-full border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ข้าวหมูทอด MvP. Crafted with <span className="text-highlight">❤️</span> in Bangkok.
      </footer>
    </div>
  );
};

export default Index;
