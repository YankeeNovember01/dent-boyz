import Link from 'next/link';

const SERVICES = [
  {
    icon: '⛈️',
    name: 'Auto Hail Damage Repair',
    desc: 'Comprehensive hail damage restoration using PDR. We restore your vehicle to factory condition without repainting.',
    href: '/hail-damage-repair',
  },
  {
    icon: '🔧',
    name: 'Paintless Dent Repair',
    desc: 'The gold standard for dent removal — no filler, no paint, no loss of factory finish or resale value.',
    href: '/hail-damage-repair',
  },
  {
    icon: '🚪',
    name: 'Door Ding Removal',
    desc: 'Parking lot door dings and minor dents removed quickly. Same-day service available.',
    href: '/hail-damage-repair',
  },
  {
    icon: '📐',
    name: 'Crease Repair',
    desc: 'Sharp creases and line dents require expert technique. Our techs handle complex crease repairs with precision.',
    href: '/hail-damage-repair',
  },
  {
    icon: '🔨',
    name: 'Large Dent Repair',
    desc: 'Significant dents from impacts and accidents. We assess each repair individually to ensure perfect results.',
    href: '/hail-damage-repair',
  },
  {
    icon: '🚘',
    name: 'Bumper Repair',
    desc: 'Minor bumper dents and scuffs repaired using specialized PDR tools. Avoid costly replacement.',
    href: '/hail-damage-repair',
  },
  {
    icon: '🏍️',
    name: 'Motorcycle Dent Repair',
    desc: 'PDR for motorcycle tanks, fenders, and body panels. Keep your bike looking showroom-ready.',
    href: '/hail-damage-repair',
  },
  {
    icon: '📋',
    name: 'Lease Return Dent Repair',
    desc: 'Avoid expensive lease return penalties. We repair dents quickly before your turn-in date.',
    href: '/hail-damage-repair',
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-electric-blue transition-all group"
        >
          <div className="text-3xl mb-3">{service.icon}</div>
          <h3 className="font-bold text-dark-text mb-2 group-hover:text-electric-blue transition-colors">{service.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
        </Link>
      ))}
    </div>
  );
}
