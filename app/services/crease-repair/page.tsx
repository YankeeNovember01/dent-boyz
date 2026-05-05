import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Crease Dent Repair North Dallas TX | Dent Boyz PDR',
  description: 'Expert crease dent repair in North Dallas. Creases are harder than round dents — our specialists handle them without repainting. Free estimate.',
};

const faqItems = [
  {
    question: 'Is crease repair more expensive than regular dent repair?',
    answer: 'Yes — crease repairs require more time, specialized techniques, and a higher skill level than standard round dents. The metal along a crease has work-hardened, meaning it resists movement and requires more precise, patient work. Pricing reflects the added complexity.',
  },
  {
    question: 'How do I know if my crease is a PDR candidate?',
    answer: 'The best way is a free inspection. In general: if the paint is intact and the crease is on a relatively flat panel area (not directly on a body line), PDR has a good chance of success. Deep creases on sharp body lines are harder. We\'ll give you an honest assessment — if we don\'t think we can deliver a quality result, we\'ll tell you.',
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
  name: 'Crease Dent Repair',
  description: 'Expert paintless dent repair for crease dents in North Dallas, TX. Specialist technicians handle complex elongated dents.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    telephone: '+12145550100',
    areaServed: 'North Dallas, TX',
  },
  areaServed: 'North Dallas, TX',
  offers: {
    '@type': 'Offer',
    priceRange: '$150–$500',
  },
};

export default function CreaseRepairPage() {
  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Crease Dent Repair in North Dallas —{' '}
              <span className="text-gold">The Hardest Dents, Done Right</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              A crease is the most challenging dent type — elongated, sharp-edged, and stubborn.
              Our specialists have the skill and patience to work creases out without touching
              your paint. Free estimate, honest assessment.
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

      {/* WHAT IS A CREASE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">What Is a Crease Dent?</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              A crease dent is an elongated dent with a sharp, defined edge — as opposed to the
              smooth, round dimple of a typical door ding. Think of it as a fold in the metal
              rather than a simple push-in.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Common causes:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Grocery cart edges</strong> — the metal frame hits at an angle, creating a linear crease</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Minor collisions</strong> — a slow-speed impact with a pole, post, or another vehicle bumper</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Doors hitting curbs or concrete barriers</strong> — the door edge contacts something solid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">→</span>
                <span><strong>Debris strikes</strong> — rocks, branches, or road debris hitting at a glancing angle</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY HARDER */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Why Creases Are Harder Than Regular Dents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                When metal is creased, it undergoes a process called <strong>work hardening</strong>.
                The sharp bend stresses the metal&apos;s crystal structure, making it stiffer and
                more resistant to movement. This is the same reason a piece of wire becomes harder
                to bend after you&apos;ve already bent it once.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For a PDR technician, this means:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  More time required — you can&apos;t rush a crease
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  More precise tool work — too much force cracks the paint
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  Heat may need to be applied to relax the metal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  Multiple passes from different angles to work out the full length
                </li>
              </ul>
            </div>
            <div className="bg-navy text-white rounded-xl p-8">
              <h3 className="font-bold text-lg mb-4 text-gold">Why You Want a Specialist</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                An inexperienced technician rushing a crease repair will crack the paint — turning
                a $200 PDR job into a $1,000+ body shop paint job.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our technicians have worked thousands of creases. We know when to push harder,
                when to back off, and when to tell you PDR isn&apos;t the right tool for the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAN PDR FIX CREASES */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Can PDR Always Fix Creases?</h2>
          <p className="text-gray-600 mb-6">
            Honest answer: it depends on the crease. Here&apos;s our general assessment guide:
          </p>
          <div className="space-y-4">
            {[
              { icon: '✅', label: 'Minor / shallow creases', verdict: 'Yes', desc: 'Shallow creases with intact paint on flat panel areas are strong PDR candidates. Full correction is typically achievable.' },
              { icon: '✅', label: 'Moderate creases on flat panels', verdict: 'Usually', desc: 'With time and care, moderate creases on doors, fenders, or hoods often correct to near-factory. Some may show a very faint trace under harsh raking light.' },
              { icon: '⚠️', label: 'Deep creases on body lines', verdict: 'Sometimes', desc: 'When a crease hits a body line (the styled edges built into the panel design), the geometry makes correction harder. We\'ll be honest about realistic outcomes.' },
              { icon: '❌', label: 'Creases with broken paint', verdict: 'Needs body shop', desc: 'If the paint has cracked, chipped, or flaked along the crease, PDR alone can\'t restore the panel. A body shop repaint is needed after or instead of PDR.' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-light-gray rounded-xl p-6">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-dark-text">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-500">— {item.verdict}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Crease Repair Pricing</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="text-4xl font-extrabold text-gold mb-2">$150–$500</div>
            <p className="text-gray-600 mb-4">
              Depending on crease length, depth, location, and panel type. Creases require more
              time and skill than standard dents, so pricing reflects that.
            </p>
            <p className="text-gray-600 font-medium">
              The only way to give you an accurate quote is a free inspection. Bring your vehicle
              in or call us at{' '}
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
        headline="Crease Giving You Grief? Let's Fix It."
        subtext="Free inspection. Honest assessment. No pushy sales. We'll tell you exactly what we can do."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">Describe the damage and we&apos;ll get back to you within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
