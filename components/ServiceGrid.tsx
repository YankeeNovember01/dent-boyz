import Link from 'next/link';

const SERVICES = [
  {
    icon: 'DB',
    name: 'Auto Hail Damage Repair',
    desc: 'Comprehensive hail damage restoration using PDR. We restore your vehicle to factory condition without repainting.',
    href: '/hail-damage-repair',
  },
  {
    icon: 'DB',
    name: 'Paintless Dent Repair',
    desc: 'The gold standard for dent removal — no filler, no paint, no loss of factory finish or resale value.',
    href: '/hail-damage-repair',
  },
  {
    icon: 'DB',
    name: 'Door Ding Removal',
    desc: 'Parking lot door dings and minor dents removed quickly. Same-day service available.',
    href: '/services/door-ding-removal',
  },
  {
    icon: 'DB',
    name: 'Crease Repair',
    desc: 'Sharp creases and line dents require expert technique. Our techs handle complex crease repairs with precision.',
    href: '/services/crease-repair',
  },
  {
    icon: 'DB',
    name: 'Large Dent Repair',
    desc: 'Significant dents from impacts and accidents. We assess each repair individually to ensure perfect results.',
    href: '/services/large-dent-repair',
  },
  {
    icon: 'DB',
    name: 'Bumper Repair',
    desc: 'Minor bumper dents and scuffs repaired using specialized PDR tools. Avoid costly replacement.',
    href: '/services/bumper-repair',
  },
  {
    icon: 'DB',
    name: 'Motorcycle Dent Repair',
    desc: 'PDR for motorcycle tanks, fenders, and body panels. Keep your bike looking showroom-ready.',
    href: '/services/motorcycle-dent-repair',
  },
  {
    icon: 'DB',
    name: 'Lease Return Dent Repair',
    desc: 'Avoid expensive lease return penalties. We repair dents quickly before your turn-in date.',
    href: '/services/lease-return-dent-repair',
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/20">
      {SERVICES.map((service, i) => (
        <Link
          key={service.name}
          href={service.href}
          className="bg-navy border border-gold/20 p-6 hover:bg-navy-dark transition-all group"
        >
          <div className="w-8 h-0.5 bg-gold mb-4 group-hover:w-12 transition-all"></div>
          <h3 className="font-bold text-white mb-2 group-hover:text-gold transition-colors text-sm uppercase tracking-wide">{service.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
        </Link>
      ))}
    </div>
  );
}
