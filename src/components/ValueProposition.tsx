import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  TrendingUp, 
  HeartHandshake, 
  AlertTriangle, 
  Check, 
  X,
  FileCheck2,
  PhoneOff,
  UserCheck
} from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>The PaaS Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            You Are Not Buying Repairs. <br />
            <span className="text-gradient-amber">You Are Buying Absolute Peace of Mind.</span>
          </h2>
          <p className="text-base text-slate-300">
            Most services treat property management as random errands. PropOS turns fragmented local care into a reliable, single-point-of-contact operating system for your Indian assets.
          </p>
        </div>

        {/* The Shift Grid: What others sell vs What PropOS sells */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: What Traditional Players Offer (The Broken Commodity Model) */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-7 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-red-400 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="text-lg font-bold font-heading uppercase tracking-wide">
                  The Fragmented Reality (What You Suffer Today)
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Managing across 10-12 hour time zones through ad-hoc contacts is stressful and expensive.
              </p>

              <div className="mt-6 space-y-3.5">
                {[
                  {
                    errand: 'Burdening aging parents or relatives',
                    flaw: 'Awkward to request favors, emotional guilt, no professional accountability.',
                  },
                  {
                    errand: 'Local Real Estate Brokers',
                    flaw: 'Active only when hunting 1-month rental commission; disappear once lease is signed.',
                  },
                  {
                    errand: 'Random Local Handymen & Caretakers',
                    flaw: 'Opaque bills, 20-40% contractor kickbacks, no background checks or warranties.',
                  },
                  {
                    errand: 'Unnoticed Water Leaks & Property Neglect',
                    flaw: 'Monsoon seepage discovered 6 months later when ceiling paint peels, costing lakhs.',
                  },
                  {
                    errand: 'Chaotic Tax, TDS & Society Compliance',
                    flaw: 'Fines, penalties, and blocked NRE/NRO remittances due to missing 15CA/15CB paperwork.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-900/80 border border-red-500/15 p-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 mt-0.5">
                      <X className="h-3 w-3 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200 line-through decoration-red-400/60">
                        {item.errand}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.flaw}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-3 text-center">
              <span className="text-xs font-semibold text-red-300">
                Outcome: Constant anxiety, lost rental yield, delayed emergency fixes
              </span>
            </div>
          </div>

          {/* Right: What PropOS Delivers (The True Operating System) */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-7 space-y-6 flex flex-col justify-between shadow-xl shadow-amber-500/5">
            <div>
              <div className="flex items-center gap-2.5 text-amber-400 mb-2">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-lg font-bold font-heading uppercase tracking-wide text-white">
                  What PropOS Actually Sells (The PaaS System)
                </h3>
              </div>
              <p className="text-xs text-slate-300">
                An institutional, SLA-governed operating system designed exclusively for NRIs.
              </p>

              <div className="mt-6 space-y-3.5">
                {[
                  {
                    pillar: 'Institutional Trust',
                    desc: 'GPS-tagged visits with timestamped photo & video telemetry on every single inspection.',
                    icon: ShieldCheck,
                    badge: 'Verified',
                  },
                  {
                    pillar: 'Radical Transparency',
                    desc: 'Digital condition reports, room-by-room moisture audits, and pre-negotiated zero-markup repairs.',
                    icon: Eye,
                    badge: 'Zero Markup',
                  },
                  {
                    pillar: 'Physical Asset Protection',
                    desc: 'Early leak detection, scheduled pest control, and smart key holding in secure tamper-evident vaults.',
                    icon: Lock,
                    badge: 'Key Vaults',
                  },
                  {
                    pillar: 'Rental Income Continuity',
                    desc: 'Automated tenant vetting, electronic rent tracking, and seamless 15CA/15CB tax compliance.',
                    icon: TrendingUp,
                    badge: 'Zero Vacancy',
                  },
                  {
                    pillar: 'One Point of Contact (Dedicated RM)',
                    desc: 'Direct WhatsApp Concierge responsive to US/UK/Canada/UAE timezones. No frantic middle-of-night calls.',
                    icon: UserCheck,
                    badge: 'NRI Timezones',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-900/90 border border-amber-500/20 p-3 hover:border-amber-400/40 transition-colors">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 mt-0.5">
                      <item.icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white">{item.pillar}</h4>
                        <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 rounded px-1.5 py-0.5 border border-amber-400/20">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-center">
              <span className="text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" />
                Outcome: Complete peace of mind, protected asset value, consistent rental yield
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
