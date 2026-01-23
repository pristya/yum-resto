import React from "react";

type Product = {
  id: number;
  title: string;
  desc?: string;
  img: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Ikan Bakar Sambal Terasi",
    desc: "Ikan bakar bumbu rempah autentik, disajikan lengkap dengan sambal terasi pedas, irisan timun, dan tomat segar.",
    img: "/menu/main course/ikan bakar.jpg",
    price: 45000,
    options: [
      { title: "Nasi Putih", additionalPrice: 5000 },
      { title: "Ekstra Sambal", additionalPrice: 3000 },
    ],
  },
  {
    id: 2,
    title: "Sirloin Steak Grilled",
    desc: "Daging steak premium dipanggang sempurna dengan butter herb, disajikan dengan rosemary, jamur, dan tomat ceri.",
    img: "/menu/main course/steak.jpg",
    price: 85000,
    options: [
      { title: "Medium Rare", additionalPrice: 0 },
      { title: "Well Done", additionalPrice: 0 },
    ],
  },
  {
    id: 3,
    title: "Nasi Goreng Spesial Sate",
    desc: "Nasi goreng bumbu pilihan dengan topping telur mata sapi, sate ayam, dan tumisan daging lada hitam.",
    img: "/menu/main course/nasi goreng.jpg",
    price: 35000,
    options: [{ title: "Ekstra Telur", additionalPrice: 5000 }],
  },
  {
    id: 4,
    title: "Ayam Bakar Taliwang",
    desc: "Potongan ayam pilihan yang dipanggang dengan bumbu pedas manis hingga meresap ke tulang.",
    img: "/menu/main course/ayam bakar.jpg",
    price: 28000,
    options: [
      { title: "Paha", additionalPrice: 0 },
      { title: "Dada", additionalPrice: 0 },
    ],
  },
  {
    id: 5,
    title: "Spaghetti Bolognese",
    desc: "Pasta spaghetti dengan saus tomat daging cincang yang melimpah dan taburan keju parmesan.",
    img: "/menu/main course/spaghetti.jpg",
    price: 32000,
    options: [{ title: "Ekstra Keju", additionalPrice: 7000 }],
  },
  {
    id: 6,
    title: "Spaghetti Carbonara Creamy",
    desc: "Pasta creamy dengan campuran daging asap (smoked beef) dan bumbu khas Italia yang gurih.",
    img: "/menu/main course/carbonara.jpg",
    price: 38000,
    options: [{ title: "Ekstra Smoked Beef", additionalPrice: 8000 }],
  },
  {
    id: 7,
    title: "Garden Salad Fresh",
    desc: "Campuran sayuran segar mulai dari selada, jagung manis, paprika, bawang bombay, dan timun.",
    img: "/menu/appetizer/salad.jpg",
    price: 25000,
    options: [
      { title: "Roasted Sesame Dressing", additionalPrice: 0 },
      { title: "Mayonnaise", additionalPrice: 0 },
    ],
  },
  {
    id: 8,
    title: "Kue Sus Vla Vanilla",
    desc: "Kue sus renyah di luar dan lembut di dalam dengan isian vla vanilla manis dan taburan gula halus.",
    img: "/menu/dessert/kue sus.jpg",
    price: 15000,
    options: [
      { title: "Isi 3 Pcs", additionalPrice: 0 },
      { title: "Isi 6 Pcs", additionalPrice: 12000 },
    ],
  },
  {
    id: 9,
    title: "Pisang Goreng Wijen",
    desc: "Camilan pisang goreng krispi yang cocok dinikmati bersama kopi atau teh hangat.",
    img: "/menu/appetizer/pisang goreng.jpg",
    price: 12000,
    options: [{ title: "Ekstra Cokelat", additionalPrice: 3000 }],
  },
  {
    id: 10,
    title: "French Fries Cheese",
    desc: "Kentang goreng renyah dengan taburan keju parmesan bubuk di atasnya.",
    img: "/menu/side dish/kentang goreng.jpg",
    price: 18000,
    options: [
      { title: "Saus Sambal", additionalPrice: 0 },
      { title: "Saus Keju", additionalPrice: 5000 },
    ],
  },
  {
    id: 11,
    title: "Es Cendol Kacang Merah",
    desc: "Minuman segar tradisional dengan cendol, santan gurih, gula aren, dan topping kacang merah.",
    img: "/menu/dessert/es cendol.jpg",
    price: 15000,
    options: [{ title: "Tambah Es Serut", additionalPrice: 2000 }],
  },
  {
    id: 12,
    title: "Matcha Latte Ice",
    desc: "Perpaduan teh hijau Jepang premium dengan susu segar dingin yang sangat creamy.",
    img: "/menu/drink/matcha latte.jpg",
    price: 22000,
    options: [{ title: "Less Sugar", additionalPrice: 0 }],
  },
  {
    id: 13,
    title: "Thai Tea Authentic",
    desc: "Teh Thailand asli dengan campuran susu kental manis, memiliki aroma yang khas dan segar.",
    img: "/menu/drink/thai tea.jpg",
    price: 18000,
    options: [{ title: "Large Size", additionalPrice: 5000 }],
  },
  {
    id: 14,
    title: "Iced Lemon Tea",
    desc: "Minuman teh segar dengan perasan jeruk lemon asli dan irisan lemon segar.",
    img: "/menu/drink/lemon tea.jpg",
    price: 12000,
    options: [{ title: "Tanpa Es Batu", additionalPrice: 0 }],
  },
  {
    id: 15,
    title: "Aneka Jus Buah Segar",
    desc: "Pilihan jus dari buah-buahan segar pilihan seperti alpukat, jambu, dan jeruk.",
    img: "/menu/drink/jus buah.jpg",
    price: 15000,
    options: [{ title: "Tanpa Gula", additionalPrice: 0 }],
  },
  {
    id: 16,
    title: "Es Krim",
    desc: "Es krim chocolate lembut dengan tekstur yang padat, cocok sebagai hidangan penutup.",
    img: "/menu/dessert/es krim.jpg",
    price: 20000,
    options: [{ title: "Tambah Topping Cokelat", additionalPrice: 3000 }],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Ikan Bakar Sambal Terasi",
  desc: "Ikan bakar bumbu rempah autentik, disajikan lengkap dengan sambal terasi pedas, irisan timun, dan tomat segar.",
  img: "/menu/main course/ikan bakar.jpg",
  price: 45000,
  options: [
    { title: "Nasi Putih", additionalPrice: 5000 },
    { title: "Ekstra Sambal", additionalPrice: 3000 },
  ],
};
