import type { Metadata } from 'next';
import Link from 'next/link';
import CTABlock from '@/components/CTABlock';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Motorcycle Dent Repair Dallas TX | Tank & Fairing PDR | Dent Boyz',
  description: 'Motorcycle and tank dent repair in North Dallas using PDR. Preserve your paint, restore your tank. Harley, Honda, Ducati, BMW and more. Free estimate.',
};

const faqItems = [
  {
    question: 'Can you fix a dented gas tank without removing it?',
    answer: 'Sometimes — it depends on the dent location and what access we have. Many tank dents can be addressed through existing fuel sender openings or with limited disassembly. We evaluate access during the inspection and let you know exactly what\'s involved. When the tank does need to come off, it\'s typically straightforward on most bikes.',
  },
  {
    question: 'Will PDR fix the dent completely?',
    answer: 'For steel tanks with intact paint, yes — a professional PDR repair delivers a factory smooth result. We use specialized lighting throughout the process to verify complete correction. If there are any limitations with a specific dent (very deep, very tight location), we\'ll tell you the realistic outcome before we start.',
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
  name: 'Motorcycle Dent Repair',
  description: 'Motorcycle gas tank and steel panel PDR in North Dallas, TX. Specialist technicians for Harley-Davidson, Honda, Ducati, BMW, and all steel-tank bikes.',
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

const brands = [
  'Harley-Davidson', 'Honda', 'Kawasaki', 'Yamaha',
  'Ducati', 'BMW', 'Triumph', 'Suzuki',
  'Indian', 'Royal Enfield',
];


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dent-boyz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://dent-boyz.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Motorcycle Dent Repair', item: 'https://dent-boyz.com/services/motorcycle-dent-repair' },
  ],
};

export default function MotorcycleDentRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Motorcycle Tank &amp; Dent Repair in North Dallas —{' '}
              <span className="text-gold">Your Ride Deserves It</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              A dented tank ruins the look of an otherwise perfect bike. We specialize in PDR
              for motorcycle gas tanks and steel panels — restoring them to factory smooth without
              touching your paint. Free estimate, specialist technicians.
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

      {/* WHAT'S DIFFERENT */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">PDR for Motorcycles — What&apos;s Different</h2>
          <div className="bg-light-gray rounded-xl p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Motorcycle PDR isn&apos;t just &quot;car PDR on a smaller surface.&quot; Bikes present unique
              challenges that require specialist knowledge:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Limited Access Points', desc: 'Gas tanks have few access points. We often work through the fuel sender opening, breather ports, or with minimal tank removal.' },
                { title: 'Tighter Curves', desc: 'Motorcycle tanks and fenders have aggressive curves that require specialized tools and technique — straight automotive rods often don\'t work.' },
                { title: 'More Delicate', desc: 'The proximity of chrome, badging, and custom paint means every tool placement matters. A slip that\'s minor on a car door is devastating on a tank.' },
                { title: 'Custom Paint Awareness', desc: 'Many bikes have custom or rare paint that makes a body shop repaint impractical or very expensive. PDR preserves that original finish.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5">
                  <h3 className="font-bold text-dark-text mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE FIX */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">What We Can Fix on Motorcycles</h2>
          <div className="space-y-4">
            {[
              { icon: 'YES', label: 'Gas tanks (steel)', desc: 'Our primary motorcycle service. Steel tanks respond excellently to PDR when paint is intact. We restore dents to factory smooth.' },
              { icon: 'YES', label: 'Steel fenders (front and rear)', desc: 'Steel fenders on classic and modern bikes — same PDR approach as automotive panels.' },
              { icon: 'YES', label: 'Chrome / painted steel panels', desc: 'Side covers, battery boxes, and other steel body panels. Care required with chrome — we assess each case.' },
              { icon: 'NO', label: 'Plastic fairings', desc: 'PDR doesn\'t apply to plastic fairings or body panels. Plastic requires heat-forming or replacement — we can refer you to a specialist.' },
              { icon: 'NO', label: 'Carbon fiber', desc: 'Carbon fiber requires specialized composite repair. Not a PDR application.' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-white rounded-xl p-6">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-dark-text mb-1">{item.label}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Common Causes of Motorcycle Dents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🅿️', title: 'Tipped Over in Parking', desc: 'The most common. A bike that tips in a parking lot lands on the tank first — classic PDR scenario.' },
              { icon: '', title: 'Minor Drops', desc: 'Low-speed drops during slow maneuvers, u-turns, or at stops. Usually localized, shallow dents — great PDR candidates.' },
              { icon: '', title: 'Storage Contact', desc: 'Garage shelving, another bike, or a tool hitting the tank during storage. Often noticed weeks after it happened.' },
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

      {/* PRICING */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-6">Motorcycle Dent Repair Pricing</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="text-4xl font-extrabold text-gold mb-2">$150–$500</div>
            <p className="text-gray-600 mb-4">
              Depending on tank size, dent complexity, location, and access difficulty. Most
              single-dent tank repairs fall in the $150–$300 range.
            </p>
            <p className="text-gray-600 font-medium">
              Free inspection for exact quote. Call{' '}
              <a href="tel:2145550100" className="text-electric-blue font-semibold">(214) 555-0100</a>{' '}
              or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-4">Brands We Service</h2>
          <p className="text-gray-600 mb-6">
            We work on all steel-tank motorcycles. Here are some of the brands we see most often:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {brands.map((brand) => (
              <div key={brand} className="bg-light-gray rounded-lg px-4 py-3 text-sm font-medium text-dark-text text-center">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Don&apos;t see your brand? If it has a steel tank, we can likely help. Call us.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-4xl">
          <h2 className="text-3xl font-extrabold text-dark-text mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-xl text-dark-text mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Restore Your Tank. Keep Your Paint."
        subtext="Free inspection for all steel-tank motorcycles. Specialist technicians. No repainting."
      />

      <section className="py-16 px-4 bg-light-gray">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-dark-text mb-3">Get Your Free Estimate</h2>
            <p className="text-gray-600">Tell us your bike and the damage — we&apos;ll respond within 1 business hour.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
