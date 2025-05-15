
const MAP_EMBED_LINK =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.5634913132653!2d100.73196488360036!3d14.043869390462842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7976827ca2b9%3A0xdf02fb6fa271b043!2z4LiC4LmJ4Liy4Lin4Lir4Lih4Li54LiX4Lit4LiUIE1WUA!5e0!3m2!1sen!2sth!4v1747336622078!5m2!1sen!2sth";

const MAP_ADDRESS = "ข้าง7-11 ซอยตะวันออก16 ตำบลคลองหก อำเภอคลองหลวง จังหวัดปทุมธานี 12120";

const Map = () => (
  <section className="container my-10 md:my-14 flex flex-col md:flex-row items-center md:space-x-8">
    <div className="w-full md:w-2/3 shadow-lg rounded-xl overflow-hidden h-64 md:h-80 mb-4 md:mb-0 animate-fade-in">
      <iframe
        src={MAP_EMBED_LINK}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ข้าวหมูทอด MvP Location"
        className="w-full h-full"
      ></iframe>
    </div>
    <div className="md:min-w-[240px] md:w-1/3 flex flex-col items-start">
      <span className="text-highlight font-prompt font-semibold uppercase mb-2">
        Our Location
      </span>
      <div className="text-gray-700 font-kanit text-lg mb-1">
        ข้าวหมูทอด MvP
      </div>
      <div className="text-gray-500 font-prompt text-base mb-3">{MAP_ADDRESS}</div>
      <a
        className="text-highlight underline hover:text-orange-500 transition"
        href="https://goo.gl/maps/5CFBfZT1TB4xknMH6"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </div>
  </section>
);

export default Map;
