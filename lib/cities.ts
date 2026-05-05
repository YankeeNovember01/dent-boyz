export interface City {
  slug: string;
  name: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  highway: string;
  neighborhoods: string;
  angle: string;
  population: string;
  profile: string;
}

export const CITIES: City[] = [
  {
    slug: 'frisco-tx',
    name: 'Frisco',
    state: 'TX',
    zip: '75034',
    lat: 33.1507,
    lng: -96.8236,
    highway: 'Sam Rayburn Tollway (SH-121)',
    neighborhoods: 'Starwood, Stonebriar, Chapel Creek',
    angle: 'luxury vehicle specialists',
    population: '200,000+',
    profile: 'high-income community with significant luxury and newer vehicle concentration',
  },
  {
    slug: 'mckinney-tx',
    name: 'McKinney',
    state: 'TX',
    zip: '75070',
    lat: 33.1972,
    lng: -96.6397,
    highway: 'US-75 (Central Expressway)',
    neighborhoods: 'Craig Ranch, Stonebridge Ranch, Eldorado, Tucker Hill',
    angle: 'concierge service for master-planned community residents',
    population: '230,000+',
    profile: 'one of the fastest-growing cities in Texas with high concentration of newer vehicles and leased cars',
  },
  {
    slug: 'plano-tx',
    name: 'Plano',
    state: 'TX',
    zip: '75024',
    lat: 33.0198,
    lng: -96.6989,
    highway: 'Dallas North Tollway',
    neighborhoods: 'Willow Bend, Legacy West, Jack Carter',
    angle: 'State Farm claim specialists — we know the process cold',
    population: '290,000+',
    profile: 'home to State Farm regional HQ and many tech corridor workers with newer vehicles',
  },
  {
    slug: 'allen-tx',
    name: 'Allen',
    state: 'TX',
    zip: '75013',
    lat: 33.1032,
    lng: -96.6705,
    highway: 'US-75',
    neighborhoods: 'Twin Creeks, Watters Creek, Bethany Road, Bray Central',
    angle: 'trusted by Allen families with newer vehicles',
    population: '110,000+',
    profile: 'highly rated school district drives affluent family concentration with newer vehicles',
  },
  {
    slug: 'prosper-tx',
    name: 'Prosper',
    state: 'TX',
    zip: '75078',
    lat: 33.2362,
    lng: -96.8003,
    highway: 'Preston Road (CR-2478)',
    neighborhoods: 'Windsong Ranch, Star Trail, Whitley Place',
    angle: "white-glove service for Prosper's luxury vehicles — we come to you",
    population: '45,000+',
    profile: 'median household income $187K, average home value $823K — one of the wealthiest suburbs in America with newest vehicles in DFW',
  },
  {
    slug: 'celina-tx',
    name: 'Celina',
    state: 'TX',
    zip: '75009',
    lat: 33.3237,
    lng: -96.7856,
    highway: 'US-380 (University Drive)',
    neighborhoods: 'Light Farms, Lariat, Mustang Lakes',
    angle: 'new to Texas hail? We guide you through every step',
    population: '60,000+',
    profile: '#1 fastest-growing city in America — most residents recently relocated and are experiencing Texas hail for the first time with brand new vehicles',
  },
  {
    slug: 'the-colony-tx',
    name: 'The Colony',
    state: 'TX',
    zip: '75056',
    lat: 33.0851,
    lng: -96.8883,
    highway: 'SH-121 (Sam Rayburn Tollway)',
    neighborhoods: 'Grandscape area, Stewart Creek',
    angle: 'convenient mobile service near Grandscape',
    population: '50,000+',
    profile: 'growing community with young families and newer vehicles, convenient access off SH-121',
  },
  {
    slug: 'little-elm-tx',
    name: 'Little Elm',
    state: 'TX',
    zip: '75068',
    lat: 33.1629,
    lng: -96.9369,
    highway: 'FM-720',
    neighborhoods: 'Paloma Creek, The Shores, Sunset Pointe',
    angle: 'fast response after Lake Lewisville area storms',
    population: '60,000+',
    profile: 'lakefront community hit hard by March 2024 hail event — residents are familiar with hail damage and want fast, quality repair',
  },
  {
    slug: 'aubrey-tx',
    name: 'Aubrey',
    state: 'TX',
    zip: '76227',
    lat: 33.3029,
    lng: -96.9839,
    highway: 'US-380',
    neighborhoods: 'Arrow Brooke, Sandbrock Ranch',
    angle: 'mobile PDR service that comes to you in Aubrey',
    population: '12,000+',
    profile: 'fast-growing newer community north of Denton with newer vehicles and residents who need mobile PDR service',
  },
  {
    slug: 'richardson-tx',
    name: 'Richardson',
    state: 'TX',
    zip: '75080',
    lat: 32.9482,
    lng: -96.7298,
    highway: 'US-75 (Central Expressway)',
    neighborhoods: 'Arapaho Corridor, CityLine, Breckinridge Park',
    angle: 'State Farm HQ city — nobody knows the claim process better',
    population: '120,000+',
    profile: 'home to State Farm corporate campus and major tech employers including Samsung — many residents have State Farm coverage and work in tech',
  },
  {
    slug: 'garland-tx',
    name: 'Garland',
    state: 'TX',
    zip: '75040',
    lat: 32.9126,
    lng: -96.6389,
    highway: 'I-635 (LBJ Freeway)',
    neighborhoods: 'Firewheel area, Sachse border',
    angle: 'fast quality repairs for Garland families',
    population: '245,000+',
    profile: 'large dense community with a wide range of vehicles and budget-conscious but quality-seeking customers',
  },
  {
    slug: 'carrollton-tx',
    name: 'Carrollton',
    state: 'TX',
    zip: '75006',
    lat: 32.9537,
    lng: -96.8903,
    highway: 'I-35E',
    neighborhoods: 'Josey Ranch, Keller Springs',
    angle: 'quick turnaround for North Dallas commuters',
    population: '140,000+',
    profile: 'diverse community of commuters and families with newer vehicles along the I-35E corridor',
  },
  {
    slug: 'addison-tx',
    name: 'Addison',
    state: 'TX',
    zip: '75001',
    lat: 32.9612,
    lng: -96.8311,
    highway: 'Dallas North Tollway',
    neighborhoods: 'Addison Circle, Village on the Parkway area',
    angle: "premium service for Addison's upscale community",
    population: '16,000+',
    profile: 'small affluent community known for restaurants and upscale lifestyle — residents expect premium service and have luxury vehicles',
  },
  {
    slug: 'denton-tx',
    name: 'Denton',
    state: 'TX',
    zip: '76201',
    lat: 33.2148,
    lng: -97.1331,
    highway: 'I-35E',
    neighborhoods: 'Robson Ranch, Lantana, near UNT/TWU',
    angle: 'serving Denton families, students, and professionals',
    population: '145,000+',
    profile: 'college town (UNT, TWU) with mix of students, young professionals, and established families — wide range of vehicle types',
  },
  {
    slug: 'southlake-tx',
    name: 'Southlake',
    state: 'TX',
    zip: '76092',
    lat: 32.9401,
    lng: -97.1336,
    highway: 'SH-114',
    neighborhoods: 'Timarron, Carillon, Southridge Lakes',
    angle: "ultra-luxury vehicle care for Southlake's premium community",
    population: '32,000+',
    profile: 'one of the highest-income communities in Texas — Porsche, Range Rover, Ferrari ownership is common; residents demand white-glove service and flawless results',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getNearbyCities(slug: string, count = 4): City[] {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return CITIES.filter((c) => c.slug !== slug)
    .sort((a, b) => {
      const distA = Math.sqrt(Math.pow(a.lat - city.lat, 2) + Math.pow(a.lng - city.lng, 2));
      const distB = Math.sqrt(Math.pow(b.lat - city.lat, 2) + Math.pow(b.lng - city.lng, 2));
      return distA - distB;
    })
    .slice(0, count);
}
