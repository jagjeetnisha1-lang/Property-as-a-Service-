import React, { useState } from 'react';
import { 
  PhoneCall, 
  FileSignature, 
  CreditCard, 
  KeyRound, 
  Camera, 
  BellRing, 
  Wrench, 
  RotateCcw,
  Sparkles,
  ClipboardList,
  UserCheck,
  MapPin,
  UploadCloud,
  CheckCheck,
  BadgeDollarSign,
  ArrowRight
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'customer' | 'internal'>('customer');

  const customerSteps = [
    {
      step: '01',
      title: 'NRI Discovery Call',
      desc: '15-minute sync scheduled to your USA/Canada/UK/UAE timezone to understand your property status.',
      icon: PhoneCall,
    },
    {
      step: '02',
      title: 'Digital Agreement & Key Vault',
      desc: 'E-sign institutional NDA & management SLA. Secure physical key transfer to our monitored vaults.',
      icon: FileSignature,
    },
    {
      step: '03',
      title: 'Baseline Onboarding Audit',
      desc: 'Our lead inspector conducts an exhaustive 40-point baseline health, plumbing, and electrical scan.',
      icon: KeyRound,
    },
    {
      step: '04',
      title: 'Monthly GPS-Verified Inspections',
      desc: 'Regular physical visits with 360° photo/video telemetry, meter recordings, and utility payment verification.',
      icon: Camera,
    },
    {
      step: '05',
      title: 'One-Click Issue Resolution',
      desc: 'Review itemized pre-negotiated repair quotes on WhatsApp or web portal. Tap once to approve work orders.',
      icon: Wrench,
    },
    {
      step: '06',
      title: 'Seamless Continuity & Renewal',
      desc: 'Automated rent tracking, 15CA/15CB tax assistance, tenant lease renewal, and annual valuation.',
      icon: RotateCcw,
    },
  ];

  const internalSteps = [
    {
      step: 'SOP 1',
      title: 'Customer Request Ingestion',
      desc: 'Ticket automatically logged into ClickUp & WhatsApp bot with SLA timer (2-hr emergency / 24-hr routine).',
      icon: ClipboardList,
    },
    {
      step: 'SOP 2',
      title: 'Field Executive Dispatch',
      desc: 'Dedicated zone executive assigned based on geofenced proximity in Cyberabad / Whitefield / Kharadi / OMR.',
      icon: UserCheck,
    },
    {
      step: 'SOP 3',
      title: 'On-Site Property Audit + GPS Lock',
      desc: 'Executive conducts physical room-by-room check, locking latitude/longitude and physical timestamp.',
      icon: MapPin,
    },
    {
      step: 'SOP 4',
      title: 'Telemetry & Media Upload',
      desc: 'High-res 4K photos, moisture meter readings, and utility meter snapshots uploaded directly to customer vault.',
      icon: UploadCloud,
    },
    {
      step: 'SOP 5',
      title: 'Owner Digital Approval',
      desc: 'Client receives instant summary notification. Work order requires explicit biometric or one-tap approval.',
      icon: CheckCheck,
    },
    {
      step: 'SOP 6',
      title: 'Vendor Execution & Post-Audit',
      desc: 'Vetted contractor completes fix. Executive verifies before final invoice settlement from escrow.',
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-950 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Process-Driven Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            How PropOS Operates
          </h2>
          <p className="text-base text-slate-300">
            Engineered from ground up with standard operating procedures (SOPs) so you never have to wonder what is happening with your asset.
          </p>

          {/* Toggle Tab */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveWorkflowTab('customer')}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeWorkflowTab === 'customer'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                The NRI Client Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveWorkflowTab('internal')}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeWorkflowTab === 'internal'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Behind the Scenes: Field Ops SOP
              </button>
            </div>
          </div>
        </div>

        {/* Workflow Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeWorkflowTab === 'customer' ? customerSteps : internalSteps).map((s, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/90 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>{activeWorkflowTab === 'customer' ? 'Zero Effort for Owner' : '100% SLA Governed'}</span>
                <span className="text-emerald-400 font-medium">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Guarantee Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Every step is backed by our <strong className="text-slate-200">Zero-Unauthorized-Spend Policy</strong>. No vendor is ever paid without prior owner sign-off.
          </p>
        </div>

      </div>
    </section>
  );
};
