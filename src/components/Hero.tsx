import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Camera, 
  Wrench, 
  BellRing, 
  CheckCircle2, 
  Clock, 
  Zap,
  Lock,
  ChevronRight,
  Radio,
  Activity,
  FileCheck2,
  Users,
  Building,
  Check
} from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES, CITY_HUBS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  currentCurrency: CurrencyCode;
  onOpenDiscoveryWithParams: (city: string, propertyType: string, status: string) => void;
  onExploreReport: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentCurrency,
  onOpenDiscoveryWithParams,
  onExploreReport,
}) => {
  const { heroVariant, theme, currentThemeMeta, setHeroVariant, setIsDesignDrawerOpen } = useTheme();

  const [selectedCity, setSelectedCity] = useState('hyderabad');
  const [propertyType, setPropertyType] = useState('apartment');
  const [propertyStatus, setPropertyStatus] = useState('tenanted');

  const curr = CURRENCIES[currentCurrency];

  // Dynamic estimate calculation based on widget choices
  const getEstimatedPlan = () => {
    if (propertyStatus === 'vacant') {
      const inr = 3499;
      const converted = Math.round(inr / curr.rateToInr);
      return {
        planName: 'Basic Care',
        price: `${curr.symbol}${converted.toLocaleString()}`,
        tag: 'Monthly Inspections + Digital Reports',
        sla: '24-Hour SLA',
      };
    } else if (propertyStatus === 'tenanted') {
      const inr = 6999;
      const converted = Math.round(inr / curr.rateToInr);
      return {
        planName: 'Standard Pro',
        price: `${curr.symbol}${converted.toLocaleString()}`,
        tag: 'Full Vendor Mgmt + Tenant Relations',
        sla: 'Priority 48-Hour SLA',
      };
    } else {
      const inr = 14999;
      const converted = Math.round(inr / curr.rateToInr);
      return {
        planName: 'Executive Shield',
        price: `${curr.symbol}${converted.toLocaleString()}`,
        tag: '24/7 Emergency + Turnkey Overhaul',
        sla: 'Immediate 2-Hour Dispatch',
      };
    }
  };

  const estimate = getEstimatedPlan();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/60">
      
      {/* Design Controls Micro Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Active Design Archetype: <strong className="text-white">{currentThemeMeta.name}</strong></span>
        </div>

        {/* Hero layout selector pills */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 text-[11px] px-2">Hero Layout:</span>
          {[
            { id: 'split-calculator', label: 'Estimator' },
            { id: 'executive-telemetry', label: 'Live Telemetry' },
            { id: 'minimal-luxury', label: 'Minimal Luxury' },
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => setHeroVariant(v.id as any)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                heroVariant === v.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[450px] h-[450px] bg-emerald-500/5 blur-3xl rounded-full" />

      {/* ========================================================================= */}
      {/* VARIANT 1: SPLIT CALCULATOR (DEFAULT) */}
      {/* ========================================================================= */}
      {heroVariant === 'split-calculator' && (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Positioning & Value Proposition */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Property-as-a-Service (PaaS) for NRIs</span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span className="hidden sm:inline text-slate-300 font-normal">USA • Canada • UK • UAE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-[1.12]">
                The Trusted <span className="text-gradient-amber">Operating System</span> for Your Property in India.
              </h1>

              {/* Core Promise Quote */}
              <div className="relative pl-4 border-l-2 border-amber-400/60">
                <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                  “We become your trusted eyes, ears, and hands on the ground.”
                </p>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  No more burdening aging relatives or gambling with opaque local brokers. We provide institutional-grade property oversight, monthly GPS video audits, vetted repairs, and 24/7 emergency response in <strong className="text-slate-200">Hyderabad, Bengaluru, Pune, and Chennai</strong>.
                </p>
              </div>

              {/* Core Value Pillars: What You Sell */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-xs font-bold text-slate-200">100% Trust</span>
                  </div>
                  <p className="text-[11px] text-slate-400">GPS & Timestamp proof on all visits</p>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                    <Camera className="h-4 w-4" />
                    <span className="text-xs font-bold text-slate-200">Transparency</span>
                  </div>
                  <p className="text-[11px] text-slate-400">360° Room audits & digital receipts</p>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-sky-400 mb-1">
                    <Wrench className="h-4 w-4" />
                    <span className="text-xs font-bold text-slate-200">Zero Kickbacks</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Pre-negotiated vetted contractor rates</p>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                    <BellRing className="h-4 w-4" />
                    <span className="text-xs font-bold text-slate-200">Peace of Mind</span>
                  </div>
                  <p className="text-[11px] text-slate-400">24/7 Rapid Emergency Response</p>
                </div>
              </div>

              {/* Quick Action CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDiscoveryWithParams(selectedCity, propertyType, propertyStatus)}
                  className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book a 15-Min NRI Discovery Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={onExploreReport}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
                >
                  <Camera className="h-4 w-4 text-emerald-400" />
                  <span>View Live Sample Report</span>
                </button>
              </div>

              {/* Trust Proof Ticker */}
              <div className="flex items-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Active in 4 Tier-1 Indian Metros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Operations Channel</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Zero Tenant Markups</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Quick Audit Estimator Widget */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 sm:p-7 shadow-2xl shadow-slate-950/80 backdrop-blur-xl">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Instant Property Care Estimator
                    </span>
                  </div>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-amber-400 border border-slate-700">
                    Custom NRI Quote
                  </span>
                </div>

                {/* Form Controls */}
                <div className="mt-5 space-y-4">
                  
                  {/* 1. Select City */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>1. Property Location (City)</span>
                      <span className="text-[11px] text-amber-400 font-semibold">Tier 1 Hubs</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CITY_HUBS.map((city) => (
                        <button
                          key={city.id}
                          type="button"
                          onClick={() => setSelectedCity(city.id)}
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                            selectedCity === city.id
                              ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-semibold'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                          }`}
                        >
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{city.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Select Property Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      2. Asset Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'apartment', label: 'Apartment' },
                        { id: 'villa', label: 'Villa / House' },
                        { id: 'plot', label: 'Gated Plot' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setPropertyType(t.id)}
                          className={`rounded-lg border px-2.5 py-2 text-xs font-medium transition-all text-center ${
                            propertyType === t.id
                              ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-semibold'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Current Occupancy / Status */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      3. Current Status
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'vacant', label: 'Vacant / Locked' },
                        { id: 'tenanted', label: 'Tenanted' },
                        { id: 'needs-tenant', label: 'Needs Tenant' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setPropertyStatus(s.id)}
                          className={`rounded-lg border px-2 py-2 text-xs font-medium transition-all text-center leading-tight ${
                            propertyStatus === s.id
                              ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-semibold'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculation Output Box */}
                  <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 p-4">
                    <div className="flex items-center justify-between text-xs text-amber-300 mb-1">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-amber-400" />
                        Recommended Plan
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {estimate.sla}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-lg font-bold text-white font-heading">
                        {estimate.planName}
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-amber-400 font-heading">
                          {estimate.price}
                        </span>
                        <span className="text-xs text-slate-400"> /month</span>
                      </div>
                    </div>

                    <p className="mt-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-2">
                      Includes: {estimate.tag} in{' '}
                      <span className="text-amber-300 font-medium capitalize">{selectedCity}</span>.
                    </p>
                  </div>

                  {/* Widget CTA */}
                  <button
                    type="button"
                    onClick={() => onOpenDiscoveryWithParams(selectedCity, propertyType, propertyStatus)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-amber-300 active:scale-[0.99] transition-all"
                  >
                    <span>Request Free Property Audit in {selectedCity.toUpperCase()}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero commitment. 15-minute consultation scheduled around your timezone.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 2: EXECUTIVE TELEMETRY CONSOLE */}
      {/* ========================================================================= */}
      {heroVariant === 'executive-telemetry' && (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                <Radio className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                <span>Live Telemetry & Field Radar Active</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-tight">
                Real-Time Property Intelligence for Overseas Homeowners.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect directly to on-ground field executives across Hyderabad, Bengaluru, Pune, and Chennai. Monitor routine inspections, tenant health, utility billing, and preventive maintenance from anywhere in the world.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenDiscoveryWithParams('hyderabad', 'apartment', 'tenanted')}
                  className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={onExploreReport}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
                >
                  <Activity className="h-4 w-4 text-emerald-400" />
                  <span>Inspect Live Audit Sample</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">480+</div>
                  <div className="text-xs text-slate-400">Properties Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">99.4%</div>
                  <div className="text-xs text-slate-400">On-Time Rent Escrow</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400 font-mono">&lt; 2 Hrs</div>
                  <div className="text-xs text-slate-400">Emergency Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right: Live Telemetry Terminal Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-slate-400 text-[11px] ml-2">propos-field-console v2.4</span>
                  </div>
                  <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    CONNECTED (US-EAST / HYD-HUB)
                  </span>
                </div>

                {/* Simulated Telemetry Feed */}
                <div className="space-y-2.5 text-slate-300">
                  <div className="rounded bg-slate-900/80 p-2.5 border border-slate-850 flex items-start justify-between">
                    <div>
                      <div className="text-amber-300 font-bold flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>My Home Bhooja, Tower 4, Gachibowli</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Auditor: K. Venkat (Badge #HYD-104) • GPS: 17.4399° N, 78.3789° E</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">COMPLETED</span>
                  </div>

                  <div className="rounded bg-slate-900/80 p-2.5 border border-slate-850 flex items-start justify-between">
                    <div>
                      <div className="text-blue-300 font-bold flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Prestige Lakeside Habitat, Tower 8, Bengaluru</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Auditor: S. Ramanathan • Tenant KYC Verified & Handover Recorded</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">TENANTED</span>
                  </div>

                  <div className="rounded bg-slate-900/80 p-2.5 border border-slate-850 flex items-start justify-between">
                    <div>
                      <div className="text-purple-300 font-bold flex items-center gap-1.5">
                        <Wrench className="h-3.5 w-3.5" />
                        <span>EON Waterfront, Kharadi, Pune</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Plumbing Work Order Authorized by Owner in Dallas, TX ($38 USD)</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">APPROVED</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Live Telemetry Refresh: 4s</span>
                  <button
                    onClick={() => onOpenDiscoveryWithParams('hyderabad', 'apartment', 'tenanted')}
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                  >
                    <span>Connect Your Asset &rarr;</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 3: MINIMAL LUXURY TYPOGRAPHY */}
      {/* ========================================================================= */}
      {heroVariant === 'minimal-luxury' && (
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Private Real Estate Custody for Non-Resident Indians</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading leading-tight max-w-4xl mx-auto">
            Sovereign Asset Care for Your Indian Estate.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meticulous monthly stewardship, zero-broker conflicts of interest, and institutional reporting designed for doctors, technology executives, and high-net-worth NRI families globally.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDiscoveryWithParams('hyderabad', 'apartment', 'tenanted')}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400 transition-all"
            >
              Request Private Consultation
            </button>

            <button
              onClick={onExploreReport}
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all"
            >
              View Inspection Dossier
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80 text-left">
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Metros Covered</div>
              <div className="text-sm font-semibold text-white mt-1">HYD • BLR • PNQ • MAA</div>
            </div>
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Integrity</div>
              <div className="text-sm font-semibold text-white mt-1">Zero Vendor Markups</div>
            </div>
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Verification</div>
              <div className="text-sm font-semibold text-white mt-1">GPS & 360° Video Dossier</div>
            </div>
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Emergency SLA</div>
              <div className="text-sm font-semibold text-white mt-1">24/7 Rapid Response</div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
