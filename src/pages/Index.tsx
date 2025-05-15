import NavBar from "../components/NavBar";
import MenuSection from "../components/MenuSection";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Map from "../components/Map";
import InfoSection from "../components/InfoSection";
import ContactSection from "../components/ContactSection";
import OrderChannels from "../components/OrderChannels";

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col gap-8 lg:gap-12 py-6">
        <MenuSection />
        <section>
          <div className="w-full px-3 md:px-0">
            <InfoSection />
          </div>
        </section>
        <Menu />
        <Map />
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
