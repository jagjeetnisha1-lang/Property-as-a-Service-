import React from 'react';
import { ShieldCheck, MessageSquare, Phone, Mail, MapPin, Globe, Sparkles, Terminal } from 'lucide-react';
import { CITY_HUBS } from '../data/mockData';

interface FooterProps {
  onOpenDiscovery: () => void;
  onOpenPromptToolkit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiscovery, onOpenPromptToolkit }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 relative">
      
      {/* Pre-footer Call to Action Bar */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to eliminate your Indian property stress?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a 15-minute discovery call around your local timezone.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20PropOS%20Team%2C%20I%20am%20an%20NRI%20looking%20for%20property%20management%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-300 hover:bg-emerald-500/25 transition-all"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Instant WhatsApp</span>
            </a>

            <button
              onClick={onOpenDiscovery}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
                <ShieldCheck className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Prop<span className="text-amber-400">OS</span> India
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Property-as-a-Service (PaaS) built for Non-Resident Indians across USA, Canada, UK, and UAE. Providing institutional trust, 360° GPS-verified reports, pre-negotiated repairs, and rental income continuity.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">NRI Helpline:</span> +1 (408) 555-0199 / +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">Email:</span> concierge@propos-india.com
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Basic Property Care</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Standard Pro Management</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Executive 24/7 Shield</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Verified Tenant Placement</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Tax, TDS & 15CA Filing</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Turnkey Interior Staging</a></li>
            </ul>
          </div>

          {/* Col 3: Operational Metros */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Active Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cities" className="hover:text-amber-400 transition-colors">Hyderabad (Gachibowli / Hitec)</a></li>
              <li><a href="#cities" className="hover:text-amber-400 transition-colors">Bengaluru (Whitefield / ORR)</a></li>
              <li><a href="#cities" className="hover:text-amber-400 transition-colors">Pune (Hinjewadi / Kharadi)</a></li>
              <li><a href="#cities" className="hover:text-amber-400 transition-colors">Chennai (OMR / Anna Nagar)</a></li>
              <li className="pt-2 text-[11px] text-slate-300">Phase 2: NCR & Mumbai MMR</li>
            </ul>
          </div>

          {/* Col 4: Resources & Founder Toolkit */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sample-report" className="hover:text-amber-400 transition-colors">Interactive Sample Report</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Rental ROI Calculator</a></li>
              <li><a href="#workflow" className="hover:text-amber-400 transition-colors">Field Executive SOP</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">NRI FAQ</a></li>
              <li>
                <button
                  onClick={onOpenPromptToolkit}
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <Terminal className="h-3 w-3" />
                  <span>Vercel Deploy & Prompts</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} PropOS Technologies India Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>RERA Compliant Operations</span>
            <span>Zero Broker Kickback Policy</span>
            <span>GDPR & ISO-27001 Data Vault</span>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Quick Action Button for Mobile / Desktop */}
      <a
        href="https://wa.me/919876543210?text=Hi%20PropOS%20Team%2C%20I%20am%20an%20NRI%20looking%20to%20manage%20my%20property%20in%20India."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all"
        title="Chat with NRI Operations Concierge"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp Concierge</span>
        <span className="sm:hidden">Chat</span>
      </a>

    </footer>
  );
};
