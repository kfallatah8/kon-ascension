import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const HeroSection = ({ onBookClick, onDiagnosticClick }: { onBookClick: () => void; onDiagnosticClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      {/* Gradient orbs - enhanced */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/12 blur-[120px] floating" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon/8 blur-[100px] floating" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Floating KPI badges */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {[
              { text: "+120% نمو مبيعات", icon: "📈" },
              { text: "أنظمة ذكية مخصصة", icon: "🧠" },
              { text: "+40 شركة ناجحة", icon: "🏢" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="glass glow-border px-5 py-2.5 rounded-full text-xs font-arabic text-muted-foreground floating"
                style={{ animationDelay: `${i * 2}s` }}
              >
                <span className="mr-2">{badge.icon}</span> {badge.text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block glass glow-border px-4 py-1.5 rounded-full text-xs font-arabic text-primary mb-8">
              🚀 شريكك الاستراتيجي للنمو والتحول
            </span>
          </motion.div>

          <h1 className="font-arabic text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6" dir="rtl">
            <span className="gradient-text glow-text">
              لا نُصلح ما هو معطّل
            </span>
            <br />
            <span className="text-foreground">نُعيد بناءه ليتفوّق</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-arabic text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
            dir="rtl"
          >
            شركتك تملك الإمكانيات، لكن النظام الحالي يحدّ من نموك.
            <br />
            نحن نُعيد تصميم الأنظمة والاستراتيجيات لتحقيق أقصى أداء ممكن.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-arabic text-foreground/70 text-sm md:text-base max-w-xl mx-auto mb-12"
            dir="rtl"
          >
            استشارات استراتيجية · أنظمة ذكية · نمو حقيقي وقابل للقياس
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onBookClick}
              className="gradient-primary text-primary-foreground px-10 py-4 rounded-2xl font-arabic font-bold text-lg glow-button pulse-glow group relative overflow-hidden"
            >
              <span className="relative z-10">احجز استشارة مجانية</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button
              onClick={onDiagnosticClick}
              className="glass glow-border text-foreground px-10 py-4 rounded-2xl font-arabic font-medium text-lg hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_30px_hsla(var(--glow),0.2)]"
            >
              ابدأ التشخيص المجاني
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
