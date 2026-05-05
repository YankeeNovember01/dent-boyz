import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Paintless Dent Repair in North Dallas TX | Dent Boyz PDR',
  description:
    'What is paintless dent repair? Learn how PDR works, what it costs, and why it beats a body shop for hail damage & dents. Serving all of North Dallas, TX.',
  alternates: { canonical: 'https://dent-boyz.com/paintless-dent-repair' },
};

const howToSchema = {
  name: 'How Paintless Dent Repair Works',
  description: 'A step-by-step explanation of the PDR process used by Dent Boyz to restore vehicles to factory condition.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Step 1 — Damage Assessment',
      text: 'The technician evaluates dent depth, location, and paint condition using specialized LED lighting boards. This determines whether PDR is viable and which approach to use.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 2 — Panel Access',
      text: 'Interior panels are removed, or existing gaps in the body are used, to reach the backside of the dent and position the repair tools correctly.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 3 — Precision Massage',
      text: 'Specialized rods and tools gently apply precise pressure from behind the panel, gradually pushing the metal back to its original factory shape without disturbing the paint.',
    },
    {
      '@type': 'HowToStep',
      name: 'Step 4 — Quality Check',
      text: 'A specialized LED light board is used to reveal any remaining imperfections. The technician continues until the panel meets factory standards.',
    },
  ],
};

const faqItems = [
  {
    question: 'Does PDR work on large hail dents?',
    answer:
      'PDR works on the vast majority of hail dents. Dents larger than a golf ball may require additional techniques but are still often repairable without repainting.',
  },
  {
    question: 'How long does paintless dent repair take?',
    answer:
      'Single dents can be done in 30–60 minutes. Full hail damage jobs typically take 1–5 business days depending on the number of panels affected.',
  },
  {
    question: 'Will my car look exactly like it did before?',
    answer:
      'Yes. A skilled PDR technician restores the metal to its original factory position. When done correctly, there is no visible difference.',
  },
  {
    question: 'Is PDR covered by insurance?',
    answer:
      'Yes — if you have comprehensive coverage, hail damage repair via PDR is covered. You pay your deductible (or less with our deductible assistance program).',
  },
  {
    question: 'Can PDR fix dents on aluminum panels?',
    answer:
      'Yes, though aluminum requires slightly different techniques than steel. Our technicians are trained on both.',
  },
  {
    question: 'What if the paint is cracked or chipped?',
    answer:
      "PDR only works when the paint is intact. If paint is broken, you'll need conventional body shop repair. We'll let you know during your free inspection.",
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
  name: 'Paintless Dent Repair',
  description:
    'Professional paintless dent repair (PDR) for hail damage, door dings, and creases. Factory paint preserved — no filler, no repainting.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'PDR Services',
  },
};

const dentTypes = [
  { type: 'Hail damage (most sizes)', viable: 'YES Yes — ideal candidate' },
  { type: 'Door dings', viable: 'YES Yes' },
  { type: 'Creases (minor)', viable: 'YES Yes — with skill' },
  { type: 'Creases (sharp/deep)', viable: '~ Sometimes' },
  { type: 'Large body panel dents', viable: '~ Depends on location' },
  { type: 'Dents where paint is chipped/cracked', viable: 'NO No — needs body shop' },
  { type: 'Dents on body lines', viable: '~ Requires specialist' },
  { type: 'Rust damage', viable: 'NO No' },
];

const comparisonRows = [
  { factor: 'Factory paint preserved', pdr: 'YES Always', shop: 'NO Repainted' },
  { factor: 'Resale value impact', pdr: 'Minimal', shop: 'Can reduce 10–20%' },
  { factor: 'Repair time', pdr: '1–5 days', shop: '1–3 weeks' },
  { factor: 'Cost', pdr: 'Lower', shop: 'Higher' },
  { factor: 'Insurance preferred', pdr: 'YES Often', shop: 'YES Accepted' },
  { factor: 'Paint match risk', pdr: 'None', shop: 'Color mismatch possible' },
];

export default function PaintlessDentRepairPage() {
  return (
    <>
      <SchemaMarkup type="HowTo" data={howToSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            What Is Paintless Dent Repair?{' '}
            <span className="text-gold">North Dallas&apos; PDR Experts Explain</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            PDR is the gold standard for hail damage, door dings, and creases — restoring your
            vehicle to factory condition without touching the paint. No filler. No repainting. No
            loss in resale value. Dent Boyz serves all of North Dallas, Frisco, McKinney, Plano,
            and Collin County.
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
      </section>

      {/* HOW PDR WORKS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            How PDR Works — The Process in Plain English
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Paintless Dent Repair uses specialized rods, picks, and LED lighting to massage metal
            back to its original shape — entirely from behind the panel. No grinding. No filler.
            No paint. Just precision metalwork performed by trained technicians.
          </p>

          <div className="space-y-6">
            <div className="bg-light-gray rounded-xl p-8 border-l-4 border-gold">
              <h3 className="text-xl font-bold text-dark-text mb-3">
                Step 1 — Damage Assessment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Before a single tool touches your vehicle, the technician performs a thorough
                evaluation. Using specialized LED lighting boards that reveal dents invisible to
                the naked eye, they assess dent depth, location, and paint condition. This step
                determines whether PDR is viable, which tools are needed, and how long the job
                will take. An honest assessment here means no surprises later.
              </p>
            </div>

            <div className="bg-light-gray rounded-xl p-8 border-l-4 border-gold">
              <h3 className="text-xl font-bold text-dark-text mb-3">
                Step 2 — Panel Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                PDR works from the inside out. To reach the backside of a dent, the technician
                removes interior panels, weather stripping, or tail light assemblies — or uses
                existing gaps in the body structure. This is meticulous work: the technician
                needs unobstructed access to position their tools directly behind the damaged
                area. All removed components are reinstalled to factory spec.
              </p>
            </div>

            <div className="bg-light-gray rounded-xl p-8 border-l-4 border-gold">
              <h3 className="text-xl font-bold text-dark-text mb-3">
                Step 3 — Precision Massage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This is where the art meets the science. Using specialized rods, picks, and
                body-positive tools, the technician applies carefully controlled pressure from
                behind the panel. The metal is gradually massaged back toward its original
                factory position — one small area at a time. Simultaneously, a technician may
                use tabs or glue-pull techniques on the paint surface to guide the metal.
                This process requires years of training to master; a skilled PDR tech is one
                part engineer, one part sculptor.
              </p>
            </div>

            <div className="bg-light-gray rounded-xl p-8 border-l-4 border-gold">
              <h3 className="text-xl font-bold text-dark-text mb-3">
                Step 4 — Quality Check
              </h3>
              <p className="text-gray-600 leading-relaxed">
                After the primary repair, the technician returns to the LED light board. Under
                specialized lighting that simulates the way a dent catches light at different
                angles, even micro-imperfections become visible. Any remaining high or low spots
                are worked until the panel reads perfectly flat. We don&apos;t deliver a vehicle
                that hasn&apos;t passed this final check — no exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PDR CAN FIX */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            What PDR Can Fix (And What It Can&apos;t)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            PDR is remarkably versatile, but it&apos;s not magic — it has limits. Here&apos;s an
            honest breakdown. If your damage falls in a gray zone, a free inspection will give you
            a definitive answer.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-4 px-6 font-semibold">Dent Type</th>
                  <th className="text-left py-4 px-6 font-semibold text-gold">PDR Viable?</th>
                </tr>
              </thead>
              <tbody>
                {dentTypes.map((row) => (
                  <tr key={row.type} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-6 font-medium text-dark-text">{row.type}</td>
                    <td className="py-3 px-6 text-gray-700">{row.viable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Not sure if your damage qualifies?{' '}
            <Link href="/free-estimate" className="text-electric-blue font-semibold hover:underline">
              Get a free no-obligation inspection
            </Link>{' '}
            and we&apos;ll tell you exactly what&apos;s possible.
          </p>
        </div>
      </section>

      {/* PDR VS BODY SHOP */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            PDR vs. Body Shop — The Real Difference
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A traditional body shop sands, fills, primes, and repaints your panel. That process
            introduces filler that can crack over time, repaints that never quite match the
            factory color, and a Carfax record that signals your car was damaged. PDR avoids all
            of that.
          </p>
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
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-6 font-medium text-dark-text">{row.factor}</td>
                    <td className="py-3 px-6 text-gray-700">{row.pdr}</td>
                    <td className="py-3 px-6 text-gray-700">{row.shop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            How Much Does PDR Cost in North Dallas?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            PDR pricing depends on the number, depth, and location of dents — plus the vehicle
            type and panel accessibility. Here are real-world ranges for North Dallas:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: 'Single Door Ding',
                price: '$75 – $150',
                desc: 'Typical parking lot ding on a standard panel.',
              },
              {
                label: 'Multiple Dings (Parking Lot Damage)',
                price: '$150 – $400',
                desc: 'Several dents across one or two panels.',
              },
              {
                label: 'Hail Damage (Insurance Claim)',
                price: '$0 out of pocket*',
                desc: 'With comprehensive coverage + deductible assistance. *Deductible may apply.',
              },
              {
                label: 'Hail Damage (Out of Pocket)',
                price: '$500 – $3,000+',
                desc: 'Depends on storm severity and number of panels affected.',
              },
              {
                label: 'Crease Repair',
                price: '$150 – $500',
                desc: 'Minor-to-moderate creases on accessible panels.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-gold font-extrabold text-2xl mb-1">{item.price}</div>
                <div className="font-bold text-dark-text mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-navy/10 border border-navy/20 rounded-xl p-6">
            <p className="text-dark-text font-semibold">
              Every vehicle is different. Get a free no-obligation estimate —{' '}
              <Link href="/free-estimate" className="text-electric-blue hover:underline">
                schedule yours here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHAT VEHICLES */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            What Vehicles Can Receive PDR?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            PDR works on virtually any vehicle with steel or aluminum body panels — which covers
            nearly every passenger vehicle made in the last 40 years.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '',
                title: 'Cars, Trucks & SUVs',
                desc: 'Any steel or aluminum panel. Sedans, pickups, crossovers, vans — if it has a body panel, we can work on it.',
              },
              {
                icon: '',
                title: 'Luxury Vehicles',
                desc: 'BMW, Mercedes, Tesla, Porsche, Range Rover — preserving factory paint is especially critical on high-end vehicles where paint quality and resale value are paramount.',
              },
              {
                icon: '',
                title: 'Motorcycles & Powersports',
                desc: 'Tanks, fairings, and body panels on motorcycles and recreational vehicles are PDR candidates when the paint is intact.',
              },
              {
                icon: '',
                title: 'Leased Vehicles',
                desc: 'Fix damage before returning your lease to avoid dealer excess wear charges. PDR is the cleanest, most cost-effective solution.',
              },
              {
                icon: '🆕',
                title: '2020+ Newer Vehicles',
                desc: 'Modern vehicles use thinner, more advanced paint systems that are even more sensitive to body shop repaints. PDR is the only repair method that leaves them untouched.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-light-gray rounded-xl p-6">
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

      {/* FACTORY PAINT */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold mb-6">
            Why Factory Paint Matters More Than You Think
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Most drivers don&apos;t realize what they lose when a body shop repaints a panel.
            It&apos;s not just cosmetic — it has real financial consequences.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '',
                title: 'Carfax-Style Reports Flag Repainted Panels',
                desc: 'VIN-based vehicle history reports can detect repainted panels through paint thickness measurements. Buyers and dealers see this — and it signals damage history.',
              },
              {
                icon: '',
                title: 'Dealers and Buyers Know the Difference',
                desc: 'A repainted panel reduces trade-in value and private sale value. Buyers negotiate harder. Dealers offer less. Factory paint commands a premium.',
              },
              {
                icon: '',
                title: 'Factory Paint = Original Structural Integrity',
                desc: 'The OEM paint system is engineered to bond with the specific substrate of your vehicle. Body shop repaints use different formulations that may not provide the same protection or longevity.',
              },
              {
                icon: 'YES',
                title: 'PDR Preserves All of It',
                desc: 'When Dent Boyz performs a PDR repair, the paint is never touched. No sanding, no primer, no color coat. The panel returns to factory shape with every layer of the original finish intact.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            Frequently Asked Questions About PDR
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
        headline="Ready to see what PDR can do for your vehicle?"
        subtext="Free inspection. No obligation. Factory paint preserved — guaranteed."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">
              A Dent Boyz specialist will contact you within 1 business day.
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
