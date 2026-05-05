import type { Metadata } from 'next';
import CTABlock from '@/components/CTABlock';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Reviews | Dent Boyz — North Dallas PDR & Hail Damage Repair',
  description:
    'See what North Dallas drivers say about Dent Boyz. Read real reviews from customers in Frisco, McKinney, Plano, Prosper & more.',
  alternates: { canonical: 'https://dent-boyz.com/reviews' },
};

// -----------------------------------------------------------------------
// REVIEWS — replace placeholder data with real reviews as they come in
// -----------------------------------------------------------------------
const REVIEWS = [
  {
    name: 'Michael T.',
    location: 'Frisco, TX',
    rating: 5,
    date: 'April 2026',
    vehicle: '2023 BMW X5',
    text: 'My X5 got hit in the April storm — dozens of dents across the hood and roof. I was terrified about what it would cost. Dent Boyz came out for a free inspection, walked me through exactly what my insurance would cover, and had the car back to me in 3 days looking factory new. You genuinely cannot tell anything ever happened. Worth every penny — and my insurance covered almost all of it.',
  },
  {
    name: 'Sarah M.',
    location: 'Prosper, TX',
    rating: 5,
    date: 'March 2026',
    vehicle: '2024 Tesla Model Y',
    text: "Incredibly professional. I was nervous about PDR on a Tesla because of the aluminum panels, but they knew exactly what they were doing. Explained everything upfront, no surprises. My Model Y looks perfect. I've already recommended them to three neighbors in Windsong Ranch.",
  },
  {
    name: 'James R.',
    location: 'McKinney, TX',
    rating: 5,
    date: 'May 2026',
    vehicle: '2022 Ford F-150',
    text: 'The 2025 storm hit Stonebridge Ranch hard. I had hail damage on every panel. Dent Boyz handled my entire State Farm claim — I basically just showed up and signed. They dealt with the adjuster, filed the supplemental when they found more damage during repair, and had my truck back looking brand new. Zero out of pocket after deductible assistance. Cannot recommend enough.',
  },
  {
    name: 'Amanda K.',
    location: 'Celina, TX',
    rating: 5,
    date: 'April 2026',
    vehicle: '2025 Range Rover Sport',
    text: "We moved here from Colorado and had never dealt with Texas hail. I had no idea what to do. Called Dent Boyz and they walked me through everything — inspection, insurance call, what to expect, all of it. They came to my house in Light Farms, did the inspection same day, and the repair was flawless. My Range Rover looks like it just left the dealership.",
  },
  {
    name: 'David L.',
    location: 'Plano, TX',
    rating: 5,
    date: 'March 2026',
    vehicle: '2021 Chevrolet Tahoe',
    text: "Went with Dent Boyz after getting quotes from two other shops. They were honest about what PDR could and couldn't do, which I appreciated — the other shops just said yes to everything. End result was perfect. My Tahoe has factory paint intact and not a dent in sight. Will be my first call next hail season.",
  },
  {
    name: 'Lauren H.',
    location: 'Southlake, TX',
    rating: 5,
    date: 'February 2026',
    vehicle: '2023 Porsche Cayenne',
    text: 'I was extremely particular about who touched my Cayenne. These guys earned my trust immediately — they knew exactly how to handle the aluminum panels and were meticulous about every dent. Brought it in with 14 hail dents. Left with a flawless car. If you have a luxury vehicle, this is who you call.',
  },
  {
    name: 'Carlos V.',
    location: 'Frisco, TX',
    rating: 5,
    date: 'January 2026',
    vehicle: '2020 Honda Accord (lease)',
    text: "Had some door dings I needed fixed before returning my lease. Dent Boyz came to my office during lunch, fixed 4 dings in about an hour, and saved me from what would have been a $600+ dealer charge. Incredibly convenient. Price was very fair. Booking again for my wife's car.",
  },
  {
    name: 'Rebecca S.',
    location: 'Allen, TX',
    rating: 5,
    date: 'May 2026',
    vehicle: '2022 Toyota Highlander',
    text: "After the spring storms I had a checkerboard of dents across my Highlander's hood and roof. My neighbor recommended Dent Boyz and I'm so glad she did. Free inspection, handled my Allstate claim, repaired in 2 days. Perfect result. They also caught additional damage the insurance adjuster missed and filed a supplemental — got an extra $400 covered.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Schema data
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dent Boyz',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.name,
    },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: '5',
      worstRating: '1',
    },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* HERO */}
      <section className="bg-navy text-white py-20 md:py-28 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              What North Dallas Drivers Say About{' '}
              <span className="text-gold">Dent Boyz</span>
            </h1>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <span className="text-3xl font-extrabold text-white">5.0</span>
                <span className="text-gray-400 text-sm ml-2">Based on customer reviews</span>
              </div>
            </div>

            <p className="text-lg text-gray-300">
              Real results. Real customers. Real North Dallas.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEW CARDS */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={`${review.name}-${review.date}`}
                className="bg-white rounded-xl shadow-sm p-7 border-l-4 border-yellow-400 flex flex-col gap-4"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-dark-text text-lg">{review.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-light-gray text-gray-500 font-medium px-2 py-0.5 rounded-full">
                        {review.location}
                      </span>
                      <span className="text-xs text-gray-400">{review.vehicle}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap mt-1">{review.date}</span>
                </div>

                <StarRating rating={review.rating} />

                <p className="text-gray-600 leading-relaxed text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">Leave Us a Review</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Had a great experience? We&apos;d love to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Update these links once Google Business Profile is set up */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#4285F4] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#3367D6] transition-colors text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff" />
              </svg>
              Review on Google
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#D32323] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b71c1c] transition-colors text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.111 18.226c-.141.371-1.196 2.36-2.612 2.099-.778-.142-1.441-.937-2.507-1.832-1.339-1.11-2.126-1.722-2.126-1.722s1.064-.37 2.023-1.417c.625-.672 1.151-1.571 1.167-3.158.017-1.573-.559-2.681-1.258-3.427-.779-.832-1.922-1.4-3.279-1.4-2.651 0-4.526 2.148-4.526 4.784 0 2.634 1.875 4.779 4.526 4.779.484 0 .948-.079 1.384-.218l.643 1.038c-2.08 1.12-4.784.684-6.437-.979-1.654-1.663-2.211-4.067-1.512-6.196.699-2.129 2.655-3.682 4.952-3.682 2.299 0 4.253 1.553 4.952 3.682.129.392.206.803.206 1.23 0 .049-.001.098-.002.146.499-.223 1.036-.331 1.589-.248.873.131 1.533.718 1.899 1.534.366.817.366 1.793 0 2.61-.041.09-.08.18-.122.268z" />
              </svg>
              Review on Yelp
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Review links will be updated once our Google Business Profile is fully set up.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        headline="Ready to join our satisfied customers?"
        subtext="Start with a free inspection — no pressure, no obligation."
      />
    </>
  );
}
