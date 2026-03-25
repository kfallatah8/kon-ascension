import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  niche: string;
  status: "completed" | "ongoing";
  description: string;
  results: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "منصة تجارة إلكترونية متكاملة",
    niche: "التجزئة والتجارة الإلكترونية",
    status: "completed",
    description: "إعادة هيكلة كاملة لمنصة بيع إلكترونية مع تحسين رحلة العميل وأتمتة التسويق. نتج عنها زيادة كبيرة في المبيعات وانخفاض في تكلفة الاستحواذ.",
    results: ["+180% مبيعات", "-40% تكلفة اكتساب", "+95% رضا العملاء"],
    tags: ["E-Commerce", "AI Marketing", "UX"],
  },
  {
    title: "نظام تشغيل ذكي لسلسلة مطاعم",
    niche: "المطاعم والضيافة",
    status: "completed",
    description: "تصميم نظام تشغيلي متكامل يشمل إدارة المخزون، جدولة الموظفين، وتحليل أداء الفروع باستخدام الذكاء الاصطناعي.",
    results: ["-35% هدر مخزون", "+60% كفاءة تشغيلية", "12 فرع"],
    tags: ["Operations", "AI", "F&B"],
  },
  {
    title: "استراتيجية نمو لشركة SaaS",
    niche: "التقنية والبرمجيات",
    status: "completed",
    description: "بناء استراتيجية اكتساب عملاء وتحسين معدلات التحويل مع أنظمة تحليل بيانات متقدمة لشركة تقنية ناشئة.",
    results: ["10K+ عميل جديد", "+200% ARR", "3 أشهر"],
    tags: ["SaaS", "Growth", "Analytics"],
  },
  {
    title: "تحول رقمي لمجموعة عقارية",
    niche: "العقارات",
    status: "ongoing",
    description: "مشروع تحول رقمي شامل يشمل أتمتة العمليات، بناء منصة CRM مخصصة، وتطبيق أنظمة ذكية لتسعير العقارات.",
    results: ["أتمتة 80%", "CRM مخصص", "تسعير ذكي"],
    tags: ["Real Estate", "Digital Transformation", "CRM"],
  },
  {
    title: "بناء علامة تجارية لعيادات طبية",
    niche: "الرعاية الصحية",
    status: "ongoing",
    description: "إعادة بناء الهوية والاستراتيجية التسويقية لسلسلة عيادات مع تحسين تجربة المرضى الرقمية ونظام حجز ذكي.",
    results: ["+150% حجوزات", "5 فروع", "نظام ذكي"],
    tags: ["Healthcare", "Branding", "Booking"],
  },
  {
    title: "منظومة تعليم إلكتروني",
    niche: "التعليم والتدريب",
    status: "ongoing",
    description: "تصميم وتطوير منصة تعليمية متكاملة مع تحليل أداء المتعلمين وتوصيات ذكية للمحتوى.",
    results: ["50K+ متعلم", "AI توصيات", "98% رضا"],
    tags: ["EdTech", "AI", "Platform"],
  },
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter(
    (p) => filter === "all" || p.status === filter
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[180px]" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block glass glow-border px-4 py-1.5 rounded-full text-xs font-arabic text-primary mb-6">
              مشاريعنا
            </span>
            <h2 className="font-arabic text-3xl md:text-5xl font-bold text-foreground mb-4" dir="rtl">
              مشاريع في <span className="gradient-text">قطاعات متنوعة</span>
            </h2>
            <p className="text-muted-foreground font-arabic max-w-lg mx-auto text-lg" dir="rtl">
              نفخر بعملنا مع شركات رائدة في مختلف القطاعات
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal>
          <div className="flex justify-center gap-3 mb-12">
            {[
              { key: "all", label: "الكل" },
              { key: "completed", label: "مكتملة" },
              { key: "ongoing", label: "قيد التنفيذ" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as typeof filter)}
                className={`px-6 py-2.5 rounded-xl text-sm font-arabic transition-all duration-300 ${
                  filter === tab.key
                    ? "gradient-primary text-primary-foreground glow-button"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ScrollReveal delay={i * 0.08}>
                  <motion.button
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass glow-border rounded-2xl p-6 text-right w-full group relative overflow-hidden h-full"
                    dir="rtl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                          <span className="glass px-3 py-1 rounded-full text-xs text-primary font-arabic">
                            {project.niche}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-arabic ${
                              project.status === "completed"
                                ? "bg-primary/10 text-primary"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            {project.status === "completed" ? "مكتمل" : "قيد التنفيذ"}
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <h3 className="font-arabic text-lg font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-arabic leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.results.map((result, j) => (
                          <span key={j} className="glass px-3 py-1.5 rounded-lg text-xs font-arabic text-foreground/80 border border-primary/10">
                            {result}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="text-[10px] text-muted-foreground font-display bg-secondary/50 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                </ScrollReveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-strong glow-border rounded-2xl p-8 max-w-lg w-full relative z-10"
              dir="rtl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="glass px-3 py-1 rounded-full text-xs text-primary font-arabic">
                  {selectedProject.niche}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-arabic ${
                    selectedProject.status === "completed"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {selectedProject.status === "completed" ? "✅ مكتمل" : "🔄 قيد التنفيذ"}
                </span>
              </div>

              <h3 className="font-arabic text-2xl font-bold text-foreground mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground font-arabic leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-3 mb-6">
                {selectedProject.results.map((result, i) => (
                  <div key={i} className="flex items-center gap-3 glass rounded-xl p-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-arabic text-foreground text-sm">{result}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="glass px-3 py-1.5 rounded-lg text-xs font-display text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 w-full glass hover:bg-primary/10 text-foreground py-3 rounded-xl font-arabic text-sm transition-colors"
              >
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsShowcase;
