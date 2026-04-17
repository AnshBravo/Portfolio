import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contactme" className="pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="glass-card p-6 sm:p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <p className="section-eyebrow">Collaboration</p>
              <h2 className="section-title">Let&apos;s build a polished digital experience together.</h2>
              <p className="section-copy max-w-2xl">
                I&apos;m available for frontend internships, freelance UI implementation, and product-focused web
                builds. If your team values clean execution and strong design fidelity, let&apos;s connect.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/50">Available for</p>
                  <p className="mt-2 text-sm text-white/85">Internships · Junior Frontend Roles · Freelance Projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/50">Preferred focus</p>
                  <p className="mt-2 text-sm text-white/85">React interfaces, design systems, and motion-driven UX.</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="mailto:anshbravo99@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-sky-100" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/50">Email</p>
                    <p className="text-sm text-white/85">anshbravo99@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="tel:+917838895169"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-sky-100" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/50">Phone</p>
                    <p className="text-sm text-white/85">+91 78388 95169</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/anshbravo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-sky-100" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/50">GitHub</p>
                    <p className="text-sm text-white/85">github.com/anshbravo</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          <div className="soft-divider my-7" />
          <div className="flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p className="tracking-[0.15em] uppercase">Designed & Built by Ansh Bravo</p>
            <p className="tracking-[0.18em] uppercase">Portfolio 2026 · React + Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;