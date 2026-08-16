import React, { useState } from 'react';
import { 
  FileText, 
  MapPin, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Camera, 
  Zap, 
  ShieldAlert, 
  Check, 
  DollarSign, 
  FileCheck,
  Eye,
  Download,
  Share2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/mockData';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/mockData';

interface SampleReportViewerProps {
  currentCurrency: CurrencyCode;
}

export const SampleReportViewer: React.FC<SampleReportViewerProps> = ({ currentCurrency }) => {
  const [activeCityReport, setActiveCityReport] = useState<'hyderabad' | 'bengaluru'>('hyderabad');
  const [actionItemApproved, setActionItemApproved] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const report = SAMPLE_REPORTS[activeCityReport];
  const curr = CURRENCIES[currentCurrency];

  const handleApprove = () => {
    setActionItemApproved(true);
  };

  const categories = ['all', ...Array.from(new Set(report.items.map((i) => i.category)))];

  const filteredItems = activeCategory === 'all' 
    ? report.items 
    : report.items.filter((i) => i.category === activeCategory);

  return (
    <section id="sample-report" className="py-20 bg-slate-900/70 relative border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Eye className="h-3.5 w-3.5" />
              <span>Interactive Digital Prototype</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
              Live Inspection Report Preview
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              This is what you receive on your phone and portal after every monthly inspection. Experience how GPS verification, photo audits, and instant repair approvals work.
            </p>
          </div>

          {/* City Report Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium px-2 hidden sm:inline">Select Sample:</span>
            <button
              onClick={() => {
                setActiveCityReport('hyderabad');
                setActionItemApproved(false);
                setActiveCategory('all');
              }}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeCityReport === 'hyderabad'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Hyderabad (Villa / 3BHK)
            </button>
            <button
              onClick={() => {
                setActiveCityReport('bengaluru');
                setActionItemApproved(false);
                setActiveCategory('all');
              }}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeCityReport === 'bengaluru'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bengaluru (Villa)
            </button>
          </div>
        </div>

        {/* The Digital Report Container */}
        <div className="mt-10 rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden">
          
          {/* Top Report Header Bar */}
          <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Left Property Details */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-amber-400/10 px-2.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/20 font-mono">
                    {report.reportId}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified On-Site Visit
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {report.inspectionDate}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {report.propertyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{report.unitAddress}</span>
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span>GPS Telemetry:</span>
                  <span className="text-amber-300 font-semibold">{report.gpsCoordinates}</span>
                </div>
              </div>

              {/* Right Auditor Profile & Health Score */}
              <div className="flex items-center gap-6 bg-slate-900/80 border border-slate-800 rounded-xl p-4 self-start lg:self-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={report.fieldExecutive.photo}
                    alt={report.fieldExecutive.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-amber-400/50"
                  />
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-400">Inspected By</p>
                    <p className="text-sm font-bold text-white flex items-center gap-1">
                      {report.fieldExecutive.name}
                      <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">{report.fieldExecutive.id}</p>
                  </div>
                </div>

                <div className="border-l border-slate-800 pl-6 text-center">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Health Index</p>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-black text-emerald-400 font-heading">
                      {report.overallHealthScore}
                    </span>
                    <span className="text-xs text-slate-400">/100</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                    Pristine
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Executive Summary Quote */}
          <div className="bg-slate-900/40 px-6 sm:px-8 py-4 border-b border-slate-800 flex items-start gap-3">
            <FileText className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Field Executive Summary:</strong> {report.summary}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Utility & Property Tax Status Bar */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Utility & Statutory Compliance Verification</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Electricity Meter</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Auto-Paid
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-slate-200">
                    {report.utilityStatus.electricityMeterReading}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Water Meter & Inflow</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Normal
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-slate-200">
                    {report.utilityStatus.waterMeterReading}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Society Maintenance</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Clear
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-slate-200">
                    NOC verified with Association
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Municipal Property Tax</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Paid
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-slate-200">
                    GHMC / BBMP challan filed
                  </p>
                </div>
              </div>
            </div>

            {/* Room by Room Inspection Gallery */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Camera className="h-3.5 w-3.5 text-amber-400" />
                  <span>360° Physical Area Audits ({filteredItems.length} Checkpoints)</span>
                </h4>
                <div className="flex items-center gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors capitalize ${
                        activeCategory === cat
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                          {item.category}
                        </span>
                        <h5 className="text-sm font-semibold text-white mt-0.5">
                          {item.item}
                        </h5>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          item.status === 'Pass'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {item.status === 'Pass' ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <AlertCircle className="h-3 w-3" />
                        )}
                        {item.status}
                      </span>
                    </div>

                    <div className="relative rounded-lg overflow-hidden h-44 bg-slate-950 border border-slate-800">
                      <img
                        src={item.photoUrl}
                        alt={item.item}
                        className="w-full h-full object-cover"
                      />
                      {item.annotatedTag && (
                        <div className="absolute bottom-2 left-2 rounded bg-slate-950/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-amber-300 border border-slate-700/80 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                          <span>{item.annotatedTag}</span>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 rounded bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-300 font-mono">
                        GPS Verified
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Work Order / Action Item Card (If present in report) */}
            {report.pendingActionItem && (
              <div className="rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5">
                        Interactive Action Item
                      </span>
                      <span className="text-xs text-amber-300 font-semibold">
                        Recommended Maintenance Order
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-white">
                      {report.pendingActionItem.issue}
                    </h5>
                    <p className="text-xs text-slate-400">
                      Assigned to: <strong className="text-slate-200">{report.pendingActionItem.vendorType}</strong> • Zero markup guarantee.
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-baseline sm:items-end justify-between">
                    <span className="text-xs text-slate-400">Estimated Cost:</span>
                    <span className="text-xl font-extrabold text-amber-400 font-heading">
                      ₹{report.pendingActionItem.costInr.toLocaleString()} (
                      {curr.symbol}
                      {Math.round(report.pendingActionItem.costInr / curr.rateToInr)})
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800">
                  <div className="text-xs text-slate-300 flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>No repair is ever started without your explicit digital approval.</span>
                  </div>

                  {actionItemApproved ? (
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-4 py-2 text-xs font-bold text-emerald-300 animate-fadeIn">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Work Order Approved & Dispatched to Plumber</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleApprove}
                      className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-md"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Click to Authorize Work Order (₹{report.pendingActionItem.costInr})</span>
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar of Report */}
          <div className="border-t border-slate-800 bg-slate-900/90 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              🔒 Stored securely in your PropOS NRI Vault with 7-year cloud audit retention.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => alert("Sample report downloaded as PDF!")}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export PDF</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Report link copied to clipboard for sharing!")}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share with Co-owner</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
