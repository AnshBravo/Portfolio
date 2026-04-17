import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logoPng from "../assets/Ansh Bravo Brand logo/black-brand-logo.png";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Expertise" },
  { id: "project", label: "Projects" },
  { id: "contactme", label: "Contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.32;
      const activeLink =
        links.find((link) => {
          const section = document.getElementById(link.id);
          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();
          return rect.top <= triggerLine && rect.bottom >= triggerLine;
        }) ?? links[0];

      setActiveTab(activeLink.label);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const jumpToSection = (id, label) => {
    const target = document.getElementById(id);
    setActiveTab(label);
    setIsOpen(false);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="premium-container pt-3 sm:pt-4">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`rounded-2xl border bg-[#070c18]/85 px-4 py-3 backdrop-blur-2xl sm:px-5 lg:px-6 ${
            isScrolled ? "border-white/20 shadow-[0_20px_45px_rgba(1,8,20,0.45)]" : "border-white/12"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => jumpToSection("home", "Home")}
              className="group inline-flex items-center gap-3 text-left"
              aria-label="Navigate to home section"
            >
              <img
                src={logoPng}
                alt="Ansh Bravo logo"
                className="h-8 w-auto rounded-full bg-white/90 p-1 shadow-sm sm:h-9"
              />
              <div className="leading-tight">
                <p className="font-display text-sm text-white sm:text-base">Ansh Bravo</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
                  Frontend Developer
                </p>
              </div>
            </button>

            <nav className="hidden md:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                {links.map((item) => {
                  const isActive = activeTab === item.label;
                  return (
                    <li key={item.id} className="relative">
                      <button
                        type="button"
                        onClick={() => jumpToSection(item.id, item.label)}
                        className={`relative z-10 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors lg:px-5 ${
                          isActive ? "text-slate-950" : "text-white/75 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-nav-pill"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100"
                            transition={{ type: "spring", damping: 24, stiffness: 320 }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a
              href="mailto:anshbravo99@gmail.com"
              className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/[0.12] lg:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.div>

        <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-200 via-white to-violet-200"
            style={{ scaleX: scrollProgress, transformOrigin: "0% 50%" }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="premium-container mt-3 md:hidden"
          >
            <div className="glass-card p-4">
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => jumpToSection(item.id, item.label)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${
                        activeTab === item.label
                          ? "bg-white/15 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
