'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="container-xl flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight hover:text-gold transition-colors">
          🚗 DENT BOYZ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/hail-damage-repair" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/hail-damage-repair#cities" className="hover:text-gold transition-colors">Cities</Link>
          <Link href="/insurance-claims" className="hover:text-gold transition-colors">Insurance Claims</Link>
          <span className="text-gray-400">|</span>
          <a href="tel:2145550100" className="text-electric-blue hover:text-gold transition-colors font-semibold">(214) 555-0100</a>
          <Link href="/free-estimate" className="bg-gold text-navy font-bold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors text-sm">
            Free Inspection
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-white text-sm font-medium">
          <Link href="/hail-damage-repair" className="hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/hail-damage-repair#cities" className="hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Cities</Link>
          <Link href="/insurance-claims" className="hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Insurance Claims</Link>
          <a href="tel:2145550100" className="text-electric-blue font-semibold">(214) 555-0100</a>
          <Link href="/free-estimate" className="bg-gold text-navy font-bold px-4 py-3 rounded-lg text-center hover:bg-gold-dark transition-colors" onClick={() => setMenuOpen(false)}>
            Free Inspection
          </Link>
        </div>
      )}
    </header>
  );
}
