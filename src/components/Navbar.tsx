"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[#0E0E10] backdrop-blur z-50">
      <nav className="relative navbar max-w-6xl mx-auto px-6 pb-2 flex items-center justify-center">
        
        {/* Logo centrado con imagen */}
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/Vanguardie.png"
            alt="Vanguard logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm absolute right-6">
          <Link href="/about" className="hover:underline">Nosotros</Link>
          <Link href="/contact" className="hover:underline">Contacto</Link>
        </div>

        {/* Mobile menu with Drawer */}
        <div className="md:hidden absolute right-6">
          <div className="drawer drawer-end">
            <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Botón hamburguesa */}
              <label htmlFor="mobile-drawer" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-6 w-80 min-h-full bg-base-200 text-base-content">
                <li><Link href="/about">Nosotros</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
