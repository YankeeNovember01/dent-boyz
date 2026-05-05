import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Lease Return Dent Repair North Dallas | Fix Before Dealer Charges You | Dent Boyz',
  description: 'Returning a leased vehicle soon? Get lease return dent repair in North Dallas before the dealer charges you 3–5x more. Fast turnaround. Free estimate.',
  alternates: { canonical: 'https://dent-boyz.com/services/lease-return-dent-repair' },
};

const faqItems = [
  {
    question: 'Can you guarantee the dealer won\'t charge me anything?',
    answer: 'No — we can\'t guarantee what the dealer\'s inspection company will do. What we can guarantee is our workmanship: a clean PDR repair from us passes virtually all lease return inspections. Most dealers and third-party inspection companies (AutoVin, AACC) use the credit-card test for dent size — if a dent is smaller than a credit card and has no paint damage, it passes. Our repairs deliver exactly that result.',
  },
  {
    question: 'How far in advance should I bring my car in?',
    answer: '30–60 days before your return date is ideal. This gives us time to complete the repairs, allows for any paint touch-up to fully cure if needed, and leaves a buffer if we find additional damage during our inspection. Don\'t wait until the week of your return.',
  },
  {
    question: 'Does this work for all makes?',
    answer: 'Yes — PDR works on all major vehicle brands. BMW, Mercedes, Lexus, Audi, Honda, Toyota, Chevrolet, Ford, and all other major manufacturers. The technique is material-based (steel or aluminum panels), not brand-specific.',
  },
];

const faqSchema = {
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  name: 'Lease Return Dent Repair',
  description: 'Pre-lease-return dent repair in North Dallas, TX. Fix dents before the dealer charges you excess wear and tear fees. PDR for all makes and models.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
};

const leaseCities = [
  { name: 'McKinney (Stonebridge Ranch)', slug: 'mckinney' },
  { name: 'Frisco', slug: 'frisco' },
  { name: 'Prosper', slug: 'prosper' },
  { name: 'Plano Legacy West', slug: 'plano' },
];


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dent-boyz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dent-boyz.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Lease Return Dent Repair', item: 'https://dent-boyz.com/services/lease-return-dent-repair' },
  ],
};

export default function LeaseReturnDentRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Lease Return Dent Repair —{' '}
              <span className="text-gold">Fix It Before the Dealer Charges You</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Dealers charge $300–$800 per dent at lease return. We fix the same dents for
              30–50% of that — before your return date, so you never see that surprise bill.
              Free inspection, fast turnaround.
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

      {/* WHAT DEALERS CHARGE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What Dealers Charge for Dents at Lease Return</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Here&apos;s what most lease customers don&apos;t know until it&apos;s too late:
            </p>
            <div className="space-y-4">
              {[
                { icon: '', title: '$300–$800+ per dent', desc: 'Dealers bill excess wear and tear at retail body shop rates — not PDR rates. Every flagged dent adds up fast.' },
                { icon: '', title: 'Third-party inspection companies', desc: 'AutoVin, AACC, and similar companies inspect returned vehicles and flag everything. They\'re thorough by design — their job is to find every billable item.' },
                { icon: '', title: 'The surprise bill arrives weeks later', desc: 'You return the car, feel fine about it, then get a $1,200 charge in the mail 3–4 weeks later. No negotiation. No second chances.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-dark-text mb-1">{item.title}</div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT COUNTS */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What Counts as &ldquo;Excess Wear and Tear&rdquo;?</h2>
          <div className="bg-white rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Most lease agreements allow dents smaller than a credit card. But inspectors flag
              a lot more than that:
            </p>
            <ul className="space-y-3 text-gray-600">
              {[
                'Multiple door dings on the same panel — even if each one is small, the cumulative appearance gets flagged',
                'Hood dents — always flagged regardless of size, since the hood is a primary visibility panel',
                'Roof damage — flagged and expensive to repair at dealer rates',
                'Dents near panel edges or body lines — flagged because they\'re harder to repair and more visible',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">~</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-dark-text font-medium text-sm">
                 <strong>Know what they&apos;ll charge for before you hand over the keys.</strong> Our free
                inspection walks through your vehicle the same way an AutoVin inspector would.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PDR SAVES MONEY */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">How PDR Saves You Money at Lease Return</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: '', title: '30–50% of dealer cost', desc: 'Our repair pricing is significantly below what dealers charge at lease return. We use PDR — they use body shop rates.' },
                { icon: 'YES', title: 'You return with a clean inspection', desc: 'A quality PDR repair passes the credit-card test every time. The dent is gone. Nothing to flag.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-light-gray rounded-xl p-6">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-bold text-dark-text mb-1">{item.title}</div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-navy text-white rounded-xl p-8">
              <h3 className="font-bold text-gold text-lg mb-4">Real Example</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-gray-300">3 door dings on your BMW</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Dealer charges you:</span>
                  <span className="text-red-400 font-bold text-lg">$900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Dent Boyz fixes them for:</span>
                  <span className="text-gold font-bold text-lg">$275</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-2">
                  <span className="font-bold">You save:</span>
                  <span className="text-green-400 font-extrabold text-xl">$625</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMING */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Timing — Do This 30–60 Days Before Your Return Date</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: '60 days out', desc: 'Ideal. Time for full inspection, repairs, any touch-ups, and a buffer for surprises.' },
                { label: '30 days out', desc: 'Still great timing. Comfortable window for repairs and any follow-up.' },
                { label: 'Week of return', desc: 'We\'ll try, but tight. Avoid this — some repairs need cure time.' },
              ].map((item) => (
                <div key={item.label} className="bg-light-gray rounded-xl p-5">
                  <div className="font-bold text-dark-text mb-2">{item.label}</div>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-center font-medium">
              Don&apos;t wait until the week of your return. Give yourself — and us — enough runway.
            </p>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">Serving Lease Customers Across North Dallas</h2>
          <p className="text-gray-600 mb-6">
            High lease concentration areas where we see a lot of lease return customers:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {leaseCities.map((city) => (
              <Link
                key={city.slug}
                href={`/hail-damage-repair/${city.slug}-tx`}
                className="bg-light-gray rounded-lg px-4 py-3 text-sm font-medium text-dark-text text-center hover:bg-gold hover:text-navy transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-xl text-dark-text mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Lease Return Coming Up? Don't Let the Dealer Win."
        subtext="Fix it first. Pay a fraction. Return clean. Free inspection — no obligation."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Lease Return Inspection</h2>
            <p className="text-gray-600">We&apos;ll walk through your vehicle and tell you exactly what to fix. Response within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
