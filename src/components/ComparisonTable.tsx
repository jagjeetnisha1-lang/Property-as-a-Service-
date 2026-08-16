import React from 'react';
import { Check, X, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-slate-900/40 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Uncompromising Differentiation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            Why NRIs Choose PropOS vs Old Alternatives
          </h2>
          <p className="text-base text-slate-300">
            See how the Property-as-a-Service model stacks up against conventional brokers and well-meaning family caretakers.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-14 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden">
              <table className="min-w-full divide-y divide-slate-800 text-left">
                
                {/* Table Header */}
                <thead className="bg-slate-900/90">
                  <tr>
                    <th scope="col" className="py-5 pl-6 pr-3 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                      Operational Factor
                    </th>
                    <th scope="col" className="px-4 py-5 text-xs font-semibold text-slate-400 w-1/4">
                      <span className="block text-slate-400 font-bold">Traditional Local Broker</span>
                      <span className="text-[10px] text-slate-500">Commission-driven model</span>
                    </th>
                    <th scope="col" className="px-4 py-5 text-xs font-semibold text-slate-400 w-1/4">
                      <span className="block text-slate-400 font-bold">Relatives / Casual Caretaker</span>
                      <span className="text-[10px] text-slate-500">Favors & informal help</span>
                    </th>
                    <th scope="col" className="py-5 pl-4 pr-6 text-xs font-bold text-amber-400 bg-amber-500/10 border-l border-r border-amber-400/20 w-1/4">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-extrabold text-white">PropOS Platform</span>
                      </div>
                      <span className="text-[10px] text-amber-300 font-medium">SLA-governed PaaS</span>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-800/80 text-xs">
                  {COMPARISON_DATA.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-900/40 transition-colors">
                      
                      {/* Feature Name */}
                      <td className="py-4 pl-6 pr-3 font-semibold text-white">
                        {row.feature}
                      </td>

                      {/* Traditional Broker */}
                      <td className="px-4 py-4 text-slate-400">
                        <div className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>

                      {/* Caretakers */}
                      <td className="px-4 py-4 text-slate-400">
                        <div className="flex items-start gap-2">
                          <X className="h-4 w-4 text-amber-400/60 shrink-0 mt-0.5" />
                          <span>{row.caretakers}</span>
                        </div>
                      </td>

                      {/* PropOS */}
                      <td className="py-4 pl-4 pr-6 text-slate-200 bg-amber-500/5 border-l border-r border-amber-400/20 font-medium">
                        <div className="flex items-start gap-2 text-emerald-300">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="text-slate-100">{row.propOs}</span>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
