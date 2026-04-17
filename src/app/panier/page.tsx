'use client';

import { useCart } from "../components/CartItem";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Panier() {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // 🔥 fix hydration
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ❌ évite mismatch
  if (!mounted) return null;

  // 💰 total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#4B2E2B] to-black text-white px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Votre Panier 🛒</h1>
        <p className="text-gray-300">Votre panier est actuellement vide.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4B2E2B] to-black text-white px-6 py-10">

{isOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-white text-black p-6 rounded-xl w-full max-w-md">

      <h2 className="text-2xl font-bold mb-4">Informations client</h2>

      {/* Nom */}
      <input
        type="text"
        placeholder="Votre nom"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Adresse */}
      <input
        type="text"
        placeholder="Adresse"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />

      {/* Actions */}
      <div className="flex justify-between">

        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Annuler
        </button>

        <button
          onClick={async () => {
            if (!form.name || !form.email || !form.address) {
              alert("Veuillez remplir tous les champs");
              return;
            }

            try {
              const res = await fetch("/api/send-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: form.name,
                  email: form.email,
                  address: form.address,
                  cart,
                  total,
                }),
              });

              const data = await res.json();

              if (!data.success) {
                alert("Erreur envoi email ❌");
                return;
              }

              removeAllFromCart();
              setIsOpen(false);
              router.push("/confirmation");

            } catch (err) {
              alert("Erreur serveur ❌");
            }
          }}
          className="px-4 py-2 bg-[#C49A6C] text-black rounded"
        >
          Confirmer
        </button>

      </div>
    </div>
  </div>
)}
      <h1 className="text-4xl font-bold mb-8">Votre Panier 🛒</h1>

      <button 
        onClick={removeAllFromCart}
        className="mb-6 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
      >
        Vider le panier
      </button>

      <div className="grid gap-6">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white/10 p-4 rounded-xl backdrop-blur"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm text-gray-300">
                {item.price} FCFA
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-green-500 rounded"
              >
                +
              </button>
            </div>

            <div className="font-semibold">
              {item.price * item.quantity} FCFA
            </div>
          </div>
        ))}

        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total : {total} FCFA
          </h2>

          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="mt-4 px-6 py-3 bg-[#C49A6C] text-black rounded-lg hover:bg-[#a67c52]"
          >
            Passer la commande
          </button>
        </div>

      </div>
    </main>
  );
}