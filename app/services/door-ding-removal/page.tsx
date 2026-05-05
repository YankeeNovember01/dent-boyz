import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Door Ding Removal North Dallas TX | Dent Boyz PDR',
  description: 'Fast, affordable door ding removal in Frisco, Plano, McKinney & North Dallas. Most repairs done same day. No paint damage. Free estimate.',
};

const faqItems = [
  {
    question: 'Can PDR fix door dings on any car?',
    answer: 'Yes — PDR works on both steel and aluminum panels. Modern vehicles use a mix of both, and our technicians are trained on all panel types. The main limitation is paint condition: if the paint is cracked or chipped at the ding site, PDR alone won\'t fully restore it.',
  },
  {
    question: 'How long does door ding removal take?',
    answer: '30–60 minutes for most single dings. Multiple dings on the same panel typically take 1–2 hours. We can often do the repair while you wait, so you don\'t need to leave your car with us.',
  },
  {
    question: 'Will it look factory original after PDR?',
    answer: 'Yes — when the paint is intact, a professional PDR repair is completely undetectable. We use specialized lighting boards to check every angle. Your car leaves looking exactly as it did before the ding happened.',
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
  name: 'Door Ding Removal',
  description: 'Professional paintless dent repair for door dings in North Dallas, TX. Same-day service available.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  offers: {
    '@type': 'Offer',
    priceRange: '$75–$250',
  },
};

const cities = [
  { name: 'Frisco', slug: 'frisco' },
  { name: 'McKinney', slug: 'mckinney' },
  { name: 'Plano', slug: 'plano' },
  { name: 'Allen', slug: 'allen' },
  { name: 'Prosper', slug: 'prosper' },
  { name: 'Celina', slug: 'celina' },
  { name: 'The Colony', slug: 'the-colony' },
  { name: 'Little Elm', slug: 'little-elm' },
];


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dent-boyz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dent-boyz.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Door Ding Removal', item: 'https://dent-boyz.com/services/door-ding-removal' },
  ],
};

export default function DoorDingRemovalPage() {
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
              Door Ding Removal in North Dallas —{' '}
              <span className="text-gold">Fixed Same Day, No Paint Damage</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              That annoying ding from the parking lot? Gone. Most door ding repairs take 30–60
              minutes and leave your car looking exactly like it did the day you bought it.
              No painting. No filler. No evidence it ever happened.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-estimate" className="btn-gold text-lg px-8 py-4 text-center">
                Get Free Estimate
              </Link>
              <a href="tel:2145550100" className="btn-outline-white text-lg px-8 py-4 text-center">
                Call (214) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAUSES DOOR DINGS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What Causes Door Dings?</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              You know the story: you park your car carefully, run into the grocery store for 10
              minutes, and come back to a new dent. Door dings are one of the most common forms
              of vehicle damage — and the most frustrating because they&apos;re never your fault.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Crowded parking lots</strong> — the tighter the space, the more likely a neighboring door swings into yours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Shopping carts</strong> — rolling loose in a lot, catching wind, or pushed carelessly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Careless neighbors</strong> — doors opened too hard, too fast, or too wide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Tight garages</strong> — your own door, a bike, a trash can</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              The good news: these small, low-impact dents are exactly what PDR was built for.
            </p>
          </div>
        </div>
      </section>

      {/* HOW PDR WORKS */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">How PDR Removes Door Dings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Paintless Dent Repair (PDR) is the gold standard for door ding removal. Here&apos;s
                what happens when you bring your car to us:
              </p>
              <ol className="space-y-4">
                {[
                  { n: '1', title: 'Assessment', desc: 'We inspect the ding under specialized lighting to confirm the paint is intact and PDR is the right approach.' },
                  { n: '2', title: 'Access', desc: 'We access the back of the panel — usually through a door frame, window opening, or by removing an interior trim piece.' },
                  { n: '3', title: 'Massage & Restore', desc: 'Using precision metal rods and picks, we apply controlled pressure from behind, gradually massaging the metal back to its original shape.' },
                  { n: '4', title: 'Final Check', desc: 'We inspect under multiple lighting angles to confirm a perfect result. If it\'s not perfect, we keep working.' },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center font-extrabold flex-shrink-0 text-sm">{step.n}</div>
                    <div>
                      <span className="font-bold text-dark-text">{step.title}: </span>
                      <span className="text-gray-600">{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-navy text-white rounded-xl p-8 flex flex-col justify-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2">Most door ding jobs are done while you wait.</h3>
              <p className="text-gray-300">30–60 minutes for a single ding. No paint. No filler. No smell. You can wait in your car, work from your phone, or grab a coffee and come back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Door Ding Removal Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { label: 'Single Small Ding', price: '$75–$125', desc: 'One ding, smaller than a quarter, paint intact' },
              { label: 'Multiple Dings (Same Panel)', price: '$150–$250', desc: 'Several dings on one door or panel, addressed together' },
              { label: 'Multiple Panels', price: 'Custom Estimate', desc: 'Dings across multiple doors or panels — we\'ll assess and quote' },
            ].map((item) => (
              <div key={item.label} className="bg-light-gray rounded-xl p-6 text-center">
                <div className="text-2xl font-extrabold text-gold mb-1">{item.price}</div>
                <div className="font-bold text-dark-text mb-2">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-dark-text font-medium">
               <strong>Final pricing depends on dent size, panel type, and paint condition.</strong> These are typical ranges — get a free inspection for an exact quote. Most door ding jobs come in at the low end.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NOT IGNORE */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Why Not Just Ignore It?</h2>
          <p className="text-gray-600 mb-6">
            We get it — one little ding doesn&apos;t feel urgent. But there are a few reasons not to let it sit:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '',
                title: 'Resale Value',
                desc: 'Buyers notice dents — even small ones. A car with multiple door dings will get lowball offers at trade-in and on the private market. A $100 repair now can easily protect $500–$1,000 in resale value.',
              },
              {
                icon: '',
                title: 'Paint Micro-Cracks',
                desc: 'Even when paint looks intact, the impact can cause microscopic fractures in the clear coat. Over time, especially in Texas heat, these can expand and allow moisture in — leading to rust.',
              },
              {
                icon: '',
                title: 'It Bothers You',
                desc: 'You see it every time you walk to your car. It\'s a small thing, but it adds up. Most customers tell us they wished they\'d fixed it sooner.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">Serving All of North Dallas</h2>
          <p className="text-gray-600 mb-8">
            We serve the entire North Dallas area. Mobile service available — we can come to your
            home or office in most locations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cities.map((city) => (
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
        headline="Get That Ding Fixed Today"
        subtext="Free estimate. Same-day appointments available. Most jobs done while you wait."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">Tell us about your door ding and we&apos;ll get back to you within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
