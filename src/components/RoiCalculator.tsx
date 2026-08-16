import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/mockData';

interface RoiCalculatorProps {
  currentCurrency: CurrencyCode;
  onBookAssessment: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ currentCurrency, onBookAssessment }) => {
  const [monthlyRentInr, setMonthlyRentInr] = useState<number>(65000);
  const [propertyValueCr, setPropertyValueCr] = useState<number>(2.5); // 2.5 Cr

  const curr = CURRENCIES[currentCurrency];

  // Calculations:
  // Average broker charge per vacancy = 1 month rent = monthlyRentInr
  // Average vacancy without proactive management = 2.5 months/yr
  // Proactive management vacancy = 0.5 months/yr -> Savings = 2 months of rent = 2 * monthlyRentInr
  const vacancySavedInr = monthlyRentInr * 1.5;
  // Preventive maintenance savings (avoiding major pipe burst or seepage repair) ~ ₹45,000/yr
  const preventiveSavingsInr = 45000;
  // Total economic benefit
  const totalAnnualSavingsInr = vacancySavedInr + preventiveSavingsInr;
  // PropOS Annual Cost (Standard Pro plan ₹5,899 * 12)
  const propOsAnnualCostInr = 5899 * 12;
  // Net positive ROI
  const netRoiInr = Math.max(0, totalAnnualSavingsInr - propOsAnnualCostInr);

  const formatCurr = (inrVal: number) => {
    const converted = Math.round(inrVal / curr.rateToInr);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Rental Yield & Asset Protection Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            How Much Does Property Neglect Cost You?
          </h2>
          <p className="text-base text-slate-300">
            A single vacant month or unnoticed monsoon leak costs far more than an entire year of professional management. Calculate your protected yield below.
          </p>
        </div>

        {/* Interactive Sliders & Output Card */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-7">
            
            {/* Slider 1: Monthly Rent */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white">
                  Expected Monthly Rent
                </label>
                <span className="text-base font-bold text-amber-400 font-mono">
                  {formatCurr(monthlyRentInr)} / mo <span className="text-xs text-slate-400 font-normal">(₹{monthlyRentInr.toLocaleString()})</span>
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="250000"
                step="5000"
                value={monthlyRentInr}
                onChange={(e) => setMonthlyRentInr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹25,000/mo (1BHK)</span>
                <span>₹1,00,000/mo (3BHK)</span>
                <span>₹2,50,000/mo (Luxury Villa)</span>
              </div>
            </div>

            {/* Slider 2: Property Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white">
                  Estimated Asset Market Value
                </label>
                <span className="text-base font-bold text-amber-400 font-mono">
                  ₹{propertyValueCr} Crores <span className="text-xs text-slate-400 font-normal">({formatCurr(propertyValueCr * 10000000)})</span>
                </span>
              </div>
              <input
                type="range"
                min="0.8"
                max="10.0"
                step="0.1"
                value={propertyValueCr}
                onChange={(e) => setPropertyValueCr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹80 Lakhs</span>
                <span>₹5 Crores</span>
                <span>₹10 Crores</span>
              </div>
            </div>

            {/* Micro Breakdown Checklist */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Vacancy turnaround reduction:
                </span>
                <span className="font-semibold text-slate-200">~1.5 Months Saved</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Water seepage & damage prevention:
                </span>
                <span className="font-semibold text-slate-200">~₹45,000 Avg.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Broker re-listing commission savings:
                </span>
                <span className="font-semibold text-slate-200">100% Retained</span>
              </div>
            </div>

          </div>

          {/* ROI Yield Output Card */}
          <div className="lg:col-span-6 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                Annual Yield Protection Analysis
              </span>
              <h3 className="text-2xl font-bold text-white font-heading">
                Estimated Net Value Delivered
              </h3>
            </div>

            {/* Big Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-xs text-slate-400">Protected Annual Yield</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading mt-1">
                  {formatCurr(totalAnnualSavingsInr)}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">In avoided vacancy & repairs</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-xs text-slate-400">PropOS Annual Fee</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                  {formatCurr(propOsAnnualCostInr)}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Standard Pro plan (all-inclusive)</p>
              </div>
            </div>

            {/* Net ROI banner */}
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald-300">Net Economic Gain for Owner</p>
                <p className="text-xl font-bold text-white font-heading">
                  +{formatCurr(netRoiInr)} / year
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/20 px-3 py-1 rounded-full border border-emerald-400/30">
                Positive ROI
              </span>
            </div>

            <button
              onClick={onBookAssessment}
              className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98]"
            >
              <span>Schedule Free Asset Evaluation</span>
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
