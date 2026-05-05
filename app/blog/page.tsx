import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { POSTS } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Hail Damage & PDR Blog | North Dallas Tips & Guides | Dent Boyz',
  description:
    'Expert guides on hail damage repair, insurance claims, PDR, and protecting your car in North Texas. From the Dent Boyz team serving Frisco, McKinney, Plano & more.',
  alternates: { canonical: 'https://dent-boyz.com/blog' },
}

const categoryColors: Record<string, string> = {
  Insurance: 'bg-blue-100 text-blue-800',
  PDR: 'bg-green-100 text-green-800',
  'Hail Season': 'bg-yellow-100 text-yellow-800',
  Tips: 'bg-purple-100 text-purple-800',
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const blogSchema = {
  '@type': 'Blog',
  name: 'North Dallas Hail & PDR Resource Center',
  description:
    'Expert guides on hail damage repair, insurance claims, PDR, and protecting your car in North Texas.',
  url: 'https://dent-boyz.com/blog',
  publisher: {
    '@type': 'LocalBusiness',
    name: 'Dent Boyz',
    url: 'https://dent-boyz.com',
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <SchemaMarkup type="Service" data={blogSchema} />

      {/* Dark header */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl max-w-3xl">
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">
            Resource Center
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            North Dallas Hail &amp; PDR Resource Center
          </h1>
          <p className="text-gray-300 text-lg">
            Answers to the questions North Texas drivers ask most — insurance, PDR, hail season,
            and more.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-light-gray py-16 px-4">
        <div className="container-xl max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                {/* Category bar */}
                <div className="h-1.5 bg-gold" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge */}
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 w-fit ${
                      categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.category}
                  </span>

                  <h2 className="text-xl font-extrabold text-dark-text leading-snug mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-electric-blue transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-5">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-electric-blue font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 px-4 text-center">
        <div className="container-xl max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Got hail damage?{' '}
            <span className="text-gold">We&apos;ll inspect it for free.</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Schedule a no-obligation inspection and know exactly what you&apos;re dealing with —
            before you call your insurance company.
          </p>
          <Link
            href="/free-estimate"
            className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-lg hover:bg-gold-dark transition-colors text-lg"
          >
            Get Free Inspection
          </Link>
        </div>
      </section>
    </>
  )
}
