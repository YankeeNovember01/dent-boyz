const carriers = [
  {
    name: 'State Farm',
    slug: 'state-farm',
    color: '#CC0000',
    bgColor: '#FFF5F5',
    abbr: 'SF',
  },
  {
    name: 'USAA',
    slug: 'usaa',
    color: '#002663',
    bgColor: '#F0F4FF',
    abbr: 'USAA',
  },
  {
    name: 'Allstate',
    slug: 'allstate',
    color: '#0033A0',
    bgColor: '#F0F4FF',
    abbr: 'ALL',
  },
  {
    name: 'Progressive',
    slug: 'progressive',
    color: '#0066CC',
    bgColor: '#F0F7FF',
    abbr: 'PRG',
  },
  {
    name: 'Farmers',
    slug: 'farmers',
    color: '#B4201A',
    bgColor: '#FFF4F4',
    abbr: 'FMR',
  },
  {
    name: 'GEICO',
    slug: 'geico',
    color: '#006B3C',
    bgColor: '#F0FFF7',
    abbr: 'GEICO',
  },
  {
    name: 'Liberty Mutual',
    slug: 'liberty-mutual',
    color: '#0C2B4B',
    bgColor: '#F0F4FF',
    abbr: 'LM',
  },
  {
    name: 'Nationwide',
    slug: 'nationwide',
    color: '#003087',
    bgColor: '#F0F4FF',
    abbr: 'NW',
  },
];

export default function CarrierGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {carriers.map((carrier) => (
        <div
          key={carrier.slug}
          className="group relative bg-white border border-white/10 flex flex-col items-center justify-center py-6 px-4 transition-all duration-200 hover:border-b-4 hover:border-b-gold cursor-default"
          style={{ borderBottomColor: undefined }}
        >
          {/* Brand accent bar */}
          <div
            className="w-full h-1 mb-4"
            style={{ backgroundColor: carrier.color }}
          />

          {/* Inline SVG logo treatment */}
          <svg
            viewBox="0 0 120 48"
            width="120"
            height="48"
            className="mb-3"
            aria-label={carrier.name}
            role="img"
          >
            {/* Background pill */}
            <rect
              x="4"
              y="4"
              width="112"
              height="40"
              rx="6"
              fill={carrier.color}
            />
            {/* Carrier abbreviation / short name */}
            <text
              x="60"
              y="30"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontFamily="'Arial Black', 'Arial', sans-serif"
              fontWeight="900"
              fontSize={carrier.abbr.length > 4 ? '13' : '16'}
              letterSpacing="1"
            >
              {carrier.abbr}
            </text>
          </svg>

          {/* Carrier full name */}
          <span className="text-white font-bold text-xs uppercase tracking-wide text-center leading-tight">
            {carrier.name}
          </span>

          {/* Gold bottom border on hover (via outline trick) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      ))}
    </div>
  );
}
