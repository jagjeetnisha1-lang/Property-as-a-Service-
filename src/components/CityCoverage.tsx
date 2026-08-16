import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  CheckCircle2,
  Search
} from 'lucide-react';
import { CITY_HUBS } from '../data/mockData';

interface CityCoverageProps {
  onCheckLocality: (city: string, locality: string) => void;
}

export const CityCoverage: React.FC<CityCoverageProps> = ({ onCheckLocality }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('hyderabad');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCity = CITY_HUBS.find((c) => c.id === selectedCityId) || CITY_HUBS[0];

  const filteredLocalities = activeCity.popularLocalities.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="cities" className="py-20 bg-slate-900/40 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>Dedicated Tier-1 Ground Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            Active in India’s Top Tech Corridors
          </h2>
          <p className="text-base text-slate-300">
            We don't outsource to third-party brokers. We maintain our own trained, background-verified field executives and ex-facility operations leads in every city.
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {CITY_HUBS.map((city) => (
            <button
              key={city.id}
              onClick={() => {
                setSelectedCityId(city.id);
                setSearchQuery('');
              }}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                selectedCityId === city.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>{city.name}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                selectedCityId === city.id
                  ? 'bg-slate-950/20 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {city.state}
              </span>
            </button>
          ))}
        </div>

        {/* Active City Spotlight Card */}
        <div className="mt-10 rounded-2xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: City Image & Operations Specs */}
            <div className="lg:col-span-5 relative p-8 flex flex-col justify-between bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent min-h-[320px]">
              <img
                src={activeCity.bgImage}
                alt={activeCity.name}
                className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.35]"
              />

              <div className="space-y-2">
                <span className="rounded bg-amber-400/90 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 tracking-wider">
                  Tier 1 Operational Hub
                </span>
                <h3 className="text-3xl font-extrabold text-white font-heading">
                  {activeCity.name}
                </h3>
                <p className="text-xs text-amber-200/90 font-medium">
                  {activeCity.tagline}
                </p>
              </div>

              <div className="mt-8 space-y-3 bg-slate-950/90 backdrop-blur-md rounded-xl p-4 border border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-amber-400" /> Ground Force:
                  </span>
                  <span className="font-bold text-white font-mono">{activeCity.fieldTeamCount} Field Executives</span>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-slate-800/80 pt-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" /> Emergency SLA:
                  </span>
                  <span className="font-bold text-emerald-400">{activeCity.averageResponseTime}</span>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-slate-800/80 pt-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-400" /> City Ops Lead:
                  </span>
                  <span className="font-medium text-slate-200 text-right">{activeCity.leadManager}</span>
                </div>
              </div>

            </div>

            {/* Right Col: Localities Directory & Instant Locality Checker */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      Covered Localities & Gated Communities
                    </h4>
                    <p className="text-xs text-slate-400">
                      Select your locality to verify immediate field team assignment.
                    </p>
                  </div>

                  {/* Search filter */}
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder={`Filter in ${activeCity.name}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-lg bg-slate-900 border border-slate-800 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Localities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                  {filteredLocalities.map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => onCheckLocality(activeCity.name, loc)}
                      className="group flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-xs text-slate-300 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all text-left"
                    >
                      <span className="truncate">{loc}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 shrink-0 ml-1" />
                    </button>
                  ))}
                  {filteredLocalities.length === 0 && (
                    <div className="col-span-full py-6 text-center text-xs text-slate-400">
                      Don't see your specific gated community? We cover all major enclaves in {activeCity.name}.
                    </div>
                  )}
                </div>
              </div>

              {/* Instant Onboarding SLA Callout */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">48-Hour Onboarding Baseline Audit</p>
                    <p className="text-[11px] text-slate-400">
                      Our field executive visits within 48 hours of agreement signing.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onCheckLocality(activeCity.name, 'All Localities')}
                  className="shrink-0 flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 px-4 py-2 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <span>Book in {activeCity.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
