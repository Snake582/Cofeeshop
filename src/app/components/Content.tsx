'use client';

import Image from "next/image";
import Link from "next/link";

/* ---------------- TYPES ---------------- */
type Coffee = {
  name: string;
  image: string;
  description: string;
};

/* ---------------- DATA ---------------- */
const coffees: Coffee[] = [
  {
    name: "Espresso",
    image: "/closeup-classic-fresh-espresso-served-dark-surface.jpg",
    description: "Un café intense et riche pour un boost rapide.",
  },
  {
    name: "Latte",
    image: "/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface.jpg",
    description: "Doux, crémeux et parfaitement équilibré.",
  },
  {
    name: "Cappuccino",
    image: "/cup-cappuccino-with-heart-design-foam-sprinkled-with-cocoa-powder-sits-white-saucer-dark-background.jpg",
    description: "Une mousse onctueuse avec une touche de cacao.",
  },
];

/* ---------------- CARD ---------------- */
function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl h-80 shadow-xl">

      <Image
        src={coffee.image}
        alt={coffee.name}
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold">{coffee.name}</h3>
        <p className="text-sm text-gray-200 mt-2">
          {coffee.description}
        </p>

        <Link
          href="/boutique"
          className="mt-4 w-fit px-4 py-2 bg-[#C49A6C] text-black rounded-lg hover:bg-[#a67c52] transition"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    "Livraison rapide 🚚",
    "Programme fidélité 🎁",
    "Événements privés 🎉",
  ];

  return (
    <div className="mt-20 text-center">
      <h3 className="text-3xl font-bold mb-6">Nos Services</h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:scale-105 transition"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function ContactCTA() {
  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold mb-4">Contactez-nous 📞</h3>

      <p className="text-gray-300 mb-6">
        Une question ? Nous sommes là pour vous !
      </p>

      <Link
        href="/contact"
        className="px-6 py-3 bg-[#C49A6C] text-black rounded-lg hover:bg-[#a67c52] transition"
      >
        Nous contacter
      </Link>
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export default function Content() {
  return (
    <section className="bg-gradient-to-br from-[#4B2E2B] to-black px-6 py-16 text-white">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Nos Cafés Signature ☕
        </h2>
        <p className="text-gray-300 mt-3">
          Découvrez nos boissons les plus appréciées
        </p>
      </div>

      {/* Coffee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coffees.map((coffee, index) => (
          <CoffeeCard key={index} coffee={coffee} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/menu"
          className="px-6 py-3 bg-[#C49A6C] text-black rounded-lg hover:bg-[#a67c52] transition"
        >
          Voir tout le menu
        </Link>
      </div>

      {/* Services */}
      <Services />

      {/* Contact */}
      <ContactCTA />

    </section>
  );
}