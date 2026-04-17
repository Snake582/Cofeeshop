'use client';

import Link from "next/link";

const menu = [
  {
    title: "Cafés chauds",
    items: [
      { name: "Espresso", price: 1500 },
      { name: "Double Espresso", price: 2000 },
      { name: "Cappuccino", price: 2500 },
      { name: "Latte", price: 3000 },
      { name: "Macchiato", price: 2500 },
    ],
  },
  {
    title: "Cafés froids",
    items: [
      { name: "Iced Coffee", price: 2500 },
      { name: "Iced Latte", price: 3000 },
      { name: "Cold Brew", price: 3500 },
      { name: "Frappuccino", price: 4000 },
    ],
  },
  {
    title: "Spécialités",
    items: [
      { name: "Caramel Macchiato", price: 3500 },
      { name: "Vanilla Latte", price: 3000 },
      { name: "Mocha", price: 3000 },
    ],
  },
  {
    title: "Sans café",
    items: [
      { name: "Chocolat chaud", price: 2000 },
      { name: "Thé", price: 1500 },
      { name: "Lait chaud", price: 1000 },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4B2E2B] to-black text-white px-6 py-12">

      {/* Titre */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Notre Menu ☕
      </h1>

      {/* Sous-titre */}
      <p className="text-center text-gray-300 mt-3">
        Découvrez nos boissons préparées avec passion
      </p>

      {/* Menu */}
      <div className="max-w-3xl mx-auto mt-12 space-y-10">

        {menu.map((section, index) => (
          <div key={index}>

            {/* Titre catégorie */}
            <h2 className="text-2xl font-semibold border-b border-white/20 pb-2 mb-4">
              {section.title}
            </h2>

            {/* Liste */}
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-lg"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold text-[#C49A6C]">
                    {item.price} FCFA
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      {/* Bouton retour */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="px-6 py-3 bg-[#C49A6C] text-black rounded-lg hover:bg-[#a67c52] transition"
        >
          Retour à l&apos;accueil
        </Link>
      </div>

    </main>
  );
}