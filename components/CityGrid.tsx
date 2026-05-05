import Link from 'next/link';

const CITIES = [
  { name: 'Frisco', slug: 'frisco-tx' },
  { name: 'McKinney', slug: 'mckinney-tx' },
  { name: 'Plano', slug: 'plano-tx' },
  { name: 'Allen', slug: 'allen-tx' },
  { name: 'Prosper', slug: 'prosper-tx' },
  { name: 'Celina', slug: 'celina-tx' },
  { name: 'The Colony', slug: 'the-colony-tx' },
  { name: 'Little Elm', slug: 'little-elm-tx' },
  { name: 'Aubrey', slug: 'aubrey-tx' },
  { name: 'Richardson', slug: 'richardson-tx' },
  { name: 'Garland', slug: 'garland-tx' },
  { name: 'Carrollton', slug: 'carrollton-tx' },
  { name: 'Addison', slug: 'addison-tx' },
  { name: 'Denton', slug: 'denton-tx' },
  { name: 'Southlake', slug: 'southlake-tx' },
];

export default function CityGrid() {
  return (
    <div id="cities" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {CITIES.map((city) => (
        <Link
          key={city.slug}
          href={`/hail-damage-repair/${city.slug}`}
          className="bg-navy text-white rounded-lg px-4 py-4 text-sm font-semibold hover:bg-electric-blue transition-colors group"
        >
          <div className="font-bold">{city.name}</div>
          <div className="text-xs text-gray-400 group-hover:text-white/80 mt-1">Hail Damage Repair →</div>
        </Link>
      ))}
    </div>
  );
}
