import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'DFW Hail Season Guide — When It Hits & What To Do | Dent Boyz',
  description:
    'When is hail season in Dallas-Fort Worth? Peak months, worst historical storms, and exactly what to do when hail hits your car in North Texas.',
  alternates: { canonical: 'https://dent-boyz.com/hail-season-dfw' },
};

const faqItems = [
  {
    question: 'When should I start preparing for hail season in DFW?',
    answer:
      'February. By the time April arrives, storm season is already in full swing. Get a covered parking plan in place and save our number before you need it.',
  },
  {
    question: "Does Texas homeowner's insurance cover car hail damage?",
    answer:
      "No — car hail damage is covered under your auto insurance comprehensive coverage, not homeowner's. They're separate policies.",
  },
  {
    question: 'How quickly after a storm do I need to file a claim?',
    answer:
      "Texas law doesn't set a hard deadline, but most insurers want claims filed within 1 year. However, adjusters get backlogged during storm season — file sooner for faster service.",
  },
  {
    question: "My neighbor's tree fell on my car during a storm — is that covered differently?",
    answer:
      'Falling objects (including trees) are covered under comprehensive, same as hail. File the same way.',
  },
  {
    question: 'Can I get hail damage repaired without going through insurance?',
    answer:
      "Yes. If your damage is minor or your deductible is high, paying out of pocket may make more sense. We'll give you an honest assessment.",
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

const articleSchema = {
  headline: 'DFW Hail Season: When It Hits, What to Do, and How to Protect Your Car',
  description:
    'When is hail season in Dallas-Fort Worth? Peak months, worst historical storms, and exactly what to do when hail hits your car in North Texas.',
  author: {
    '@type': 'Organization',
    name: 'Dent Boyz',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dent Boyz',
    areaServed: 'North Dallas, TX',
  },
  about: 'Hail season in the Dallas-Fort Worth metroplex',
  keywords: 'hail season DFW, Dallas hail storms, North Texas hail, hail damage car',
};

const monthlyRisk = [
  { month: 'January', risk: 'Very Low', notes: 'Cold front storms possible but rare' },
  { month: 'February', risk: 'Low', notes: 'Season beginning' },
  { month: 'March', risk: 'Moderate–High', notes: 'Storm season begins; can produce significant hail' },
  { month: 'April', risk: 'VERY HIGH', notes: 'Peak month — warm/cold air clash at maximum' },
  { month: 'May', risk: 'VERY HIGH', notes: 'Second peak — hail most frequent' },
  { month: 'June', risk: 'High', notes: 'Still active, slightly declining' },
  { month: 'July', risk: 'Low', notes: 'Hot, dry suppresses hail' },
  { month: 'August', risk: 'Low', notes: 'Same' },
  { month: 'September', risk: 'Low–Moderate', notes: 'Fall pattern starting' },
  { month: 'October', risk: 'Moderate', notes: 'Secondary spike — blue norther season' },
  { month: 'November', risk: 'Low', notes: 'Season winding down' },
  { month: 'December', risk: 'Very Low', notes: 'Rare but possible' },
];

const hailSizeRows = [
  { size: 'Under 1 inch', comparison: 'Marble', damage: 'Minimal — paint stress only' },
  { size: '1 inch', comparison: 'Quarter', damage: 'Minor dents on soft panels (hood, roof, trunk)' },
  { size: '1.25 inch', comparison: 'Half dollar', damage: 'Moderate dents — clear PDR candidate' },
  { size: '1.5 inch', comparison: 'Ping pong ball', damage: 'Significant denting on multiple panels' },
  { size: '1.75 inch', comparison: 'Golf ball', damage: 'Widespread damage — all exposed panels likely affected' },
  { size: '2+ inch', comparison: 'Egg or larger', damage: 'Severe damage — possible total loss on older/lower-value vehicles' },
];

const riskColor = (risk: string) => {
  if (risk === 'VERY HIGH') return 'bg-red-100 text-red-800 font-bold';
  if (risk === 'High') return 'bg-orange-100 text-orange-700 font-semibold';
  if (risk === 'Moderate–High') return 'bg-yellow-100 text-yellow-700 font-semibold';
  if (risk === 'Moderate') return 'bg-yellow-50 text-yellow-600';
  return 'text-gray-500';
};

export default function HailSeasonDFWPage() {
  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1 items-center">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <span className="text-gray-300">Resources</span>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-gray-200">DFW Hail Season Guide</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            DFW Hail Season:{' '}
            <span className="text-gold">When It Hits, What to Do, and How to Protect Your Car</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A practical guide to North Texas hail — from peak months and historical storms to
            exactly what to do in the first 24 hours after your car takes a hit.
          </p>
        </div>
      </section>

      {/* WHEN IS HAIL SEASON */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            When Is Hail Season in Dallas-Fort Worth?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            DFW sits squarely in{' '}
            <strong className="text-dark-text">&ldquo;Hail Alley&rdquo;</strong> — the stretch of
            central United States where warm, humid air from the Gulf of Mexico collides with cold
            Canadian air masses pushing down from the north. This collision creates the supercell
            thunderstorms that produce large, damaging hail. Unlike tornado alley to the west, DFW&apos;s
            geography makes it one of the most hail-prone major metros in the country.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Hail season in North Texas isn&apos;t a brief window — it spans roughly seven months,
            with two distinct peak periods:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-4 px-6 font-semibold">Month</th>
                  <th className="text-left py-4 px-6 font-semibold text-gold">Hail Risk</th>
                  <th className="text-left py-4 px-6 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {monthlyRisk.map((row) => (
                  <tr key={row.month} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-6 font-medium text-dark-text">{row.month}</td>
                    <td className="py-3 px-6">
                      <span className={`inline-block px-2 py-0.5 rounded text-sm ${riskColor(row.risk)}`}>
                        {row.risk}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-dark-text font-semibold">
              The practical takeaway: if your car sits outside between March and June in North
              Texas, it is at meaningful risk of hail damage every single year.
            </p>
          </div>
        </div>
      </section>

      {/* NOTABLE STORMS */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">
            Notable Hail Storms That Hit North Dallas
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500">
              <div className="text-sm font-bold text-red-600 mb-1 uppercase tracking-wide">
                March 14, 2024
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                2.5-Inch Hail Hits Frisco, Little Elm, Plano
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hailstones measuring up to 2.5 inches — approaching baseball size — struck Frisco,
                Little Elm, and Plano in the same afternoon. The storm triggered thousands of
                insurance claims across Collin County within 48 hours. Adjusters were backlogged
                for weeks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500">
              <div className="text-sm font-bold text-red-600 mb-1 uppercase tracking-wide">
                2025 — Historic DFW Storm
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                One of the Worst on Record
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The 2025 storm system that hit the DFW metro is now considered one of the worst
                hail events on record for the region, with Plano, McKinney, Rockwall, and Tarrant
                County bearing the heaviest damage. Vehicles across the metro were impacted within
                a matter of minutes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                stat: '56',
                label: 'Ground-level hail spotter reports',
                context: 'McKinney, TX — past 12 months alone',
              },
              {
                stat: '83',
                label: 'Ground hail reports',
                context: 'Dallas metro — past 12 months',
              },
              {
                stat: '147',
                label: 'Severe weather warnings',
                context: 'Dallas metro — past 12 months',
              },
              {
                stat: '232',
                label: 'Radar hail detections',
                context: 'Dallas metro — past 12 months',
              },
            ].map((item) => (
              <div key={item.label} className="bg-navy text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-extrabold text-gold mb-1">{item.stat}</div>
                <div className="font-semibold mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.context}</div>
              </div>
            ))}
          </div>

          <blockquote className="bg-white rounded-xl p-6 border-l-4 border-gold shadow-sm">
            <p className="text-dark-text font-semibold text-lg italic">
              &ldquo;North Texas doesn&apos;t ask if your car will get hailed — it asks when.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* HAIL SIZE DAMAGE TABLE */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            What Size Hail Actually Damages Your Car?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Not every hailstone does the same damage. Here&apos;s a realistic breakdown by stone
            size — with familiar comparisons so you can estimate what a storm report actually means
            for your vehicle.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-4 px-6 font-semibold">Hail Size</th>
                  <th className="text-left py-4 px-6 font-semibold text-gold">Comparison</th>
                  <th className="text-left py-4 px-6 font-semibold">Car Damage</th>
                </tr>
              </thead>
              <tbody>
                {hailSizeRows.map((row) => (
                  <tr key={row.size} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-6 font-medium text-dark-text">{row.size}</td>
                    <td className="py-3 px-6 text-gray-700">{row.comparison}</td>
                    <td className="py-3 px-6 text-gray-600 text-sm">{row.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-green-800 font-semibold">
              YES The good news: even golf-ball-sized hail damage is repairable with PDR in the
              majority of cases — as long as the paint is intact.
            </p>
          </div>
        </div>
      </section>

      {/* FIRST 24 HOURS */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            What to Do in the First 24 Hours After Hail Hits Your Car
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The steps you take immediately after a hailstorm can significantly affect your repair
            outcome and insurance claim. Here&apos;s the right sequence:
          </p>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: "Don't Panic",
                desc: 'Most hail damage is 100% repairable with PDR. Even significant denting across multiple panels can be restored to factory condition. Take a breath.',
              },
              {
                step: '02',
                title: 'Document Everything',
                desc: 'Before touching the car, photograph every panel from multiple angles — close-up and wide. Record the storm date, approximate time, and your location. Your phone auto-stamps the file metadata with the timestamp.',
              },
              {
                step: '03',
                title: "Don't Wash the Car Yet",
                desc: "Wait until after your inspection. A clean car makes damage assessment easier and photos cleaner, but washing before inspection can disturb evidence and complicate the claims process.",
              },
              {
                step: '04',
                title: 'Note Storm Date and ZIP',
                desc: 'Your insurer will cross-reference your claim with official weather service data. Having the exact storm date and your location makes this match-up fast and clean.',
              },
              {
                step: '05',
                title: 'Call Dent Boyz First — Before Your Insurer',
                desc: "Get a free professional inspection before you file a claim. This puts you in a stronger negotiating position with your insurer and ensures you don't leave money on the table.",
              },
              {
                step: '06',
                title: 'Then Decide: File a Claim or Pay Out of Pocket',
                desc: "After your inspection, you'll have a complete damage report and repair estimate. Then you can make an informed decision about whether to file a claim or pay directly.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-gold font-extrabold text-lg rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              Filing an insurance claim?{' '}
              <Link
                href="/insurance-claims"
                className="text-electric-blue font-semibold hover:underline"
              >
                Read our complete insurance claims guide →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO PROTECT */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            How to Protect Your Car During Hail Season
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Prevention is always better than repair. Here are the best options for North Texas
            drivers:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: '',
                title: 'Covered Parking',
                desc: 'Garage, covered lot, or parking structure. The gold standard. A single storm can cost more than a year of covered parking fees.',
              },
              {
                icon: '',
                title: 'Hail Car Covers',
                desc: 'Heavy-duty padded covers exist in the $100–$300 range. Worth it for frequent storms or when garage parking isn\'t available. Look for multi-layer impact resistance.',
              },
              {
                icon: '',
                title: 'Weather Alert Apps',
                desc: 'Set push alerts for severe thunderstorm warnings and hail watches in your area. An extra 20 minutes of warning can save you thousands.',
              },
              {
                icon: '',
                title: 'Storage Units',
                desc: 'Some North Dallas residents keep a second vehicle or seasonal car in a storage unit during peak season (April–June). Surprisingly affordable for peace of mind.',
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

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-dark-text font-semibold">
              The best protection is a garage. But if you don&apos;t have one, a hail cover is
              the next best thing.
            </p>
          </div>
        </div>
      </section>

      {/* DOES IT GET WORSE */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            Does Hail Damage Get Worse if You Don&apos;t Fix It?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Yes — and here&apos;s exactly why waiting is a bad idea:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '',
                title: 'Micro-cracks in clear coat allow moisture in',
                desc: 'Even if paint looks intact to the naked eye, the force of hail impact can create micro-fractures in the clear coat. Moisture penetrates these cracks over time, leading to rust that spreads under the paint.',
              },
              {
                icon: '',
                title: 'Untreated aluminum panels work-harden',
                desc: 'Aluminum panels that remain dented can work-harden over time, making them more resistant to PDR and increasing the risk of cracking during repair. The window for a clean PDR repair narrows.',
              },
              {
                icon: '',
                title: 'Insurance complications increase',
                desc: 'Insurance companies can reduce or deny future claims if pre-existing damage isn\'t disclosed. The longer you wait, the harder it is to tie the damage to a specific storm event.',
              },
              {
                icon: '',
                title: 'Resale value keeps dropping',
                desc: 'Visible dents signal neglect to buyers and dealers. The longer dents are present, the more negotiating leverage they hand to the other party. Fix it now while the damage is current and clean.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-dark-text mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="bg-navy text-white rounded-xl p-6 border-l-4 border-gold">
            <p className="font-semibold text-lg italic">
              &ldquo;Fix it now while it&apos;s easy. Hail damage doesn&apos;t heal itself.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* WHY NORTH DALLAS GETS HIT */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">
            Why North Dallas Gets Hit So Hard
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            It&apos;s not bad luck — it&apos;s geography.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '',
                title: 'Gulf Moisture Convergence',
                desc: 'DFW sits at the convergence of warm, humid air from the Gulf of Mexico and cold fronts pushing down from Canada. This is the exact combination that fuels severe supercell thunderstorms capable of producing large hail.',
              },
              {
                icon: '',
                title: 'Flat Terrain — No Natural Barriers',
                desc: "Unlike cities on the coasts or in mountain regions, DFW has no topographic features to break up or weaken storm systems. Storms travel across the plains unimpeded, maintaining their energy.",
              },
              {
                icon: '',
                title: 'Collin County Uplift',
                desc: 'The slightly elevated terrain of Collin County — where Frisco, McKinney, and Plano sit — creates favorable conditions for atmospheric uplift, which intensifies storm cells and increases hail production.',
              },
              {
                icon: '',
                title: 'The Statistical Reality',
                desc: 'The result: DFW averages more significant hail events per year than almost any other major US metropolitan area. This is not a once-in-a-decade problem. It happens every spring.',
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
        headline="Hail already hit? Get your free inspection — no obligation."
        subtext="Most hail damage is 100% repairable. Find out in 30 minutes — free."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">
              A Dent Boyz specialist will contact you within 1 business hour.
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
