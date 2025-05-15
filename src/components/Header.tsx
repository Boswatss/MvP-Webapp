
const Header = () => (
  <header className="w-full sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
    <div className="container flex items-center justify-between py-4 md:py-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 font-kanit">
          ข้าวหมูทอด <span className="text-highlight">MvP</span>
        </h1>
        <div className="text-xs md:text-sm text-gray-500 font-light -mt-1 font-prompt">
          MvP Pork Rice 
        </div>
      </div>
      {/* Optional: placeholder for future nav */}
    </div>
  </header>
);

export default Header;
