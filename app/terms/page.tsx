import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service',
  description: 'Dent Boyz terms of service — the terms governing use of our website and PDR repair services.',
  alternates: { canonical: 'https://dent-boyz.com/terms' },
}

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-extrabold text-[#0a1628] mb-2">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: May 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <section>
              <p>
                Please read these Terms of Service ("Terms") carefully before using the website located at{' '}
                <a href="https://dent-boyz.com" className="text-[#c9a227] underline">
                  dent-boyz.com
                </a>{' '}
                or engaging the paintless dent repair and hail damage restoration services provided by Dent
                Boyz ("we," "us," or "our"). By accessing our website or scheduling services, you agree to
                be bound by these Terms. If you do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">1. Service Terms and Estimates</h2>
              <p>
                Dent Boyz provides paintless dent repair (PDR), hail damage restoration, and related
                automotive body repair services in the North Dallas, Texas area. The following apply to all
                service engagements:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Estimates are not guaranteed final prices.</strong> Any estimate or quote provided
                  — whether online, by phone, or in-person before physical inspection — is an approximation
                  only. The final price may vary based on the actual extent of damage discovered upon full
                  inspection, additional damage not visible at the time of estimate, or changes requested by
                  you.
                </li>
                <li>
                  A binding price will be confirmed in writing before any repair work begins.
                </li>
                <li>
                  Estimates are valid for 30 days from the date of issuance, subject to changes in material
                  costs or parts availability.
                </li>
                <li>
                  Dent Boyz reserves the right to decline any job at its sole discretion, including damage
                  that is beyond the scope of PDR techniques or would require panel replacement.
                </li>
                <li>
                  You are responsible for ensuring your vehicle is available and accessible at the scheduled
                  service time. Missed appointments without 24-hour notice may result in a rescheduling fee.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">2. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Payment is due in full upon completion of services unless otherwise agreed in writing prior
                  to work beginning.
                </li>
                <li>
                  We accept cash, major credit and debit cards, and other payment methods as posted at our
                  place of business. Personal checks are accepted at our discretion.
                </li>
                <li>
                  For insurance-paid repairs, you are responsible for your deductible at the time of vehicle
                  pickup. We will bill your insurance carrier directly for the remaining approved amount.
                  You remain ultimately responsible for any balance not covered by your insurer.
                </li>
                <li>
                  Vehicles will not be released until payment (or confirmed insurance payment arrangements)
                  has been received in full.
                </li>
                <li>
                  Any unpaid balance may be subject to a late payment fee of 1.5% per month on the
                  outstanding amount, and we reserve the right to pursue collection remedies available under
                  Texas law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">3. Warranty on PDR Work</h2>
              <p>
                Dent Boyz stands behind the quality of our workmanship. The following warranty applies to
                all paintless dent repair services we perform:
              </p>
              <div className="bg-[#0a1628] text-white rounded-lg p-5 mt-4 mb-4">
                <p className="font-bold text-[#c9a227] mb-2">Lifetime Workmanship Warranty</p>
                <p className="text-sm leading-relaxed">
                  Dent Boyz warrants all paintless dent repair work performed against defects in
                  workmanship for the lifetime of the vehicle, as long as you remain the original owner of
                  the vehicle at the time of repair. This warranty is non-transferable.
                </p>
              </div>
              <p>This warranty covers:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Dents and dings that were repaired and return to their original damaged condition due to our workmanship</li>
                <li>Creasing or cracking of paint caused by our repair process</li>
              </ul>
              <p className="mt-3">This warranty does <strong>not</strong> cover:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>New damage caused after the repair, including subsequent accidents, hail events, or vandalism</li>
                <li>Damage repaired by another shop after our initial repair</li>
                <li>Pre-existing paint damage, rust, or prior body filler present before our repair</li>
                <li>Areas where paint was compromised before repair and not disclosed</li>
                <li>Damage that requires traditional body shop repair (e.g., panel replacement, repainting) rather than PDR</li>
              </ul>
              <p className="mt-3">
                To make a warranty claim, contact Dent Boyz directly. We reserve the right to inspect the
                vehicle and determine whether the issue falls within the scope of this warranty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">4. Insurance Claim Assistance Disclaimer</h2>
              <p>
                Dent Boyz may assist customers with the documentation and submission of hail damage or
                collision insurance claims as a courtesy service. The following apply:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Dent Boyz is not a licensed public adjuster, insurance agent, or legal representative.
                  Our assistance is limited to providing damage documentation, repair estimates, and
                  communicating with your insurer regarding the scope of repair work.
                </li>
                <li>
                  We make no guarantee that your insurance claim will be approved, that the approved amount
                  will cover the full cost of repairs, or that any specific settlement will be reached.
                </li>
                <li>
                  Approval of your claim and the coverage amount are determined solely by your insurance
                  carrier based on your policy terms. Any disputes with your insurer regarding coverage or
                  payment must be resolved directly with your carrier or through appropriate legal channels.
                </li>
                <li>
                  You authorize Dent Boyz to communicate with your insurance company on your behalf for the
                  purpose of facilitating your vehicle repair claim when you provide your insurance
                  information and request our assistance.
                </li>
                <li>
                  You are solely responsible for filing any required paperwork with your insurer by their
                  required deadlines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">5. Website Use</h2>
              <p>
                The content on dent-boyz.com is provided for informational purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Use our website for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to gain unauthorized access to any portion of our website or systems</li>
                <li>Transmit any harmful, offensive, or disruptive content through our contact forms</li>
                <li>Scrape, copy, or reproduce our content without written permission</li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue any aspect of our website at any
                time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Dent Boyz, its owners, employees, and
                agents shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages arising out of or related to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your use of or inability to use our website</li>
                <li>Any errors or omissions in website content</li>
                <li>Delays in service completion due to factors beyond our reasonable control (weather, parts availability, etc.)</li>
                <li>Any insurance claim outcome or dispute with your insurance carrier</li>
              </ul>
              <p className="mt-3">
                Our total liability to you for any claim arising out of the services we provide shall not
                exceed the amount you paid to Dent Boyz for the specific service giving rise to the claim.
              </p>
              <p className="mt-3">
                Nothing in these Terms shall limit liability for gross negligence, intentional misconduct,
                or any liability that cannot be excluded by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">7. Governing Law and Disputes</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Texas, without regard to its conflict of law principles. Any dispute arising under or
                relating to these Terms or our services shall be subject to the exclusive jurisdiction of
                the state and federal courts located in Dallas County, Texas.
              </p>
              <p className="mt-3">
                Before initiating any formal legal action, you agree to first contact Dent Boyz directly
                and provide a written description of your complaint. We will make a good-faith effort to
                resolve disputes informally within 30 days of receiving written notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">8. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be indicated
                by updating the "Last updated" date at the top of this page. Your continued use of our
                website or services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">9. Contact Us</h2>
              <p>
                For questions about these Terms, our services, or your repair, please reach out to us:
              </p>
              <div className="mt-3 pl-4 border-l-4 border-[#c9a227] space-y-1">
                <p><strong>Dent Boyz</strong></p>
                <p>North Dallas, Texas</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@dent-boyz.com" className="text-[#c9a227] underline">
                    info@dent-boyz.com
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://dent-boyz.com" className="text-[#c9a227] underline">
                    dent-boyz.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
