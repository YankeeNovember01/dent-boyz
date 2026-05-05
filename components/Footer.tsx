import Link from 'next/link';

const serviceLinks = [
  { label: 'Auto Hail Damage Repair', href: '/hail-damage-repair' },
  { label: 'Paintless Dent Repair', href: '/hail-damage-repair' },
  { label: 'Door Ding Removal', href: '/hail-damage-repair' },
  { label: 'Insurance Claims', href: '/insurance-claims' },
  { label: 'Free Estimate', href: '/free-estimate' },
];

const cityLinks = [
  { label: 'Frisco, TX', href: '/hail-damage-repair/frisco-tx' },
  { label: 'McKinney, TX', href: '/hail-damage-repair/mckinney-tx' },
  { label: 'Plano, TX', href: '/hail-damage-repair/plano-tx' },
  { label: 'Allen, TX', href: '/hail-damage-repair/allen-tx' },
  { label: 'Prosper, TX', href: '/hail-damage-repair/prosper-tx' },
  { label: 'Celina, TX', href: '/hail-damage-repair/celina-tx' },
  { label: 'Denton, TX', href: '/hail-damage-repair/denton-tx' },
  { label: 'Southlake, TX', href: '/hail-damage-repair/southlake-tx' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="container-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-white font-extrabold text-xl mb-2">DENT BOYZ</div>
            <p className="text-gray-400 text-sm mb-4">North Dallas&apos; Trusted Hail Damage Repair Experts</p>
            <address className="not-italic text-sm text-gray-400 space-y-1">
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">North Dallas</span>,{' '}
                <span itemProp="addressRegion">TX</span>{' '}
                <span itemProp="postalCode">75034</span>
              </div>
              <div>
                <a href="tel:2145550100" className="text-electric-blue hover:text-gold transition-colors" itemProp="telephone">
                  (214) 555-0100
                </a>
              </div>
              <div>
                <a href="mailto:info@dent-boyz.com" className="hover:text-gold transition-colors" itemProp="email">
                  info@dent-boyz.com
                </a>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Cities We Serve</h3>
            <ul className="grid grid-cols-2 gap-2">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>© 2026 Dent Boyz | dent-boyz.com | Serving North Dallas, TX</span>
          <span>Frisco · McKinney · Plano · Allen · Prosper · Celina</span>
        </div>
      </div>
    </footer>
  );
}
