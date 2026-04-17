'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden">

      {/* Image background */}
      <Image
        src="/sack-art-spoon-black-cup.jpg"
        alt="Coffee Shop"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        {/* Badge */}
        <span className="mb-4 px-4 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
          ☕ Café premium
        </span>

        {/* Titre */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Savourez <br />
          <span className="text-[#C49A6C]">l’instant café</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-200 text-lg md:text-xl">
          Découvrez des cafés d’exception, torréfiés avec passion pour une expérience unique.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/boutique" className="px-8 py-3 bg-[#4B2E2B] hover:bg-[#3a2421] text-white font-semibold rounded-lg transition duration-300 shadow-lg">
            Commander maintenant
          </Link>

          <Link
              href="/menu"
              className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition duration-300"
          >
              Voir le menu
          </Link>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-80">
        <span className="text-sm mb-2">Scroll</span>
        <div className="w-1 h-6 bg-white animate-bounce rounded-full"></div>
      </div>

    </header>
  );
}