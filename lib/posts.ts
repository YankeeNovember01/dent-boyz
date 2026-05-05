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
]
