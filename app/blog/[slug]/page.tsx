import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import CTABlock from '@/components/CTABlock'
import { POSTS } from '@/lib/posts'

// ─── Types ────────────────────────────────────────────────────────────────────

interface PageProps {
  params: { slug: string }
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

const postMeta: Record<string, { title: string; description: string }> = {
  'will-filing-hail-claim-raise-my-rates-texas': {
    title: 'Will Filing Hail Damage Claim Raise My Rates in Texas? | Dent Boyz',
    description:
      "Worried a hail claim will increase your premiums? Here's the honest Texas-specific answer — and what factors actually matter.",
  },
  'pdr-vs-body-shop-hail-damage': {
    title: 'PDR vs Body Shop for Hail Damage — Which Is Better? | Dent Boyz',
    description:
      'Paintless dent repair or traditional body shop for hail damage? We break down cost, time, paint preservation, and insurance. The answer might surprise you.',
  },
  'what-to-do-first-24-hours-after-hail': {
    title: "What to Do After Hail Hits Your Car — First 24 Hours | Dent Boyz",
    description:
      "Hail just hit your car in North Dallas. Here's the exact step-by-step sequence to follow in the first 24 hours — before you call insurance or a shop.",
  },
  'how-to-file-state-farm-hail-claim-texas': {
    title: 'How to File a State Farm Hail Claim in Texas (Step by Step) | Dent Boyz',
    description:
      "State Farm is the most common insurer in North Dallas. Here's exactly how to file a hail damage claim — from the first call to getting your check.",
  },
  'how-to-know-if-car-is-totaled-from-hail': {
    title: 'How Do I Know If My Car Is Totaled from Hail Damage? | Dent Boyz',
    description:
      "Your car looks bad after the storm. But is it actually a total loss? Here's how insurance companies make that call — and what you can do about it.",
  },
  'new-to-texas-hail-guide-celina-prosper': {
    title: 'New to North Dallas? Your First-Time Texas Hail Damage Guide | Dent Boyz',
    description:
      "Relocated to Celina, Prosper, Frisco, or another North Dallas suburb? Here's what you need to know about Texas hail before the next storm hits.",
  },
  'lease-return-dent-repair-what-dealer-charges': {
    title: 'Lease Return Dent Repair: What Will the Dealer Charge You For? | Dent Boyz',
    description:
      "Returning a leased vehicle? Dealers charge $300–$800+ per dent. Here's what counts as excess wear, how to avoid the bill, and when PDR saves you money.",
  },
  'what-size-hail-damages-your-car': {
    title: 'What Size Hail Actually Damages Your Car? A Practical Guide | Dent Boyz',
    description:
      "Marble-size? Quarter-size? Golf ball? Here's exactly what each hail size does to your vehicle — and which sizes are PDR candidates.",
  },
  'why-luxury-car-owners-choose-pdr': {
    title: 'Why Tesla, BMW, and Luxury Car Owners Choose PDR Over Body Shops | Dent Boyz',
    description:
      "If you drive a BMW, Tesla, Porsche, or Range Rover, hail damage is especially stressful. Here's why PDR is the only smart choice for luxury vehicles.",
  },
  'dfw-hail-season-calendar': {
    title: 'DFW Hail Season Calendar: When to Expect Storms and How to Prepare | Dent Boyz',
    description:
      "Month-by-month breakdown of hail risk in Dallas-Fort Worth, plus a preparation checklist so you're never caught off guard.",
  },
}

export function generateMetadata({ params }: PageProps): Metadata {
  const meta = postMeta[params.slug]
  if (!meta) return {}
  return { title: meta.title, description: meta.description }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryColors: Record<string, string> = {
  Insurance: 'bg-blue-100 text-blue-800',
  PDR: 'bg-green-100 text-green-800',
  'Hail Season': 'bg-yellow-100 text-yellow-800',
  Tips: 'bg-purple-100 text-purple-800',
}

// ─── Sidebar CTA ─────────────────────────────────────────────────────────────

function SidebarCTA() {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-8 bg-navy text-white rounded-2xl p-6 shadow-lg">
        <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-2">
          Free Inspection
        </p>
        <h3 className="text-xl font-extrabold mb-3">Got hail damage?</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-5">
          We&apos;ll inspect your vehicle for free — no strings attached — and give you an honest
          repair estimate before you call your insurance company.
        </p>
        <Link
          href="/free-estimate"
          className="block text-center bg-gold text-navy font-bold px-5 py-3 rounded-lg hover:bg-gold-dark transition-colors"
        >
          Get Free Inspection →
        </Link>
        <a
          href="tel:2145550100"
          className="block text-center mt-3 border border-white/30 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
        >
          Call (214) 555-0100
        </a>
      </div>
    </aside>
  )
}

// ─── Shared prose styles ─────────────────────────────────────────────────────

const h2Class = 'text-2xl font-extrabold text-dark-text mt-10 mb-4'
const pClass = 'text-gray-700 leading-relaxed mb-4'
const ulClass = 'list-none space-y-2 mb-6'
const liClass = 'flex gap-2 text-gray-700 leading-relaxed'

// ─── Post Content Components ─────────────────────────────────────────────────

function Post1() {
  const faqItems = [
    {
      q: 'Can my insurer cancel my policy for filing a hail claim in Texas?',
      a: 'Not for a single weather-related claim — Texas law provides protection against this.',
    },
    {
      q: 'Does filing a hail claim affect my collision rates?',
      a: 'Comprehensive and collision are tracked separately. A comprehensive claim shouldn\'t affect your collision rate.',
    },
    {
      q: 'What if I have a $0 deductible — should I always file?',
      a: 'Generally yes, if damage is meaningful. But still get an inspection first so you know what you\'re filing for.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const comparisonRows = [
    { scenario: '$3,000 hail damage, $500 deductible, no recent claims', verdict: 'YES Yes — $2,500 covered, low rate risk' },
    { scenario: '$800 hail damage, $1,000 deductible', verdict: 'NO No — damage is less than deductible' },
    { scenario: '$1,500 damage, $500 deductible, filed 2 claims last year', verdict: '~ Maybe — get an inspection and weigh it' },
    { scenario: '$5,000 damage, $2,500 deductible, great claim history', verdict: 'YES Probably yes — still $2,500 covered' },
  ]

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        After a hailstorm rolls through North Dallas, your phone blows up with texts from
        neighbors comparing damage. But one question quietly haunts almost everyone: &ldquo;If I
        file a claim, will my rates go up?&rdquo; It&apos;s one of the most common questions we
        hear at Dent Boyz — and the honest answer is more nuanced than a simple yes or no.
      </p>

      <h2 className={h2Class}>The Short Answer</h2>
      <p className={pClass}>
        Hail damage is covered under <strong>comprehensive coverage</strong> — not collision. This
        distinction matters enormously for your rates.
      </p>
      <p className={pClass}>
        Comprehensive claims are considered &ldquo;not-at-fault&rdquo; events by virtually all
        major insurers. You didn&apos;t cause the storm. The hail didn&apos;t happen because of
        how you drive. Because of this, most insurance companies{' '}
        <strong>do not raise your rates</strong> after a single comprehensive claim.
      </p>

      <h2 className={h2Class}>What Texas Law Says</h2>
      <p className={pClass}>
        Texas Insurance Code §551.107 prohibits insurers from canceling or non-renewing a policy
        solely because the insured filed one weather-related claim. The Texas Department of
        Insurance (TDI) reinforces this: a single natural disaster claim is not supposed to
        trigger a premium increase.
      </p>
      <p className={pClass}>
        However — and this is important — insurers are businesses. Some will factor comprehensive
        claims into their overall risk assessment at renewal time. It&apos;s not universal, but it
        happens.
      </p>

      <h2 className={h2Class}>What Actually Determines Whether Your Rates Go Up</h2>
      <p className={pClass}>Several factors influence this:</p>
      <ul className={ulClass}>
        {[
          ['Number of claims:', 'A single hail claim almost never raises rates. Two or more claims in a 3-year window may trigger a review.'],
          ['Your insurer\'s specific policy:', 'State Farm, USAA, Allstate, Progressive, Farmers, and GEICO all handle this slightly differently. USAA is particularly favorable to comprehensive claimants. State Farm tracks claim history but typically doesn\'t raise rates for a single weather event.'],
          ['Your claim history overall:', 'If you\'ve had two collision claims and now a hail claim, the combination may affect your profile.'],
          ['Your current rate tier:', 'Drivers already in a higher-risk tier may see different treatment.'],
        ].map(([bold, rest]) => (
          <li key={bold} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span><strong>{bold}</strong> {rest}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>The Math — Is Filing Worth It?</h2>
      <p className={pClass}>Here&apos;s how to think through it:</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left py-3 px-5 font-semibold">Scenario</th>
              <th className="text-left py-3 px-5 font-semibold text-gold">Filing Makes Sense?</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.scenario} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-5 text-gray-700">{row.scenario}</td>
                <td className="py-3 px-5 font-medium text-gray-800">{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2Class}>What We Recommend</h2>
      <p className={pClass}>
        Get a free inspection from us first. Before you call your insurance company, know exactly
        what you&apos;re dealing with:
      </p>
      <ul className={ulClass}>
        {[
          'How many panels are affected?',
          'What is the estimated repair cost?',
          'Is your damage minor enough that paying out of pocket makes more sense?',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Once you know the actual damage scope, you can make an informed decision about filing.
        We&apos;ll give you an honest recommendation either way — we&apos;re not going to push you
        into filing if it doesn&apos;t make sense for your situation.
      </p>

      <h2 className={h2Class}>The Bottom Line</h2>
      <p className={pClass}>
        For most North Dallas drivers with a single hail event: filing a comprehensive claim will
        not raise your rates. Texas law offers some protection, and comprehensive claims are
        treated more favorably than collision claims across the industry.
      </p>
      <p className={pClass}>
        But don&apos;t just take our word for it — call your insurer and ask directly: &ldquo;Will
        this comprehensive claim affect my renewal rate?&rdquo; They&apos;re required to be honest
        with you.
      </p>
      <p className={pClass}>
        And before you make any decision — get the inspection. It&apos;s free. It takes 20
        minutes. And it puts you in control of the conversation.
      </p>

      {/* Inline CTA */}
      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Ready to know exactly what you&apos;re dealing with?
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule your free hail damage inspection →
        </Link>
      </div>

      {/* FAQ Section */}
      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function Post2() {
  const comparisonRows = [
    { factor: 'Factory paint preserved', pdr: 'YES Always', shop: 'NO Repainted' },
    { factor: 'Resale value impact', pdr: 'Minimal', shop: 'Can reduce 10–20%' },
    { factor: 'Repair time', pdr: '1–5 days', shop: '1–3 weeks' },
    { factor: 'Cost (out of pocket)', pdr: 'Lower', shop: 'Higher' },
    { factor: 'Insurance coverage', pdr: 'YES Comprehensive', shop: 'YES Comprehensive' },
    { factor: 'Paint match risk', pdr: 'None', shop: 'Color mismatch possible' },
    { factor: 'Warranty', pdr: 'Lifetime (Dent Boyz)', shop: 'Varies' },
  ]

  return (
    <>
      <p className={pClass}>
        After a hailstorm, you have two real options for repairing your car: paintless dent repair
        (PDR) or a traditional body shop. Most people default to the body shop because it&apos;s
        what they know. But for hail damage specifically, PDR is almost always the better choice
        — and your insurance company often agrees.
      </p>

      <h2 className={h2Class}>What&apos;s the Actual Difference?</h2>
      <p className={pClass}>
        <strong>PDR</strong> works by accessing the back side of a dented panel and using
        specialized tools to gently massage the metal back to its original shape. No sanding. No
        filler. No repainting. The factory paint stays completely intact.
      </p>
      <p className={pClass}>
        <strong>A body shop</strong> fills dents with body filler (Bondo), sands them smooth,
        then repaints the panel to match. The result looks good — but it&apos;s not the same as
        factory.
      </p>

      <h2 className={h2Class}>The Factory Paint Problem</h2>
      <p className={pClass}>
        This is the big one. When a body shop repaints a panel, several things happen:
      </p>
      <ul className={ulClass}>
        {[
          'The paint is mixed to match — but paint fades over time, and mixed paint and original paint age at different rates. Five years from now, that panel will look different from the rest of your car.',
          'Repainted panels show up on vehicle history reports. When you trade in or sell, dealers know. Buyers know. It reduces your car\'s value.',
          'Factory paint has structural properties — it\'s applied in a controlled environment with primers and sealers that a body shop can\'t fully replicate.',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        PDR preserves all of this. Your factory paint stays exactly as it left the manufacturer.
      </p>

      <h2 className={h2Class}>Side-by-Side Comparison</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left py-3 px-5 font-semibold">Factor</th>
              <th className="text-left py-3 px-5 font-semibold text-gold">PDR (Dent Boyz)</th>
              <th className="text-left py-3 px-5 font-semibold">Traditional Body Shop</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.factor} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-5 font-medium text-dark-text">{row.factor}</td>
                <td className="py-3 px-5 text-gray-700">{row.pdr}</td>
                <td className="py-3 px-5 text-gray-700">{row.shop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2Class}>When Is a Body Shop the Right Choice?</h2>
      <p className={pClass}>
        PDR doesn&apos;t work in every situation. A body shop is the right call when:
      </p>
      <ul className={ulClass}>
        {[
          'Paint is cracked, chipped, or peeling at the dent site',
          'The dent has severely stretched the metal',
          'The damage is on a body line that can\'t be accessed',
          'Rust has already formed in the damaged area',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        A good PDR shop will tell you this upfront. We will. If your car needs a body shop,
        we&apos;ll say so — we&apos;re not going to do a half-job and pretend it&apos;s perfect.
      </p>

      <h2 className={h2Class}>What Does Insurance Prefer?</h2>
      <p className={pClass}>
        Insurance companies know that PDR costs less than body shop work. Many actually prefer PDR
        for hail damage because:
      </p>
      <ul className={ulClass}>
        {[
          'It costs less (saves them money)',
          'It produces factory-quality results',
          'It\'s faster (less rental car time)',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Some insurers have PDR preferred shops — and Dent Boyz works directly with all major
        Texas carriers.
      </p>

      <h2 className={h2Class}>The Bottom Line</h2>
      <p className={pClass}>
        If your paint is intact and your dents are from hail (or parking lot damage), PDR is
        almost certainly your best option. You&apos;ll pay less, wait less, and end up with a car
        that&apos;s closer to its pre-damage condition — factory paint and all.
      </p>
      <p className={pClass}>
        Not sure if your car is a PDR candidate? Get a free inspection. We&apos;ll tell you
        honestly.
      </p>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Not sure if your car qualifies for PDR?
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Get a free inspection →
        </Link>
      </div>
    </>
  )
}

function Post3() {
  const doNots = [
    "Don't let a storm chaser or door-knocker pressure you into signing anything at your door",
    "Don't agree to use a specific shop before getting an independent inspection",
    "Don't delay — some damage worsens over time if moisture gets into micro-cracks",
    "Don't drive through a car wash until damage is assessed",
  ]

  const checklist = [
    'Document all damage with photos',
    'Note storm date, time, location, hail size',
    "Don't wash the car",
    'Call Dent Boyz for free inspection',
    'Decide whether to file',
    'If filing, do it within 24–48 hours',
  ]

  return (
    <>
      <p className={pClass}>
        The storm has passed. The hail has stopped. You walk outside and see the damage — dozens
        of small dents across your hood, roof, trunk. Your heart sinks. What do you do first?
      </p>
      <p className={pClass}>
        Here&apos;s the exact sequence we recommend at Dent Boyz — and what NOT to do.
      </p>

      <h2 className={h2Class}>Step 1 — Don&apos;t Panic (Seriously)</h2>
      <p className={pClass}>
        The vast majority of hail damage is 100% repairable with paintless dent repair. Even cars
        that look totaled after a storm often aren&apos;t. Take a breath. This is fixable.
      </p>

      <h2 className={h2Class}>Step 2 — Document Everything Before Touching the Car</h2>
      <p className={pClass}>
        Before you do anything else, photograph every panel:
      </p>
      <ul className={ulClass}>
        {[
          'Hood (from multiple angles)',
          'Roof',
          'Trunk/tailgate',
          'All four doors',
          'Front and rear fenders',
          'Side mirrors',
          'Glass (windshield, rear window, sunroof)',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Take wide shots and close-ups. Date-stamp them. This is your evidence for your insurance
        claim.
      </p>

      <h2 className={h2Class}>Step 3 — Don&apos;t Wash the Car Yet</h2>
      <p className={pClass}>
        It seems counterintuitive, but don&apos;t wash the car before your inspection. A clean,
        wet car in direct sunlight can make dents harder to see — and you want a clear record of
        the full damage.
      </p>

      <h2 className={h2Class}>Step 4 — Note the Storm Details</h2>
      <p className={pClass}>Write down:</p>
      <ul className={ulClass}>
        {[
          'Date of the storm',
          'Your location and ZIP code when the storm hit',
          'Approximate time',
          'Approximate hail size (quarter, golf ball, etc.) if you saw it',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Your insurance company will ask for this. Having it ready speeds up the claim.
      </p>

      <h2 className={h2Class}>Step 5 — Call Dent Boyz for a Free Inspection BEFORE Calling Insurance</h2>
      <p className={pClass}>
        This step surprises people. Why not call insurance first?
      </p>
      <p className={pClass}>
        Because getting an independent inspection first puts you in a stronger position:
      </p>
      <ul className={ulClass}>
        {[
          'You know exactly what\'s damaged before an adjuster tells you',
          'You understand your repair options (PDR vs. body shop)',
          'You can make an informed decision about whether filing a claim even makes sense given your deductible',
          'If you do file, you have independent documentation',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        The inspection is free. It takes 20–30 minutes. We can come to your location for the inspection.
      </p>

      <h2 className={h2Class}>Step 6 — Decide Whether to File a Claim</h2>
      <p className={pClass}>After your inspection, you&apos;ll know:</p>
      <ul className={ulClass}>
        {[
          'Total repair cost estimate',
          'Whether it exceeds your deductible by a meaningful amount',
          'Whether filing makes sense for your specific situation',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        If your deductible is $500 and repair is $2,500 — probably file. If your deductible is
        $1,000 and repair is $900 — probably don&apos;t. We&apos;ll help you think through it.
      </p>

      <h2 className={h2Class}>Step 7 — If You File, Do It Promptly</h2>
      <p className={pClass}>
        Insurance companies get flooded after major hail events. Adjusters book up fast. File
        within 24–48 hours of the storm if you decide to proceed. Delays mean longer wait times
        for adjuster appointments.
      </p>

      <h2 className={h2Class}>What NOT to Do</h2>
      <ul className={ulClass}>
        {doNots.map((item) => (
          <li key={item} className={liClass}>
            <span className="text-red-500 mt-1">NO</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>TL;DR — The 24-Hour Checklist</h2>
      <div className="bg-light-gray rounded-xl p-6 mb-8">
        <ol className="space-y-3">
          {checklist.map((item, i) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gold text-navy font-bold text-xs rounded-full flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-700">YES {item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          We often have same-day inspection availability.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule your free inspection →
        </Link>
      </div>
    </>
  )
}

// ─── Post 4: how-to-file-state-farm-hail-claim-texas ─────────────────────────

function Post4() {
  const timelineItems = [
    { day: 'Day 1', text: 'Storm hits. Document damage. Call Dent Boyz for free inspection.' },
    { day: 'Day 1–2', text: 'File State Farm claim online, via app, or by phone.' },
    { day: 'Day 3–10', text: 'Adjuster appointment or photo submission.' },
    { day: 'Day 7–14', text: 'Estimate received, repair authorized.' },
    { day: 'Day 14–19', text: 'Repair completed (1–5 business days).' },
    { day: 'Day 19–21', text: 'State Farm pays shop directly. You pay deductible only.' },
  ]

  const faqItems = [
    {
      q: 'Does State Farm raise rates after a hail claim?',
      a: 'Single comprehensive claims typically do not raise rates. Texas law offers some protection, and hail is an at-fault event.',
    },
    {
      q: 'Can I file months after the storm?',
      a: 'Yes — Texas allows up to 2 years for hail claims, but sooner is better. Adjusters book up fast after major events.',
    },
    {
      q: "What if State Farm's estimate seems low?",
      a: "Don't accept it as final. Bring the estimate to us and we'll review it. Supplemental claims are common and normal.",
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        State Farm is the single largest auto insurer in Texas — and with their regional campus
        right in Richardson, TX, they&apos;re especially dominant in North Dallas. If you&apos;ve
        got a State Farm policy and hail just hit your car, here&apos;s exactly what to do.
      </p>

      <h2 className={h2Class}>Before You Call State Farm — Do This First</h2>
      <p className={pClass}>
        Get a free inspection from an independent PDR shop (like Dent Boyz) before contacting
        your insurer. You want to know: how many panels are affected, what the repair cost
        estimate is, and whether it&apos;s worth filing given your deductible. This takes 20–30
        minutes and puts you in a much stronger position.
      </p>

      <h2 className={h2Class}>What You&apos;ll Need When You Call</h2>
      <ul className={ulClass}>
        {[
          'Your policy number (on your insurance card or State Farm app)',
          'Date of the storm',
          'Location when the storm hit (city, ZIP)',
          'Description of damage (panels affected, approximate dent count)',
          'Whether you need a rental car',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        State Farm claims line: <strong>1-800-732-5246</strong> (24/7). Or file online at
        statefarm.com or through the State Farm mobile app.
      </p>

      <h2 className={h2Class}>What Happens After You File</h2>
      <p className={pClass}>State Farm will either:</p>
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
        <li>Send a field adjuster to inspect your vehicle in person (3–7 business days)</li>
        <li>
          Use their photo estimation tool (you submit photos through the app) — faster but
          sometimes underestimates damage
        </li>
      </ol>
      <p className={pClass}>
        If they use photo estimation, we recommend also getting a written estimate from us. Photo
        tools frequently miss dents in certain lighting.
      </p>

      <h2 className={h2Class}>Understanding Your State Farm Estimate</h2>
      <p className={pClass}>
        State Farm uses CCC ONE or similar software to generate repair estimates. The estimate
        will be line-itemized by panel. Review it carefully:
      </p>
      <ul className={ulClass}>
        {[
          'Is every affected panel listed?',
          'Are the labor times reasonable?',
          'Did they account for blend/overlap on adjacent panels?',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Bring the estimate to us. If we find additional damage during repair, we file a
        supplemental claim directly with State Farm on your behalf — this is normal and happens
        frequently with hail damage.
      </p>

      <h2 className={h2Class}>State Farm&apos;s Preferred Shop Network — Do You Have to Use It?</h2>
      <p className={pClass}>
        No. In Texas, you have the legal right to choose any repair shop. State Farm may recommend
        their &ldquo;Select Service&rdquo; shops, but you are not required to use them. We work
        with State Farm directly and handle payment the same way.
      </p>

      <h2 className={h2Class}>Deductible Assistance</h2>
      <p className={pClass}>
        Your State Farm deductible is what you pay out of pocket. Common amounts: $250, $500,
        $1,000, $2,500. Ask us about our deductible assistance program — we may be able to cover
        a portion.
      </p>

      <h2 className={h2Class}>Timeline — Start to Finish</h2>
      <div className="bg-light-gray rounded-xl p-6 mb-8 space-y-4">
        {timelineItems.map((item) => (
          <div key={item.day} className="flex gap-4">
            <span className="flex-shrink-0 bg-navy text-gold text-xs font-bold px-2.5 py-1 rounded-lg w-20 text-center h-fit">
              {item.day}
            </span>
            <span className="text-gray-700 leading-relaxed">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Ready to start? Get your free inspection first.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 5: how-to-know-if-car-is-totaled-from-hail ─────────────────────────

function Post5() {
  const faqItems = [
    {
      q: 'My car has 200+ dents — is it totaled?',
      a: 'Dent count alone does not determine total loss — repair cost vs. ACV does. 200 dents on a $45K truck is very likely NOT a total loss.',
    },
    {
      q: 'Can I keep my totaled car?',
      a: 'Yes — you accept a reduced settlement and keep it as a salvage title. A rebuilt title inspection is required before it can be registered again in Texas.',
    },
    {
      q: 'Will PDR fix my car even if it looks terrible?',
      a: 'In most cases, yes. The visual severity of hail damage rarely reflects the actual repair cost. Get an inspection first.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        After a bad hailstorm, your car might look like it went through a war. The hood has dozens
        of dents. The roof looks like a golf ball. You&apos;re wondering: is this thing even
        fixable, or is it totaled?
      </p>

      <h2 className={h2Class}>What &ldquo;Totaled&rdquo; Actually Means</h2>
      <p className={pClass}>
        In Texas, a vehicle is considered a total loss when the estimated repair cost equals or
        exceeds the vehicle&apos;s <strong>Actual Cash Value (ACV)</strong>. Texas uses the 100%
        threshold — meaning repair must literally equal the car&apos;s market value before the
        insurer declares it a total.
      </p>
      <p className={pClass}>
        Note: this is different from some other states that use 70–75% thresholds.
      </p>

      <h2 className={h2Class}>How Insurers Calculate ACV</h2>
      <p className={pClass}>
        ACV = what your car was worth immediately before the damage. Insurers use:
      </p>
      <ul className={ulClass}>
        {[
          'Comparable sales in your area (same make/model/year/trim/mileage)',
          'Tools like CCC ONE, Mitchell, or Audatex',
          'Condition adjustments (pre-existing wear, modifications, etc.)',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        A 2022 F-150 with 40K miles in excellent condition might have an ACV of $38,000. If hail
        repair costs $5,000, it won&apos;t be totaled. But if it&apos;s a 2013 Camry worth $8,500
        and hail repair is $9,000, that could trigger a total loss.
      </p>

      <h2 className={h2Class}>Hail Damage Rarely Totals Newer Vehicles</h2>
      <p className={pClass}>
        Here&apos;s the reassuring truth: for 2018+ vehicles in good condition, hail damage almost
        never reaches total loss territory. PDR is efficient — even severe hail damage on a newer
        vehicle typically runs $2,000–$8,000, which is a fraction of ACV for most cars in that
        range.
      </p>
      <p className={pClass}>
        Older vehicles (pre-2012, higher mileage) are more vulnerable. A $6,000 car with $7,000
        in hail damage = total loss.
      </p>

      <h2 className={h2Class}>What Happens If It Is Totaled</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
        <li>Insurer issues a total loss settlement offer (ACV minus your deductible)</li>
        <li>You can accept — they take the car and cut you a check</li>
        <li>Or you can dispute the ACV if you think their valuation is low</li>
      </ol>

      <h2 className={h2Class}>How to Dispute a Low ACV Offer</h2>
      <ul className={ulClass}>
        {[
          'Pull comparable listings (AutoTrader, Cars.com, Carvana) for same make/model/year/trim in similar condition in DFW',
          'Submit comps to your adjuster in writing',
          'Request a re-evaluation',
          'If still unsatisfied: file a complaint with the Texas Department of Insurance (TDI)',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>The &ldquo;Keep the Car&rdquo; Option</h2>
      <p className={pClass}>
        If your car is declared a total loss but you want to keep it, you can. The insurer pays
        you ACV minus salvage value, the title gets branded as &ldquo;salvage,&rdquo; and you keep
        the vehicle. Note: driving a salvage-title vehicle requires a rebuilt title inspection
        before it can be legally registered again in Texas.
      </p>

      <h2 className={h2Class}>Get an Inspection First — Before Assuming the Worst</h2>
      <p className={pClass}>
        Most cars that look terrible after a hailstorm are <strong>NOT total losses</strong>. Call
        us for a free inspection. We&apos;ll give you an honest assessment of repair cost vs. your
        vehicle&apos;s likely value — before you&apos;ve started the insurance process.
      </p>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Don&apos;t assume the worst. Get a free inspection first.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 6: new-to-texas-hail-guide-celina-prosper ───────────────────────────

function Post6() {
  const checklist = [
    'Comprehensive auto coverage? (Required for hail claims)',
    'Covered parking plan?',
    'Weather alert app set up for Collin + Denton counties?',
    'Dent Boyz number saved? (214) 555-0100',
    'Know your deductible amount?',
  ]

  const faqItems = [
    {
      q: 'Is hail damage covered by my homeowner\'s insurance?',
      a: "No — car hail damage is auto insurance (comprehensive). Homeowner's covers your house structure. Separate policies.",
    },
    {
      q: 'How often does North Dallas actually get hail?',
      a: 'Most years see at least 1–3 significant hail events in Collin County. Some years see 5+. April and May are peak months.',
    },
    {
      q: "What's the biggest hail North Dallas has seen?",
      a: 'Golf ball (1.75") is common in major events. Baseball-sized (2.75") has been recorded in DFW during severe supercell events.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        You found the perfect home in Celina, Prosper, Frisco, or another North Dallas suburb. The
        schools are great, the community is beautiful, and you love your new neighborhood. What
        nobody warned you about: Texas hail.
      </p>
      <p className={pClass}>
        If you relocated from a state without significant hail — the Pacific Northwest barely sees
        it; Florida doesn&apos;t — Texas hail season can be genuinely shocking the first time.
      </p>

      <h2 className={h2Class}>Texas Hail Is Different</h2>
      <p className={pClass}>
        DFW sits in what meteorologists call &ldquo;Hail Alley&rdquo; — the corridor of the
        central United States where warm Gulf moisture collides with cold Canadian air masses.
        Unlike coastal hail that&apos;s usually small and brief, DFW supercell storms can produce
        hailstones the size of golf balls or larger, falling hard and fast.
      </p>
      <p className={pClass}>
        Collin County (where Celina, Prosper, McKinney, Allen, and Frisco sit) gets hit
        particularly hard because of slightly elevated terrain that increases storm rotation.
      </p>

      <h2 className={h2Class}>When to Expect It</h2>
      <p className={pClass}>
        Peak season: <strong>March through June</strong>. April and May are the most active
        months. October brings a secondary spike. Your first spring in North Dallas will likely
        bring at least one significant hail event.
      </p>

      <h2 className={h2Class}>What to Do If You Haven&apos;t Been Hit Yet</h2>
      <ul className={ulClass}>
        {[
          'Set up weather alerts on your phone for Collin County and Denton County severe thunderstorm warnings',
          'Know where your nearest covered parking is',
          'Save our number now: (214) 555-0100',
          "Check your auto insurance for comprehensive coverage — if you don't have it, get it before storm season",
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>What to Do When Hail Hits</h2>
      <ul className={ulClass}>
        {[
          "Don't panic",
          'Document damage before touching the car (photos of every panel)',
          "Don't call insurance first — call us for a free inspection first",
          "We'll tell you honestly if it's worth filing a claim given your deductible",
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>Why PDR Is Especially Important for Newer Cars</h2>
      <p className={pClass}>
        If you just bought a new home in Celina or Prosper, chances are you also have a newer
        vehicle. Good news: newer vehicles with factory paint intact are perfect PDR candidates.
        PDR preserves that factory finish — no repainting, no color mismatch, no impact on
        vehicle history reports.
      </p>

      <h2 className={h2Class}>Your Texas Hail Checklist (Save This)</h2>
      <div className="bg-light-gray rounded-xl p-6 mb-8">
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-green-500 text-lg leading-none mt-0.5">✅</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Already got hit? Get a free inspection today.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>FAQ for New North Dallas Residents</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 7: lease-return-dent-repair-what-dealer-charges ────────────────────

function Post7() {
  const dealerCharges = [
    { damage: 'Small door ding (< 1")', charge: '$150–$300' },
    { damage: 'Medium dent (1–2")', charge: '$300–$500' },
    { damage: 'Large dent (2"+)', charge: '$500–$800+' },
    { damage: 'Hail damage (per panel)', charge: '$400–$900+' },
    { damage: 'Multiple hail panels', charge: '$3,000–$6,000+' },
  ]

  const faqItems = [
    {
      q: "Can you guarantee the dealer won't charge anything?",
      a: "We guarantee our workmanship. A clean PDR repair passes virtually every lease inspection. We can't control the inspector, but we've never had a properly repaired car fail.",
    },
    {
      q: 'Does it matter which brand I\'m returning?',
      a: 'No — BMW, Mercedes, Lexus, Audi, Honda, Toyota, domestic — same process. All finance companies use similar inspection standards.',
    },
    {
      q: 'What if I have hail damage AND door dings?',
      a: 'We handle both in the same appointment. No need to schedule separately.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        Your lease is ending in a few months. You open the glove box, pull out the wear-and-tear
        guidelines, and start walking around your car with fresh eyes. Door dings here, a small
        dent there from a parking lot — and then you remember the hail last spring that you never
        got fixed.
      </p>
      <p className={pClass}>Here&apos;s what you need to know before handing those keys back.</p>

      <h2 className={h2Class}>How Lease Returns Actually Work</h2>
      <p className={pClass}>
        When you return a leased vehicle, the finance company (BMW Financial, Mercedes-Benz
        Financial, Toyota Financial, etc.) sends a third-party inspection company — usually
        AutoVin or AACC — to inspect the vehicle. They photograph every panel and document every
        imperfection against the manufacturer&apos;s wear guidelines.
      </p>
      <p className={pClass}>
        You don&apos;t see this inspection happen. You just get a bill in the mail 2–4 weeks after
        return.
      </p>

      <h2 className={h2Class}>What Dealers Charge Per Dent</h2>
      <p className={pClass}>
        Typical dealer/finance company charges for excess wear:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left py-3 px-5 font-semibold">Damage Type</th>
              <th className="text-left py-3 px-5 font-semibold text-gold">Dealer Charge</th>
            </tr>
          </thead>
          <tbody>
            {dealerCharges.map((row) => (
              <tr key={row.damage} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-5 text-gray-700">{row.damage}</td>
                <td className="py-3 px-5 font-semibold text-red-600">{row.charge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pClass}>
        These are retail body shop rates. They&apos;re not trying to be fair — they&apos;re trying
        to recoup maximum value.
      </p>

      <h2 className={h2Class}>What Counts as &ldquo;Normal&rdquo; vs. &ldquo;Excess&rdquo; Wear</h2>
      <ul className={ulClass}>
        {[
          'Dents smaller than a credit card (2.125" × 3.375"): typically acceptable',
          'Multiple dents on same panel: flagged even if each is small',
          'Hail damage: always flagged, never considered normal wear',
          'Scratches through paint: always flagged',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>The PDR Math — Why It Makes Sense</h2>
      <div className="bg-light-gray rounded-xl p-6 mb-6">
        <p className="font-semibold text-dark-text mb-3">Example: 4 door dings + minor hail on hood and roof</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Dealer estimate:</span>
            <span className="font-bold text-red-600">$2,400+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Dent Boyz repair:</span>
            <span className="font-bold text-green-600">$600–$900</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
            <span className="font-semibold text-dark-text">You save:</span>
            <span className="font-extrabold text-green-600">$1,500+</span>
          </div>
        </div>
      </div>
      <p className={pClass}>
        And unlike paying the dealer after the fact, our repair means the car passes inspection.
        You don&apos;t pay anything at return.
      </p>

      <h2 className={h2Class}>Timing — 30 to 60 Days Before Return</h2>
      <p className={pClass}>
        The biggest mistake: waiting until the week of your return date. Do this 30–60 days out so:
      </p>
      <ul className={ulClass}>
        {[
          'We have time to repair without rushing',
          'You have time to inspect the result before turning the car in',
          'Any touch-ups can be done before return',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>We Specialize in Lease Returns in North Dallas</h2>
      <p className={pClass}>
        Heavy lease concentration areas we serve: Stonebridge Ranch McKinney (high BMW/Mercedes
        lease density), Frisco, Prosper, Plano Legacy West, Addison. These are exactly the
        communities where this matters most.
      </p>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Lease ending soon? Let&apos;s fix it before the inspector arrives.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 8: what-size-hail-damages-your-car ─────────────────────────────────

function Post8() {
  const hailScale = [
    { size: '< 0.5 inch', ref: 'Pea', what: 'No damage — too light' },
    { size: '0.75 inch', ref: 'Marble', what: 'Paint stress; soft metals may show very faint marks' },
    { size: '1 inch', ref: 'Quarter', what: 'First real denting — hood, roof, and trunk show marks' },
    { size: '1.25 inch', ref: 'Half Dollar', what: 'Multiple dents on exposed panels; clear PDR candidate' },
    { size: '1.5 inch', ref: 'Ping Pong Ball', what: 'Significant denting across hood, roof, trunk, doors' },
    { size: '1.75 inch', ref: 'Golf Ball', what: 'Widespread damage; all panels likely affected; glass at risk' },
    { size: '2 inch', ref: 'Egg', what: 'Severe damage; cracked windshields common; total loss possible on older vehicles' },
    { size: '2.5+ inch', ref: 'Baseball', what: 'Extreme damage; structural concerns; high total loss probability' },
  ]

  const faqItems = [
    {
      q: 'Can PDR fix golf-ball-sized hail damage?',
      a: 'Often yes, if paint is intact. Golf-ball dents are deep but still frequently repairable. Inspection is the only way to know for sure.',
    },
    {
      q: 'My dents are tiny but there are hundreds of them — is that bad?',
      a: 'Large counts of small dents are a classic hail damage profile and are typically excellent PDR candidates. Dent count alone does not affect PDR viability.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        Not all hail is created equal. A marble-size hailstorm might leave your car unscathed. A
        quarter-size storm can start dimpling your hood. Golf-ball hail? That&apos;s the one that
        keeps PDR shops busy for weeks. Here&apos;s a practical breakdown.
      </p>

      <h2 className={h2Class}>The Hail Size Scale</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left py-3 px-4 font-semibold">Size</th>
              <th className="text-left py-3 px-4 font-semibold text-gold">Reference</th>
              <th className="text-left py-3 px-4 font-semibold">What Happens to Your Car</th>
            </tr>
          </thead>
          <tbody>
            {hailScale.map((row) => (
              <tr key={row.size} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-dark-text whitespace-nowrap">{row.size}</td>
                <td className="py-3 px-4 text-gray-500 whitespace-nowrap">{row.ref}</td>
                <td className="py-3 px-4 text-gray-700">{row.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2Class}>Why Hood, Roof, and Trunk Get Hit Hardest</h2>
      <p className={pClass}>
        These are the flat horizontal panels — the ones that take the full force of a falling
        hailstone at terminal velocity. Door panels and quarter panels take glancing blows, so
        damage there is typically less severe. Which is why a car that looks catastrophic from
        above often has relatively minor damage on the sides.
      </p>

      <h2 className={h2Class}>The Hail Size That&apos;s Most Common in DFW</h2>
      <p className={pClass}>
        The March 2024 Frisco/Plano storm produced 2.5-inch hailstones. The 2025 historic DFW
        storm produced golf ball to baseball-sized hail in some areas. Quarter to golf-ball
        (1–1.75 inch) is the most common range for significant DFW hail events — and this is the
        ideal range for PDR repair.
      </p>

      <h2 className={h2Class}>Does Hail Size Determine Whether PDR Works?</h2>
      <p className={pClass}>
        Not directly. PDR viability depends on:
      </p>
      <ul className={ulClass}>
        {[
          'Dent depth (not just size)',
          'Panel accessibility',
          'Paint condition (intact = PDR candidate)',
          'Metal condition (not work-hardened or stretched)',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        Golf-ball hail damage is still frequently repairable with PDR. Even baseball-sized dents
        can sometimes be addressed, though these may require hybrid techniques.
      </p>

      <h2 className={h2Class}>How Do I Know What Hit My Car?</h2>
      <ul className={ulClass}>
        {[
          'Check local storm reports (NWS, Storm Prediction Center)',
          "Your neighbors' reports",
          'The size of your dents — a dent roughly the size of a quarter = approximately quarter-sized hail',
          'Insurance adjusters will often note hail size in their report',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Not sure if your damage is PDR-ready? Get a free inspection.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 9: why-luxury-car-owners-choose-pdr ────────────────────────────────

function Post9() {
  const faqItems = [
    {
      q: 'Do you work on all luxury brands?',
      a: 'Yes — BMW, Mercedes, Audi, Porsche, Range Rover, Tesla, Lexus, Cadillac, Genesis, and more. No luxury brand is off the table.',
    },
    {
      q: 'Is PDR safe for aluminum panels?',
      a: "Yes, with proper technique. Aluminum requires different tools and more patience than steel, but we're trained on both.",
    },
    {
      q: 'Will hail affect my luxury vehicle warranty?',
      a: "Hail damage itself doesn't affect the warranty. PDR repair doesn't either — there's no filler, no sanding, no repainting.",
    },
    {
      q: 'What if some panels need body shop work and others can use PDR?',
      a: "We'll tell you honestly which is which. We'd rather lose part of a job than do PDR where it shouldn't be done.",
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        If you drive a Tesla, BMW, Porsche, Range Rover, or another luxury vehicle, a hailstorm
        hits differently. It&apos;s not just the cost of repair — it&apos;s the risk of doing it
        wrong. Repainting a panel on a $70K car introduces risks that simply don&apos;t exist with
        PDR. Here&apos;s why every luxury car owner in North Dallas should understand paintless
        dent repair.
      </p>

      <h2 className={h2Class}>The Factory Paint Problem — Why It Matters More on Luxury Vehicles</h2>
      <p className={pClass}>
        Factory paint on a BMW, Mercedes, or Porsche isn&apos;t just color. It&apos;s a carefully
        engineered system:
      </p>
      <ul className={ulClass}>
        {[
          'Multi-layer application (primer, base coat, clear coat)',
          'Applied in a climate-controlled environment with robotic precision',
          'Color-matched and cured at the factory',
        ].map((item) => (
          <li key={item} className={liClass}>
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={pClass}>
        When a body shop repaints a panel, they&apos;re mixing color and applying it by hand. No
        matter how skilled the painter, the result is not factory paint. On pearl, metallic, or
        special-order colors (BMW Individual, Mercedes designo, Porsche exclusive), the mismatch
        becomes visible within 2–3 years as paints age at different rates.
      </p>

      <h2 className={h2Class}>How Repainted Panels Affect Luxury Vehicle Resale</h2>
      <p className={pClass}>
        Luxury buyers are sophisticated. They run Carfax. They use pre-purchase inspections. They
        look for repainted panels with paint thickness gauges. A repainted panel on a BMW or
        Porsche signals either an accident or improper repair — both kill resale value.
      </p>
      <p className={pClass}>
        PDR leaves zero record. The factory paint stays. The vehicle history stays clean. Your
        resale value stays intact.
      </p>

      <h2 className={h2Class}>Tesla Specifically — Aluminum + Unique Paint</h2>
      <p className={pClass}>
        Tesla vehicles use aluminum body panels on some models, which behave differently than
        steel under PDR. Aluminum has less memory than steel — it requires different technique and
        more patience. Not every PDR shop is trained on aluminum panels.
      </p>
      <p className={pClass}>
        We are. Tesla owners in Frisco, Prosper, and Celina bring their vehicles to us
        specifically because we understand the differences.
      </p>

      <h2 className={h2Class}>The Warranty Consideration</h2>
      <p className={pClass}>
        Some luxury vehicle factory warranties and extended warranties have provisions about
        non-OEM repairs. PDR doesn&apos;t affect any of these — there&apos;s no filler, no
        sanding, no repainting. It&apos;s just the original metal, massaged back to shape.
      </p>
      <p className={pClass}>
        Body shop work can sometimes complicate warranty claims if the repair isn&apos;t
        documented properly.
      </p>

      <h2 className={h2Class}>Why We Love Working on Luxury Vehicles</h2>
      <p className={pClass}>
        Honestly: because they&apos;re the most satisfying. Factory paint on a 2024 Porsche 911
        is something worth preserving. The precision required for PDR on a luxury vehicle is
        exactly the kind of craft we built Dent Boyz around.
      </p>
      <p className={pClass}>
        We treat your car like it&apos;s ours. Actually, better — we&apos;d be more nervous working
        on your Cayenne than our own truck.
      </p>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Luxury vehicle owner? Your factory paint deserves better than a body shop.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Post 10: dfw-hail-season-calendar ───────────────────────────────────────

function Post10() {
  const monthData = [
    { month: 'January', risk: 'Very Low', note: 'Cold fronts can produce hail but rarely significant' },
    { month: 'February', risk: 'Low', note: 'Storm season beginning; prepare now' },
    { month: 'March', risk: 'Moderate–High', note: 'Season opens; March 14, 2024 storm hit Frisco/Plano hard' },
    { month: 'April', risk: 'VERY HIGH', note: 'Peak month; warm Gulf air + cold fronts = supercells' },
    { month: 'May', risk: 'VERY HIGH', note: 'Second peak; historically the most active month' },
    { month: 'June', risk: 'High', note: 'Active but declining; still significant risk' },
    { month: 'July', risk: 'Low', note: 'Heat suppresses hail; most storms are heat-driven and small' },
    { month: 'August', risk: 'Low', note: 'Same as July' },
    { month: 'September', risk: 'Low–Moderate', note: 'Fall pattern setting up; occasional events' },
    { month: 'October', risk: 'Moderate', note: 'Blue northers bring secondary spike; can produce large hail' },
    { month: 'November', risk: 'Low', note: 'Season winding down' },
    { month: 'December', risk: 'Very Low', note: 'Possible but uncommon' },
  ]

  const riskColor = (risk: string) => {
    if (risk === 'VERY HIGH') return 'text-red-600 font-extrabold'
    if (risk === 'High') return 'text-orange-500 font-bold'
    if (risk === 'Moderate–High') return 'text-orange-400 font-semibold'
    if (risk === 'Moderate') return 'text-yellow-600 font-semibold'
    return 'text-gray-500'
  }

  const notableEvents = [
    {
      date: 'March 14, 2024',
      detail: '2.5" hail in Frisco, Little Elm, Plano. Thousands of claims in Collin County.',
    },
    {
      date: '2025 Historic DFW Storm',
      detail: 'Golf ball to baseball hail across Plano, McKinney, Rockwall, Tarrant County. One of the worst DFW hail events on record.',
    },
    {
      date: 'May 2026',
      detail: 'Active storm season with severe weather watches across Collin, Denton, Dallas counties.',
    },
  ]

  const faqItems = [
    {
      q: 'When should I book a PDR appointment?',
      a: 'As soon as possible after a storm — shops fill up fast. Calling within 24 hours gets you the shortest wait times.',
    },
    {
      q: 'Does it matter what time of year I get repairs done?',
      a: "No — PDR works year-round. But getting ahead of summer humidity is a bonus, as moisture can worsen paint micro-cracks.",
    },
    {
      q: 'What if another storm is coming — should I wait to repair?',
      a: 'No. Each storm adds new damage. Get existing damage repaired, then protect the car for the next event.',
    },
  ]

  const faqSchema = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <p className={pClass}>
        One of the smartest things a North Dallas car owner can do is understand hail season
        before it arrives — not after. Here&apos;s a month-by-month breakdown of DFW hail risk
        and a preparation checklist so you&apos;re never scrambling after a storm.
      </p>

      <h2 className={h2Class}>DFW Hail Risk by Month</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left py-3 px-4 font-semibold">Month</th>
              <th className="text-left py-3 px-4 font-semibold text-gold">Risk Level</th>
              <th className="text-left py-3 px-4 font-semibold">What to Know</th>
            </tr>
          </thead>
          <tbody>
            {monthData.map((row) => (
              <tr key={row.month} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-dark-text">{row.month}</td>
                <td className={`py-3 px-4 ${riskColor(row.risk)}`}>{row.risk}</td>
                <td className="py-3 px-4 text-gray-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2Class}>The February Preparation Checklist</h2>
      <p className={pClass}>
        Don&apos;t wait for storm season to start. By February, do this:
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-light-gray rounded-xl p-5">
          <h3 className="font-bold text-dark-text mb-3">Insurance</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'Confirm you have comprehensive coverage',
              'Know your deductible amount',
              'Have your policy number accessible',
              "Know your insurer's claims number",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span>☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-light-gray rounded-xl p-5">
          <h3 className="font-bold text-dark-text mb-3">Parking</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'Identify nearest covered parking to your home',
              'Identify covered parking near your office',
              'Consider a hail blanket/cover ($100–300)',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span>☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-navy/5 border border-navy/20 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-dark-text mb-3">If It Hits</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            'Save Dent Boyz number: (214) 555-0100',
            'Know the steps: document → call us → inspect → decide on claim',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span>☐</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className={h2Class}>Why Getting Ahead of Storm Season Matters</h2>
      <p className={pClass}>
        After a major hail event, every PDR shop in North Dallas fills up within 48 hours. Wait
        times can stretch to 2–3 weeks. The customers who call immediately after a storm get the
        fastest service — and faster repair means less time with paint micro-cracks exposed to
        moisture.
      </p>

      <h2 className={h2Class}>Notable DFW Hail Events (What History Tells Us)</h2>
      <div className="space-y-4 mb-8">
        {notableEvents.map((event) => (
          <div key={event.date} className="border-l-4 border-gold pl-4 py-1">
            <p className="font-bold text-dark-text">{event.date}</p>
            <p className="text-gray-600 text-sm mt-1">{event.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold rounded-xl p-6 my-8">
        <p className="text-dark-text font-semibold mb-3">
          Storm season is here. Don&apos;t wait until after the storm.
        </p>
        <Link
          href="/free-estimate"
          className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors"
        >
          Schedule free inspection →
        </Link>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className="space-y-4 mb-8">
        {faqItems.map((item) => (
          <div key={item.q} className="bg-light-gray rounded-xl p-6">
            <h3 className="font-bold text-dark-text mb-2">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Content map ──────────────────────────────────────────────────────────────

const postContent: Record<string, React.FC> = {
  'will-filing-hail-claim-raise-my-rates-texas': Post1,
  'pdr-vs-body-shop-hail-damage': Post2,
  'what-to-do-first-24-hours-after-hail': Post3,
  'how-to-file-state-farm-hail-claim-texas': Post4,
  'how-to-know-if-car-is-totaled-from-hail': Post5,
  'new-to-texas-hail-guide-celina-prosper': Post6,
  'lease-return-dent-repair-what-dealer-charges': Post7,
  'what-size-hail-damages-your-car': Post8,
  'why-luxury-car-owners-choose-pdr': Post9,
  'dfw-hail-season-calendar': Post10,
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: PageProps) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const Content = postContent[post.slug]
  if (!Content) notFound()

  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug)

  const articleSchema = {
    headline: post.title,
    description: postMeta[post.slug]?.description ?? '',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Dent Boyz',
      url: 'https://dent-boyz.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dent Boyz',
      url: 'https://dent-boyz.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dent-boyz.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Dark hero */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="container-xl max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-gray-400 text-sm hover:text-white transition-colors mb-6"
          >
            ← Back to Blog
          </Link>
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${
              categoryColors[post.category] ?? 'bg-gray-700 text-gray-200'
            }`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white py-12 px-4">
        <div className="container-xl max-w-6xl flex gap-12 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <Content />
          </div>

          {/* Sidebar */}
          <SidebarCTA />
        </div>
      </section>

      {/* Mobile CTA */}
      <section className="lg:hidden bg-navy py-10 px-4">
        <div className="container-xl max-w-xl text-center">
          <h3 className="text-white font-extrabold text-xl mb-3">
            Got hail damage? Get a free inspection.
          </h3>
          <Link
            href="/free-estimate"
            className="inline-block bg-gold text-navy font-bold px-7 py-3 rounded-lg hover:bg-gold-dark transition-colors"
          >
            Schedule Free Inspection →
          </Link>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-light-gray py-14 px-4">
        <div className="container-xl max-w-4xl">
          <h2 className="text-2xl font-extrabold text-dark-text mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <article
                key={rp.slug}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 w-fit ${
                    categoryColors[rp.category] ?? 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {rp.category}
                </span>
                <h3 className="font-extrabold text-dark-text text-lg leading-snug mb-2 flex-1">
                  <Link href={`/blog/${rp.slug}`} className="hover:text-electric-blue transition-colors">
                    {rp.title}
                  </Link>
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{formatDate(rp.date)}</span>
                  <span>{rp.readTime}</span>
                </div>
                <Link
                  href={`/blog/${rp.slug}`}
                  className="text-electric-blue font-semibold text-sm hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to fix your hail damage?"
        subtext="Free inspection. No obligation. Factory paint preserved — guaranteed."
      />
    </>
  )
}
