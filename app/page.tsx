import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dent Boyz | North Dallas PDR & Auto Hail Damage Repair",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          North Dallas&apos; #1 PDR &amp; Hail Repair Experts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Paintless dent repair done right — fast turnaround, insurance-approved, and backed by
          years of experience serving the Dallas–Fort Worth area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition"
          >
            Get a Free Quote
          </a>
          <a
            href="/services"
            className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-dark transition"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Paintless Dent Repair",
              desc: "Remove dents without disturbing your factory paint. Fast, affordable, and undetectable.",
              icon: "🔧",
            },
            {
              title: "Hail Damage Restoration",
              desc: "Storm rolled through? We work with your insurance to restore your vehicle to pre-storm condition.",
              icon: "⛈️",
            },
            {
              title: "Insurance Claims",
              desc: "We handle the paperwork. Direct billing to your insurance — zero hassle for you.",
              icon: "📋",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Your Car Looking New Again?</h2>
        <p className="text-lg mb-8 text-red-100">
          Free estimates. Fast service. Trusted by thousands across North Dallas.
        </p>
        <a
          href="/contact"
          className="bg-white text-brand-red px-8 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
