import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm = ({ isOpen, onClose }: ConsultationFormProps) => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    revenue: "",
    challenge: [] as string[],
    hasSystem: "",
    usesData: "",
    customerSource: [] as string[],
    profitableCampaigns: "",
    additionalInfo: "",
    selectedSlot: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: string, value: string) => {
    setFormData((prev) => {
      const arr = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const next = () => {
    if (step < totalSteps) setStep(step + 1);
    else {
      setSubmitted(true);
    }
  };
  const prev = () => step > 1 && setStep(step - 1);

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-arabic text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder:text-muted-foreground";

  const chipClass = (active: boolean) =>
    `px-4 py-2 rounded-xl text-sm font-arabic cursor-pointer transition-all border ${
      active
        ? "bg-primary/20 border-primary/50 text-foreground"
        : "bg-secondary/30 border-border text-muted-foreground hover:border-primary/30"
    }`;

  const renderStep = () => {
    if (submitted) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="font-arabic text-2xl font-bold text-foreground mb-3">تم الإرسال بنجاح!</h3>
          <p className="text-muted-foreground font-arabic" dir="rtl">
            سنتواصل معك قريبًا لتحديد موعد الاستشارة.
          </p>
        </motion.div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div className="space-y-4" dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-6">المعلومات الأساسية</h3>
            <div>
              <label className="text-sm text-muted-foreground font-arabic mb-1 block">الاسم</label>
              <input className={inputClass} value={formData.name} onChange={(e) => updateField("name", e.target.value)} placeholder="اسمك الكامل" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-arabic mb-1 block">اسم الشركة</label>
              <input className={inputClass} value={formData.company} onChange={(e) => updateField("company", e.target.value)} placeholder="اسم شركتك" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-arabic mb-1 block">القطاع</label>
              <input className={inputClass} value={formData.industry} onChange={(e) => updateField("industry", e.target.value)} placeholder="مثال: تجزئة، تقنية، خدمات..." />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-arabic mb-1 block">حجم الإيرادات السنوية</label>
              <select className={inputClass} value={formData.revenue} onChange={(e) => updateField("revenue", e.target.value)}>
                <option value="">اختر...</option>
                <option value="less-1m">أقل من 1 مليون ريال</option>
                <option value="1-5m">1 - 5 مليون ريال</option>
                <option value="5-20m">5 - 20 مليون ريال</option>
                <option value="20m+">أكثر من 20 مليون ريال</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-3">ما هو أكبر تحدي تواجهه؟</h3>
            <p className="text-sm text-muted-foreground font-arabic mb-6">يمكنك اختيار أكثر من خيار</p>
            <div className="flex flex-wrap gap-3">
              {["ضعف المبيعات", "مشاكل في العمليات", "ضعف الفريق", "عدم وضوح الاستراتيجية", "أخرى"].map((c) => (
                <button key={c} className={chipClass(formData.challenge.includes(c))} onClick={() => toggleArrayField("challenge", c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8" dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-6">الأنظمة والأداء</h3>
            <div>
              <p className="font-arabic text-foreground mb-3">هل لديك نظام واضح لإدارة العمل؟</p>
              <div className="flex gap-3">
                {["نعم", "لا", "جزئيًا"].map((v) => (
                  <button key={v} className={chipClass(formData.hasSystem === v)} onClick={() => updateField("hasSystem", v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-arabic text-foreground mb-3">هل تعتمد على البيانات في اتخاذ القرار؟</p>
              <div className="flex gap-3">
                {["دائمًا", "أحيانًا", "لا"].map((v) => (
                  <button key={v} className={chipClass(formData.usesData === v)} onClick={() => updateField("usesData", v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8" dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-6">النمو والتسويق</h3>
            <div>
              <p className="font-arabic text-foreground mb-3">كيف تحصل على عملائك؟</p>
              <div className="flex flex-wrap gap-3">
                {["إعلانات رقمية", "توصيات", "محتوى", "مبيعات مباشرة", "شراكات", "أخرى"].map((v) => (
                  <button key={v} className={chipClass(formData.customerSource.includes(v))} onClick={() => toggleArrayField("customerSource", v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-arabic text-foreground mb-3">هل الحملات التسويقية مربحة؟</p>
              <div className="flex gap-3">
                {["نعم", "لا", "غير متأكد"].map((v) => (
                  <button key={v} className={chipClass(formData.profitableCampaigns === v)} onClick={() => updateField("profitableCampaigns", v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-3">أخبرنا المزيد</h3>
            <p className="text-sm text-muted-foreground font-arabic mb-6">أخبرنا أكثر عن وضعك الحالي أو أي تفاصيل إضافية</p>
            <textarea
              className={`${inputClass} min-h-[150px] resize-none`}
              value={formData.additionalInfo}
              onChange={(e) => updateField("additionalInfo", e.target.value)}
              placeholder="اكتب هنا..."
            />
          </div>
        );
      case 6:
        return (
          <div dir="rtl">
            <h3 className="font-arabic text-xl font-bold text-foreground mb-3">اختر موعدًا مناسبًا</h3>
            <p className="text-sm text-muted-foreground font-arabic mb-6">اختر الوقت المناسب لك</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "الأحد 10:00 ص",
                "الأحد 2:00 م",
                "الاثنين 10:00 ص",
                "الاثنين 2:00 م",
                "الثلاثاء 10:00 ص",
                "الثلاثاء 2:00 م",
              ].map((slot) => (
                <button
                  key={slot}
                  className={chipClass(formData.selectedSlot === slot)}
                  onClick={() => updateField("selectedSlot", slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass-strong glow-border rounded-2xl w-full max-w-lg relative z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <h2 className="font-display font-bold text-foreground">
                <span className="gradient-text">KON</span> Diagnostic
              </h2>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Progress */}
            {!submitted && (
              <div className="px-6 pt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="font-arabic">الخطوة {step} من {totalSteps}</span>
                  <span>{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gradient-primary rounded-full"
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={submitted ? "done" : step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="flex items-center justify-between p-6 border-t border-border/30">
                <button
                  onClick={prev}
                  disabled={step === 1}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                >
                  <ChevronRight size={16} />
                  <span className="font-arabic">السابق</span>
                </button>
                <button
                  onClick={next}
                  className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-arabic font-medium glow-button flex items-center gap-1"
                >
                  <span>{step === totalSteps ? "إرسال" : "التالي"}</span>
                  <ChevronLeft size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationForm;
