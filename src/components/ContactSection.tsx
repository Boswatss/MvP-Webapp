
const CONTACT = {
  phone: "098-765-4321",
  address: "123/4 ถนนพระราม 4 แขวงมหาพฤฒาราม เขตบางรัก กรุงเทพฯ 10500",
  hours: [
    { days: "Mon–Fri", time: "9:00–18:00" },
    { days: "Sat–Sun", time: "10:00–17:00" },
  ],
};

const ContactSection = () => (
  <section className="container my-10 md:my-14 max-w-xl">
    <h2 className="text-xl md:text-2xl font-bold mb-2 font-kanit text-gray-900">
      ติดต่อเรา / Contact
    </h2>
    <div className="bg-white rounded-xl shadow-card p-6 text-gray-700 font-prompt animate-fade-in">
      <div className="mb-4">
        <span className="block font-semibold font-kanit">โทรศัพท์</span>
        <a
          href={`tel:${CONTACT.phone}`}
          className="text-highlight hover:underline hover:text-orange-600 transition"
        >
          {CONTACT.phone}
        </a>
      </div>
      <div className="mb-4">
        <span className="block font-semibold font-kanit">ที่อยู่</span>
        <span>{CONTACT.address}</span>
      </div>
      <div>
        <span className="block font-semibold font-kanit mb-1">เวลาทำการ</span>
        <ul className="list-disc ml-6">
          {CONTACT.hours.map((h, idx) => (
            <li key={idx} className="text-sm font-prompt">
              <span className="font-medium">{h.days}:</span> {h.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ContactSection;
