import React, { useState } from 'react';
import { CurrencyCode, PricingPlan } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { SampleReportViewer } from './components/SampleReportViewer';
import { PricingSection } from './components/PricingSection';
import { CityCoverage } from './components/CityCoverage';
import { WorkflowSection } from './components/WorkflowSection';
import { ComparisonTable } from './components/ComparisonTable';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RoadmapVision } from './components/RoadmapVision';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DiscoveryModal } from './components/DiscoveryModal';
import { PromptToolkitModal } from './components/PromptToolkitModal';
import { DesignSwitcherBar } from './components/DesignSwitcherBar';
import { DesignShowcaseModal } from './components/DesignShowcaseModal';

function MainApp() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState<boolean>(false);
  const [isPromptToolkitOpen, setIsPromptToolkitOpen] = useState<boolean>(false);

  // Prefilled parameters for the Discovery Modal
  const [modalCity, setModalCity] = useState<string>('hyderabad');
  const [modalPropertyType, setModalPropertyType] = useState<string>('apartment');
  const [modalStatus, setModalStatus] = useState<string>('tenanted');
  const [modalPlanName, setModalPlanName] = useState<string>('Standard Pro');

  const handleOpenDiscovery = () => {
    setIsDiscoveryOpen(true);
  };

  const handleOpenDiscoveryWithParams = (city: string, propertyType: string, status: string) => {
    setModalCity(city);
    setModalPropertyType(propertyType);
    setModalStatus(status);
    setModalPlanName(status === 'vacant' ? 'Basic Care' : status === 'tenanted' ? 'Standard Pro' : 'Executive Shield');
    setIsDiscoveryOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setModalPlanName(plan.name);
    setIsDiscoveryOpen(true);
  };

  const handleSelectAddon = (addonName: string) => {
    setModalPlanName(`Add-On: ${addonName}`);
    setIsDiscoveryOpen(true);
  };

  const handleCheckLocality = (cityName: string, localityName: string) => {
    setModalCity(cityName.toLowerCase());
    setModalStatus('tenanted');
    setModalPlanName(`Locality Check: ${localityName} (${cityName})`);
    setIsDiscoveryOpen(true);
  };

  const scrollToSampleReport = () => {
    const el = document.getElementById('sample-report');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Sticky Header */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenDiscovery={handleOpenDiscovery}
        onOpenPromptToolkit={() => setIsPromptToolkitOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero with Dynamic Layouts & Care Estimator */}
        <Hero
          currentCurrency={currentCurrency}
          onOpenDiscoveryWithParams={handleOpenDiscoveryWithParams}
          onExploreReport={scrollToSampleReport}
        />

        {/* 2. Core Value Proposition: What You Sell (Trust, Transparency, Protection, Peace of Mind) */}
        <ValueProposition />

        {/* 3. Interactive Sample Digital Inspection Report Viewer */}
        <SampleReportViewer currentCurrency={currentCurrency} />

        {/* 4. Subscription Pricing & Modular Add-Ons */}
        <PricingSection
          currentCurrency={currentCurrency}
          onSelectPlan={handleSelectPlan}
          onSelectAddon={handleSelectAddon}
        />

        {/* 5. Active Tier-1 City Hubs & Localities */}
        <CityCoverage onCheckLocality={handleCheckLocality} />

        {/* 6. Operational SOP & Workflows (Customer Journey & Behind-the-Scenes) */}
        <WorkflowSection />

        {/* 7. Competitive Differentiation Matrix */}
        <ComparisonTable />

        {/* 8. Interactive Rental Yield & Protection Calculator */}
        <RoiCalculator
          currentCurrency={currentCurrency}
          onBookAssessment={handleOpenDiscovery}
        />

        {/* 9. Global NRI Case Studies & Testimonials */}
        <TestimonialsSection />

        {/* 10. 12-Month Roadmap & Evolution Vision */}
        <RoadmapVision />

        {/* 11. NRI FAQ Accordion */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenDiscovery={handleOpenDiscovery}
        onOpenPromptToolkit={() => setIsPromptToolkitOpen(true)}
      />

      {/* Floating Design Switcher Bar */}
      <DesignSwitcherBar />

      {/* Interactive Modals */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        initialCity={modalCity}
        initialPropertyType={modalPropertyType}
        initialStatus={modalStatus}
        initialPlanName={modalPlanName}
      />

      <PromptToolkitModal
        isOpen={isPromptToolkitOpen}
        onClose={() => setIsPromptToolkitOpen(false)}
      />

      <DesignShowcaseModal />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
