import React, { useState, useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  Calendar, 
  Clock, 
  MapPin, 
  Building, 
  User, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CITY_HUBS } from '../data/mockData';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCity?: string;
  initialPropertyType?: string;
  initialStatus?: string;
  initialPlanName?: string;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  isOpen,
  onClose,
  initialCity = 'hyderabad',
  initialPropertyType = 'apartment',
  initialStatus = 'tenanted',
  initialPlanName = 'Standard Pro',
}) => {
  const [step, setStep] = useState<number>(1);
  const [city, setCity] = useState(initialCity);
  const [propertyType, setPropertyType] = useState(initialPropertyType);
  const [status, setStatus] = useState(initialStatus);
  const [locality, setLocality] = useState('');
  
  // NRI Contact Info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [timezone, setTimezone] = useState('PST (US West Coast)');
  const [preferredSlot, setPreferredSlot] = useState('Evening (7:00 PM - 9:00 PM)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCity) setCity(initialCity);
    if (initialPropertyType) setPropertyType(initialPropertyType);
    if (initialStatus) setStatus(initialStatus);
  }, [initialCity, initialPropertyType, initialStatus]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi PropOS Team! I am an NRI (${fullName || 'NRI Owner'}) based in ${timezone}. I own a ${propertyType} in ${city.toUpperCase()} (${locality || 'City'}) and would like to book a 15-min discovery call for ${initialPlanName}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                <Sparkles className="h-3 w-3" />
                <span>Free 15-Min NRI Property Consultation</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Book Your Discovery Call
              </h3>
              <p className="text-xs text-slate-400">
                Tailored for overseas homeowners across US, Canada, UK, and UAE timezones.
              </p>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 my-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-amber-400' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-amber-400' : 'bg-slate-800'}`} />
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  {/* Select City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Property Location (Metro City)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CITY_HUBS.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCity(c.id)}
                          className={`rounded-lg border px-3 py-2 text-xs font-medium flex items-center justify-between ${
                            city === c.id
                              ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-bold'
                              : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-850'
                          }`}
                        >
                          <span>{c.name}</span>
                          <span className="text-[10px] text-slate-500">{c.state}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Locality or Apartment Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Apartment / Community Name or Locality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. My Home Bhooja / Prestige Lakeside / Hinjewadi Phase 1"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  {/* Property Type & Status */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Asset Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
                      >
                        <option value="apartment">Apartment (2BHK / 3BHK)</option>
                        <option value="villa">Independent Villa / House</option>
                        <option value="plot">Gated Plot / Land</option>
                        <option value="commercial">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Current Status
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
                      >
                        <option value="tenanted">Currently Tenanted</option>
                        <option value="vacant">Vacant / Locked</option>
                        <option value="needs-tenant">Looking for New Tenant</option>
                        <option value="under-construction">Newly Handed Over</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition-all"
                  >
                    <span>Next: Select Your Timezone & Contact</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Srinivas Rao"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  {/* Email & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Number (with country code)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (408) 555-0199"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Timezone & Call Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Current Timezone
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
                      >
                        <option value="PST (US West Coast)">🇺🇸 PST (US West Coast / CA / WA)</option>
                        <option value="EST (US East Coast)">🇺🇸 EST (US East Coast / NY / NJ)</option>
                        <option value="CST (US Central / TX)">🇺🇸 CST (US Central / TX / IL)</option>
                        <option value="GMT (London / UK)">🇬🇧 GMT / BST (London / UK)</option>
                        <option value="GST (Dubai / UAE)">🇦🇪 GST (Dubai / Abu Dhabi / UAE)</option>
                        <option value="EST (Toronto / Canada)">🇨🇦 EST (Toronto / Canada)</option>
                        <option value="IST (India Standard)">🇮🇳 IST (India Standard)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Call Window
                      </label>
                      <select
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
                      >
                        <option value="Morning (8:00 AM - 10:00 AM)">Morning (8:00 AM - 10:00 AM)</option>
                        <option value="Lunchtime (12:00 PM - 2:00 PM)">Lunchtime (12:00 PM - 2:00 PM)</option>
                        <option value="Evening (7:00 PM - 9:00 PM)">Evening (7:00 PM - 9:00 PM)</option>
                        <option value="Weekend Flexible">Weekend Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all"
                    >
                      Confirm 15-Min Discovery Call
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Discovery Call Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName || 'NRI Owner'}</strong>. Our {city.toUpperCase()} Operations Lead has received your property details.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-xs text-slate-300 text-left space-y-1.5 max-w-md mx-auto">
              <p>📍 <strong className="text-white">Location:</strong> {locality || 'Prime Locality'}, {city.toUpperCase()}</p>
              <p>⏰ <strong className="text-white">Scheduled For:</strong> {preferredSlot} ({timezone})</p>
              <p>📱 <strong className="text-white">WhatsApp Updates:</strong> {whatsapp}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 text-xs font-bold transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
