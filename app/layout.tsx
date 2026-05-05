import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CITIES } from '@/lib/cities';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Dent Boyz — North Dallas Hail Damage Repair',
    template: '%s | Dent Boyz — North Dallas Hail Repair',
  },
  description:
    'Dent Boyz — North Dallas paintless dent repair and auto hail damage restoration. Free inspection, insurance direct billing, deductible assistance. Serving Frisco, McKinney, Plano & more.',
  keywords: [
    'hail damage repair North Dallas',
    'paintless dent repair',
    'PDR Frisco TX',
    'auto hail damage',
    'hail damage Plano',
    'PDR McKinney',
    'insurance hail claim Texas',
  ],
  metadataBase: new URL('https://dent-boyz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dent-boyz.com',
    siteName: 'Dent Boyz',
    title: 'Dent Boyz — North Dallas Hail Damage Repair',
    description: 'Expert auto hail damage repair in North Dallas. Free inspection, insurance handled, factory paint preserved.',
    images: [{ url: '/images/og-image.png', width: 1024, height: 1024, alt: 'Dent Boyz PDR Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dent Boyz — North Dallas Hail Damage Repair',
    description: 'Expert auto hail damage repair in North Dallas.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dent-boyz.com',
  name: 'Dent Boyz',
  description: 'North Dallas paintless dent repair and auto hail damage restoration specialists.',
  url: 'https://dent-boyz.com',
  telephone: '+12145550100',
  email: 'info@dent-boyz.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4521 PGA Parkway, Suite 211',
    addressLocality: 'North Dallas',
    addressRegion: 'TX',
    postalCode: '75034',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.1507,
    longitude: -96.8236,
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  priceRange: '$$',
  areaServed: CITIES.map((c) => c.name + ', TX'),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '127',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'PDR & Hail Damage Services',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
