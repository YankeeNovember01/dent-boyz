'use client'
import Link from 'next/link'
import Image from 'next/image'
import { CITIES } from '@/lib/cities'

const services = [
  { name: 'Hail Damage Repair', href: '/hail-damage-repair' },
  { name: 'Paintless Dent Repair', href: '/paintless-dent-repair' },
  { name: 'Door Ding Removal', href: '/services/door-ding-removal' },
  { name: 'Large Dent Repair', href: '/services/large-dent-repair' },
  { name: 'Bumper Repair', href: '/services/bumper-repair' },
  { name: 'Lease Return PDR', href: '/services/lease-return-dent-repair' },
  { name: 'Free Hail Inspection', href: '/services/free-hail-damage-inspection' },
]

// Show first 18 cities in footer, sorted alphabetically by name
const footerCities = [...CITIES].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 18)

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Dent Boyz"
                  width={240}
                  height={80}
                  className="h-20 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              North Dallas&apos;s paintless dent repair specialists. Hail damage repair, insurance claim assistance, and PDR for all vehicle types.
            </p>
            <p className="text-[#c9a84c] font-bold text-lg">(214) 555-0100</p>
            <p className="text-gray-400 text-sm">Free estimates — call or text</p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Cities We Serve */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Cities We Serve</h3>
            <ul className="space-y-1.5 columns-2">
              {footerCities.map(city => (
                <li key={city.slug}>
                  <Link
                    href={`/hail-damage-repair/${city.slug}`}
                    className="text-gray-400 hover:text-[#c9a84c] text-xs transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/hail-damage-repair" className="text-[#c9a84c] text-xs mt-3 inline-block hover:underline">
              View all 35 cities →
            </Link>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/free-estimate" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">Free Estimate</Link></li>
              <li><Link href="/insurance-claims" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">Insurance Claims</Link></li>
              <li><Link href="/hail-season-dfw" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">DFW Hail Season Guide</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">Reviews</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Dent Boyz. All rights reserved. Serving North Dallas &amp; DFW.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-400 text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
