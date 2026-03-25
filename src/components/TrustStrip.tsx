import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const TrustStrip = () => {
  const metrics = [
    { value: 80, suffix: "%+", label: "نسبة النمو" },
    { value: 150, suffix: "+", label: "مشروع محسّن" },
    { value: 40, suffix: "+", label: "شركة" },
    { value: 95, suffix: "%", label: "رضا العملاء" },
  ];

  return (
    <section className="relative py-16 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-4xl font-display">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-arabic">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustStrip;
