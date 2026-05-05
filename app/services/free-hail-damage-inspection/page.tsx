import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Free Hail Damage Inspection North Dallas TX | Dent Boyz',
  description: "Get a free hail damage inspection in North Dallas. No obligation. Know what you're dealing with before you call insurance. Serving Frisco, McKinney, Plano & more.",
};

const faqItems = [
  {
    question: 'Is the inspection really free?',
    answer: 'Yes, completely free and with no obligation. We don\'t charge for inspections and we don\'t pressure you into repairs or insurance claims. The inspection takes 20–30 minutes and you leave with a clear picture of what you\'re dealing with.',
  },
  {
    question: 'What if the damage is minor — should I still get inspected?',
    answer: 'Absolutely. Minor-looking damage can be deceiving — specialized lighting often reveals dents invisible in normal light. And knowing exactly what\'s there (and what it\'s worth repairing) is always better than guessing. Plus, if you decide to file a claim later, you\'ll already have documentation.',
  },
  {
    question: 'Do you come to me, or do I bring the car to you?',
    answer: 'Both options are available. We can come to your home, office, or another convenient location for mobile inspections across most of North Dallas. Or you can bring the vehicle to us. Let us know your preference when you schedule.',
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
  name: 'Free Hail Damage Inspection',
  description: 'Complimentary hail damage vehicle inspection in North Dallas, TX. No obligation. Full damage assessment with specialized lighting. Serving Frisco, McKinney, Plano, and surrounding areas.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free hail damage vehicle inspection — no obligation',
  },
};


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dent-boyz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dent-boyz.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Free Hail Damage Inspection', item: 'https://dent-boyz.com/services/free-hail-damage-inspection' },
  ],
};

export default function FreeHailDamageInspectionPage() {
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
              Free Hail Damage Inspection —{' '}
              <span className="text-gold">Know What You&apos;re Dealing With Before You File</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Before you call your insurance company, get an independent assessment from Dent Boyz.
              It takes 20–30 minutes, costs nothing, and gives you the information you need to
              make the right decision. No obligation, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-estimate" className="btn-gold text-lg px-8 py-4 text-center">
                Schedule Free Inspection
              </Link>
              <a href="tel:2145550100" className="btn-outline-white text-lg px-8 py-4 text-center">
                Call (214) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BEFORE INSURANCE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Why Get an Inspection Before Calling Your Insurance Company</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '📊',
                title: 'Know if it\'s worth filing',
                desc: 'If damage is minor, filing a claim may not make sense — your deductible might exceed the repair cost, and multiple claims can affect your rates. An independent assessment tells you what you\'re actually dealing with first.',
              },
              {
                icon: '💪',
                title: 'Leverage with the adjuster',
                desc: 'Insurance adjusters are trained to minimize payouts. An independent damage documentation from us gives you a baseline — if the adjuster\'s estimate comes in low, you have something to push back with.',
              },
              {
                icon: '🔍',
                title: 'Know exactly what\'s damaged',
                desc: 'You\'ll know every panel, every dent, every piece of trim — before anyone else tells you. No surprises. No being misled about the scope of damage.',
              },
              {
                icon: '🆓',
                title: 'It\'s completely free',
                desc: '20–30 minutes. No charge. No pressure. No obligation to repair anything or file any claim. Just information.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-light-gray rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE CHECK */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What We Check During Your Inspection</h2>
          <div className="bg-white rounded-xl p-8">
            <p className="text-gray-600 mb-6">
              We do a methodical, panel-by-panel inspection — the same way an insurance adjuster
              would, but on your side:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Hood', icon: '🚗' },
                { label: 'Roof', icon: '🏠' },
                { label: 'Trunk / Decklid', icon: '📦' },
                { label: 'All four doors', icon: '🚪' },
                { label: 'Front and rear fenders', icon: '🔧' },
                { label: 'Quarter panels', icon: '📐' },
                { label: 'Windshield & sunroof', icon: '🪟' },
                { label: 'Side mirrors', icon: '🪞' },
                { label: 'Trim & plastic components', icon: '⚙️' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-light-gray rounded-lg px-4 py-3 text-sm">
                  <span>{item.icon}</span>
                  <span className="font-medium text-dark-text">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-navy/5 border border-navy/10 rounded-xl p-4">
              <p className="text-dark-text text-sm font-medium">
                🔦 <strong>We use specialized lighting</strong> to reveal dents that are completely
                invisible in normal daylight. Many vehicles have 30–50% more damage than the owner
                realized before our inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">What You Get After Your Inspection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📋', title: 'Panel-by-panel damage summary', desc: 'Every dent documented — location, size, depth. Written and photographed.' },
              { icon: '🔧', title: 'Repair recommendation', desc: 'We tell you what\'s a PDR candidate, what might need a body shop, and what can be left alone.' },
              { icon: '💵', title: 'Cost estimate', desc: 'Out-of-pocket pricing AND estimated insurance coverage — so you can compare both paths before deciding.' },
              { icon: '🤝', title: 'Honest claim recommendation', desc: 'Should you file? We\'ll give you our honest take based on your deductible, damage scope, and typical claim outcomes for your insurer.' },
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
        </div>
      </section>

      {/* NO PRESSURE */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">No Pressure. No Obligation. Ever.</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="space-y-4 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span>We don&apos;t push you into repairs — if the damage is minor and not worth fixing, we&apos;ll tell you that directly.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span>We don&apos;t push you into filing a claim — sometimes the smart move is to pay out of pocket. We&apos;ll tell you when that&apos;s true.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span>If you decide to go elsewhere after the inspection, that&apos;s completely fine. We just want you to make an informed decision.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span>The inspection is free because we believe in earning your business through honesty — not locking you in before you have information.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO SCHEDULE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">How to Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📞',
                title: 'Call or Text',
                desc: '(214) 555-0100',
                action: <a href="tel:2145550100" className="inline-block mt-3 bg-navy text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-navy/90 transition-colors">Call Now</a>,
              },
              {
                icon: '📝',
                title: 'Fill Out the Form',
                desc: 'Use the form below — we\'ll reach out same day within 1 business hour.',
                action: null,
              },
              {
                icon: '🚗',
                title: 'Mobile Inspection',
                desc: 'We come to your home or office across most of North Dallas. No drop-off required.',
                action: null,
              },
            ].map((item) => (
              <div key={item.title} className="bg-light-gray rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {item.action}
              </div>
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
        headline="Get Your Free Hail Damage Inspection"
        subtext="20–30 minutes. No obligation. Full damage documentation. Mobile available."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Schedule Your Free Inspection</h2>
            <p className="text-gray-600">Fill out the form and we&apos;ll contact you within 1 business hour to set up a time.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
