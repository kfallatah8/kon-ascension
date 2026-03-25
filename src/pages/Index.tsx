import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PainSection from "@/components/PainSection";
import RealizationSection from "@/components/RealizationSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import HumanAISection from "@/components/HumanAISection";
import CaseStudies from "@/components/CaseStudies";
import FlexibleSolutions from "@/components/FlexibleSolutions";
import FutureSection from "@/components/FutureSection";
import FinalCTA from "@/components/FinalCTA";
import ConsultationForm from "@/components/ConsultationForm";
import { CalendarCheck } from "lucide-react";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookClick={openForm} />
      <HeroSection onBookClick={openForm} onDiagnosticClick={openForm} />
      <TrustStrip />
      <PainSection />
      <RealizationSection />
      <DiagnosticSection />
      <HumanAISection />
      <CaseStudies />
      <FlexibleSolutions />
      <FutureSection />
      <FinalCTA onBookClick={openForm} />

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="gradient-text font-display font-bold text-lg">KON</span>
            <span className="text-muted-foreground text-sm">Unlimited</span>
          </div>
          <p className="text-muted-foreground text-sm font-arabic">© 2025 KON Unlimited. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <button
        onClick={openForm}
        className="fixed bottom-6 right-6 z-40 gradient-primary text-primary-foreground p-4 rounded-2xl glow-button pulse-glow flex items-center gap-2 font-arabic text-sm font-medium shadow-2xl"
      >
        <CalendarCheck className="w-5 h-5" />
        <span className="hidden sm:inline">احجز استشارة</span>
      </button>

      <ConsultationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Index;
