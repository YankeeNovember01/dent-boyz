import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES, getCityBySlug, getNearbyCities, getCityContent } from '@/lib/cities';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import PhotoWithMeta from '@/components/PhotoWithMeta';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  const cityContent = getCityContent(params.city);
  const primaryKeyword = cityContent?.primaryKeyword || `hail damage repair ${city.name} TX`;
  return {
    title: `${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} | Dent Boyz`,
    description: `Expert auto hail damage repair in ${city.name}, TX — ${city.angle}. Free inspection, deductible assistance, insurance direct billing. Call Dent Boyz at (214) 555-0100.`,
    alternates: { canonical: `https://dent-boyz.com/hail-damage-repair/${params.city}` },
  };
}

function buildCityFAQ(city: ReturnType<typeof getCityBySlug>) {
  if (!city) return [];
  return [
    {
      question: `How quickly can Dent Boyz respond to hail damage in ${city.name}, TX?`,
      answer: `We typically schedule free inspections in ${city.name} within 1–2 business days of your call — our technicians come to your home or office for the inspection. Once your vehicle is in our shop and the insurance claim gets approval, we immediately begin the repair process. Most repairs take 1–3 business days. Keep in mind the full process from filing your claim to repair start typically takes 1–2 weeks at most.`,
    },
    {
      question: `Does Dent Boyz come to ${city.name} for inspections?`,
      answer: `Yes — we offer free on-site inspections throughout ${city.name}. Our technicians come to your home or office to assess your vehicle at no charge. Repairs are then completed at our shop using professional PDR equipment and specialized lighting to ensure a factory-quality result.`,
    },
    {
      question: `Which insurance companies do you work with in ${city.name}, TX?`,
      answer: `We work with all major Texas insurance companies including State Farm, USAA, Allstate, Progressive, Farmers, GEICO, Nationwide, Liberty Mutual, and Travelers. We handle the entire claims process — inspection documentation, adjuster coordination, supplemental claims, and direct billing. You deal with us, not the insurance company.`,
    },
    {
      question: `What is the hail season in ${city.name} and North Texas?`,
      answer: `North Texas experiences two primary hail seasons: spring (March–May) and fall (September–November). The DFW metroplex, including ${city.name}, sits in "Hail Alley" — one of the most hail-prone regions in the United States. Storms can produce golf ball or baseball-sized hail with little warning. If your vehicle was caught in a storm, don't wait — get a free inspection as soon as possible.`,
    },
    {
      question: `Will PDR work on my newer vehicle in ${city.name}?`,
      answer: `Yes — PDR is actually the preferred method for 2020+ vehicles. Newer vehicles, including the luxury and high-end models common in ${city.name}, have thinner paint systems that can be damaged by traditional body shop methods. PDR preserves your factory finish, maintains your vehicle's warranty, and keeps your resale value intact. We work on BMW, Mercedes, Tesla, Range Rover, Porsche, and all modern vehicle platforms.`,
    },
  ];
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const nearbyCities = getNearbyCities(city.slug, 5);
  const faqItems = buildCityFAQ(city);
  const cityContent = getCityContent(params.city);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dent-boyz.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hail Damage Repair',
        item: 'https://dent-boyz.com/hail-damage-repair',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city.name} TX`,
        item: `https://dent-boyz.com/hail-damage-repair/${city.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    name: 'Dent Boyz',
    description: `Auto hail damage repair and paintless dent repair in ${city.name}, TX`,
    url: `https://dent-boyz.com/hail-damage-repair/${city.slug}`,
    telephone: '+12145550100',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'TX',
      postalCode: city.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: `${city.name}, TX`,
  };

  const serviceSchema = {
    name: `Auto Hail Damage Repair in ${city.name}, TX`,
    description: `Professional paintless dent repair and hail damage restoration for ${city.name} vehicles. ${city.angle}.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Dent Boyz',
      telephone: '+12145550100',
    },
    areaServed: `${city.name}, TX`,
  };

  const allFaqItems = [
    ...faqItems,
    ...(cityContent?.faqs.map(f => ({ question: f.q, answer: f.a })) ?? []),
  ];

  const faqSchema = {
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <div className="inline-block bg-gold/20 text-gold border border-gold/30 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {city.name}, TX · ZIP {city.zip}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Hail Damage Repair in {city.name}, TX —{' '}
              <span className="text-gold capitalize">{city.angle}.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Dent Boyz provides expert auto hail damage repair and paintless dent repair in{' '}
              {city.name}, TX ({city.zip}). Serving {city.neighborhoods} and all of{' '}
              {city.name}. Free inspection, deductible assistance, insurance direct billing.
              Mobile service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-estimate" className="btn-gold text-lg px-8 py-4 text-center">
                Get Free Inspection
              </Link>
              <a href="tel:2145550100" className="btn-outline-white text-lg px-8 py-4 text-center">
                Call (214) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CITY-SPECIFIC INTRO */}
      {cityContent && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">{cityContent.introParagraph}</p>
          </div>
        </section>
      )}

      {/* INTRO */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-dark-text mb-6">
                Hail Damage in {city.name} — What You Need to Know
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {city.name} is a {city.profile}. With a population of {city.population}, this is one
                of the most active communities in North Dallas — and when a hailstorm hits, thousands
                of vehicles are affected simultaneously.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The area along {city.highway} sees significant storm activity each spring and fall.
                Neighborhoods including {city.neighborhoods} have all experienced major hail events
                in recent years. North Texas storms can produce hail ranging from pea-sized to
                baseball-sized — all of which can cause significant damage to vehicle paint, glass,
                and body panels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The good news: <strong>Dent Boyz is here to help</strong>. We offer free mobile
                inspections throughout {city.name}, work with all major insurance companies, and can
                restore most vehicles to factory condition in 1–3 business days once in the shop.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <PhotoWithMeta
                src="/images/hail/hail-storm-car.jpg"
                alt={`Auto hail damage repair in ${city.name}, TX — vehicle with hail dents being restored by PDR technician | Dent Boyz`}
                city={city.name}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CITY-SPECIFIC SECTIONS */}
      {cityContent && (
        <>
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Hail History in {city.name}</h2>
              <p className="text-gray-700">{cityContent.localStormContext}</p>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Vehicle Types We Serve in {city.name}</h2>
              <p className="text-gray-700">{cityContent.vehicleAngle}</p>
            </div>
          </section>

          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Insurance Claims in {city.name}</h2>
              <p className="text-gray-700">{cityContent.insuranceAngle}</p>
            </div>
          </section>
        </>
      )}

      {/* WHY CHOOSE DENT BOYZ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">
            Why {city.name} Residents Choose Dent Boyz
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '',
                title: `Free On-Site Inspections in ${city.name}`,
                desc: `We come to your home in ${city.neighborhoods} or your office for a free inspection. Once we assess your vehicle, repairs are completed at our shop with precision PDR tools and specialized lighting.`,
              },
              {
                icon: '',
                title: 'Insurance Handled Completely',
                desc: `We manage the entire insurance process — inspection documentation, adjuster coordination, supplemental claims, and direct billing to your insurer. ${city.profile.includes('State Farm') ? 'With State Farm\'s presence in this area, we know exactly how to navigate their process.' : 'We work with every major Texas insurer.'}`,
              },
              {
                icon: '',
                title: 'Deductible Assistance Available',
                desc: 'Ask about our deductible assistance program. Depending on your situation and policy, we may be able to reduce or eliminate your out-of-pocket cost entirely.',
              },
              {
                icon: '',
                title: 'Lifetime Warranty on All Repairs',
                desc: `Every PDR repair performed in ${city.name} comes with a lifetime warranty. If a repaired dent ever reappears, we fix it for free — no questions asked.`,
              },
              {
                icon: '',
                title: '1–3 Day Turnaround',
                desc: `Most ${city.name} hail damage repairs are completed in 1–3 business days once your vehicle is in our shop. We know you need your vehicle — we work efficiently without cutting corners.`,
              },
              {
                icon: '',
                title: 'Honest, Transparent Assessments',
                desc: `We give honest assessments. If your vehicle isn't a perfect PDR candidate, we'll tell you. We only take jobs we can complete to factory standard — that's why our reviews are consistently 5 stars.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            Our {city.name} Repair Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Free Mobile Inspection',
                desc: `We come to your home or office in ${city.name} for a free inspection. Our technician covers every panel and produces a complete damage report with photos and dent counts — no obligation.`,
              },
              {
                step: '02',
                title: 'Insurance Coordination',
                desc: `We prepare your complete damage documentation and work with your insurer to ensure you receive proper compensation. We attend the adjuster appointment with you and file supplemental claims if the initial estimate is insufficient.`,
              },
              {
                step: '03',
                title: 'Expert PDR Repair',
                desc: `Our certified technicians restore your vehicle panel by panel using specialized PDR tools. We work under LED lighting boards to find and repair every dent. Most ${city.name} jobs are completed in 1–3 days.`,
              },
              {
                step: '04',
                title: 'Final Inspection + Return',
                desc: `Every vehicle passes a rigorous final inspection before delivery. We can return your vehicle to your home in ${city.name}. Your insurance is billed directly — you pay only your deductible.`,
              },
            ].map((item) => (
              <div key={item.step} className="bg-light-gray rounded-xl p-8 border-l-4 border-gold">
                <div className="text-gold font-extrabold text-3xl mb-2">{item.step}</div>
                <h3 className="font-bold text-xl text-dark-text mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURERS */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold mb-6">Insurance Companies We Work With</h2>
          <p className="text-gray-300 mb-8">
            We work with every major insurer serving {city.name} and North Texas. We handle the
            entire claims process — no runaround, no surprises.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {['State Farm', 'USAA', 'Allstate', 'Progressive', 'Farmers', 'GEICO', 'Nationwide', 'Liberty Mutual'].map((ins) => (
              <div key={ins} className="bg-white/10 rounded-lg px-4 py-3 text-center text-sm font-medium">
                {ins}
              </div>
            ))}
          </div>
          <div className="bg-gold/20 border border-gold/40 rounded-xl p-6">
            <p className="text-gold font-semibold mb-1">Deductible Assistance Available</p>
            <p className="text-gray-300 text-sm">
              Ask about deductible assistance during your free inspection. We may be able to reduce
              or eliminate your out-of-pocket cost.
            </p>
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">
            Serving {city.name} and Nearby Areas
          </h2>
          <p className="text-gray-600 mb-8">
            In addition to {city.name}, Dent Boyz serves all surrounding communities throughout
            North Dallas and Collin County.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/hail-damage-repair/${c.slug}`}
                className="bg-white rounded-lg px-4 py-3 text-sm font-semibold text-dark-text hover:text-electric-blue hover:shadow-md transition-all border border-gray-200 text-center"
              >
                {c.name}, TX →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITY-SPECIFIC FAQS */}
      {cityContent && cityContent.faqs.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Frequently Asked Questions — {city.name} Hail Damage</h2>
            <div className="space-y-6">
              {cityContent.faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            FAQ — Hail Damage Repair in {city.name}, TX
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-light-gray rounded-xl p-8">
                <h3 className="font-bold text-xl text-dark-text mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline={`${city.name} Hail Damage? Get Your Free Inspection Today.`}
        subtext={`Mobile service available throughout ${city.name}. Insurance handled. Deductible assistance available.`}
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">
              Get Your Free {city.name} Estimate
            </h2>
            <p className="text-gray-600">
              Fill out the form below and a Dent Boyz specialist will contact you within 1 business
              hour to schedule your free inspection in {city.name}.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
