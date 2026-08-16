import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Rocket, 
  Layers, 
  Share2 
} from 'lucide-react';
import { MASTER_PROMPTS } from '../data/mockData';

interface PromptToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptToolkitModal: React.FC<PromptToolkitModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'vercel' | 'prompts'>('vercel');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const vercelJsonSnippet = `{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
            <Terminal className="h-3.5 w-3.5" />
            <span>Developer & Founder Toolkit</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Vercel Deployment & Master AI Prompts
          </h3>
          <p className="text-xs text-slate-400">
            Everything you need to launch this static interactive website on Vercel and generate tailored NRI marketing copy.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('vercel')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'vercel'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Rocket className="h-3.5 w-3.5" />
            <span>How to Deploy on Vercel (60 Seconds)</span>
          </button>

          <button
            onClick={() => setActiveTab('prompts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'prompts'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Curated Founder AI Prompts</span>
          </button>
        </div>

        {/* Tab 1: Vercel Deployment Guide */}
        {activeTab === 'vercel' && (
          <div className="mt-6 space-y-6 text-xs text-slate-300">
            
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-xs font-black">1</span>
                Option A: Deploy via GitHub (Recommended)
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300 pl-1 leading-relaxed">
                <li>Download or export this project repository ZIP from the top-right settings menu.</li>
                <li>Push the code to your GitHub repository (e.g. <code className="bg-slate-900 text-amber-300 px-1 py-0.5 rounded font-mono">github.com/your-username/propos-nri</code>).</li>
                <li>Go to <strong className="text-white">vercel.com/new</strong> and click <em>"Import Project"</em> from your GitHub.</li>
                <li>Vercel will automatically detect <strong className="text-amber-400">Vite</strong> as the framework preset!</li>
                <li>Click <strong className="text-emerald-400">"Deploy"</strong> — your live production URL is ready in ~20 seconds.</li>
              </ol>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-xs font-black">2</span>
                Option B: Deploy directly via Terminal CLI
              </h4>
              <div className="relative rounded-lg bg-slate-900 p-3 font-mono text-[11px] text-amber-300 border border-slate-800">
                <p># 1. Install Vercel CLI globally</p>
                <p>npm i -g vercel</p>
                <p className="mt-2"># 2. Deploy instantly to production</p>
                <p>vercel --prod</p>
                
                <button
                  onClick={() => copyToClipboard('npm i -g vercel && vercel --prod', 'cli')}
                  className="absolute top-2.5 right-2.5 rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                >
                  {copiedKey === 'cli' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'cli' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-200">Optional `vercel.json` Configuration:</h4>
                <button
                  onClick={() => copyToClipboard(vercelJsonSnippet, 'vjson')}
                  className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                >
                  {copiedKey === 'vjson' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'vjson' ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>
              <pre className="rounded bg-slate-900 p-3 font-mono text-[11px] text-slate-300 overflow-x-auto border border-slate-800">
                {vercelJsonSnippet}
              </pre>
            </div>

          </div>
        )}

        {/* Tab 2: Master AI Prompts */}
        {activeTab === 'prompts' && (
          <div className="mt-6 space-y-5 text-xs text-slate-300">
            
            {/* Prompt 1 */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-amber-300">
                  1. High-Converting NRI Social Media & Growth Prompt:
                </h4>
                <button
                  onClick={() => copyToClipboard(MASTER_PROMPTS.marketing, 'p1')}
                  className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                >
                  {copiedKey === 'p1' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'p1' ? 'Copied' : 'Copy Prompt'}</span>
                </button>
              </div>
              <p className="font-mono text-[11px] text-slate-400 bg-slate-900 p-3 rounded border border-slate-850 leading-relaxed whitespace-pre-wrap">
                {MASTER_PROMPTS.marketing}
              </p>
            </div>

            {/* Prompt 2 */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-amber-300">
                  2. Telugu / Tamil / Indian Association Cold Partnership Email Prompt:
                </h4>
                <button
                  onClick={() => copyToClipboard(MASTER_PROMPTS.coldOutreach, 'p2')}
                  className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                >
                  {copiedKey === 'p2' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'p2' ? 'Copied' : 'Copy Prompt'}</span>
                </button>
              </div>
              <p className="font-mono text-[11px] text-slate-400 bg-slate-900 p-3 rounded border border-slate-850 leading-relaxed whitespace-pre-wrap">
                {MASTER_PROMPTS.coldOutreach}
              </p>
            </div>

            {/* Prompt 3 */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-amber-300">
                  3. Investor & Partner Pitch Deck Structure Prompt:
                </h4>
                <button
                  onClick={() => copyToClipboard(MASTER_PROMPTS.investorPitch, 'p3')}
                  className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                >
                  {copiedKey === 'p3' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === 'p3' ? 'Copied' : 'Copy Prompt'}</span>
                </button>
              </div>
              <p className="font-mono text-[11px] text-slate-400 bg-slate-900 p-3 rounded border border-slate-850 leading-relaxed whitespace-pre-wrap">
                {MASTER_PROMPTS.investorPitch}
              </p>
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            💡 Ready to deploy anytime. Pure static build with zero server runtime dependencies.
          </p>
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
