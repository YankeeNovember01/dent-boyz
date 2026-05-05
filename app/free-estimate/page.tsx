import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Get a Free Hail Damage Estimate | Dent Boyz North Dallas',
  description:
    'Get a free, no-obligation hail damage estimate from Dent Boyz. Serving Frisco, McKinney, Plano & all of North Dallas. Call (214) 555-0100 or fill out the form.',
};

const trustBadges = [
  { icon: '🔍', label: 'Free Inspection', desc: 'No cost, no obligation' },
  { icon: '📋', label: 'Insurance Handled', desc: 'We manage the entire claim' },
  { icon: '💳', label: 'Deductible Assistance', desc: 'Ask us about your options' },
  { icon: '🛡️', label: 'Lifetime Warranty', desc: 'Every repair guaranteed for life' },
  { icon: '⚡', label: '1–3 Day Turnaround', desc: 'Most repairs done fast' },
  { icon: '📱', label: 'Mobile Service', desc: 'We come to you' },
];

const serviceSchema = {
  name: 'Free Hail Damage Estimate',
  description: 'Free no-obligation auto hail damage inspection and estimate for North Dallas vehicles.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free hail damage inspection and estimate — no obligation',
  },
  areaServed: 'North Dallas, TX',
};

export default function FreeEstimatePage() {
  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get Your Free Hail Damage Estimate
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            No obligation. No pressure. Just an honest assessment of your vehicle and a clear path
            forward. Most inspections take 30–45 minutes.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-gold/20 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium">
              ✓ 100% Free
            </span>
            <span className="bg-gold/20 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium">
              ✓ No Obligation
            </span>
            <span className="bg-gold/20 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium">
              ✓ Mobile Service Available
            </span>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 px-4 bg-light-gray">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="font-bold text-dark-text text-sm">{badge.label}</div>
                <div className="text-xs text-gray-500 mt-1">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + PHONE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-dark-text mb-2">Request Your Free Estimate</h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form and a Dent Boyz specialist will contact you within 1 business hour
                to confirm your appointment.
              </p>
              <LeadForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-navy text-white rounded-2xl p-8">
                <h3 className="font-bold text-xl mb-2">Or Call Us Directly</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Prefer to talk? Call us and we&apos;ll schedule your inspection on the spot.
                </p>
                <a
                  href="tel:2145550100"
                  className="text-gold font-extrabold text-3xl hover:text-gold-dark transition-colors block"
                >
                  (214) 555-0100
                </a>
                <p className="text-gray-400 text-sm mt-2">Mon–Sat, 8am–6pm</p>
              </div>

              <div className="bg-light-gray rounded-2xl p-8">
                <h3 className="font-bold text-dark-text text-lg mb-4">What Happens Next</h3>
                <ol className="space-y-4">
                  {[
                    { step: '1', text: 'We call you within 1 business hour to confirm' },
                    { step: '2', text: 'Schedule inspection at your home, office, or our shop' },
                    { step: '3', text: 'Free 30–45 min inspection with full damage documentation' },
                    { step: '4', text: 'Receive honest assessment + clear estimate' },
                    { step: '5', text: 'We guide you through insurance claim if needed' },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-gold text-navy font-extrabold text-sm rounded-full flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <span className="text-gray-600 text-sm pt-1">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-2">Deductible Assistance Available</h3>
                <p className="text-green-700 text-sm">
                  Ask us about deductible assistance when you call or in the form notes. Depending
                  on your situation, we may be able to reduce or eliminate your out-of-pocket cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
