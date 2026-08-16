import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  Users, 
  CreditCard, 
  Scale, 
  Home, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react';
import { CurrencyCode, PricingPlan } from '../types';
import { CURRENCIES, PRICING_PLANS, ADDON_SERVICES } from '../data/mockData';

interface PricingSectionProps {
  currentCurrency: CurrencyCode;
  onSelectPlan: (plan: PricingPlan) => void;
  onSelectAddon: (addonName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currentCurrency,
  onSelectPlan,
  onSelectAddon,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const curr = CURRENCIES[currentCurrency];

  const formatPrice = (inrAmount: number) => {
    const converted = Math.round(inrAmount / curr.rateToInr);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const getAddonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-5 w-5 text-amber-400" />;
      case 'CreditCard':
        return <CreditCard className="h-5 w-5 text-emerald-400" />;
      case 'Scale':
        return <Scale className="h-5 w-5 text-sky-400" />;
      case 'Home':
        return <Home className="h-5 w-5 text-purple-400" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-950 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Transparent Subscription Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
            Predictable Care. <br />
            <span className="text-gradient-amber">No Hidden Broker Commissions.</span>
          </h2>
          <p className="text-base text-slate-300">
            Pay a transparent monthly fee in your local currency. Upgrade, pause, or cancel anytime with a 30-day notice.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              role="switch"
              aria-checked={billingCycle === 'annual'}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-amber-400 shadow-lg ring-0 transition duration-200 ease-in-out ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Commitment</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                Save ~15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceInrAnnual : plan.priceInrMonthly;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-7 sm:p-8 transition-all ${
                  plan.popular
                    ? 'border-2 border-amber-400/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2'
                    : 'border border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                    {plan.badge || 'Most Popular'}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                    <p className="text-xs text-amber-300/90 font-medium">{plan.subtitle}</p>
                  </div>

                  {/* Price Tag */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-heading">
                      {formatPrice(price)}
                    </span>
                    <span className="text-xs text-slate-400 font-medium"> / month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-[11px] text-emerald-400 mt-1">
                      Billed annually (₹{(plan.priceInrAnnual * 12).toLocaleString()} / yr)
                    </p>
                  )}

                  {/* Ideal For */}
                  <p className="mt-4 text-xs text-slate-300 bg-slate-950/60 rounded-lg p-3 border border-slate-800/80 leading-relaxed">
                    <strong className="text-slate-200">Ideal For:</strong> {plan.idealFor}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      What's Included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-60">
                        {plan.notIncluded.map((notInc, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-500 mt-0.5">
                              <X className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug line-through">{notInc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-300'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-2 text-[10px] text-center text-slate-400">
                    Includes dedicated field executive & secure key vaulting.
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Add-On Services Section */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Modular Upgrades
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mt-1">
                Specialized Add-On Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Activate these on-demand whenever you need tenant changes, legal filings, or major renovations.
              </p>
            </div>
            <span className="text-xs text-slate-400">Available to all active subscription tiers</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADDON_SERVICES.map((addon) => (
              <div
                key={addon.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                      {getAddonIcon(addon.iconName)}
                    </div>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                      {addon.timeline}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{addon.name}</h4>
                  <p className="text-xs font-bold text-amber-400 mb-2">{addon.priceTag}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{addon.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectAddon(addon.name)}
                  className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center justify-between group"
                >
                  <span>Inquire with Concierge</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Property Portfolio Banner */}
        <div className="mt-14 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-heading">
              Own 3+ properties or an entire residential floor?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We offer bespoke Family Office & Multi-City Portfolio SLAs with custom reporting cadence and unified monthly invoicing.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectAddon('Multi-Property Portfolio SLA')}
            className="shrink-0 flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Request Portfolio SLA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
