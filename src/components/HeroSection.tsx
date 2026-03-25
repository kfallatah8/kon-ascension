import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const HeroSection = ({ onBookClick, onDiagnosticClick }: { onBookClick: () => void; onDiagnosticClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] floating" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] floating" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Floating KPI badges */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {["+80% نمو", "كفاءة أعلى", "أنظمة محسّنة"].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="glass px-4 py-2 rounded-full text-xs font-arabic text-muted-foreground floating"
                style={{ animationDelay: `${i * 2}s` }}
              >
                <span className="text-primary mr-1">●</span> {text}
              </motion.div>
            ))}
          </div>

          <h1 className="font-arabic text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" dir="rtl">
            <span className="gradient-text glow-text">
              هل شعرت يومًا أن عملك عالق…
            </span>
            <br />
            <span className="text-foreground">رغم كل جهودك؟</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-arabic text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
            dir="rtl"
          >
            كل يوم تضيع فيه الفرص، كل عملية غير فعالة، كل عميل يغادر… ليس صدفة.
            <br />
            إنه نتيجة نظام لم يُصمم بشكل صحيح.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-arabic text-foreground/80 text-sm md:text-base max-w-xl mx-auto mb-10"
            dir="rtl"
          >
            نحن لا نحسّن عملك… نحن نعيد تصميمه ليصل إلى أقصى إمكاناته.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onBookClick}
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-arabic font-bold text-lg glow-button pulse-glow"
            >
              احجز استشارة استراتيجية
            </button>
            <button
              onClick={onDiagnosticClick}
              className="glass glow-border text-foreground px-8 py-4 rounded-xl font-arabic font-medium text-lg hover:bg-primary/10 transition-colors"
            >
              ابدأ التشخيص
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
