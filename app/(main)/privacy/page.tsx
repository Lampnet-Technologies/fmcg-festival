export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white pb-20">
      {/* ── Document Header ──────────────────────────────────── */}
      <section className="bg-[#f8f8f5] pt-20 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-[#0A2E1F] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">
            Effective Date: May 2026
          </p>
        </div>
      </section>

      {/* ── Document Body ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <div className="space-y-12 text-gray-600 leading-relaxed">

          <div>
            <p>
              The FMCG Festival (&#34;we,&#34; &#34;our,&#34; or &#34;us&#34;) respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, register for our event, or interact with our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect data from you in the following ways:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Directly Provided Data:</strong> Name, email address, job title, company name, and payment information when you register for tickets or apply to exhibit.</li>
              <li><strong>Automated Data:</strong> IP addresses, browser types, and usage data collected via cookies when you browse our website.</li>
              <li><strong>Event Data:</strong> Information gathered during the event via RFID badge scanning (if you consent to allow exhibitors to scan your badge).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">How We Use Your Data</h2>
            <p>
              Your personal data is strictly used to facilitate your participation in the FMCG Festival. This includes processing payments, sending critical event updates, matching you with relevant B2B networking opportunities, and improving our digital platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">Data Sharing & Third Parties</h2>
            <p>
              We do not sell your personal data. We may share necessary information with trusted third-party service providers (such as ticketing platforms and payment processors) solely for the purpose of delivering our services. If an exhibitor scans your badge during the event, you consent to sharing your contact information directly with that specific exhibitor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data. You may also opt out of promotional communications at any time by clicking the &quot;unsubscribe&quot; link in our emails.
            </p>
          </div>

          <hr className="border-gray-200 my-10" />

          <p className="text-sm italic">
            To exercise your data rights or ask questions about this policy, please reach out to our Data Protection Officer at <a href="mailto:privacy@thefmcgfestival.com" className="text-[#0A2E1F] font-bold hover:underline">privacy@thefmcgfestival.com</a>.
          </p>

        </div>
      </section>
    </main>
  );
}
