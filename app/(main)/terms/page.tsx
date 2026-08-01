import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="flex-1 bg-white pb-20">
      {/* ── Document Header ──────────────────────────────────── */}
      <section className="bg-[#f8f8f5] pt-20 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-[#0A2E1F] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">
            Last Updated: May 2026
          </p>
        </div>
      </section>

      {/* ── Document Body ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <div className="space-y-12 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the FMCG Festival website, registering for tickets, or applying to exhibit, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services or attend the event.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">2. Event Registration & Ticketing</h2>
            <p className="mb-4">
              All attendees must register via our official portal. Tickets are strictly non-transferable unless explicit written consent is provided by the FMCG Festival organizing committee.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attendees must be at least 18 years of age.</li>
              <li>Valid government-issued ID matching the registration name is required for entry.</li>
              <li>The organizers reserve the right to refuse entry or revoke badges without refund for violations of the event code of conduct.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">3. Cancellations & Refunds</h2>
            <p>
              Ticket cancellations requested more than 60 days prior to the event start date are eligible for a 50% refund. No refunds will be issued for cancellations made within 60 days of the event. Exhibitor booth cancellations are subject to the terms outlined in the specific Exhibitor Agreement signed upon booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including logos, text, graphics, and digital assets, is the property of the FMCG Festival. Unauthorized use, reproduction, or distribution is strictly prohibited. Media organizations must adhere to the usage rules outlined in our <Link href="/press" className="text-[#84A900] hover:underline font-bold">Press Kit</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">5. Limitation of Liability</h2>
            <p>
              The FMCG Festival and its partners are not liable for any personal injury, loss, or damage to property that occurs during the event. Attendees and exhibitors assume all risks associated with participation.
            </p>
          </div>

          <hr className="border-gray-200 my-10" />

          <p className="text-sm italic">
            For questions regarding these terms, please contact <a href="mailto:legal@thefmcgfestival.com" className="text-[#0A2E1F] font-bold hover:underline">legal@thefmcgfestival.com</a>.
          </p>

        </div>
      </section>
    </main>
  );
}