"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="MedisPo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              href="#comment-ca-marche"
              className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              Comment ça marche
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              À propos
            </Link>
          </div>

          {/* Boutons desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/connexion"
              className="text-primary border border-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              S'inscrire
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-600 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="#comment-ca-marche"
            className="text-gray-600 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Comment ça marche
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </Link>
          <hr />
          <Link
            href="/connexion"
            className="text-primary border border-primary rounded-lg px-4 py-2 text-sm font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            S'inscrire
          </Link>
        </div>
      )}
    </nav>
  );
}