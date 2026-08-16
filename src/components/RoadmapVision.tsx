import React from 'react';
import { Sparkles, Layers, Cpu, ArrowUpRight, CheckCircle2, Milestone } from 'lucide-react';
import { ROADMAP_PHASES } from '../data/mockData';

export const RoadmapVision: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <Milestone className="h-3.5 w-3.5" />
            <span>Strategic Roadmap & Long-Term Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            From Lean Ground Operations to Full PaaS
          </h2>
          <p className="text-base text-slate-300">
            We started with high-touch ground rigor and verified human operations. Here is our deliberate technology progression.
          </p>
        </div>

        {/* Evolution Diagram: 3 stages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Step 1</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              1. Ground Operations Excellence
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vetted field executives, standardized 40-point manual audits, WhatsApp concierge, and 100% human accountability.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Step 2</span>
              <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">In Flight</span>
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              2. Tech-Enabled Operations
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated telemetry, instant work order approvals, dynamic escrow rent collection, and AI-assisted damage reports.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Step 3</span>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Future Vision</span>
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              3. Full-Stack Property-as-a-Service
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Predictive IoT leak detection, automated tax deduction filing, secondary resale liquidity, and fractional portfolio trading.
            </p>
          </div>
        </div>

        {/* 12-Month Detailed Timeline */}
        <div className="mt-14 space-y-6">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="lg:max-w-md space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 font-mono">{phase.phase}</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading">{phase.focus}</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                {phase.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
