import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import kaizenImg from "../assets/projects cover images/kaizenai.png";

const KaizenAI = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.05]);

  const highlights = [
    {
      title: "Vision",
      copy: "Transform broad ambitions into practical daily actions using a focused AI-assisted workflow.",
    },
    {
      title: "UX principle",
      copy: "Maintain a clean interaction canvas so users stay oriented while processing rich productivity data.",
    },
    {
      title: "Delivery",
      copy: "A motion-enhanced React interface that balances motivation, clarity, and consistent visual hierarchy.",
    },
  ];

  const stack = ["React", "Tailwind CSS", "Framer Motion", "Habit Loop UX"];

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#05070d]/70 backdrop-blur-xl">
        <div className="premium-container flex items-center justify-between py-5">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-[11px] uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
          >
            ← Back to Home
          </button>
          <div className="hidden items-center gap-6 sm:flex">
            <a
              href="https://aikaizen.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              Live site
              <ExternalLink size={13} />
            </a>
            <Link
              to="/projects/bmicali"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              Next project
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </nav>

      <main className="premium-container space-y-18 pb-20 pt-30 sm:space-y-20 sm:pt-34">
        <section className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="section-eyebrow">AI Productivity · Product Case Study</p>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">Kaizen AI</h1>
            <p className="section-copy">
              Kaizen AI helps users convert big goals into repeatable micro-habits. The interface is designed to keep
              progress visible and reduce friction in daily planning.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/50">Role</p>
                <p className="mt-2 text-sm text-white/85">Frontend Development · Product UX · Motion System</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/50">Objective</p>
                <p className="mt-2 text-sm text-white/85">Build sustained user momentum through clear, encouraging UX.</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: imageY, scale: imageScale }} className="glass-card overflow-hidden p-3 sm:p-4">
            <img
              src={kaizenImg}
              alt="Kaizen AI interface preview"
              className="h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
            />
          </motion.div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card p-5"
            >
              <p className="section-eyebrow">{item.title}</p>
              <p className="mt-3 text-sm text-white/80">{item.copy}</p>
            </motion.article>
          ))}
        </section>

        <section className="glass-card p-6 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-eyebrow">Execution details</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Designed for consistency and reward loops.</h2>
              <p className="mt-4 text-sm text-white/75 sm:text-base">
                This build focused on reducing cognitive load while preserving motivation. Typography hierarchy,
                contrast, and pacing were tuned to support frequent user interaction without visual fatigue.
              </p>
            </div>

            <div>
              <p className="section-eyebrow">Technology stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-divider my-7" />
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://aikaizen.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Live Project
              <ExternalLink size={15} />
            </a>
            <Link to="/projects/bmicali" className="btn-secondary">
              Next: BMI Calculator
              <ArrowRight size={15} />
            </Link>
            <a href="/#project" className="btn-secondary">
              Back to all projects
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KaizenAI;
