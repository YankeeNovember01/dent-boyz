import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Dent Boyz privacy policy — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://dent-boyz.com/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-extrabold text-[#0a1628] mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: May 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">1. Information We Collect</h2>
              <p>
                Dent Boyz ("we," "us," or "our") collects information you voluntarily provide when you
                submit a free estimate request or contact us through our website at{' '}
                <a href="https://dent-boyz.com" className="text-[#c9a227] underline">
                  dent-boyz.com
                </a>
                . The information we collect may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Contact information:</strong> First name, last name, phone number, and email address</li>
                <li><strong>Vehicle information:</strong> Year, make, model, and description of damage</li>
                <li><strong>Service area details:</strong> ZIP code or city to confirm we serve your location</li>
                <li><strong>Communications:</strong> Any messages or notes you include in your inquiry</li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, device type, pages visited, and
                  referring URLs collected automatically via cookies and analytics tools
                </li>
              </ul>
              <p className="mt-3">
                We do not collect Social Security numbers, payment card numbers, or other sensitive financial
                information through our website forms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>To respond to your estimate request and provide you with a quote for PDR or hail damage repair services</li>
                <li>To schedule appointments and coordinate service at your preferred location</li>
                <li>To communicate with you about the status of your vehicle and repair work</li>
                <li>To assist you with insurance claim documentation and coordination</li>
                <li>To send service reminders or follow-up communications related to your inquiry</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">3. SMS and Phone Communications (TCPA)</h2>
              <p>
                By submitting a contact or estimate request form on our website, you expressly consent to
                receive communications from Dent Boyz, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Phone calls (including prerecorded or artificial voice messages) to the number you provide</li>
                <li>
                  Text messages (SMS/MMS) to the mobile number you provide, including appointment reminders,
                  estimate follow-ups, and service updates
                </li>
              </ul>
              <p className="mt-3">
                This consent is not a condition of purchasing any goods or services. Standard message and data
                rates may apply. Message frequency will vary based on your inquiry and service status.
              </p>
              <p className="mt-3">
                <strong>Opt-Out:</strong> You may opt out of SMS communications at any time by replying{' '}
                <strong>STOP</strong> to any text message you receive from us. You may also opt out of phone
                calls by informing any Dent Boyz representative that you no longer wish to be contacted by
                phone. After opting out, you will receive a single confirmation message and no further
                marketing communications will be sent. Transactional messages related to a confirmed
                appointment or active repair may still be sent.
              </p>
              <p className="mt-3">
                <strong>Help:</strong> Reply <strong>HELP</strong> to any SMS for assistance, or contact us
                directly at the information listed below.
              </p>
              <p className="mt-3">
                We comply with the Telephone Consumer Protection Act (TCPA) and all applicable federal and
                state telemarketing laws. We will never sell your phone number to a third-party telemarketer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">4. Information Sharing</h2>
              <p>
                <strong>We do not sell, rent, or trade your personal information to third parties.</strong>{' '}
                We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Service providers:</strong> We may share information with trusted vendors who help
                  us operate our website and business (e.g., CRM platforms, scheduling software, email
                  delivery services) under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Insurance companies:</strong> With your authorization, we may share vehicle and
                  damage information with your insurance carrier to facilitate a claim.
                </li>
                <li>
                  <strong>Legal compliance:</strong> We may disclose information if required by law, court
                  order, or to protect the rights, safety, or property of Dent Boyz or others.
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of
                  assets, your information may be transferred as part of that transaction, subject to the
                  same privacy protections.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">5. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical security measures to protect
                your personal information from unauthorized access, disclosure, alteration, or destruction.
                These measures include HTTPS/TLS encryption for data transmitted through our website and
                access controls for systems that store customer data.
              </p>
              <p className="mt-3">
                However, no method of transmission over the internet or electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your information, we cannot
                guarantee absolute security. If you believe your information has been compromised, please
                contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">6. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Access:</strong> You may request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You may request that we correct inaccurate or incomplete
                  information.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request that we delete your personal information, subject
                  to legal retention obligations.
                </li>
                <li>
                  <strong>Opt-out of communications:</strong> You may opt out of marketing communications at
                  any time as described in Section 3 above.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the information in Section 8 below. We will
                respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">7. Cookies and Analytics</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience
                and analyze site traffic. Cookies are small text files stored on your device that help us
                understand how visitors use our site.
              </p>
              <p className="mt-3">We may use:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Essential cookies:</strong> Required for the website to function properly (e.g.,
                  form submissions).
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Tools such as Google Analytics to understand traffic
                  patterns, popular pages, and user behavior. This data is aggregated and anonymized.
                </li>
                <li>
                  <strong>Advertising cookies:</strong> We may use remarketing pixels (e.g., Google Ads,
                  Meta) to show relevant ads to users who have visited our site.
                </li>
              </ul>
              <p className="mt-3">
                You can control cookie settings through your browser preferences. Disabling cookies may affect
                certain features of our website. For more information about Google Analytics, visit{' '}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-[#c9a227] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0a1628] mb-3">8. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we
                handle your personal data, please contact us:
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
              <p className="mt-4">
                We reserve the right to update this Privacy Policy from time to time. When we make material
                changes, we will update the "Last updated" date at the top of this page. Your continued use
                of our website following any changes constitutes your acceptance of the revised policy.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
