import ScrollReveal from "./ScrollReveal";
import { Brain, Users, Zap } from "lucide-react";

const HumanAISection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold tracking-wider mb-4 font-arabic">المعادلة الفريدة</p>
            <h2 className="font-arabic text-3xl md:text-4xl font-bold text-foreground" dir="rtl">
              ذكاء <span className="gradient-text">بشري</span> + قوة <span className="gradient-text">اصطناعية</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={0}>
            <div className="glass glow-border rounded-2xl p-8 text-center card-hover h-full">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-arabic text-xl font-bold text-foreground mb-3">استراتيجية بشرية</h3>
              <p className="text-muted-foreground font-arabic text-sm leading-relaxed" dir="rtl">
                خبراء يفهمون السوق والثقافة والتحديات الفريدة لكل شركة في المنطقة
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass glow-border rounded-2xl p-8 text-center card-hover h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-arabic text-xl font-bold text-foreground mb-3">الدمج المثالي</h3>
                <p className="text-muted-foreground font-arabic text-sm leading-relaxed" dir="rtl">
                  نقطة التقاء الخبرة البشرية مع الذكاء الاصطناعي لتحقيق نتائج استثنائية
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass glow-border rounded-2xl p-8 text-center card-hover h-full">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-arabic text-xl font-bold text-foreground mb-3">ذكاء اصطناعي مخصص</h3>
              <p className="text-muted-foreground font-arabic text-sm leading-relaxed" dir="rtl">
                أنظمة ذكية مبنية خصيصًا لتحليل أعمالك وتقديم رؤى غير مسبوقة
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HumanAISection;
