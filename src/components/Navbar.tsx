import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_4px_30px_hsla(var(--glow),0.1)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-xl font-display font-bold tracking-wider">
            <span className="gradient-text">KON</span>
            <span className="text-muted-foreground ml-1 font-light text-sm">Unlimited</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("why-us")} className="hover:text-foreground transition-colors duration-300">لماذا نحن</button>
            <button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors duration-300">الخدمات</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-foreground transition-colors duration-300">المشاريع</button>
            <button onClick={() => scrollTo("cases")} className="hover:text-foreground transition-colors duration-300">النتائج</button>
            <button
              onClick={onBookClick}
              className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium glow-button relative overflow-hidden group"
            >
              <span className="relative z-10">استشارة مجانية</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong pt-20 flex flex-col items-center gap-6 text-lg font-arabic"
          >
            <button onClick={() => scrollTo("why-us")} className="text-foreground">لماذا نحن</button>
            <button onClick={() => scrollTo("services")} className="text-foreground">الخدمات</button>
            <button onClick={() => scrollTo("projects")} className="text-foreground">المشاريع</button>
            <button onClick={() => scrollTo("cases")} className="text-foreground">النتائج</button>
            <button
              onClick={() => { setMobileOpen(false); onBookClick(); }}
              className="gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium glow-button mt-4"
            >
              استشارة مجانية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
