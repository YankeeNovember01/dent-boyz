import Link from 'next/link';
import { CITIES } from '@/lib/cities';

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
