import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import CityGrid from '@/components/CityGrid';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import PhotoWithMeta from '@/components/PhotoWithMeta';
import CarrierGrid from '@/components/CarrierGrid';

export const metadata: Metadata = {
  title: 'North Dallas Hail Damage Repair — Factory Paint. Zero Hassle.',
  description:
    'Dent Boyz — North Dallas auto hail damage repair specialists. Free inspection, insurance direct billing, deductible assistance. Serving Frisco, McKinney, Plano, Prosper, Celina & more.',
};

const insuranceSteps = [
  {
    step: '1',
    title: 'Free Inspection',
    desc: 'We perform a free on-site inspection — at your home, office, or our shop. Our technician documents every dent on every panel with photos and measurements. No cost, no obligation.',
  },
  {
    step: '2',
    title: 'We File With Your Insurance',
    desc: "We contact your insurer directly. We know State Farm, USAA, Allstate, Farmers, Progressive, and GEICO's claims processes inside out. We handle the paperwork.",
  },
  {
    step: '3',
    title: 'Adjuster Review',
    desc: 'Your insurer sends an adjuster. We meet with them, walk the vehicle, and advocate for a complete repair estimate. If they miss damage, we file a supplement.',
  },
  {
    step: '4',
    title: 'Deductible Assistance',
    desc: 'For most customers, we cover a portion of your deductible as part of doing business — legally and transparently. Many customers pay $0 out of pocket.',
  },
  {
    step: '5',
    title: 'Repair — 1 to 5 Days',
    desc: 'Our certified PDR technicians restore every panel to factory spec. No paint. No filler. Just precise metalwork that brings your vehicle back to showroom condition.',
  },
  {
    step: '6',
    title: 'We Bill Insurance Directly',
    desc: "Insurance pays us. You get your car back looking like the storm never happened. We provide a lifetime warranty on all PDR work.",
  },
];

const comparisonRows = [
  { feature: 'Factory Paint Preserved', dentBoyz: 'YES', bodyShop: 'NO — repainted', pdrShops: 'YES' },
  { feature: 'Insurance Filed For You', dentBoyz: 'YES', bodyShop: 'Sometimes', pdrShops: 'Rarely' },
  { feature: 'Deductible Assistance', dentBoyz: 'YES', bodyShop: 'No', pdrShops: 'No' },
  { feature: 'Rental Coordination', dentBoyz: 'YES', bodyShop: 'Sometimes', pdrShops: 'No' },
  { feature: 'Supplemental Claims Filed', dentBoyz: 'YES', bodyShop: 'No', pdrShops: 'No' },
  { feature: 'Lifetime Warranty', dentBoyz: 'YES', bodyShop: 'Varies', pdrShops: 'Rarely' },
  { feature: '$0 Out of Pocket Program', dentBoyz: 'YES', bodyShop: 'No', pdrShops: 'No' },
  { feature: 'Free On-Site Inspection', dentBoyz: 'YES', bodyShop: 'No', pdrShops: 'Sometimes' },
  { feature: '1-5 Day Turnaround', dentBoyz: 'YES', bodyShop: '2-4 Weeks', pdrShops: 'YES' },
  { feature: 'Luxury Vehicle Specialists', dentBoyz: 'YES', bodyShop: 'Yes', pdrShops: 'Sometimes' },
];

const carriers = [
  'State Farm', 'USAA', 'Allstate', 'Progressive',
  'Farmers', 'GEICO', 'Liberty Mutual', 'Nationwide',
];

const reviews = [
  {
    name: 'Sarah M.',
    city: 'Frisco, TX',
    rating: '5/5',
    text: 'They handled everything with State Farm. I paid $0 out of pocket. Car looks brand new. The whole process took less than a week — I was shocked at how easy it was.',
  },
  {
    name: 'Marcus T.',
    city: 'McKinney, TX',
    rating: '5/5',
    text: 'Showed up on time, filed my USAA claim, got me a rental. Done in 3 days. Incredible service. I\'ve already referred three neighbors to Dent Boyz.',
  },
  {
    name: 'Jennifer K.',
    city: 'Prosper, TX',
    rating: '5/5',
    text: 'My Range Rover had 200+ dents after the May storm. Factory perfect. Zero paint damage. These guys are the real deal — I would not trust anyone else with a luxury vehicle.',
  },
];

function isDentBoyzYes(val: string) {
  return val === 'YES';
}

function isOtherYes(val: string) {
  return val === 'YES';
}

export default function HomePage() {
  return (
    <>
      {/* A. HERO */}
      <section className="w-full bg-navy text-white py-24 md:py-36 px-4 relative overflow-hidden">
        {/* Diagonal geometric texture via CSS */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F5A623 0, #F5A623 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="container-xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Logo — slides in from right on load */}
          <div
            className="order-first lg:order-last lg:ml-auto flex-shrink-0 animate-slide-in-right"
            style={{
              animation: 'slideInRight 0.7s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Dent Boyz PDR — North Dallas Hail Damage Repair"
              width={340}
              height={340}
              className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl"
              priority
            />
          </div>
          <div className="max-w-3xl">
            <div className="w-12 h-0.5 bg-gold mb-8"></div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              North Dallas Hail Damage Repair —{' '}
              <span className="text-gold">Factory Paint. Zero Hassle.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Serving Frisco, McKinney, Plano, Prosper, Celina, and all of North Dallas and DFW.
              Free inspection. Insurance handled. Most repairs done in 1–5 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/free-estimate" className="bg-gold text-navy font-extrabold text-lg px-10 py-5 hover:bg-gold-dark transition-colors text-center">
                Get Free Inspection
              </Link>
              <a href="tel:2145550100" className="border-2 border-white text-white font-semibold text-lg px-10 py-5 hover:bg-white hover:text-navy transition-colors text-center">
                Call Now: (214) 555-0100
              </a>
            </div>
            {/* Trust strip — no emojis, styled dots */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              {[
                'Free Inspection',
                'Insurance Direct Billing',
                'Deductible Assistance',
                'Lifetime Warranty',
                'Rental Coordination',
              ].map((badge, i) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold inline-block flex-shrink-0"></span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* B. URGENCY BANNER */}
      <section className="w-full bg-electric-blue py-6 px-4">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-base md:text-lg text-center md:text-left">
            Hail season is active in DFW — Collin, Denton &amp; Dallas counties under severe weather watch. Book your free inspection now.
          </p>
          <Link href="/free-estimate" className="bg-white text-electric-blue font-extrabold px-8 py-3 hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0">
            Book Now
          </Link>
        </div>
      </section>

      {/* C. STATS BAR */}
      <section className="w-full bg-navy-dark text-white py-14 px-4 border-t border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Vehicles Restored' },
              { value: '15+', label: 'Years Experience' },
              { value: 'All Major', label: 'Insurers Accepted' },
              { value: '$0', label: 'Out of Pocket (Most Customers)' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. HOW IT WORKS — Insurance Flow */}
      <section className="w-full bg-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-4">
              We Handle Everything. You Pay Nothing Out of Pocket.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Most Dent Boyz customers pay $0. Here&apos;s exactly how it works.
            </p>
          </div>

          {/* Step Flow */}
          <div className="grid md:grid-cols-6 gap-0 mb-16">
            {insuranceSteps.map((s, i) => (
              <div key={s.step} className="relative border border-gray-100 p-6 md:p-8 bg-white">
                <div className="text-5xl font-extrabold text-gold/20 mb-4 leading-none">{s.step}</div>
                <div className="w-8 h-0.5 bg-gold mb-3"></div>
                <h3 className="font-extrabold text-dark-text mb-3 text-sm uppercase tracking-wide">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                {i < insuranceSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-3 h-3 bg-gold rotate-45"></div>
                )}
              </div>
            ))}
          </div>

          {/* Callout boxes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy text-white p-8 border-l-4 border-gold">
              <h3 className="font-extrabold text-xl text-gold mb-3">Rental Coordination</h3>
              <p className="text-gray-300 leading-relaxed">
                If your repair takes more than one day, we coordinate a rental vehicle through your insurance.
                Most comprehensive policies cover a rental during repairs — we handle all the arrangements so
                you&apos;re never without a vehicle.
              </p>
            </div>
            <div className="bg-navy text-white p-8 border-l-4 border-gold">
              <h3 className="font-extrabold text-xl text-gold mb-3">No Out of Pocket for Most Customers</h3>
              <p className="text-gray-300 leading-relaxed">
                Texas comprehensive coverage typically covers hail damage fully. With our deductible assistance
                program, the majority of our customers pay $0. We&apos;ll tell you upfront exactly what to expect —
                no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. COMPETITOR COMPARISON TABLE */}
      <section className="w-full bg-light-gray py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-4">
              Why North Dallas Chooses Dent Boyz
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We don&apos;t just fix dents — we manage the entire process so you don&apos;t have to.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg text-sm">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 bg-gray-50 text-gray-500 font-semibold uppercase tracking-wide text-xs border-b border-gray-200">Feature</th>
                  <th className="py-4 px-5 bg-navy text-gold font-extrabold uppercase tracking-wide text-xs border-b border-navy text-center">Dent Boyz</th>
                  <th className="py-4 px-5 bg-gray-50 text-gray-500 font-semibold uppercase tracking-wide text-xs border-b border-gray-200 text-center">Typical Body Shop</th>
                  <th className="py-4 px-5 bg-gray-50 text-gray-500 font-semibold uppercase tracking-wide text-xs border-b border-gray-200 text-center">Other PDR Shops</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="comparison-cell font-semibold text-dark-text">{row.feature}</td>
                    <td className={`text-center ${isDentBoyzYes(row.dentBoyz) ? 'comparison-cell-yes' : 'comparison-cell text-gold font-semibold'} bg-navy/5`}>
                      {row.dentBoyz}
                    </td>
                    <td className={`text-center ${row.bodyShop === 'No' || row.bodyShop === 'NO — repainted' || row.bodyShop === '2-4 Weeks' ? 'comparison-cell-no' : 'comparison-cell text-gray-600'}`}>
                      {row.bodyShop}
                    </td>
                    <td className={`text-center ${row.pdrShops === 'No' || row.pdrShops === 'Rarely' ? 'comparison-cell-no' : 'comparison-cell text-gray-600'}`}>
                      {row.pdrShops}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* F. SERVICES GRID */}
      <section className="w-full bg-navy py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-4xl font-extrabold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From hail storms to door dings, our certified PDR technicians handle every type of dent
              repair — without paint, without filler, without compromise.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* G. HAIL DAMAGE EXPLAINER */}
      <section className="w-full bg-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <PhotoWithMeta
                src="/images/hail/hail-damage-hood.jpg"
                alt="Auto hail damage repair in North Dallas, TX — technician performing PDR on vehicle roof | Dent Boyz"
                priority
                city="North Dallas"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="w-12 h-0.5 bg-gold mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
                North Texas Storms Hit Hard. Here&apos;s How We Fix It.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Dallas-Fort Worth area sits in the heart of &quot;Hail Alley&quot; — one of the
                most hail-prone regions in the United States. Every spring and fall, powerful storms
                can drop golf ball or even baseball-sized hail that leaves hundreds of dents across
                your hood, roof, trunk, and doors.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The good news: <strong>most hail damage is 100% repairable with PDR</strong> — even
                on 2020+ vehicles with advanced paint systems. Paintless Dent Repair preserves your
                factory paint, costs less, and takes a fraction of the time compared to traditional
                body shop methods.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dent Boyz has restored over 500 vehicles across North Dallas. We work with every
                major insurance company, provide deductible assistance, and guarantee our work for
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H. INSURANCE CARRIERS */}
      <section className="w-full bg-navy py-20 px-4">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              We Work Directly With Every Major Texas Insurer
            </h2>
          </div>
          <CarrierGrid />
          <p className="text-center text-gray-400 text-sm">
            Don&apos;t see your carrier? We work with all insurers that cover comprehensive/collision in Texas.{' '}
            <a href="tel:2145550100" className="text-gold hover:underline font-semibold">Call us.</a>
          </p>
        </div>
      </section>

      {/* I. VEHICLE TYPES */}
      <section className="w-full bg-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gold/20 text-gold font-semibold text-sm px-4 py-1 mb-4 uppercase tracking-wide">
                2020+ Vehicles
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
                Own a 2020 or Newer Vehicle? PDR Is Your Best Option.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Newer vehicles — especially trucks, SUVs, luxury sedans, and Teslas — have thinner,
                more advanced paint systems that require specialized PDR techniques. Traditional body
                shop methods can damage these coatings and void manufacturer warranties.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PDR preserves your factory finish, maintains your resale value, and keeps your
                vehicle&apos;s warranty intact. We work on BMW, Mercedes, Tesla, Range Rover,
                Porsche, Ford F-150, and every other modern vehicle platform.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tesla', 'BMW', 'Mercedes', 'Porsche', 'Range Rover', 'Ford F-150', 'Chevy Suburban', 'Toyota Tundra'].map((v) => (
                  <span key={v} className="bg-light-gray text-dark-text text-xs font-semibold px-3 py-1.5 uppercase tracking-wide">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <PhotoWithMeta
                src="/images/pdr/technician-working.jpg"
                alt="PDR paintless dent repair for newer vehicles in North Dallas, TX — 2022 Tesla Model 3 hail damage restoration | Dent Boyz"
                city="North Dallas"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* J. CITY GRID */}
      <section className="w-full bg-light-gray py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="text-center mb-10">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
              35 Cities Across North Dallas &amp; DFW
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve 35+ cities across Collin County, Denton County, and the North Dallas metro.
              Free on-site inspections available — we come to you.
            </p>
          </div>
          <CityGrid />
        </div>
      </section>

      {/* K. REVIEWS TEASER */}
      <section className="w-full bg-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
              What North Dallas Drivers Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold font-extrabold text-sm">{review.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-3 h-3 bg-gold inline-block"></span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-dark-text text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{review.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L. CTA BLOCK */}
      <CTABlock
        headline="Hail Hit Your Car? Don't Wait."
        subtext="The longer hail damage sits, the more the metal work-hardens. Get your free inspection today — no obligation, no pressure, no out-of-pocket cost for most customers."
      />

      {/* M. LEAD FORM */}
      <section className="w-full bg-navy py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-12 h-0.5 bg-gold mx-auto mb-6"></div>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-400">
                Fill out the form below and a Dent Boyz specialist will contact you within 1 business
                hour to schedule your free inspection.
              </p>
            </div>
            <div className="bg-navy-dark border border-white/10 p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
