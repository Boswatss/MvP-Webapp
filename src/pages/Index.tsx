
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import MenuPreview from "../components/MenuPreview";
import Menu from "../components/Menu";
import Map from "../components/Map";
import InfoSection from "../components/InfoSection";
import ContactSection from "../components/ContactSection";
import OrderChannels from "../components/OrderChannels";

const Index = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = () => {
    // Scroll to the "full menu" section
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar onMenuClick={handleMenuClick} />
      <main className="flex-1 flex flex-col gap-8 lg:gap-12 py-6">
        <MenuPreview />
        <div ref={menuRef}>
          <Menu />
        </div>
        <Map />
        <InfoSection />
        <ContactSection />
        <OrderChannels />
      </main>
      <footer className="w-full border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ข้าวหมูทอด MvP. Crafted with <span className="text-highlight">❤️</span> in Bangkok.
      </footer>
    </div>
  );
};

export default Index;
