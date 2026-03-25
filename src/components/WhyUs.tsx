import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Target, Cpu, TrendingUp, HeartHandshake } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Cpu,
      title: "أنظمة ذكية مخصصة",
      desc: "لا نستخدم حلول جاهزة. نبني أنظمة مصممة لتحديات عملك تحديدًا.",
      gradient: "from-primary/20 to-accent/10",
    },
    {
      icon: Target,
      title: "نتائج قابلة للقياس",
      desc: "كل قرار مبني على بيانات. كل استراتيجية مرتبطة بأرقام واضحة.",
      gradient: "from-accent/20 to-primary/10",
    },
    {
      icon: TrendingUp,
      title: "نمو مستدام",
      desc: "نبني أنظمة تنمو مع شركتك، لا حلول مؤقتة تحتاج إعادة بناء.",
      gradient: "from-primary/15 to-neon/10",
    },
    {
      icon: Shield,
      title: "خبرة عميقة بالسوق",
      desc: "فهم شامل لتحديات السوق السعودي والخليجي وديناميكياته الفريدة.",
      gradient: "from-neon/15 to-primary/10",
    },
    {
      icon: Lightbulb,
      title: "ابتكار مستمر",
      desc: "نستثمر في أحدث تقنيات الذكاء الاصطناعي لتقديم ميزة تنافسية حقيقية.",
      gradient: "from-accent/15 to-neon/10",
    },
    {
      icon: HeartHandshake,
      title: "شراكة حقيقية",
      desc: "لسنا مجرد استشاريين. نحن شركاء في رحلة نموك ونجاحك.",
      gradient: "from-primary/20 to-accent/15",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block glass glow-border px-4 py-1.5 rounded-full text-xs font-arabic text-primary mb-6">
              لماذا KON Unlimited
            </span>
            <h2 className="font-arabic text-3xl md:text-5xl font-bold text-foreground mb-4" dir="rtl">
              ما يجعلنا <span className="gradient-text">الخيار الأمثل</span>
            </h2>
            <p className="text-muted-foreground font-arabic max-w-lg mx-auto text-lg" dir="rtl">
              نجمع بين الخبرة الاستراتيجية والتقنية المتقدمة لتحقيق نتائج استثنائية
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass glow-border rounded-2xl p-7 h-full group relative overflow-hidden"
                dir="rtl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_hsla(var(--glow),0.3)] transition-shadow duration-500">
                    <r.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-arabic text-lg font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground font-arabic leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
