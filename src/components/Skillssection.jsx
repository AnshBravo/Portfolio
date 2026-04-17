import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import htmlIcon from "../assets/skills-icon/html-5 logo.png";
import cssIcon from "../assets/skills-icon/CSS logo.png";
import jsIcon from "../assets/skills-icon/javascript logo.png";
import figmaIcon from "../assets/skills-icon/Figma logo.png";
import canvaIcon from "../assets/skills-icon/Canva logo.png";
import reactIcon from "../assets/skills-icon/devicon_react-wordmark.png";
import tailwindIcon from "../assets/skills-icon/tailwind_css logo.png";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindIcon }
];
const workflows = [
  "Responsive UI Systems",
  "Component Architecture",
  "Motion Design with Framer Motion",
  "Wireframe to Production Handoff",
  "Accessibility and Performance Audits",
];

const Skills = () => {

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="section-eyebrow">Expertise</p>
            <h2 className="section-title mt-3">Technical capabilities that power every build.</h2>
            <p className="section-copy mt-4">
              I build modern frontend experiences with an emphasis on maintainable components, motion-rich
              interactions, and responsive behavior across device contexts.
            </p>

            <div className="mt-8 space-y-3">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <CheckCheck size={16} className="text-sky-200" />
                  <p className="text-sm text-white/80">{workflow}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="section-eyebrow">Tool Stack</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`mx-auto h-14 w-14 object-contain ${
                      skill.name === "Tailwind CSS" ? "scale-[1.25]" : ""
                    }`}
                  />
                  <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/75">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-sky-100/10 to-violet-100/10 p-4"
              animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, ease: "linear", repeat: Infinity }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Approach</p>
              <p className="mt-2 text-sm text-white/85">
                I prioritize readability, scalable styling patterns, and meaningful animation that supports clarity—not
                distraction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;