import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { BarChart3, Brain, Cpu, Database, LineChart, Zap } from "lucide-react";

const DiagnosticSection = () => {
  const features = [
    { icon: Brain, label: "تحليل ذكي" },
    { icon: Database, label: "بيانات عميقة" },
    { icon: LineChart, label: "رؤى فورية" },
    { icon: Zap, label: "حلول مخصصة" },
  ];

  return (
    <section id="diagnostic" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Dashboard mockup */}
          <ScrollReveal direction="left">
            <div className="glass glow-border rounded-2xl p-6 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between glass rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">System Performance</span>
                  </div>
                  <span className="text-primary text-sm font-bold">87%</span>
                </div>

                {/* Animated bars */}
                <div className="space-y-3 px-2">
                  {[
                    { label: "Revenue Flow", w: "85%", color: "bg-primary" },
                    { label: "Operational Efficiency", w: "62%", color: "bg-accent" },
                    { label: "Team Alignment", w: "45%", color: "bg-primary/60" },
                    { label: "Customer Retention", w: "78%", color: "bg-primary/80" },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>{bar.label}</span>
                        <span>{bar.w}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.w }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                          className={`h-full ${bar.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="glass rounded-lg p-3 flex items-center gap-2"
                    >
                      <f.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground font-arabic">{f.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div dir="rtl" className="font-arabic space-y-6">
              <p className="text-primary text-sm font-bold tracking-wider">محرك التشخيص</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                KON Diagnostic Engine™
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                نحن لا نستخدم أدوات جاهزة… نحن نبني أنظمة ذكية مخصصة للتحليل العميق لأعمالك.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't use generic AI tools. We build and train intelligent systems tailored for deep business analysis.
              </p>
              <div className="flex flex-wrap gap-3">
                {["تحليل شامل", "أنظمة ذكية", "بيانات فورية", "حلول مخصصة"].map((tag, i) => (
                  <span key={i} className="glass px-4 py-2 rounded-full text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
