import Link from 'next/link';

const SERVICES = [
  {
    name: 'Auto Hail Damage Repair',
    desc: 'Comprehensive hail damage restoration using PDR. We restore your vehicle to factory condition without repainting.',
    href: '/hail-damage-repair',
    cta: false,
  },
  {
    name: 'Paintless Dent Repair',
    desc: 'The gold standard for dent removal — no filler, no paint, no loss of factory finish or resale value.',
    href: '/paintless-dent-repair',
    cta: false,
  },
  {
    name: 'Door Ding Removal',
    desc: 'Parking lot door dings and minor dents removed quickly. Same-day service available.',
    href: '/services/door-ding-removal',
    cta: false,
  },
  {
    name: 'Large Dent Repair',
    desc: 'Significant dents from impacts and accidents. We assess each repair individually to ensure perfect results.',
    href: '/services/large-dent-repair',
    cta: false,
  },
  {
    name: 'Bumper Repair',
    desc: 'Minor bumper dents and scuffs repaired using specialized PDR tools. Avoid costly replacement.',
    href: '/services/bumper-repair',
    cta: false,
  },
  {
    name: 'Lease Return PDR',
    desc: 'Avoid expensive lease return penalties. We repair dents quickly before your turn-in date.',
    href: '/services/lease-return-dent-repair',
    cta: false,
  },
  {
    name: 'Free Hail Inspection',
    desc: 'Not sure if you have damage? We assess your vehicle at no charge and give you a complete damage report.',
    href: '/services/free-hail-damage-inspection',
    cta: false,
  },
  {
    name: 'Get a Free Estimate',
    desc: 'Ready to get started? Tell us about your vehicle and we\'ll give you a same-day quote with zero obligation.',
    href: '/free-estimate',
    cta: true,
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/20">
      {SERVICES.map((service) =>
        service.cta ? (
          <Link
            key={service.name}
            href={service.href}
            className="bg-gold border border-gold/20 p-6 hover:bg-gold/90 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-0.5 bg-navy mb-4 group-hover:w-12 transition-all"></div>
              <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wide">{service.name}</h3>
              <p className="text-navy/80 text-sm leading-relaxed">{service.desc}</p>
            </div>
            <span className="mt-4 text-navy font-bold text-sm">Start here →</span>
          </Link>
        ) : (
          <Link
            key={service.name}
            href={service.href}
            className="bg-navy border border-gold/20 p-6 hover:bg-navy-dark transition-all group"
          >
            <div className="w-8 h-0.5 bg-gold mb-4 group-hover:w-12 transition-all"></div>
            <h3 className="font-bold text-white mb-2 group-hover:text-gold transition-colors text-sm uppercase tracking-wide">{service.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </Link>
        )
      )}
    </div>
  );
}
