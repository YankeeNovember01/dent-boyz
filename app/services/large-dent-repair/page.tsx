import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Large Dent Repair Dallas TX | Paintless Dent Removal | Dent Boyz',
  description: 'Large dent repair in North Dallas using PDR. Grocery cart hits, minor fender benders, parking lot damage. Free estimate — most large dents are still fixable.',
};

const faqItems = [
  {
    question: 'My dent looks huge — is it even worth getting an inspection?',
    answer: 'Always. Many large dents surprise people with how well PDR works. The size of the dent on the surface doesn\'t always predict the difficulty of the repair. A large, smooth dent on a flat panel (hood, roof, door) is often easier to fix than a small crease on a body line. We\'ve fixed dents that looked like total losses and returned the car factory smooth. Come in and find out — the inspection is free.',
  },
  {
    question: 'How long does large dent repair take?',
    answer: 'Most large single dents take 2–8 hours depending on size, depth, location, and panel type. Complex repairs or vehicles with multiple large dents may take 1–2 days. We\'ll give you an accurate timeline after the inspection.',
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
  name: 'Large Dent Repair',
  description: 'Paintless dent repair for large dents in North Dallas, TX. Expert PDR for grocery cart hits, fender benders, and major parking lot damage.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  offers: {
    '@type': 'Offer',
    priceRange: '$200–$800+',
  },
};

export default function LargeDentRepairPage() {
  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Large Dent Repair in North Dallas —{' '}
              <span className="text-gold">PDR for Bigger Damage</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Big dent? Don&apos;t assume it needs a body shop. PDR can fix dents up to the size
              of a fist — and sometimes larger — without touching your paint. Get an inspection
              before you spend thousands at a traditional shop.
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

      {/* WHAT COUNTS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What Counts as a Large Dent?</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              We define large dents as anything bigger than a golf ball — roughly the size of a
              baseball or larger. These are the dents that stop you in your tracks when you walk
              up to your car.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">Common causes:</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Runaway grocery carts</strong> — the full cart hits at speed, concentrating force in a large area</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Minor collisions</strong> — low-speed fender benders, parking lot dings from large trucks or SUVs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Door strikes from large vehicles</strong> — pickup truck doors hitting at door-handle height</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Hail damage</strong> — golf ball or baseball-sized hail concentrated in one area</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAN PDR FIX */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Can PDR Fix Large Dents?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Yes — in many cases.</strong> If the paint is intact, PDR can often handle
                dents up to the size of a fist or larger. The key factors are depth, location, and
                whether the metal has been stretched.
              </p>
              <h3 className="font-bold text-dark-text mb-3">Strong PDR candidates:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Large, smooth dents on flat panels (hood, roof, doors)</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Hail damage dents, even large ones</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✅</span> Push-in dents without cracked paint</li>
              </ul>
              <h3 className="font-bold text-dark-text mb-3">Limitations:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Dents directly on sharp body lines</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Dents near panel edges where access is limited</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Dents where the metal has been significantly stretched (thinned)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">⚠️</span> Any dent with cracked or broken paint</li>
              </ul>
            </div>
            <div className="bg-navy text-white rounded-xl p-8 flex flex-col justify-center">
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-lg font-medium text-gray-200 italic mb-4">
                &ldquo;We&apos;ve fixed dents that other shops said were impossible. Get an inspection first.&rdquo;
              </blockquote>
              <p className="text-gray-400 text-sm">
                Every large dent is different. Don&apos;t assume anything without a professional look.
                The inspection is free and takes 20–30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDR VS BODY SHOP */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Large Dent Repair vs. Body Shop</h2>
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
                  ['Cost', '✅ Significantly lower', '❌ Filler + paint + labor = expensive'],
                  ['Factory Paint', '✅ 100% preserved', '❌ Sanded, filled, and repainted'],
                  ['Time', '✅ Same day to 2 days', '❌ 1–3 weeks typical'],
                  ['Resale Value', '✅ No Carfax notation', '❌ Repaint shows on Carfax / inspection'],
                  ['Result', '✅ Factory original', '⚠️ Close, but paint match varies'],
                  ['Warranty', '✅ Lifetime PDR warranty', '⚠️ Shop-specific, usually 1 year'],
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
      </section>

      {/* PRICING */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Large Dent Repair Pricing</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="text-4xl font-extrabold text-gold mb-2">$200–$800+</div>
            <p className="text-gray-600 mb-4">
              Pricing depends on dent size, panel location, depth, and whether multiple panels
              are affected. Large dents require more time and more advanced technique — pricing
              reflects that.
            </p>
            <p className="text-gray-600 font-medium">
              Free estimate required for accurate pricing. We don&apos;t quote large dents
              blind — bring the car in or call{' '}
              <a href="tel:2145550100" className="text-electric-blue font-semibold">(214) 555-0100</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-light-gray rounded-xl p-8">
                <h3 className="font-bold text-xl text-dark-text mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Don't Write Off That Dent Yet"
        subtext="Free inspection. Honest assessment. Most large dents are still fixable with PDR."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">Tell us about the damage and we&apos;ll respond within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
