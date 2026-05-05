import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Auto Hail Insurance Claims Texas — Step-by-Step Guide | Dent Boyz',
  description:
    'Confused about filing a hail damage claim in Texas? Step-by-step guide covers State Farm, USAA, Allstate & more. Dent Boyz handles the entire process.',
};

const steps = [
  {
    num: '01',
    title: 'Document the Damage Immediately',
    content: `As soon as it\'s safe to do so after a hailstorm, document every piece of damage on your vehicle. Take photos and videos from multiple angles in good daylight. Date-stamp your photos if possible — your phone automatically records the timestamp in the file metadata. Also note the approximate time and location of the storm, and check local weather service data for the official storm report, which may be useful during the claims process. The more documentation you have, the stronger your position when dealing with your insurer.`,
  },
  {
    num: '02',
    title: 'Get a Free Inspection First (Before Calling Your Insurer)',
    content: `Before you call your insurance company, get a professional inspection from Dent Boyz. This is one of the most important steps most drivers skip — and it costs them money. When you call your insurer first, you\'re starting the process at a disadvantage. The insurer will send their own adjuster whose job is to minimize the payout. By getting your own inspection first, you\'ll have a complete damage report that you can use to ensure the insurance estimate covers all the work needed. A Dent Boyz inspection is free, takes 30–45 minutes, and puts you in a significantly stronger position. We can also attend the insurance adjuster appointment with you.`,
  },
  {
    num: '03',
    title: 'Contact Your Insurance Company',
    content: `Call the claims line for your insurer (listed below) or file online through their app. Have your policy number, the date of the storm, and your vehicle information ready. Be factual and descriptive — describe the storm, when it occurred, and the damage you observed. You don\'t need to estimate repair costs at this point. Just report the damage. Your insurer will assign a claim number and schedule an adjuster.`,
  },
  {
    num: '04',
    title: 'Understand Your Deductible',
    content: `Your comprehensive deductible is the amount you pay out-of-pocket before your insurance covers the rest. Common Texas comprehensive deductibles are $250, $500, $1,000, or $2,500. Your insurer pays the repair cost minus your deductible. For example: if repairs cost $4,200 and your deductible is $1,000, your insurer pays $3,200. Deductible assistance: depending on your situation and policy, Dent Boyz may be able to assist with a portion of your deductible. Ask us about our deductible assistance program during your free inspection.`,
  },
  {
    num: '05',
    title: 'Schedule the Insurance Adjuster',
    content: `Your insurer will send an adjuster to inspect your vehicle — typically within 3–7 business days after filing. The adjuster will document the damage and prepare an estimate. Here\'s a critical tip: you have the right to use the repair shop of your choice. Your insurer cannot force you to use their "preferred" shop. We strongly recommend having a Dent Boyz representative present during the adjuster\'s inspection to ensure all damage is properly documented. Contact us and we\'ll be there.`,
  },
  {
    num: '06',
    title: 'Review the Insurance Estimate',
    content: `After the adjuster\'s inspection, you\'ll receive a written estimate. Review it carefully. Adjuster estimates often miss dents that aren\'t visible under certain lighting, undercount the number of dents, or use labor rates that don\'t reflect actual PDR costs. If the estimate doesn\'t cover all the damage, we file a supplemental claim on your behalf. Supplemental claims are common and completely normal — insurers expect them. We handle this process for you at no additional cost.`,
  },
  {
    num: '07',
    title: 'Approve the Repair',
    content: `Once the estimate is approved and we\'ve verified it covers the complete repair cost, you sign the repair authorization. We collect your deductible (or arrange deductible assistance) and get your vehicle on our schedule. We\'ll also arrange a rental vehicle through your insurance if it\'s covered under your policy.`,
  },
  {
    num: '08',
    title: 'Repair Begins',
    content: `Once your vehicle is in our shop, most hail damage repairs are completed in 1–3 business days. Severe damage may take up to 5–7 days. If any glass needs replacement (windshield cracks from hail impact), we coordinate that separately. You\'ll receive updates throughout the process. We do not return a vehicle until it passes our rigorous final inspection under specialized lighting.`,
  },
  {
    num: '09',
    title: 'Final Inspection + Delivery',
    content: `Before your vehicle is returned, our senior technician performs a comprehensive final inspection using LED lighting boards that reveal even the finest remaining imperfections. We inspect every panel, every dent, and every edge. Only when we\'re satisfied that the repair meets factory standards do we schedule delivery. We can deliver your vehicle to your home or office in most North Dallas cities.`,
  },
  {
    num: '10',
    title: 'Payment + Paperwork',
    content: `Your insurance company pays us directly. You pay only your deductible. We handle all the invoicing, supplemental claims, and final paperwork. After payment, you\'ll receive your vehicle back along with documentation of the repair, which includes before/after photos for your records. Your lifetime warranty certificate is included.`,
  },
];

const insurers = [
  { name: 'State Farm', phone: '1-800-732-5246' },
  { name: 'USAA', phone: '1-800-531-8722' },
  { name: 'Allstate', phone: '1-800-255-7828' },
  { name: 'Progressive', phone: '1-800-776-4737' },
  { name: 'Farmers', phone: '1-800-435-7764' },
  { name: 'GEICO', phone: '1-800-207-7847' },
];

const faqItems = [
  {
    question: 'Will filing a hail claim raise my rates in Texas?',
    answer: 'In most cases, no. Hail damage is classified as a comprehensive claim — a no-fault, "Act of God" event. Texas law prohibits most surcharges for comprehensive claims. However, multiple claims in a short period could affect your rates. Check with your insurer for your specific policy terms. Most drivers find that the repair value significantly exceeds their deductible, making filing the right financial decision.',
  },
  {
    question: 'Should I use my insurer\'s preferred shop?',
    answer: 'You are NOT required to use your insurer\'s preferred shop. You have the legal right to use any licensed repair facility. Insurer "preferred" shops often use methods and labor rates that benefit the insurer, not you. We recommend using a shop that works in your interest — which is why our inspection and insurance coordination services are free.',
  },
  {
    question: 'What if I disagree with the adjuster\'s estimate?',
    answer: 'You have the right to dispute an insurance estimate. The most effective approach is to have a professional PDR shop file a supplemental claim documenting the full extent of damage. Dent Boyz handles supplemental claims regularly — it\'s a standard part of the insurance process and insurers expect them. We advocate on your behalf to ensure you receive what your policy entitles you to.',
  },
  {
    question: 'Can I file months after the storm?',
    answer: 'Yes, in most cases. Texas insurance claims typically have a statute of limitations of 2 years from the date of the damage. However, it\'s much harder to establish the exact storm event the further away from the incident you file. We recommend filing within 30–90 days while the storm data is current and visible. Don\'t wait if your car has hail damage.',
  },
  {
    question: 'How long does the whole process take?',
    answer: 'From first call to vehicle pickup: typically 1–2 weeks. Inspection: 30–45 minutes. Adjuster appointment: 3–7 business days after filing. Estimate approval: 1–3 business days. Repair: 1–5 business days. We work efficiently and follow up with your insurer proactively to prevent delays.',
  },
  {
    question: 'What if my car has pre-existing dents?',
    answer: 'Pre-existing dents not covered by your hail claim are separate — your insurance only covers storm-related damage. During the inspection, we clearly distinguish between hail damage (which has a characteristic round pattern) and pre-existing dents from other causes. We document everything so there\'s no ambiguity. Pre-existing dents can be repaired separately at market rates.',
  },
  {
    question: 'Is it worth filing if my deductible is $1,000?',
    answer: 'In most North Texas hailstorm scenarios, yes — even with a $1,000 deductible. Moderate to severe hail damage on a typical vehicle can range from $1,500 to $6,000+ in repair costs. Even after your deductible, you\'re saving $500–$5,000+ in repair costs. Plus, the repair preserves your factory paint and full resale value. We\'ll give you an honest assessment during your free inspection so you can make the right financial decision.',
  },
  {
    question: 'What is a supplemental claim?',
    answer: 'A supplemental claim is an additional claim filed when the original insurance estimate doesn\'t cover all the damage. This is extremely common in hail damage repairs — adjusters often miss dents under certain lighting conditions or use labor rates that don\'t reflect real-world PDR costs. We prepare and file supplemental claims on your behalf at no extra charge. Most of our jobs include at least one supplemental.',
  },
];

const howToSchema = {
  name: 'How to File a Hail Damage Insurance Claim in Texas',
  description: 'Step-by-step guide to filing an auto hail damage insurance claim in Texas with Dent Boyz.',
  step: steps.map((s) => ({
    '@type': 'HowToStep',
    name: s.title,
    text: s.content,
  })),
};

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

const insuranceCarriers = [
  'State Farm', 'USAA', 'Allstate', 'Progressive',
  'Farmers', 'GEICO', 'Liberty Mutual', 'Nationwide',
];

const quickTimeline = [
  { step: '1', label: 'Free Inspection', desc: '30–45 min. No obligation.' },
  { step: '2', label: 'We File Your Claim', desc: 'We handle all paperwork.' },
  { step: '3', label: 'Adjuster Review', desc: 'We attend with you.' },
  { step: '4', label: 'Repair Begins', desc: '1–5 business days.' },
  { step: '5', label: 'Insurance Pays Us', desc: 'You pay $0 in most cases.' },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <SchemaMarkup type="HowTo" data={howToSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl max-w-3xl">
          <div className="w-12 h-0.5 bg-gold mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Auto Hail Insurance Claims in Texas —{' '}
            <span className="text-gold">Step-by-Step Guide</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Confused about filing a hail damage claim? We&apos;ve done this hundreds of times
            with every major Texas insurer. This guide covers everything — and Dent Boyz handles
            the entire process for you at no extra charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-estimate" className="btn-gold text-lg px-8 py-4 text-center">
              Start With Free Inspection
            </Link>
            <a href="tel:2145550100" className="btn-outline-white text-lg px-8 py-4 text-center">
              Call (214) 555-0100
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT TIMELINE */}
      <section className="w-full bg-light-gray py-16 px-4">
        <div className="container-xl max-w-4xl">
          <div className="mb-10">
            <div className="w-12 h-0.5 bg-gold mb-4"></div>
            <h2 className="text-3xl font-extrabold text-dark-text">What to Expect — The Full Process</h2>
            <p className="text-gray-600 mt-2">From first call to vehicle pickup, here is exactly what happens.</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30 hidden md:block"></div>
            <div className="space-y-0">
              {quickTimeline.map((item, i) => (
                <div key={item.step} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy text-gold font-extrabold flex items-center justify-center text-sm z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 p-5 mb-2">
                    <h3 className="font-extrabold text-dark-text text-sm uppercase tracking-wide mb-1">{item.label}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rental + Deductible callouts */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-navy text-white p-8 border-l-4 border-gold">
              <h3 className="font-extrabold text-gold text-lg mb-3">Rental Vehicle</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                If your repair takes more than one day, we coordinate a rental vehicle through your insurance.
                Most comprehensive policies cover rentals during active repairs. We handle all arrangements —
                you&apos;re never without a vehicle.
              </p>
            </div>
            <div className="bg-navy text-white p-8 border-l-4 border-gold">
              <h3 className="font-extrabold text-gold text-lg mb-3">Deductible Assistance</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Texas comprehensive coverage typically covers hail damage in full. Through our deductible
                assistance program, the majority of our customers pay $0 out of pocket. We tell you upfront
                exactly what to expect — no surprises.
              </p>
            </div>
          </div>

          {/* Carrier grid */}
          <div className="mt-10">
            <h3 className="font-extrabold text-dark-text mb-4 uppercase tracking-wide text-sm">We Work With Every Major Texas Insurer</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {insuranceCarriers.map((carrier) => (
                <div key={carrier} className="bg-navy text-white text-center py-4 px-3">
                  <span className="font-bold text-xs uppercase tracking-wide">{carrier}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">Don&apos;t see your carrier? We work with all Texas comprehensive insurers. <a href="tel:2145550100" className="text-gold hover:underline">Call us.</a></p>
          </div>
        </div>
      </section>

      {/* 10 STEPS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            The 10-Step Hail Insurance Claims Process
          </h2>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-navy text-gold font-extrabold text-xl rounded-full flex items-center justify-center">
                  {s.num}
                </div>
                <div className="flex-1 bg-light-gray rounded-xl p-6">
                  <h3 className="font-bold text-xl text-dark-text mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.content}</p>
                  {/* Show insurer table at step 3 */}
                  {i === 2 && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
                        <thead>
                          <tr className="bg-navy text-white">
                            <th className="text-left py-3 px-4 font-semibold">Insurance Company</th>
                            <th className="text-left py-3 px-4 font-semibold">Claims Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          {insurers.map((ins) => (
                            <tr key={ins.name} className="border-b border-gray-100">
                              <td className="py-3 px-4 font-medium">{ins.name}</td>
                              <td className="py-3 px-4">
                                <a href={`tel:${ins.phone.replace(/-/g, '')}`} className="text-electric-blue font-semibold hover:underline">
                                  {ins.phone}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PDR SHOPS CAN/CANNOT DO */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">
            What PDR Shops Can and Cannot Do with Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 text-xl mb-4">What We Can Do</h3>
              <ul className="space-y-3 text-green-700">
                {[
                  'Attend the adjuster\'s inspection with you',
                  'Provide a competing estimate to your insurer',
                  'File supplemental claims for missed damage',
                  'Bill your insurance directly',
                  'Assist with deductible costs',
                  'Arrange rental vehicles through your claim',
                  'Advocate for proper compensation on your behalf',
                  'Dispute a total loss determination if appropriate',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-xl mb-4">What We Cannot Do</h3>
              <ul className="space-y-3 text-red-700">
                {[
                  'Claim more damage than actually exists',
                  'Commit insurance fraud of any kind',
                  'Guarantee your insurer will pay supplemental amounts',
                  'Override total loss determinations unilaterally',
                  'Repair damage not covered by your policy',
                  'File claims after the statute of limitations',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEXAS TOTAL LOSS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">
            Texas Total Loss Threshold: What You Need to Know
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Texas uses a <strong>100% Actual Cash Value (ACV) rule</strong> — meaning your
              vehicle is declared a total loss when the cost to repair it equals or exceeds its
              fair market value. This is different from states that use a percentage threshold
              (like 80%).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In practice, this means <strong>most hail-damaged vehicles in Texas are NOT
              totaled</strong> — because PDR is so cost-effective compared to traditional body shop
              repair. A vehicle worth $30,000 would need to have $30,000+ in repair costs to be
              declared a total loss. For most hail events, even severe ones, PDR costs are well
              below that threshold.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>If your insurer declares your vehicle a total loss:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>You have the right to dispute the ACV determination</li>
              <li>You can request an independent appraisal</li>
              <li>Your policy may include an appraisal clause allowing a neutral third party to resolve disputes</li>
              <li>Texas law provides specific protections for policyholders in total loss disputes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Contact Dent Boyz if your vehicle has been declared a total loss. We can often
              provide a PDR estimate that comes in under the total loss threshold, potentially
              saving your vehicle from being totaled.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-10">
            Insurance Claims FAQ
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
        headline="Let Us Handle Your Insurance Claim — Start to Finish"
        subtext="Free inspection. We file the claim. We attend the adjuster appointment. You just drop off your car."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">
              Start Your Free Inspection
            </h2>
            <p className="text-gray-600">
              We&apos;ll assess your vehicle and guide you through every step of the claims
              process.
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
