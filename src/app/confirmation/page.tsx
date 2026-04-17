'use client';

import Link from "next/link";

export default function Confirmation() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#4B2E2B] to-black text-white text-center px-6">

      <div className="text-6xl mb-6 animate-bounce">☕</div>

      <h1 className="text-4xl font-bold mb-4">
        Commande validée !
      </h1>

      <p className="text-gray-300 max-w-md">
        Merci pour votre commande.  
        Un email de confirmation vous a été envoyé 📧  
        Le paiement se fera à la livraison. 💸
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/boutique"
          className="px-6 py-3 bg-[#C49A6C] text-black rounded-lg"
        >
          Continuer
        </Link>

        <Link
          href="/"
          className="px-6 py-3 border border-white/30 rounded-lg"
        >
          Accueil
        </Link>
      </div>

    </main>
  );
}