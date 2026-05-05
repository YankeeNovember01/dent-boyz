import Link from 'next/link';

interface CTABlockProps {
  headline: string;
  subtext?: string;
}

export default function CTABlock({ headline, subtext }: CTABlockProps) {
  return (
    <section className="bg-gold py-16 px-4">
      <div className="container-xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{headline}</h2>
        {subtext && (
          <p className="text-navy/80 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/free-estimate" className="bg-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-navy-dark transition-colors text-lg">
            Get Free Inspection
          </Link>
          <a href="tel:2145550100" className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg hover:bg-navy hover:text-white transition-colors text-lg">
            Call (214) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
