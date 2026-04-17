'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#3a2321] to-black text-white px-6 py-16">

      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,154,108,0.2),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + brand */}
        <div>
          <div className="relative h-20 w-20 mb-2">
            <Image
              src="/coffeeshoplogo-removebg-preview.png"
              alt="Coffee Shop Logo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold">Coffee Shop ☕</h2>

          <p className="mt-3 text-gray-300 text-sm">
            L’art du café, réinventé avec passion et élégance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#C49A6C]">
            Navigation
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
            <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
            <li><Link href="/boutique" className="hover:text-white transition">Boutique</Link></li>
            <li><Link href="/about" className="hover:text-white transition">À propos</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#C49A6C]">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 Yoff, Dakar</li>
            <li>
              📞{" "}
              <a href="tel:+221706063217" className="hover:text-white transition">
                +221 70 606 32 17
              </a>
            </li>
            <li>
              📧{" "}
              <a href="mailto:mamadoukabadiagne@gmail.com" className="hover:text-white transition">
                Contact email
              </a>
            </li>
          </ul>
        </div>

        {/* Social + newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#C49A6C]">
            Communauté
          </h3>

          <div className="flex gap-4 text-xl mb-4">
            <a href="#" className="hover:text-white transition hover:scale-110">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="hover:text-white transition hover:scale-110">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="hover:text-white transition hover:scale-110">
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>

          <p className="text-sm text-gray-400 mb-3">
            Recevez nos offres ☕
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-3 py-2 rounded-l-lg bg-white/10 text-white outline-none text-sm"
            />
            <button className="px-4 bg-[#C49A6C] text-black rounded-r-lg hover:bg-[#a67c52] transition">
              OK
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative mt-12 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Coffee Shop — Tous droits réservés
      </div>

    </footer>
  );
}