export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  readTime: string
  category: 'Insurance' | 'PDR' | 'Hail Season' | 'Tips'
}

export const POSTS: Post[] = [
  {
    slug: 'will-filing-hail-claim-raise-my-rates-texas',
    title: 'Will Filing a Hail Damage Claim Raise My Insurance Rates in Texas?',
    date: '2026-05-04',
    excerpt:
      "One of the biggest fears after a hailstorm: will filing a claim make my insurance go up? Here's the honest answer for Texas drivers.",
    readTime: '6 min read',
    category: 'Insurance',
  },
  {
    slug: 'pdr-vs-body-shop-hail-damage',
    title: 'PDR vs. Body Shop for Hail Damage: Which Is Right for You?',
    date: '2026-05-04',
    excerpt:
      "Two ways to fix hail damage — one preserves your factory paint, one doesn't. Here's what you need to know before choosing.",
    readTime: '5 min read',
    category: 'PDR',
  },
  {
    slug: 'what-to-do-first-24-hours-after-hail',
    title: 'What to Do in the First 24 Hours After Hail Hits Your Car',
    date: '2026-05-04',
    excerpt:
      "A hailstorm just rolled through. Your car took hits. Here's the exact sequence of steps to take — before you call anyone.",
    readTime: '4 min read',
    category: 'Hail Season',
  },
  {
    slug: 'how-to-file-state-farm-hail-claim-texas',
    title: 'How to File a State Farm Hail Damage Claim in Texas (Step by Step)',
    date: '2026-05-04',
    excerpt: "State Farm is the most common insurer in North Dallas. Here's exactly how to file a hail damage claim — from the first call to getting your check.",
    readTime: '7 min read',
    category: 'Insurance',
  },
  {
    slug: 'how-to-know-if-car-is-totaled-from-hail',
    title: 'How Do I Know If My Car Is Totaled from Hail Damage?',
    date: '2026-05-04',
    excerpt: "Your car looks bad after the storm. But is it actually a total loss? Here's how insurance companies make that call — and what you can do about it.",
    readTime: '5 min read',
    category: 'Insurance',
  },
  {
    slug: 'new-to-texas-hail-guide-celina-prosper',
    title: 'New to North Dallas? Your First-Time Texas Hail Damage Guide',
    date: '2026-05-04',
    excerpt: "Relocated to Celina, Prosper, Frisco, or another North Dallas suburb? Here's what you need to know about Texas hail before the next storm hits.",
    readTime: '5 min read',
    category: 'Tips',
  },
  {
    slug: 'lease-return-dent-repair-what-dealer-charges',
    title: 'Lease Return Dent Repair: What Will the Dealer Charge You For?',
    date: '2026-05-04',
    excerpt: "Returning a leased vehicle? Dealers charge $300–$800+ per dent. Here's what counts as excess wear, how to avoid the bill, and when PDR saves you money.",
    readTime: '5 min read',
    category: 'Tips',
  },
  {
    slug: 'what-size-hail-damages-your-car',
    title: 'What Size Hail Actually Damages Your Car? (A Practical Guide)',
    date: '2026-05-04',
    excerpt: "Marble-size? Quarter-size? Golf ball? Here's exactly what each hail size does to your vehicle — and which sizes are PDR candidates.",
    readTime: '4 min read',
    category: 'Hail Season',
  },
  {
    slug: 'why-luxury-car-owners-choose-pdr',
    title: 'Why Tesla, BMW, and Luxury Car Owners Choose PDR Over Body Shops',
    date: '2026-05-04',
    excerpt: "If you drive a BMW, Tesla, Porsche, or Range Rover, hail damage is especially stressful. Here's why PDR is the only smart choice for luxury vehicles.",
    readTime: '5 min read',
    category: 'PDR',
  },
  {
    slug: 'dfw-hail-season-calendar',
    title: 'DFW Hail Season Calendar: When to Expect Storms and How to Prepare',
    date: '2026-05-04',
    excerpt: "Month-by-month breakdown of hail risk in Dallas-Fort Worth, plus a preparation checklist so you're never caught off guard.",
    readTime: '4 min read',
    category: 'Hail Season',
  },
]
