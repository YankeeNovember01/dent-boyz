import type { Metadata } from 'next';
import CTABlock from '@/components/CTABlock';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Dent Boyz | North Dallas PDR & Hail Damage Repair Experts',
  description:
    "Meet the Dent Boyz team — North Dallas' trusted paintless dent repair and auto hail damage specialists. Serving Frisco, McKinney, Plano & all of North Dallas.",
};

const differentiators = [
  {
    title: 'PDR Only',
    icon: '🎯',
    body: "We don't do collision repair, body filler, or repainting. PDR is our craft. That focus makes us better at it.",
  },
  {
    title: 'Insurance Experts',
    icon: '📋',
    body: "We've worked with every major Texas insurer — State Farm, USAA, Allstate, Progressive, Farmers, GEICO. We know the process cold and handle it for you.",
  },
  {
    title: 'Luxury Vehicle Specialists',
    icon: '🏆',
    body: 'New BMWs, Teslas, Range Rovers, Porsches — we understand the stakes of preserving factory paint on a $60K+ vehicle. We treat them accordingly.',
  },
  {
    title: 'Mobile Service',
    icon: '🚗',
    body: 'We come to you. Home, office, wherever works. North Dallas commuters shouldn\'t have to take a day off for a dent.',
  },
];

const serviceAreaCities = [
  'Frisco', 'McKinney', 'Plano', 'Allen', 'Prosper', 'Celina',
  'The Colony', 'Little Elm', 'Aubrey', 'Richardson', 'Garland',
  'Carrollton', 'Addison', 'Denton', 'Southlake', 'Flower Mound',
  'Coppell', 'Grapevine', 'Colleyville', 'Lewisville', 'Wylie',
  'Rockwall',
];

const promises = [
  {
    icon: '🔍',
    title: 'Honest Inspections',
    desc: 'We tell you what we see, not what maximizes our revenue.',
  },
  {
    icon: '🎨',
    title: 'Factory Paint Preserved',
    desc: "If PDR won't work on your car, we'll say so before touching it.",
  },
  {
    icon: '💬',
    title: 'Transparent Pricing',
    desc: 'No surprise charges, no pressure.',
  },
  {
    icon: '🛡️',
    title: 'Lifetime Warranty',
    desc: 'Every PDR repair is covered for life — no questions asked.',
  },
  {
    icon: '⭐',
    title: 'Your Satisfaction',
    desc: 'The only measure of a job done right.',
  },
];

const localBusinessSchema = {
  name: 'Dent Boyz',
  description:
    "North Dallas' trusted paintless dent repair and auto hail damage specialists. Serving Frisco, McKinney, Plano & all of North Dallas.",
  url: 'https://dent-boyz.com/about',
  telephone: '+12145550100',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Frisco',
    addressRegion: 'TX',
    postalCode: '75034',
    addressCountry: 'US',
  },
  foundingDate: '2020',
  areaServed: 'North Dallas, TX',
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Dent Boyz',
  description:
    "Meet the Dent Boyz team — North Dallas' trusted paintless dent repair and auto hail damage specialists.",
  url: 'https://dent-boyz.com/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    url: 'https://dent-boyz.com',
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* HERO */}
      <section className="bg-navy text-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              North Dallas&apos; Trusted{' '}
              <span className="text-gold">Hail Damage &amp; PDR Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We built Dent Boyz on one principle: treat every car like it&apos;s our own.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-6">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Dent Boyz was founded and is operated right here in North Dallas, TX. We specialize{' '}
              <strong>exclusively</strong> in paintless dent repair and auto hail damage restoration
              — it&apos;s all we do, and we do it better because of it.
            </p>
            <p>
              Our technicians have a combined <strong>15+ years of hands-on PDR experience</strong>{' '}
              in the DFW market. We&apos;ve restored hundreds of vehicles across Frisco, McKinney,
              Plano, Prosper, Celina, and all of North Dallas.
            </p>
            <p>
              We&apos;re locals — we live here, our kids go to school here, and we understand what
              it means when a hailstorm rolls through and wrecks a car you worked hard for.
            </p>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '500+', label: 'Vehicles Restored' },
              { value: '15+', label: 'Years Experience' },
              { value: '100%', label: 'PDR Focused' },
              { value: '5-Star', label: 'Rated Service' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-light-gray rounded-xl p-6 text-center border border-gray-100"
              >
                <div className="text-3xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-6">
            Why We Started Dent Boyz
          </h2>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              We&apos;ve seen too many North Dallas drivers get taken advantage of. Storm chasers
              show up at the door and pressure people into signing on the spot. Body shops repaint
              panels when PDR would have preserved the factory finish — and the vehicle&apos;s
              value. Insurance companies lowball estimates, betting that most people won&apos;t push
              back.
            </p>
            <p>
              We started Dent Boyz to be <strong>the honest option</strong>: give people a real
              inspection, give them the real options, and let them decide. No pressure. No sales
              tactics. Just straight talk about what your car needs.
            </p>
            <p className="text-dark-text font-semibold text-xl italic border-l-4 border-gold pl-5">
              &ldquo;We&apos;ll tell you if your car isn&apos;t worth fixing. We&apos;ll tell you if
              you shouldn&apos;t file a claim. That&apos;s the kind of shop we want to be.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four reasons North Dallas drivers trust Dent Boyz with their vehicles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-dark-text rounded-xl p-8 text-white border border-white/10 hover:border-gold/40 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gold">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
            Our Service Area
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We serve all of North Dallas and the surrounding DFW suburbs. Mobile service
            available — we come to you.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {serviceAreaCities.map((city) => (
              <span
                key={city}
                className="bg-white border border-gray-200 text-dark-text text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {city}, TX
              </span>
            ))}
            <span className="bg-gold/20 border border-gold/30 text-gold text-sm font-medium px-4 py-2 rounded-full">
              + more
            </span>
          </div>
          <p className="text-dark-text font-semibold text-lg italic">
            &ldquo;If you&apos;re in DFW and you&apos;ve got hail damage, call us. We&apos;ll
            figure out how to get to you.&rdquo;
          </p>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Our Promise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white/10 rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        headline="Ready to see what we can do? Start with a free inspection."
        subtext="No pressure, no obligation. Just an honest look at your vehicle and a clear path forward."
      />
    </>
  );
}
