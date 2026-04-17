'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '../CartItem'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { cart } = useCart()
  useEffect(() => {
    setMounted(true)
  }, [])
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#4B2E2B] shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-16 w-56">
              <Image
                src="/coffeeshoplogo-removebg-preview.png"
                alt="Coffee Shop"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="ml-16 flex items-center gap-6">
              {/* <Link href="/login" className="text-white">
                <User size={24} />
              </Link> */}

              {/* 🛒 */}
              <Link href="/panier" className="relative text-2xl">
                🛒
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C49A6C] text-black text-xs px-2 py-0.5 rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}

            {/* 🔥 badge hamburger */}
            {mounted && totalItems > 0 && !isOpen && (
              <span className="absolute -top-1 -right-1 bg-[#C49A6C] text-black text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4B2E2B] border-t">
          <div className="flex flex-col gap-4 px-6 py-6">

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white">
                {link.name}
              </Link>
            ))}

            <div className="flex gap-6 mt-4">
              {/* <Link href="/login" onClick={() => setIsOpen(false)} className="text-white">
                <User size={24} />
              </Link> */}

              <Link href="/panier" onClick={() => setIsOpen(false)} className="relative text-2xl">
                🛒
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C49A6C] text-black text-xs px-2 py-0.5 rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}