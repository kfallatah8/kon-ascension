import ScrollReveal from "./ScrollReveal";

const FinalCTA = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-arabic text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6" dir="rtl">
            كم تخسر يوميًا لأن النظام الحالي
            <br />
            <span className="gradient-text glow-text">لا يعمل بكامل طاقته؟</span>
          </h2>
          <p className="text-muted-foreground font-arabic text-lg mb-10" dir="rtl">
            كل يوم تأخير هو فرصة ضائعة. ابدأ الآن.
          </p>
          <button
            onClick={onBookClick}
            className="gradient-primary text-primary-foreground px-10 py-5 rounded-xl font-arabic font-bold text-xl glow-button pulse-glow"
          >
            احجز استشارتك الآن
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
