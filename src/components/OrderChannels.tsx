
import { Facebook, ShoppingCart, Link } from "lucide-react";

const CHANNELS = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
    Icon: Facebook,
    accent: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
  {
    name: "Lineman",
    url: "https://food.lineman.com/",
    Icon: ShoppingCart,
    accent: "bg-green-100 text-green-700 hover:bg-green-200",
  },
  {
    name: "Robinhood",
    url: "https://www.robinhood.in.th/",
    Icon: ShoppingCart,
    accent: "bg-purple-100 text-purple-700 hover:bg-purple-200",
  },
  {
    name: "Shopee Food",
    url: "https://shopee.co.th/m/shopeefood",
    Icon: ShoppingCart,
    accent: "bg-orange-100 text-orange-700 hover:bg-orange-200",
  },
];

const OrderChannels = () => (
  <section className="container my-10 md:my-14 max-w-2xl">
    <h2 className="text-xl md:text-2xl font-bold mb-3 font-kanit text-gray-900">
      ช่องทางการสั่งซื้อ / Order Channels
    </h2>
    <div className="flex flex-wrap gap-4">
      {CHANNELS.map((ch) => (
        <a
          key={ch.name}
          href={ch.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-5 py-3 rounded-xl shadow-card ${ch.accent} font-prompt font-semibold text-base transition-all duration-150 hover:scale-105 hover:shadow-2xl focus-visible:ring-2 ring-highlight outline-none animate-fade-in`}
        >
          <ch.Icon size={22} strokeWidth={2} />
          {ch.name}
        </a>
      ))}
    </div>
  </section>
);

export default OrderChannels;
