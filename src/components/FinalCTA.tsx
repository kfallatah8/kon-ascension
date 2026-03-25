import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const FinalCTA = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[180px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-block glass glow-border px-4 py-1.5 rounded-full text-xs font-arabic text-primary mb-8">
            ابدأ التحول الآن
          </span>
          <h2 className="font-arabic text-2xl md:text-5xl font-bold text-foreground leading-tight mb-6" dir="rtl">
            كم تخسر يوميًا لأن النظام الحالي
            <br />
            <span className="gradient-text glow-text">لا يعمل بكامل طاقته؟</span>
          </h2>
          <p className="text-muted-foreground font-arabic text-lg mb-4" dir="rtl">
            كل يوم تأخير هو فرصة ضائعة. ابدأ الآن.
          </p>
          <p className="text-primary/80 font-arabic text-sm mb-10" dir="rtl">
            ✨ الاستشارة الأولى مجانية بالكامل — بدون أي التزام
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookClick}
            className="gradient-primary text-primary-foreground px-12 py-5 rounded-2xl font-arabic font-bold text-xl glow-button pulse-glow relative overflow-hidden group"
          >
            <span className="relative z-10">احجز استشارتك المجانية الآن</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
