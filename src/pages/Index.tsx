import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PainSection from "@/components/PainSection";
import RealizationSection from "@/components/RealizationSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import WhyUs from "@/components/WhyUs";
import HumanAISection from "@/components/HumanAISection";
import CaseStudies from "@/components/CaseStudies";
import ProjectsShowcase from "@/components/ProjectsShowcase";
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
      <WhyUs />
      <DiagnosticSection />
      <HumanAISection />
      <ProjectsShowcase />
      <CaseStudies />
      <FlexibleSolutions />
      <FutureSection />
      <FinalCTA onBookClick={openForm} />

      {/* Footer */}
      <footer className="relative border-t border-border/30 py-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
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
        className="fixed bottom-6 right-6 z-40 gradient-primary text-primary-foreground p-4 rounded-2xl glow-button pulse-glow flex items-center gap-2 font-arabic text-sm font-medium shadow-2xl group relative overflow-hidden"
      >
        <CalendarCheck className="w-5 h-5 relative z-10" />
        <span className="hidden sm:inline relative z-10">استشارة مجانية</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </button>

      <ConsultationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Index;
