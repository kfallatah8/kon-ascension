import ScrollReveal from "./ScrollReveal";
import { Sparkles, Globe, Cpu } from "lucide-react";

const FutureSection = () => {
  const items = [
    { icon: Sparkles, title: "أدوات SaaS مخصصة", desc: "أدوات برمجية مصممة خصيصًا لأعمالك" },
    { icon: Cpu, title: "أنظمة ذكاء اصطناعي", desc: "حلول AI متقدمة للتحليل واتخاذ القرار" },
    { icon: Globe, title: "ابتكارات قادمة", desc: "نستثمر في المستقبل لنقدم لك الأفضل دائمًا" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold tracking-wider mb-4 font-arabic">المستقبل</p>
            <h2 className="font-arabic text-3xl md:text-4xl font-bold text-foreground" dir="rtl">
              نبني <span className="gradient-text">المستقبل</span> اليوم
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 card-hover text-center h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-arabic text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-arabic" dir="rtl">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
