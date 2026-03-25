import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const TrustStrip = () => {
  const metrics = [
    { value: 80, suffix: "%+", label: "نسبة النمو", icon: "📈" },
    { value: 150, suffix: "+", label: "مشروع محسّن", icon: "⚡" },
    { value: 40, suffix: "+", label: "شركة", icon: "🏢" },
    { value: 95, suffix: "%", label: "رضا العملاء", icon: "⭐" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass glow-border rounded-2xl p-6 space-y-2"
              >
                <span className="text-2xl">{m.icon}</span>
                <div className="text-3xl md:text-4xl font-display gradient-text">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-arabic">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustStrip;
