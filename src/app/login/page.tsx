'use client';

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation (à remplacer par ton backend NestJS)
    setTimeout(() => {
      setLoading(false);
      alert("Connexion réussie");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B2E2B] to-black relative">

      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md text-white">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Connexion ☕
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-white placeholder-gray-300"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-white placeholder-gray-300"
              placeholder="********"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C49A6C] hover:bg-[#a67c52] rounded-lg font-semibold transition duration-300 disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm text-gray-300">
          Pas de compte ?{" "}
          <Link href="/register" className="text-[#C49A6C] hover:underline">
            S’inscrire
          </Link>
        </div>
      </div>

      {/* Back Home */}
      <Link
        href="/"
        className="absolute top-5 right-5 text-white/80 hover:text-white transition"
      >
        ← Accueil
      </Link>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm">
        © 2026 Coffee Shop
      </div>
    </div>
  );
}