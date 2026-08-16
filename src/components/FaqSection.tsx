import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you ensure the security of my physical property keys?',
      a: 'Keys are stored in tamper-evident physical barcode vaults inside our regional hub offices. Only authorized field executives can check out a key with dual-authentication for scheduled, owner-approved visits. Every access event is logged digitally with timestamped check-in and check-out alerts sent directly to your phone.',
    },
    {
      q: 'How do you handle vendor repairs and ensure there are no inflated kickbacks?',
      a: 'We operate under a strict Zero-Commission policy. We have pre-negotiated standardized rate cards with vetted local electricians, plumbers, and carpenters. Before any repair is started, you receive an itemized quote with photo evidence. No contractor is ever authorized or paid without your explicit sign-off in the app/WhatsApp.',
    },
    {
      q: 'Can you help with rental income repatriation to my US / UK / Canadian bank account?',
      a: 'Yes! We collaborate with top NRI Chartered Accountants to assist with Section 195 TDS calculations and mandatory Form 15CA/15CB filings to ensure your Indian rental proceeds move seamlessly and compliantly into your NRE or overseas bank accounts.',
    },
    {
      q: 'Do I need to issue a Power of Attorney (PoA) to use PropOS?',
      a: 'No! For standard Property-as-a-Service care (inspections, vendor management, utility tracking), a simple digital service agreement is sufficient. If you require representation for society AGMs or biometric lease registration, we provide limited, revocable authorization templates.',
    },
    {
      q: 'What happens in a midnight emergency (e.g. water leak or cyclone damage)?',
      a: 'Executive Shield subscribers have access to our 24/7 Rapid Emergency Response Team. Our zone field lead is dispatched within 2 hours to shut off main valves/breakers, secure the perimeter, coordinate with society security, and initiate emergency restoration with real-time video updates.',
    },
    {
      q: 'What if my property is currently vacant vs occupied by tenants?',
      a: 'Both are fully supported! For vacant properties, our Basic Care and Standard Pro plans focus on preventing decay, weather damage, and unauthorized encroachment. For tenanted properties, we act as the professional interface for rent reminders, repair tickets, and lease renewals.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900/40 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            Everything NRIs Ask Us
          </h2>
          <p className="text-sm text-slate-300">
            Clear answers on operations, legal security, and overseas remittance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
