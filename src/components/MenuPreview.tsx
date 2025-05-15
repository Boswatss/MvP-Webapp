
import React from "react";
import menuData from "../data/menu";

const getPopularItems = () => {
  // Option 1: use a 'popular' flag; fallback: pick first 4 items from first categories
  // Prefer explicit flag if present
  let allPopular: any[] = [];
  menuData.forEach((cat) =>
    cat.items.forEach((item) => {
      if ((item as any).popular) allPopular.push({ ...item, cat });
    })
  );
  if (allPopular.length >= 4) {
    return allPopular.slice(0, 4);
  }
  // fallback: just first 4 in data order
  let fallback: any[] = [];
  for (const cat of menuData) {
    for (const item of cat.items) {
      fallback.push({ ...item, cat });
      if (fallback.length === 4) return fallback;
    }
  }
  return fallback;
};

const popularItems = getPopularItems();

const MenuPreview = () => (
  <section className="container my-8 max-w-3xl">
    <h2 className="font-kanit font-bold text-xl md:text-2xl text-gray-900 mb-4 text-center">
      เมนูแนะนำ / Popular Dishes
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {popularItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-card group p-3 flex flex-col items-center hover:shadow-2xl transition-all duration-200 hover:scale-105 animate-fade-in cursor-pointer"
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
          <div className="font-kanit text-center text-base text-gray-900">
            {item.nameTH}
          </div>
          <div className="text-xs text-gray-500 font-prompt text-center">
            {item.nameEN}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MenuPreview;
