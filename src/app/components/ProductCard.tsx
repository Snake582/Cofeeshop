'use client';

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartItem";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);

    // 🔥 animation
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-amber-950 border border-white/20 rounded-2xl overflow-hidden shadow-lg">

      <div className="relative w-full h-52">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      <div className="p-4 text-white">
        <h2 className="font-bold">{product.name}</h2>

        <p className="text-sm text-gray-300 mt-1">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#f78409] font-semibold">
            {product.price} FCFA
          </span>

          <button
            onClick={handleAdd}
            className={`px-3 py-1 rounded-xl transition transform
              ${added 
                ? "bg-green-500 scale-110 text-white" 
                : "bg-[#C49A6C] text-black hover:bg-[#a67c52]"
              }`}
          >
            {added ? "✔ Ajouté" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}