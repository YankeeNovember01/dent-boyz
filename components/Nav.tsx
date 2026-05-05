'use client';

import { useState } from 'react';
import Link from 'next/link';

const serviceLinks = [
  { label: 'Hail Damage Repair', href: '/hail-damage-repair' },
  { label: 'Door Ding Removal', href: '/services/door-ding-removal' },
  { label: 'Crease Repair', href: '/services/crease-repair' },
  { label: 'Large Dent Repair', href: '/services/large-dent-repair' },
  { label: 'Bumper Repair', href: '/services/bumper-repair' },
  { label: 'Motorcycle Dent Repair', href: '/services/motorcycle-dent-repair' },
  { label: 'Lease Return Dent Repair', href: '/services/lease-return-dent-repair' },
  { label: 'Free Hail Damage Inspection', href: '/services/free-hail-damage-inspection' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="container-xl flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight hover:text-gold transition-colors">
          🚗 DENT BOYZ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-gold transition-colors py-1"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-sm text-dark-text hover:bg-gold hover:text-navy transition-colors border-b border-gray-50 last:border-0 font-medium"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/hail-damage-repair#cities" className="hover:text-gold transition-colors">Cities</Link>
          <Link href="/insurance-claims" className="hover:text-gold transition-colors">Insurance Claims</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/reviews" className="hover:text-gold transition-colors">Reviews</Link>
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
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 flex flex-col gap-1 text-white text-sm font-medium">
          {/* Mobile Services Accordion */}
          <button
            className="flex items-center justify-between w-full py-2 hover:text-gold transition-colors text-left"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <span>Services</span>
            <svg
              className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="bg-navy/50 rounded-lg overflow-hidden mb-1">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-gray-200 hover:text-gold hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/hail-damage-repair#cities" className="py-2 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Cities</Link>
          <Link href="/insurance-claims" className="py-2 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Insurance Claims</Link>
          <Link href="/about" className="py-2 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/reviews" className="py-2 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <a href="tel:2145550100" className="py-2 text-electric-blue font-semibold">(214) 555-0100</a>
          <Link
            href="/free-estimate"
            className="bg-gold text-navy font-bold px-4 py-3 rounded-lg text-center hover:bg-gold-dark transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Free Inspection
          </Link>
        </div>
      )}
    </header>
  );
}
