
import React, { forwardRef } from "react";
import menuData from "../data/menu";

// Map English+TH headings per new requirement
const categoryOrder = [
  { id: "pork", nameTH: "เมนูหมู", nameEN: "Pork Dishes" },
  { id: "porkneck", nameTH: "เมนูคอหมูย่าง", nameEN: "Grilled Pork Neck Dishes" },
  { id: "chicken", nameTH: "เมนูไก่", nameEN: "Chicken Dishes" },
  { id: "jade-noodle", nameTH: "เมนูบะหมี่หยก", nameEN: "Jade Noodle Dishes" },
  { id: "mackerel", nameTH: "เมนูปลาทู", nameEN: "Mackerel Dishes" },
  { id: "omelette", nameTH: "เมนูไข่เจียว", nameEN: "Thai Omelette Dishes" },
  { id: "leng", nameTH: "เมนูเล้ง", nameEN: "Leng Soup Dishes" },
  { id: "soup", nameTH: "ซุป", nameEN: "Soup" },
  { id: "topping", nameTH: "ท็อปปิ้ง", nameEN: "Toppings" },
];

const Menu = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <section
    ref={ref as any}
    className="container my-10 md:my-14 animate-fade-in"
    id="full-menu"
  >
    <h2 className="text-xl md:text-2xl font-bold font-kanit text-gray-900 mb-7 text-center">
      เมนูร้าน / Full Menu
    </h2>
    {categoryOrder.map((catMeta) => {
      const category = menuData.find((c) => c.id === catMeta.id);
      if (!category) return null;
      return (
        <div key={category.id} className="mb-10">
          <div className="mb-2 flex items-baseline gap-2">
            <span className="font-kanit text-lg md:text-xl font-bold text-gray-800">
              📌 {catMeta.nameTH}
            </span>
            <span className="text-sm text-gray-500 font-prompt font-semibold ml-2">
              / {catMeta.nameEN}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-card group p-3 flex flex-col items-center hover:shadow-2xl transition-all duration-200 hover:scale-105 relative animate-fade-in cursor-pointer"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.nameEN}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mb-2 shadow group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 mb-2 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-400">
                    🍚
                  </div>
                )}
                <div className="font-kanit text-center text-base text-gray-900">{item.nameTH}</div>
                <div className="text-xs text-gray-500 font-prompt mt-0.5 text-center">{item.nameEN}</div>
              </div>
            ))}
          </div>
        </div>
      );
    })}
  </section>
));
Menu.displayName = "Menu";

export default Menu;
