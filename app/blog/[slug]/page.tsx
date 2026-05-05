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
    { scenario: '$3,000 hail damage, $500 deductible, no recent claims', verdict: '✅ Yes — $2,500 covered, low rate risk' },
    { scenario: '$800 hail damage, $1,000 deductible', verdict: '❌ No — damage is less than deductible' },
    { scenario: '$1,500 damage, $500 deductible, filed 2 claims last year', verdict: '⚠️ Maybe — get an inspection and weigh it' },
    { scenario: '$5,000 damage, $2,500 deductible, great claim history', verdict: '✅ Probably yes — still $2,500 covered' },
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
    { factor: 'Factory paint preserved', pdr: '✅ Always', shop: '❌ Repainted' },
    { factor: 'Resale value impact', pdr: 'Minimal', shop: 'Can reduce 10–20%' },
    { factor: 'Repair time', pdr: '1–5 days', shop: '1–3 weeks' },
    { factor: 'Cost (out of pocket)', pdr: 'Lower', shop: 'Higher' },
    { factor: 'Insurance coverage', pdr: '✅ Comprehensive', shop: '✅ Comprehensive' },
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
        The inspection is free. It takes 20–30 minutes. We come to you if needed.
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
            <span className="text-red-500 mt-1">❌</span>
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
              <span className="text-gray-700">✅ {item}</span>
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

// ─── Content map ──────────────────────────────────────────────────────────────

const postContent: Record<string, React.FC> = {
  'will-filing-hail-claim-raise-my-rates-texas': Post1,
  'pdr-vs-body-shop-hail-damage': Post2,
  'what-to-do-first-24-hours-after-hail': Post3,
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
