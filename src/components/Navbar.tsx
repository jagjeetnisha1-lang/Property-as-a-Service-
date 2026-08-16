import React from 'react';
import { ShieldCheck, PhoneCall, Globe, Sparkles, MessageSquare, Terminal, Palette } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenDiscovery: () => void;
  onOpenPromptToolkit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenDiscovery,
  onOpenPromptToolkit,
}) => {
  const { currentThemeMeta, setIsDesignDrawerOpen } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  Prop<span className="text-amber-400">OS</span>
                </span>
                <span className="rounded-md bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300 border border-amber-400/25">
                  INDIA
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide">
                Property-as-a-Service for NRIs
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#sample-report" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Sample Report
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Pricing
          </a>
          <a href="#cities" className="hover:text-amber-400 transition-colors">
            Cities
          </a>
          <a href="#workflow" className="hover:text-amber-400 transition-colors">
            How It Works
          </a>
          <a href="#comparison" className="hover:text-amber-400 transition-colors">
            Why Us
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">
            ROI Estimator
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2.5">
          
          {/* Design Themes Picker Button */}
          <button
            onClick={() => setIsDesignDrawerOpen(true)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-amber-400/40 hover:bg-slate-800 transition-all"
            title="Switch Design & Visual Themes"
          >
            <span
              className="h-2.5 w-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: currentThemeMeta.accentHex }}
            />
            <span className="hidden sm:inline">Design:</span>
            <span className="text-amber-300 font-bold hidden sm:inline">{currentThemeMeta.name.split(' ')[0]}</span>
            <Palette className="h-3.5 w-3.5 text-amber-400 sm:ml-0.5" />
          </button>

          {/* Currency Switcher */}
          <div className="relative flex items-center rounded-lg border border-slate-800 bg-slate-900/90 p-1">
            <Globe className="h-4 w-4 ml-1.5 mr-1 text-slate-400 hidden sm:inline" />
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="bg-transparent text-xs font-semibold text-slate-200 outline-none cursor-pointer pr-1 py-1"
              aria-label="Select Currency"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code} className="bg-slate-900 text-slate-200">
                  {c.flag} {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Vercel & AI Prompts Guide Button */}
          <button
            onClick={onOpenPromptToolkit}
            className="hidden xl:flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/80 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all shadow-sm"
            title="View Vercel Deployment Guide & Master AI Prompts"
          >
            <Terminal className="h-3.5 w-3.5 text-amber-400" />
            <span>Prompts</span>
          </button>

          {/* WhatsApp Direct Connect */}
          <a
            href="https://wa.me/919876543210?text=Hello%20PropOS%20Team%2C%20I%20am%20an%20NRI%20interested%20in%20managing%20my%20property%20in%20India."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-all"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA: Book Discovery Call */}
          <button
            onClick={onOpenDiscovery}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:shadow-amber-500/30 active:scale-95 transition-all"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="hidden xs:inline">Book Discovery Call</span>
            <span className="xs:hidden">Book</span>
          </button>
        </div>

      </div>
    </header>
  );
};
