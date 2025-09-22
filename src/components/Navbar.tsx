"use client";

import Link from "next/link";



export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg">Vanguard</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:underline">Nosotros</Link>
          <Link href="/contact" className="hover:underline">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
