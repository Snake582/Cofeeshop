'use client';

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Boutique() {

  const categories = {
    hot: "☕ Café chaud",
    cold: "🧊 Café froid",
    special: "⭐ Spécialités",
    "no-coffee": "🥛 Sans café",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4B2E2B] to-black text-white px-6 py-10">

      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h1 className="text-4xl font-bold">
          Notre Menu ☕
        </h1>
      </div>

      {Object.entries(categories).map(([key, label]) => {
        const filtered = products.filter(p => p.category === key);

        if (filtered.length === 0) return null;

        return (
          <div key={key} className="mt-16">
            <h2 className="text-2xl font-bold mb-2">{label}</h2>
            <div className="w-20 h-1 bg-[#C49A6C] mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}

    </main>
  );
}