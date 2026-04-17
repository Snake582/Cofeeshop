'use client';

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4B2E2B] to-black text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          À propos de nous ☕
        </h1>

        {/* Intro */}
        <p className="mt-6 text-gray-300 text-lg text-center max-w-2xl mx-auto">
          Bienvenue dans notre univers café, où chaque tasse raconte une histoire de passion, de qualité et de savoir-faire.
        </p>

        {/* Section contenu */}
        <div className="mt-12 space-y-8">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Notre mission</h2>
            <p className="text-gray-300">
              Offrir un café d’exception, sélectionné avec soin et torréfié pour révéler toute sa richesse aromatique.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Notre passion</h2>
            <p className="text-gray-300">
              Nos baristas mettent leur expertise au service de votre plaisir, pour une expérience unique à chaque gorgée.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Pourquoi nous choisir ?</h2>
            <p className="text-gray-300">
              Produits de qualité, ambiance chaleureuse et service irréprochable pour vous faire vivre un moment inoubliable.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#C49A6C] hover:bg-[#a67c52] rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Contactez-nous
          </Link>
        </div>

      </div>
    </main>
  );
}