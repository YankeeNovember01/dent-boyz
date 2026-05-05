import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceGrid from '@/components/ServiceGrid';
import CityGrid from '@/components/CityGrid';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import PhotoWithMeta from '@/components/PhotoWithMeta';

export const metadata: Metadata = {
  title: 'North Dallas Hail Damage Repair — Factory Paint. Zero Hassle.',
  description:
    'Dent Boyz — North Dallas auto hail damage repair specialists. Free inspection, insurance direct billing, deductible assistance. Serving Frisco, McKinney, Plano, Prosper, Celina & more.',
};

const trustBadges = [
  '✓ Free Inspection',
  '✓ Insurance Direct Billing',
  '✓ Deductible Assistance',
  '✓ Lifetime Warranty',
];

const stats = [
  { value: '500+', label: 'Vehicles Restored' },
  { value: '15+', label: 'Years Experience' },
  { value: 'All Major', label: 'Insurers Accepted' },
  { value: '5-Star', label: 'Rated Service' },
];

const pdrVsBodyShop = [
  {
    icon: '🎨',
    title: 'Preserves Factory Paint',
    body: 'PDR never touches your paint. Traditional body shops sand, fill, and repaint — permanently reducing your vehicle\'s value and voiding paint warranties.',
  },
  {
    icon: '⚡',
    title: 'Faster Turnaround',
    body: 'Most hail damage repairs are completed in 1–3 days. Body shop repairs can take 2–4 weeks. Get back on the road faster.',
  },
  {
    icon: '📋',
    title: 'Insurance Preferred',
    body: 'Major insurers prefer PDR because it costs less and delivers better results. We work directly with State Farm, USAA, Allstate, Farmers, and more.',
  },
];

const insuranceSteps = [
  { step: '1', title: 'Inspect', desc: 'We document every dent and provide a thorough damage report.' },
  { step: '2', title: 'File', desc: 'We guide you through the claims process or file directly on your behalf.' },
  { step: '3', title: 'Repair', desc: 'Factory-quality PDR restores your vehicle to pre-storm condition.' },
  { step: '4', title: 'Done', desc: 'We bill your insurance directly. You pay only your deductible — if anything.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              North Dallas Hail Damage Repair —{' '}
              <span className="text-gold">Factory Paint. Zero Hassle.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Serving Frisco, McKinney, Plano, Prosper, Celina &amp; all of North Dallas. Free
              inspection. Insurance handled. Most repairs done in 1–3 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-estimate" className="btn-gold text-lg px-8 py-4 text-center">
                Get Free Inspection
              </Link>
              <a href="tel:2145550100" className="btn-outline-white text-lg px-8 py-4 text-center">
                Call Now: (214) 555-0100
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-electric-blue text-white py-8 px-4">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS HAIL DAMAGE */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
                on 2020+ vehicles with advanced paint systems. Paintless Dent Repair is the preferred
                method for hail restoration because it preserves your factory paint, costs less, and
                takes a fraction of the time compared to traditional body shop methods.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dent Boyz has restored over 500 vehicles across North Dallas. We work with every
                major insurance company, provide deductible assistance, and guarantee our work for
                life.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <PhotoWithMeta
                src="/images/hail/hail-damage-hood.jpg"
                alt="Auto hail damage repair in North Dallas, TX — technician performing PDR on vehicle roof | Dent Boyz"
                priority
                city="North Dallas"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From hail storms to door dings, our certified PDR technicians handle every type of dent
              repair — without paint, without filler, without compromise.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* WHY PDR OVER BODY SHOP */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
              Why Choose PDR Over a Body Shop?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most North Dallas drivers don&apos;t know their options. PDR wins on every metric that
              matters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pdrVsBodyShop.map((item) => (
              <div key={item.title} className="bg-light-gray rounded-xl p-8 border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-dark-text mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE SECTION */}
      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              We Handle the Entire Insurance Process for You
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Filing an insurance claim after hail damage doesn&apos;t have to be stressful. We&apos;ve
              done this hundreds of times with every major insurer in Texas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {insuranceSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-gold text-navy font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/insurance-claims" className="btn-gold px-8 py-4 text-base">
              Full Insurance Claims Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* CITY COVERAGE */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
              Serving All of North Dallas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve 15+ cities across Collin County, Denton County, and the North Dallas metro.
              Mobile service available — we come to your home or office.
            </p>
          </div>
          <CityGrid />
        </div>
      </section>

      {/* NEWER VEHICLES */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <PhotoWithMeta
                src="/images/pdr/technician-working.jpg"
                alt="PDR paintless dent repair for newer vehicles in North Dallas, TX — 2022 Tesla Model 3 hail damage restoration | Dent Boyz"
                city="North Dallas"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="inline-block bg-gold/20 text-gold font-semibold text-sm px-4 py-1 rounded-full mb-4">
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
                  <span key={v} className="bg-light-gray text-dark-text text-xs font-medium px-3 py-1.5 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <CTABlock
        headline="Hail Hit Your Car? Don't Wait — Dents Get Harder to Fix Over Time."
        subtext="The longer hail damage sits, the more the metal work-hardens. Get your free inspection today — no obligation, no pressure."
      />

      {/* LEAD FORM */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-dark-text mb-3">
                Get Your Free Estimate
              </h2>
              <p className="text-gray-600">
                Fill out the form below and a Dent Boyz specialist will contact you within 1 business
                hour to schedule your free inspection.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
