const carriers = [
  { name: 'State Farm', slug: 'state-farm', file: '/images/carriers/state-farm.svg' },
  { name: 'USAA', slug: 'usaa', file: '/images/carriers/usaa.svg' },
  { name: 'Allstate', slug: 'allstate', file: '/images/carriers/allstate.svg' },
  { name: 'Progressive', slug: 'progressive', file: '/images/carriers/progressive.svg' },
  { name: 'Farmers', slug: 'farmers', file: '/images/carriers/farmers.svg' },
  { name: 'GEICO', slug: 'geico', file: '/images/carriers/geico.svg' },
  { name: 'Liberty Mutual', slug: 'liberty-mutual', file: '/images/carriers/liberty-mutual.svg' },
  { name: 'Nationwide', slug: 'nationwide', file: '/images/carriers/nationwide.svg' },
]

export default function CarrierGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {carriers.map(c => (
        <div
          key={c.slug}
          className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 hover:border-b-4 hover:border-b-[#c9a84c] transition-all"
        >
          <div className="h-12 flex items-center justify-center">
            <img
              src={c.file}
              alt={c.name + ' logo'}
              className="h-10 w-auto object-contain"
            />
          </div>
          <span className="text-[#0a1628] font-bold text-sm text-center">{c.name}</span>
        </div>
      ))}
    </div>
  )
}
