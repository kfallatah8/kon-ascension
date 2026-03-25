import ScrollReveal from "./ScrollReveal";
import { Rocket, Settings, Users, BarChart3 } from "lucide-react";

const FlexibleSolutions = () => {
  const solutions = [
    { icon: Rocket, title: "أنظمة النمو", desc: "بناء أنظمة تسويق ومبيعات متكاملة تعمل على مدار الساعة", tag: "Growth" },
    { icon: Settings, title: "تحسين العمليات", desc: "أتمتة وتحسين العمليات الداخلية لتقليل التكاليف وزيادة الكفاءة", tag: "Systems" },
    { icon: BarChart3, title: "الاستراتيجية", desc: "بناء خطة استراتيجية واضحة قائمة على البيانات والتحليل العميق", tag: "Strategy" },
    { icon: Users, title: "بناء الفرق", desc: "تطوير وتنظيم الفرق لتحقيق أقصى إنتاجية وتناسق", tag: "People" },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold tracking-wider mb-4 font-arabic">حلول مرنة</p>
            <h2 className="font-arabic text-3xl md:text-4xl font-bold text-foreground mb-4" dir="rtl">
              كل شركة حالة <span className="gradient-text">مختلفة</span>
            </h2>
            <p className="text-muted-foreground font-arabic max-w-lg mx-auto" dir="rtl">
              لذلك لا نقدم حلول جاهزة. كل مشروع يُصمم خصيصًا لاحتياجاتك.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass glow-border rounded-2xl p-6 card-hover h-full group" dir="rtl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-display">{s.tag}</span>
                </div>
                <h3 className="font-arabic text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-arabic leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibleSolutions;
