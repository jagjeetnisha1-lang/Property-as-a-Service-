import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Layout, 
  ChevronRight, 
  Layers, 
  Sliders, 
  Check, 
  Eye,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { DesignTheme, HeroVariant } from '../types';

export const DesignSwitcherBar: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    heroVariant, 
    setHeroVariant, 
    allThemes, 
    currentThemeMeta,
    setIsDesignDrawerOpen 
  } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Floating Pill on Bottom-Left */}
      <aside 
        aria-label="Design System Controls"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
      >
        <div className="flex items-center rounded-2xl border border-slate-700/80 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl transition-all">
          
          {/* Quick Theme Switcher Pill */}
          <div className="flex items-center gap-1">
            {allThemes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={`${t.name} (${t.paletteName})`}
                  className={`group relative flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: t.accentHex }}
                  />
                  <span className="hidden sm:inline-block whitespace-nowrap">
                    {t.name.split(' ')[0]}
                  </span>
                  {isActive && <Check className="h-3 w-3 stroke-[3]" />}
                </button>
              );
            })}
          </div>

          <div className="h-4 w-px bg-slate-700 mx-1" />

          {/* Design Modal / Deep Explorer trigger */}
          <button
            onClick={() => setIsDesignDrawerOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 px-2.5 py-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 border border-amber-400/20 transition-colors"
            title="Explore Full Design System & Layouts"
          >
            <Palette className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden md:inline font-bold">Explore Designs</span>
          </button>

          {/* Hero Layout Quick Toggle */}
          <button
            onClick={() => {
              const variants: HeroVariant[] = ['split-calculator', 'executive-telemetry', 'minimal-luxury'];
              const currentIndex = variants.indexOf(heroVariant);
              const nextVariant = variants[(currentIndex + 1) % variants.length];
              setHeroVariant(nextVariant);
            }}
            className="flex items-center gap-1 rounded-xl bg-slate-800/80 hover:bg-slate-800 px-2 py-1.5 text-[11px] text-slate-300 hover:text-white transition-colors"
            title="Cycle Hero Layout (Split Calculator / Executive Telemetry / Minimal Luxury)"
          >
            <Layout className="h-3 w-3 text-slate-400" />
            <span className="hidden lg:inline text-slate-400">Layout:</span>
            <span className="font-bold text-amber-300">
              {heroVariant === 'split-calculator' ? 'Estimator' : heroVariant === 'executive-telemetry' ? 'Telemetry' : 'Minimal'}
            </span>
          </button>

        </div>
      </aside>
    </>
  );
};
