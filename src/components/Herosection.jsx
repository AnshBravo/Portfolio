import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import logoPng from "../assets/Ansh Bravo Brand logo/black-brand-logo.png";

const stats = [
  { value: "React + Framer Motion", label: "Primary build stack" },
  { value: "Design-to-Code", label: "Product-oriented workflow" },
  { value: "Accessibility First", label: "Usability-driven implementation" },
];

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden pb-18 pt-30 sm:pb-22 sm:pt-34">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-sky-300/10 blur-[110px]" />
        <div className="absolute -left-8 top-[45%] h-[220px] w-[220px] rounded-full bg-indigo-300/10 blur-[90px]" />
      </div>

      <div className="premium-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <Sparkles size={14} />
              Portfolio 2026
            </p>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Crafting <span className="text-gradient">high-impact digital interfaces</span> for brands and products.
              </h1>
              <p className="section-copy max-w-2xl text-base sm:text-lg">
                I&apos;m Ansh Bravo, a frontend developer focused on translating product goals into high-performance,
                conversion-friendly web experiences. I blend React architecture, motion systems, and clean UX logic to
                create interfaces people enjoy using.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={scrollToWork} className="btn-primary">
                Explore Case Studies
                <ArrowDownRight size={15} />
              </button>
              <a href="mailto:anshbravo99@gmail.com" className="btn-secondary">
                Book a Conversation
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="glass-card shine-border relative overflow-hidden p-7 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/8 via-transparent to-violet-200/10" />

            <div className="relative space-y-8">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-8 sm:p-10">
                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
                  <img src={logoPng} alt="Ansh Bravo signature logo" className="h-28 w-auto object-contain" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="soft-divider" />
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Current Focus</p>
                <p className="text-base text-white/80">
                  Building professional-grade user interfaces, improving frontend quality systems, and pursuing
                  internship opportunities where design and engineering excellence matter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
