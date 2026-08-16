import React, { useState } from 'react';
import { 
  X, 
  Palette, 
  Layout, 
  Check, 
  Sparkles, 
  Type, 
  Layers, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  Moon,
  Laptop
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { DesignTheme, HeroVariant } from '../types';

export const DesignShowcaseModal: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    heroVariant, 
    setHeroVariant, 
    allThemes, 
    isDesignDrawerOpen, 
    setIsDesignDrawerOpen 
  } = useTheme();

  const [activeTab, setActiveTab] = useState<'themes' | 'layouts' | 'typography'>('themes');

  if (!isDesignDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsDesignDrawerOpen(false)}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
            <Palette className="h-3.5 w-3.5" />
            <span>PropOS Design System & Visual Directions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Explore Brand Aesthetics & Layouts
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Preview different visual identities engineered for specific NRI demographics across the US, UK, and Middle East.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-6 flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('themes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'themes'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            <span>1. Visual Themes & Palettes (4 Styles)</span>
          </button>

          <button
            onClick={() => setActiveTab('layouts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'layouts'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Layout className="h-3.5 w-3.5" />
            <span>2. Hero Layout Variations (3 Modes)</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'typography'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Type className="h-3.5 w-3.5" />
            <span>3. Typography Pairings</span>
          </button>
        </div>

        {/* TAB 1: THEMES */}
        {activeTab === 'themes' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {allThemes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`cursor-pointer rounded-xl border p-5 transition-all relative overflow-hidden ${
                    isSelected
                      ? 'border-amber-400 bg-slate-800/90 shadow-xl ring-2 ring-amber-400/30'
                      : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: t.accentHex }}
                        />
                        <h4 className="text-base font-bold text-white font-heading">
                          {t.name}
                        </h4>
                      </div>
                      <p className="text-xs text-amber-300 font-medium">
                        {t.tagline}
                      </p>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : 'bg-slate-900 text-slate-400 border-slate-750'
                      }`}
                    >
                      {isSelected ? <Check className="h-3 w-3 stroke-[3]" /> : null}
                      <span>{isSelected ? 'Active Design' : 'Preview'}</span>
                    </span>
                  </div>

                  {/* Micro Visual Card Mockup */}
                  <div className="mt-4 rounded-lg p-3 border border-slate-800/80 text-[11px] space-y-2" style={{ backgroundColor: t.bgHex }}>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-mono text-[10px]" style={{ color: t.accentHex }}>● LIVE TELEMETRY</span>
                      <span className="text-[10px] text-slate-500">{t.mode.toUpperCase()} MODE</span>
                    </div>
                    <div className="text-xs font-bold" style={{ color: t.mode === 'dark' ? '#f8fafc' : '#0f172a' }}>
                      PropOS Property Audit • Hyderabad Hub
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-2 flex-1 rounded bg-slate-500/20 overflow-hidden">
                        <div className="h-full w-4/5 rounded" style={{ backgroundColor: t.accentHex }} />
                      </div>
                      <span className="text-[10px] font-bold" style={{ color: t.accentHex }}>94% Score</span>
                    </div>
                  </div>

                  {/* Persona details */}
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <p><strong className="text-slate-300">Audience:</strong> {t.targetAudience}</p>
                    <p><strong className="text-slate-300">Palette:</strong> {t.paletteName}</p>
                    <p><strong className="text-slate-300">Typography:</strong> {t.fontPairing}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: HERO LAYOUT VARIATIONS */}
        {activeTab === 'layouts' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Layout 1: Split Calculator */}
            <div
              onClick={() => setHeroVariant('split-calculator')}
              className={`cursor-pointer rounded-xl border p-4 transition-all relative ${
                heroVariant === 'split-calculator'
                  ? 'border-amber-400 bg-slate-800/90 shadow-xl ring-2 ring-amber-400/30'
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300">Mode A</span>
                {heroVariant === 'split-calculator' && (
                  <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">Active</span>
                )}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Instant Estimator Hero</h4>
              <p className="text-xs text-slate-400 mb-3">
                Two-column hero with an interactive city & property rate calculator on the right.
              </p>
              <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                <div className="flex gap-2">
                  <div className="w-1/2 bg-slate-800 h-10 rounded flex items-center justify-center text-slate-400 font-bold">Headline</div>
                  <div className="w-1/2 bg-amber-400/20 border border-amber-400/40 h-10 rounded flex items-center justify-center text-amber-300 font-bold">Estimator</div>
                </div>
              </div>
            </div>

            {/* Layout 2: Executive Telemetry Console */}
            <div
              onClick={() => setHeroVariant('executive-telemetry')}
              className={`cursor-pointer rounded-xl border p-4 transition-all relative ${
                heroVariant === 'executive-telemetry'
                  ? 'border-amber-400 bg-slate-800/90 shadow-xl ring-2 ring-amber-400/30'
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300">Mode B</span>
                {heroVariant === 'executive-telemetry' && (
                  <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">Active</span>
                )}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Executive Telemetry Console</h4>
              <p className="text-xs text-slate-400 mb-3">
                Live field auditor GPS radar, active property status feed, and SLA response metrics.
              </p>
              <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                <div className="flex gap-2">
                  <div className="w-1/2 bg-slate-800 h-10 rounded flex items-center justify-center text-slate-400 font-bold">Headline</div>
                  <div className="w-1/2 bg-emerald-500/20 border border-emerald-500/40 h-10 rounded flex items-center justify-center text-emerald-300 font-bold">Radar Feed</div>
                </div>
              </div>
            </div>

            {/* Layout 3: Minimal Luxury Typography */}
            <div
              onClick={() => setHeroVariant('minimal-luxury')}
              className={`cursor-pointer rounded-xl border p-4 transition-all relative ${
                heroVariant === 'minimal-luxury'
                  ? 'border-amber-400 bg-slate-800/90 shadow-xl ring-2 ring-amber-400/30'
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300">Mode C</span>
                {heroVariant === 'minimal-luxury' && (
                  <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">Active</span>
                )}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Minimal Luxury Impact</h4>
              <p className="text-xs text-slate-400 mb-3">
                Centered, spacious editorial display for high-value portfolios, luxury estates, and villas.
              </p>
              <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                <div className="w-full bg-slate-800 h-10 rounded flex items-center justify-center text-slate-300 font-bold">Centered Statement Hero</div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: TYPOGRAPHY PAIRINGS */}
        {activeTab === 'typography' && (
          <div className="mt-6 space-y-4 text-xs">
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-bold font-mono">1. Space Grotesk + Plus Jakarta Sans</div>
              <p className="text-sm text-white font-heading font-bold">
                "The Institutional Operating System for Overseas Indian Homeowners."
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Technical, confident, and modern. Conveys engineering reliability, software-grade precision, and high operational discipline.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold font-mono">2. Cormorant Garamond + Plus Jakarta Sans</div>
              <p className="text-xl text-white italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Discreet, sovereign asset protection for your family estate in India."
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Classic wealth-management styling. Reminiscent of London Mayfair family offices and private banking trusts.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2">
              <div className="text-blue-400 font-bold font-mono">3. Plus Jakarta Sans + Inter (Global SaaS)</div>
              <p className="text-base text-white font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                "SaaS for physical real estate: monthly GPS audits, automated tenant rent & taxes."
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                High clarity, optimized for dense information architecture, pricing tables, and SLA transparency.
              </p>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Selected: <strong className="text-white">{allThemes.find((t) => t.id === theme)?.name}</strong> • Layout: <strong className="text-amber-300">{heroVariant}</strong>
          </p>
          <button
            onClick={() => setIsDesignDrawerOpen(false)}
            className="rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-2.5 text-xs font-bold text-slate-950 transition-colors"
          >
            Apply & View Website
          </button>
        </div>

      </div>
    </div>
  );
};
