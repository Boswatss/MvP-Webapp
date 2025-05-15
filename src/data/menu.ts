
interface MenuItem {
  id: string;
  nameTH: string;
  nameEN: string;
  img?: string;
  desc?: string;
  price?: string | { regular: string; large?: string };
}

interface MenuCategory {
  id: string;
  nameTH: string;
  nameEN: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "pork",
    nameTH: "เมนูหมู",
    nameEN: "Pork Dishes",
    items: [
      {
        id: "pork-1",
        nameTH: "ข้าวหมูทอด MvP",
        nameEN: "MvP Signature Crispy Pork Rice",
        img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
        desc: "Crispy Thai-style pork, jasmine rice",
        price: "59",
      },
      {
        id: "pork-2",
        nameTH: "ข้าวตับกระเทียม",
        nameEN: "Stir-Fried Pork Liver with Garlic Rice",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
        price: "59",
      },
      {
        id: "pork-3",
        nameTH: "ข้าวตับกระเทียม + หมูทอด",
        nameEN: "Stir-Fried Liver + Crispy Pork Rice",
        img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80",
        price: "69",
      },
      {
        id: "pork-4",
        nameTH: "ข้าวยำหมูแซ่บมะนาวสด",
        nameEN: "Spicy Minced Pork with Fresh Lime Rice",
        price: "69",
      },
      {
        id: "pork-5",
        nameTH: "ข้าวซี่โครงหมูอบน้ำผึ้ง",
        nameEN: "Honey-Glazed Pork Ribs Rice",
        price: "79",
      },
      {
        id: "pork-6",
        nameTH: "ข้าวหมูทอดซอสน้ำผึ้ง",
        nameEN: "Crispy Pork with Honey Sauce Rice",
        price: "69",
      },
      {
        id: "pork-7",
        nameTH: "ข้าวหมูทอดซอสเขียวหวานโหระพากรอบ",
        nameEN: "Crispy Pork with Green Curry & Basil Rice",
        price: "69",
      },
      {
        id: "pork-8",
        nameTH: "ข้าวหมูทอดซอสพะแนง",
        nameEN: "Crispy Pork with Panang Curry Sauce Rice",
        price: "69",
      },
      {
        id: "pork-9",
        nameTH: "ข้าวหมูทอดซอสกระเทียม",
        nameEN: "Crispy Pork with Garlic Sauce Rice",
        price: "69",
      },
      {
        id: "pork-10",
        nameTH: "ข้าวหมูทอดซอสกะเพรากรอบ",
        nameEN: "Crispy Pork with Holy Basil Sauce Rice",
        price: "69",
      },
      {
        id: "pork-11",
        nameTH: "ชุดหมูทอดน้ำพริกปลาร้า + ผักสด",
        nameEN: "Crispy Pork with Fermented Fish Chili Paste & Veggies",
        price: "89",
      },
      {
        id: "pork-12",
        nameTH: "ชุดหมูทอดน้ำพริกกะปิ + ผักสด",
        nameEN: "Crispy Pork with Shrimp Paste Chili & Veggies",
        price: "89",
      },
    ],
  },
  {
    id: "porkneck",
    nameTH: "เมนูคอหมูย่าง",
    nameEN: "Grilled Pork Neck Dishes",
    items: [
      {
        id: "neck-1",
        nameTH: "ข้าวคอหมูย่างซอสกระเทียม",
        nameEN: "Grilled Pork Neck with Garlic Sauce Rice",
        price: "69",
      },
      {
        id: "neck-2",
        nameTH: "ข้าวคอหมูย่างซอสกะเพรากรอบ",
        nameEN: "Grilled Pork Neck with Holy Basil Sauce Rice",
        price: "69",
      },
      {
        id: "neck-3",
        nameTH: "ข้าวคอหมูย่าง + น้ำจิ้มแจ่ว",
        nameEN: "Grilled Pork Neck with Jaew Dip Rice",
        price: "69",
      },
      {
        id: "neck-4",
        nameTH: "ข้าวน้ำตกคอหมูย่าง",
        nameEN: "Nam Tok Grilled Pork Neck Rice",
        price: "69",
      },
    ],
  },
  {
    id: "chicken",
    nameTH: "เมนูไก่",
    nameEN: "Chicken Dishes",
    items: [
      {
        id: "chicken-1",
        nameTH: "ข้าวไก่ทอด",
        nameEN: "Fried Chicken Rice",
        price: "59",
      },
      {
        id: "chicken-2",
        nameTH: "ข้าวยำไก่แซ่บ",
        nameEN: "Spicy Minced Chicken Salad Rice",
        price: "59",
      },
      {
        id: "chicken-3",
        nameTH: "ข้าวไก่ทอดซอสกะเพรากรอบ",
        nameEN: "Fried Chicken with Holy Basil Sauce Rice",
        price: "69",
      },
      {
        id: "chicken-4",
        nameTH: "ข้าวไก่ทอดซอสกระเทียม",
        nameEN: "Fried Chicken with Garlic Sauce Rice",
        price: "69",
      },
      {
        id: "chicken-5",
        nameTH: "ข้าวไก่ทอดซอสพะแนง",
        nameEN: "Fried Chicken with Panang Curry Sauce Rice",
        price: "69",
      },
      {
        id: "chicken-6",
        nameTH: "ข้าวไก่ทอดซอสเขียวหวานโหระพากรอบ",
        nameEN: "Fried Chicken with Green Curry Basil Rice",
        price: "69",
      },
      {
        id: "chicken-7",
        nameTH: "ข้าวไก่ทอดซอสน้ำผึ้ง",
        nameEN: "Fried Chicken with Honey Sauce Rice",
        price: "69",
      },
    ],
  },
  {
    id: "jade-noodle",
    nameTH: "เมนูบะหมี่หยก",
    nameEN: "Jade Noodle Dishes",
    items: [
      {
        id: "jade-1",
        nameTH: "บะหมี่หยกซี่โครงหมูอบน้ำผึ้ง",
        nameEN: "Jade Noodles with Honey-Glazed Pork Ribs",
        price: "89",
      },
      {
        id: "jade-2",
        nameTH: "บะหมี่หยกหมูทอดซอสน้ำผึ้ง",
        nameEN: "Jade Noodles with Crispy Pork Honey Sauce",
        price: "89",
      },
      {
        id: "jade-3",
        nameTH: "บะหมี่หยกไก่ทอดซอสน้ำผึ้ง",
        nameEN: "Jade Noodles with Fried Chicken Honey Sauce",
        price: "89",
      },
    ],
  },
  {
    id: "mackerel",
    nameTH: "เมนูปลาทู",
    nameEN: "Mackerel Dishes",
    items: [
      {
        id: "mackerel-1",
        nameTH: "ข้าวปลาทูทอด + น้ำพริกกะปิ + ผักสด",
        nameEN: "Fried Mackerel with Shrimp Paste Chili & Veggies",
        price: "89",
      },
      {
        id: "mackerel-2",
        nameTH: "ข้าวปลาทูทอด + หมูทอด + น้ำพริกกะปิ + ผักสด",
        nameEN: "Fried Mackerel & Pork + Shrimp Paste Chili & Veggies",
        price: "99",
      },
    ],
  },
  {
    id: "omelette",
    nameTH: "เมนูไข่เจียว",
    nameEN: "Thai Omelette Dishes",
    items: [
      {
        id: "omelette-1",
        nameTH: "ข้าวไข่เจียวยำหมูแซ่บ",
        nameEN: "Omelette Rice with Spicy Pork Salad",
        price: "65",
      },
      {
        id: "omelette-2",
        nameTH: "ข้าวไข่เจียวหมูทอดซอสพะแนง",
        nameEN: "Omelette Rice with Crispy Pork Panang Sauce",
        price: "65",
      },
      {
        id: "omelette-3",
        nameTH: "ข้าวไข่เจียวหมูทอดซอสเขียวหวานโหระพากรอบ",
        nameEN: "Omelette Rice with Crispy Pork Green Curry Sauce",
        price: "65",
      },
      {
        id: "omelette-4",
        nameTH: "ข้าวไข่เจียวหมูทอด",
        nameEN: "Omelette Rice with Crispy Pork",
        price: "65",
      },
    ],
  },
  {
    id: "soup",
    nameTH: "ซุป",
    nameEN: "Soup",
    items: [
      {
        id: "soup-1",
        nameTH: "เล้งแซ่บ",
        nameEN: "Spicy Pork Bone Soup",
        price: "79",
      },
      {
        id: "soup-2",
        nameTH: "เล้งแซ่บหม้อไฟ",
        nameEN: "Spicy Pork Bone Soup (Hotpot)",
        price: "159",
      },
      {
        id: "soup-3",
        nameTH: "ต้มซุปเปอร์ขาไก่",
        nameEN: "Super Chicken Feet Soup",
        price: "79",
      },
      {
        id: "soup-4",
        nameTH: "ต้มซุปเปอร์ขาไก่หม้อไฟ",
        nameEN: "Super Chicken Feet Soup (Hotpot)",
        price: "159",
      },
    ],
  },
  {
    id: "topping",
    nameTH: "ท็อปปิ้ง",
    nameEN: "Toppings",
    items: [
      {
        id: "topping-1",
        nameTH: "ไข่ต้มมะตูม",
        nameEN: "Soft-Boiled Egg",
        price: "12",
      },
      {
        id: "topping-2",
        nameTH: "ไข่ดาว",
        nameEN: "Fried Egg",
        price: "12",
      },
      {
        id: "topping-3",
        nameTH: "ไข่เจียว",
        nameEN: "Omelette",
        price: "15",
      },
      {
        id: "topping-4",
        nameTH: "กุนเชียง",
        nameEN: "Chinese Sausage",
        price: "29",
      },
      {
        id: "topping-5",
        nameTH: "หมูยอ",
        nameEN: "Vietnamese Pork Sausage",
        price: "29",
      },
    ],
  },
];

export type { MenuItem, MenuCategory };
export default menuData;
