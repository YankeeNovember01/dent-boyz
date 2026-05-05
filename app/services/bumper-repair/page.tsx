import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Bumper Dent Repair North Dallas TX | Dent Boyz PDR',
  description: 'Minor bumper dent repair in North Dallas. Plastic bumper restoration and minor collision repair. Save thousands vs. replacement. Free estimate.',
};

const faqItems = [
  {
    question: 'Can you fix a cracked bumper with PDR?',
    answer: 'No — cracks in plastic bumpers require replacement or specialized plastic welding/repair, not PDR. PDR works on metal panels and minor push-in plastic dents that haven\'t broken the material. We\'ll tell you upfront at the free inspection whether your bumper is a PDR candidate or needs something else.',
  },
  {
    question: 'How long does bumper repair take?',
    answer: '1–3 hours for most minor bumper dents. More complex repairs or bumpers requiring disassembly may take longer. We\'ll give you an accurate timeframe during your free inspection.',
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
  name: 'Bumper Dent Repair',
  description: 'Minor bumper dent repair and restoration in North Dallas, TX. Save thousands vs bumper replacement. Free estimate.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
};


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dent-boyz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dent-boyz.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Bumper Repair', item: 'https://dent-boyz.com/services/bumper-repair' },
  ],
};

export default function BumperRepairPage() {
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
              Bumper Repair in North Dallas —{' '}
              <span className="text-gold">Minor Damage, Major Savings</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Bumper replacement can cost $500–$1,500+ installed. For minor push-in dents and
              scuffs, we can often restore your bumper for a fraction of that — same day,
              no painting required. Free inspection first, always.
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

      {/* PLASTIC VS METAL */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Plastic Bumpers vs. Metal Bumpers</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Nearly all modern vehicles (2000 and newer) have <strong>plastic bumper covers</strong> — the outer
              shell you see — over a metal or foam impact absorber behind it. Understanding this
              distinction matters for repair:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-dark-text mb-3">🔩 Older / Classic Vehicles</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vehicles from the 1970s–early 1990s often had chrome or painted steel bumpers.
                  These are true metal panels and respond well to traditional PDR techniques.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-dark-text mb-3">🚗 Modern Vehicles (2000+)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plastic bumper covers can be heat-reformed for minor push-in dents. PDR
                  applies to the structural metal reinforcement behind the cover. We assess
                  both during your inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN WE FIX */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">What Bumper Damage Can We Fix?</h2>
          <div className="space-y-4">
            {[
              { icon: '✅', label: 'Minor dents with no broken plastic', desc: 'Small push-in dents where the plastic is intact — these are our best candidates. PDR or heat-reforming can restore the shape.' },
              { icon: '✅', label: 'Minor push-in dents (heat + PDR)', desc: 'Push-in areas where the plastic has flexed but not torn can often be heat-reformed back to shape, sometimes with PDR assistance on the metal structure behind it.' },
              { icon: '❌', label: 'Cracks or broken plastic', desc: 'Cracks require plastic repair or full bumper replacement. PDR doesn\'t work on broken material. We\'ll tell you this upfront.' },
              { icon: '❌', label: 'Scratches with paint damage', desc: 'Scratches into the paint or primer need a body shop paint repair. PDR only addresses shape — not paint.' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-white rounded-xl p-6">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-dark-text mb-1">{item.label}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR VS REPLACEMENT */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Bumper Repair vs. Replacement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-xl font-bold text-dark-text mb-4">🔧 Repair (When Applicable)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Fraction of replacement cost</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Same-day turnaround</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> No paint matching issues</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Original bumper stays on the car</li>
              </ul>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-xl font-bold text-dark-text mb-4">💸 Replacement (When Needed)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> $500–$1,500+ installed (parts + paint + labor)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> 1–3 days in the shop</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Paint match may not be perfect on older vehicles</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Aftermarket part quality varies</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-dark-text font-medium">
              💡 <strong>Bottom line:</strong> If your bumper damage qualifies for PDR, you can
              save $300–$1,000+ vs. replacement. The inspection takes 15 minutes and tells you exactly
              where you stand.
            </p>
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
        headline="Before You Replace That Bumper — Get a Free Inspection"
        subtext="You might save $500–$1,000. Takes 15 minutes. No obligation."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">We&apos;ll respond within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
