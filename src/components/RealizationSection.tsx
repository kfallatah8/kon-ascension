import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const RealizationSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dramatic gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 1 }}
          >
            <p className="text-primary text-sm font-bold tracking-wider mb-6 font-arabic">لحظة الوعي</p>
            <h2 className="font-arabic text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6" dir="rtl">
              ما تراه هو <span className="gradient-text glow-text">النتيجة</span>…
              <br />
              لكن السبب الحقيقي <span className="text-muted-foreground">مخفي</span>
            </h2>
            <p className="text-muted-foreground font-arabic text-lg" dir="rtl">
              المشاكل الظاهرة ليست سوى أعراض. الحل الحقيقي يبدأ بتشخيص عميق للنظام بأكمله.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default RealizationSection;
