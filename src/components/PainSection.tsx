import ScrollReveal from "./ScrollReveal";
import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";

const PainSection = () => {
  const pains = [
    { icon: TrendingDown, text: "حملات بدون نتائج", desc: "ميزانيات تسويق تُهدر بدون عائد واضح" },
    { icon: Target, text: "قرارات غير دقيقة", desc: "قرارات مبنية على الحدس بدل البيانات" },
    { icon: Users, text: "فريق غير متناسق", desc: "كل قسم يعمل بمعزل عن الآخر" },
    { icon: AlertTriangle, text: "أنظمة غير فعالة", desc: "عمليات يدوية تستهلك الوقت والموارد" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/3 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <ScrollReveal direction="left">
            <div dir="rtl" className="font-arabic space-y-6">
              <p className="text-primary text-sm font-bold tracking-wider">المشكلة الحقيقية</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                هل تعرف أين تذهب <span className="gradient-text">أموالك</span> فعلاً؟
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                معظم الشركات تنفق وتعمل بجهد كبير… لكن النتائج لا تتناسب مع الجهد.
                السبب ليس في الأجزاء المنفصلة، بل في النظام ككل.
              </p>
              <div className="glass glow-border rounded-xl p-6">
                <p className="text-foreground font-bold text-lg">
                  "المشكلة ليست في الأجزاء… بل في النظام"
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Pain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pains.map((pain, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="right">
                <div className="glass glow-border rounded-xl p-5 card-hover group" dir="rtl">
                  <pain.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-arabic font-bold text-foreground mb-1">{pain.text}</h3>
                  <p className="text-muted-foreground text-sm font-arabic">{pain.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
