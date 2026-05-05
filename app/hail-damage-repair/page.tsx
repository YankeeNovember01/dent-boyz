import type { Metadata } from 'next';
import Link from 'next/link';
import CityGrid from '@/components/CityGrid';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import PhotoWithMeta from '@/components/PhotoWithMeta';

export const metadata: Metadata = {
  title: 'Auto Hail Damage Repair in North Dallas, TX | Dent Boyz',
  description:
    'Expert auto hail damage repair in Frisco, McKinney, Plano & North Dallas. Free inspection, deductible assistance, insurance direct billing. Call Dent Boyz.',
  alternates: { canonical: 'https://dent-boyz.com/hail-damage-repair' },
};

const faqItems = [
  {
    question: 'Does hail damage repair affect insurance rates in Texas?',
    answer:
      'In most cases, filing a comprehensive claim for hail damage in Texas does NOT raise your insurance rates. Hail is considered an "Act of God" — a no-fault event. Texas law protects drivers from surcharges for comprehensive claims. However, multiple claims within a short period could affect your rates. We recommend contacting your insurer to confirm your specific policy terms. Most of our customers find that the repair cost far exceeds the deductible, making filing the smart financial choice.',
  },
  {
    question: 'How long does hail damage repair take?',
    answer:
      'Once your vehicle is in our shop and the insurance claim gets approval, we immediately begin the repair process. Most hail damage repairs are completed in 1–3 business days. Vehicles with severe damage — including large concentrations of deep dents, damage to moldings, or damage to glass — may take up to 5–7 days. Keep in mind the full process from filing your claim to repair start typically takes 1–2 weeks at most. We\'ll give you an accurate timeline during your free inspection and coordinate rental vehicles through your insurance if needed.',
  },
  {
    question: 'Will my car look factory original after PDR?',
    answer:
      'Yes — in the vast majority of cases, a professional PDR repair is completely undetectable to the naked eye and even under specialized lighting. PDR works by carefully massaging the metal back to its original shape without disturbing the paint. Unlike body shop repairs that involve filler and repainting (which always look slightly different under certain lighting), a quality PDR repair is truly invisible. We back every repair with a lifetime warranty.',
  },
  {
    question: 'What if I don\'t have comprehensive coverage?',
    answer:
      'Hail damage is covered under comprehensive insurance, not collision. If you don\'t have comprehensive coverage, you\'ll be paying out of pocket. The good news is that PDR is significantly more affordable than traditional body shop repair — often 50-70% less. We offer flexible payment options and will work with you on pricing. We also provide free inspections and honest assessments, so you know exactly what you\'re dealing with before committing.',
  },
  {
    question: 'How do I know if my car is totaled vs repairable?',
    answer:
      'In Texas, a vehicle is considered a total loss when the cost to repair it exceeds its actual cash value (ACV). Most hail damage — even severe storms — does not total modern vehicles because PDR is so cost-effective. Very large, very deep dents that have cracked or chipped the paint may require body shop work, which is more expensive. During your free inspection, we\'ll give you an honest assessment and help you understand whether your vehicle is a strong PDR candidate. If we believe your vehicle may be totaled, we\'ll tell you that upfront.',
  },
];

const faqSchema = {
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  name: 'Auto Hail Damage Repair',
  description: 'Professional paintless dent repair and auto hail damage restoration for North Dallas vehicles.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hail Damage Repair Services',
  },
};

export default function HailDamageRepairPage() {
  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              North Dallas Auto Hail Damage Repair —{' '}
              <span className="text-gold">Factory Paint. Zero Hassle.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Certified PDR technicians serving Frisco, McKinney, Plano, Allen, Prosper, Celina &
              all of North Dallas. Free inspection. Deductible assistance available. Insurance
              direct billing. Lifetime warranty on all repairs.
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

      {/* WHAT TO DO FIRST */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">
            Does Your Car Have Hail Damage? Here&apos;s What to Do First
          </h2>
          <div className="space-y-8">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-4">
                Step 1 — Don&apos;t Panic (Most Hail Damage Is 100% Repairable)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                After a North Texas hailstorm, the first thing most drivers feel is dread. But
                here&apos;s the reality: <strong>the vast majority of hail damage is fully
                repairable using Paintless Dent Repair</strong>, and your vehicle can be restored
                to factory condition — often with zero visible evidence that any damage occurred.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Even severe hailstorms with golf ball or baseball-sized hail are typically PDR
                candidates. The critical factor is whether the paint is cracked or chipped. If
                the paint is intact (which it usually is, even with significant denting), PDR can
                restore your vehicle perfectly. We&apos;ve repaired vehicles with 500+ dents
                that came out looking showroom-fresh.
              </p>
            </div>

            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-4">
                Step 2 — Get a Free Inspection Before Filing Anything
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before you call your insurance company, get a professional inspection from Dent
                Boyz. Here&apos;s why this matters: <strong>a thorough inspection puts you in
                a stronger negotiating position</strong> with your insurer. Insurance adjusters
                are trained to minimize payouts, and without your own documentation, you may
                receive a lowball estimate.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our inspection includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Full-panel dent count and mapping under specialized lighting</li>
                <li>Documentation of all damage with photos and measurements</li>
                <li>Estimate that reflects true repair costs (not insurance minimums)</li>
                <li>Assessment of any paint damage that may require body shop work</li>
                <li>Guidance on the claims process for your specific insurer</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                The inspection is completely free and takes about 30–45 minutes. We can often
                come to your location for a free inspection. Call us at{' '}
                <a href="tel:2145550100" className="text-electric-blue font-semibold">(214) 555-0100</a>{' '}
                or{' '}
                <Link href="/free-estimate" className="text-electric-blue font-semibold">
                  schedule online
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS PDR */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">
            What Is Paintless Dent Repair and Why It&apos;s Right for Hail
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-dark-text mb-4">How PDR Works</h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Paintless Dent Repair is a technique developed in the 1960s by Mercedes-Benz
                  factory workers and refined over decades into the gold standard for dent removal.
                  The process involves using specialized metal rods and picks to carefully apply
                  precise pressure from behind the panel, gradually massaging the metal back to its
                  original shape.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Simultaneously, a technician may use small tabs and specialized pulling tools on
                  the paint surface to help guide the metal. The process requires extensive training
                  and practice — a skilled PDR technician typically trains for 3–5 years before
                  working independently.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The result is a dent repair that&apos;s literally invisible — no filler, no paint,
                  no evidence. Your vehicle leaves with the same factory paint it had the day it
                  rolled off the assembly line.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <PhotoWithMeta
                  src="/images/pdr/pdr-process.jpg"
                  alt="Paintless dent repair process in North Dallas, TX — PDR technician using specialized tools on vehicle panel | Dent Boyz"
                  city="North Dallas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark-text mb-4">PDR vs Body Shop Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left py-4 px-6 font-semibold">Factor</th>
                    <th className="text-left py-4 px-6 font-semibold text-gold">PDR (Dent Boyz)</th>
                    <th className="text-left py-4 px-6 font-semibold">Traditional Body Shop</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Factory Paint', 'YES 100% preserved', 'NO Sanded & repainted'],
                    ['Repair Time', 'YES 1–3 days', 'NO 2–4 weeks'],
                    ['Cost', 'YES Lower (insurance preferred)', 'NO Higher'],
                    ['Resale Value', 'YES Fully maintained', 'NO Reduced (repaint noted on Carfax)'],
                    ['Warranty', 'YES Lifetime warranty', '~ Varies by shop'],
                    ['Insurance', 'YES Direct billing, all major insurers', '~ May require multiple estimates'],
                    ['2020+ Vehicles', 'YES Ideal for advanced paint systems', 'NO Risk of paint matching issues'],
                    ['Quality', 'YES Factory original result', '~ Slightly different under certain lighting'],
                  ].map(([factor, pdr, shop]) => (
                    <tr key={factor} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-6 font-medium text-dark-text">{factor}</td>
                      <td className="py-3 px-6 text-gray-700">{pdr}</td>
                      <td className="py-3 px-6 text-gray-700">{shop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DENT BOYZ PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">The Dent Boyz Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: '01', title: 'Free Inspection', desc: 'We come to your home or office to assess your vehicle, or you can bring it to us. Our technicians document every dent with photos and measurements using specialized lighting. This takes 30–45 minutes and is completely free with no obligation.' },
              { step: '02', title: 'Insurance Coordination', desc: 'We prepare your complete damage documentation and work with your insurance adjuster to ensure you receive the full compensation you\'re entitled to. We handle all the paperwork, phone calls, and supplemental claims if needed. You focus on your day — we handle the insurance.' },
              { step: '03', title: 'Expert PDR Repair', desc: 'Our certified technicians get to work. Using specialized PDR tools and specialized lighting boards to reveal every dent, we systematically massage each dent back to factory shape. Once your vehicle is in the shop, most repairs are completed in 1–3 business days. We\'ll keep you updated throughout the process.' },
              { step: '04', title: 'Final Inspection & Delivery', desc: 'Before we return your vehicle, we perform a rigorous final inspection under multiple lighting conditions — including specialized LED lighting boards that reveal any remaining imperfections. We don\'t deliver until the car meets our standards. Your insurance is billed directly — you pay only your deductible (or nothing with deductible assistance).' },
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

      {/* INSURANCE SECTION */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold mb-6">We Work With Your Insurance</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Hail damage is covered under comprehensive insurance — not collision — which means
            it&apos;s typically a no-fault, non-surcharge claim in Texas. We&apos;re experienced
            with every major Texas insurer:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {['State Farm', 'USAA', 'Allstate', 'Progressive', 'Farmers', 'GEICO', 'Nationwide', 'Liberty Mutual', 'Travelers'].map((insurer) => (
              <div key={insurer} className="bg-white/10 rounded-lg px-4 py-3 text-sm font-medium text-center">
                {insurer}
              </div>
            ))}
          </div>
          <div className="bg-gold/20 border border-gold/40 rounded-xl p-6">
            <h3 className="font-bold text-gold text-lg mb-2">Deductible Assistance Available</h3>
            <p className="text-gray-300">
              Depending on your policy and situation, we may be able to assist with your deductible.
              Ask us about deductible assistance programs during your free inspection.
            </p>
          </div>
        </div>
      </section>

      {/* CITY COVERAGE */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            Serving All of North Dallas and Collin County
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We come to your location for free inspections across all of North Dallas. No need to
            drop off your vehicle if your schedule doesn&apos;t allow it.
          </p>
          <CityGrid />
        </div>
      </section>

      {/* WHY CHOOSE DENT BOYZ */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Why Choose Dent Boyz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '', title: '500+ Vehicles Restored', desc: 'We\'ve repaired hundreds of hail-damaged vehicles across North Dallas. Our experience means your car is in expert hands.' },
              { icon: '', title: '5-Star Rated Service', desc: 'Our customers consistently rate us 5 stars for quality, communication, and professionalism. Read our reviews to see what North Dallas drivers say.' },
              { icon: '', title: 'Lifetime Warranty', desc: 'Every PDR repair we perform comes with a lifetime warranty. If a repaired dent ever reappears, we fix it for free — period.' },
              { icon: '', title: 'Free On-Site Inspections', desc: 'We come to your home or office for the inspection across most North Dallas cities. Repairs are completed at our shop with professional PDR equipment.' },
              { icon: '', title: 'Insurance Direct Billing', desc: 'We bill your insurance directly and handle all the paperwork. You deal with us — not the insurance company.' },
              { icon: '', title: 'Honest Assessments', desc: 'If your vehicle isn\'t a good PDR candidate, we\'ll tell you. We don\'t take jobs we can\'t complete to factory standard.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-dark-text mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-xl text-dark-text mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Get Your Car Looking Factory-New Again?"
        subtext="Free inspection. No obligation. Most repairs completed in 1–3 days. Insurance handled."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">
              Complete the form and a specialist will contact you within 1 business day.
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
