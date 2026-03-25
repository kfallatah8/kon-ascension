import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface CaseStudy {
  title: string;
  industry: string;
  before: string;
  after: string;
  metric: string;
  metricValue: string;
  description: string;
}

const cases: CaseStudy[] = [
  {
    title: "شركة تجزئة",
    industry: "التجزئة",
    before: "مبيعات متراجعة وتكاليف مرتفعة",
    after: "نمو 120% في المبيعات خلال 6 أشهر",
    metric: "نمو المبيعات",
    metricValue: "+120%",
    description: "إعادة هيكلة كاملة لنظام المبيعات والتسويق مع تطبيق أنظمة ذكية لتحليل سلوك العملاء.",
  },
  {
    title: "شركة خدمات",
    industry: "الخدمات",
    before: "عمليات يدوية بطيئة وفريق غير متناسق",
    after: "كفاءة تشغيلية أعلى بـ 80%",
    metric: "الكفاءة",
    metricValue: "+80%",
    description: "تصميم نظام تشغيلي متكامل وأتمتة العمليات الأساسية مع تدريب الفريق.",
  },
  {
    title: "شركة تقنية ناشئة",
    industry: "التقنية",
    before: "نمو بطيء وعدم وضوح الاستراتيجية",
    after: "وصول لـ 10,000 عميل في 3 أشهر",
    metric: "العملاء الجدد",
    metricValue: "10K+",
    description: "بناء استراتيجية نمو شاملة مع أنظمة تحليل بيانات العملاء وتحسين رحلة المستخدم.",
  },
];

const CaseStudies = () => {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold tracking-wider mb-4 font-arabic">نتائج حقيقية</p>
            <h2 className="font-arabic text-3xl md:text-4xl font-bold text-foreground" dir="rtl">
              قصص نجاح <span className="gradient-text">واقعية</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <button
                onClick={() => setSelected(c)}
                className="glass glow-border rounded-2xl p-6 card-hover text-right w-full group"
                dir="rtl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="glass px-3 py-1 rounded-full text-xs text-primary font-arabic">{c.industry}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-arabic text-lg font-bold text-foreground mb-4">{c.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="glass rounded-lg p-3">
                    <p className="text-xs text-muted-foreground font-arabic mb-1">قبل</p>
                    <p className="text-sm text-foreground/70 font-arabic">{c.before}</p>
                  </div>
                  <div className="glass rounded-lg p-3 border border-primary/20">
                    <p className="text-xs text-primary font-arabic mb-1">بعد</p>
                    <p className="text-sm text-foreground font-arabic">{c.after}</p>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-3xl font-display font-bold gradient-text">{c.metricValue}</span>
                  <p className="text-xs text-muted-foreground font-arabic mt-1">{c.metric}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong glow-border rounded-2xl p-8 max-w-lg w-full relative z-10"
              dir="rtl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 left-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <span className="glass px-3 py-1 rounded-full text-xs text-primary font-arabic">{selected.industry}</span>
              <h3 className="font-arabic text-2xl font-bold text-foreground mt-4 mb-3">{selected.title}</h3>
              <p className="text-muted-foreground font-arabic leading-relaxed mb-6">{selected.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-muted-foreground font-arabic mb-2">قبل</p>
                  <p className="text-sm text-foreground/70 font-arabic">{selected.before}</p>
                </div>
                <div className="glass rounded-xl p-4 border border-primary/20">
                  <p className="text-xs text-primary font-arabic mb-2">بعد</p>
                  <p className="text-sm text-foreground font-arabic">{selected.after}</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <span className="text-4xl font-display font-bold gradient-text">{selected.metricValue}</span>
                <p className="text-sm text-muted-foreground font-arabic mt-1">{selected.metric}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
