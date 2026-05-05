import Link from 'next/link';

interface CTABlockProps {
  headline: string;
  subtext?: string;
}

export default function CTABlock({ headline, subtext }: CTABlockProps) {
  return (
    <section className="bg-gold py-20 px-4">
      <div className="container-xl text-center">
        <div className="w-16 h-1 bg-navy mx-auto mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">{headline}</h2>
        {subtext && (
          <p className="text-navy/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/free-estimate" className="bg-navy text-white font-bold px-10 py-5 hover:bg-navy-dark transition-colors text-lg">
            Get Free Inspection
          </Link>
          <a href="tel:2145550100" className="border-2 border-navy text-navy font-semibold px-10 py-5 hover:bg-navy hover:text-white transition-colors text-lg">
            Call (214) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
