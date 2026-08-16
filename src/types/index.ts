export type DesignTheme = 'dark-amber' | 'ivory-emerald' | 'clean-cobalt' | 'monochrome-terracotta';
export type HeroVariant = 'split-calculator' | 'executive-telemetry' | 'minimal-luxury';

export interface ThemeMeta {
  id: DesignTheme;
  name: string;
  tagline: string;
  targetAudience: string;
  paletteName: string;
  fontPairing: string;
  bgHex: string;
  accentHex: string;
  mode: 'dark' | 'light';
  previewBadge: string;
}

export type CurrencyCode = 'INR' | 'USD' | 'CAD' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateToInr: number; // 1 unit in INR (e.g. 1 USD = 86.5 INR)
  label: string;
  flag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceInrMonthly: number;
  priceInrAnnual: number; // monthly equivalent when paid annually
  popular?: boolean;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  badge?: string;
}

export interface AddonService {
  id: string;
  name: string;
  priceTag: string;
  timeline: string;
  description: string;
  iconName: string;
}

export interface InspectionItem {
  id: string;
  category: string;
  item: string;
  status: 'Pass' | 'Attention' | 'Action Needed';
  notes: string;
  photoUrl: string;
  annotatedTag?: string;
}

export interface SampleReportData {
  reportId: string;
  propertyTitle: string;
  unitAddress: string;
  city: string;
  inspectionDate: string;
  gpsCoordinates: string;
  fieldExecutive: {
    name: string;
    id: string;
    verifiedBadge: boolean;
    photo: string;
  };
  overallHealthScore: number;
  summary: string;
  utilityStatus: {
    electricityMeterReading: string;
    electricityBillStatus: 'Paid' | 'Pending';
    waterMeterReading: string;
    maintenancePaidToSociety: boolean;
    municipalPropertyTaxStatus: 'Up-to-date' | 'Due Next Quarter';
  };
  items: InspectionItem[];
  pendingActionItem?: {
    issue: string;
    costInr: number;
    urgency: 'Low' | 'Medium' | 'High';
    vendorType: string;
    approved: boolean;
  };
}

export interface CityHub {
  id: string;
  name: string;
  tagline: string;
  state: string;
  fieldTeamCount: number;
  popularLocalities: string[];
  averageResponseTime: string;
  leadManager: string;
  bgImage: string;
}

export interface CustomerTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  propertyLocation: string;
  propertyType: string;
  quote: string;
  problemSolved: string;
  avatar: string;
}
