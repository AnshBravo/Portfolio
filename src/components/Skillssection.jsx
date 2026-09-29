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
  // Frontend & UI
  { name: "React", icon: reactIcon },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },

  // Backend & Databases
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma ORM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },

  // Real-Time, Cloud & Tools
  {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "AWS S3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
];

const workflows = [
  "Full-Stack Web Architecture (PERN)",
  "RESTful API & Middleware Design",
  "Real-Time Messaging & Sockets",
  "Relational Schema & Database Indexing",
  "Responsive UI Systems & Motion Design",
  "Direct S3 Media Upload Pipelines",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="premium-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Workflow & Capabilities Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="section-eyebrow">Expertise</p>
            <h2 className="section-title mt-3">
              Technical capabilities that power every build.
            </h2>
            <p className="section-copy mt-4">
              I build scalable full-stack applications with an emphasis on
              robust backend APIs, maintainable database schemas, real-time
              sync, and modern motion-rich user interfaces.
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
                  <CheckCheck size={16} className="text-sky-200 shrink-0" />
                  <p className="text-sm text-white/80">{workflow}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Grid of Tool Stack */}
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
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/30"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`mx-auto h-12 w-12 object-contain ${
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
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                Approach
              </p>
              <p className="mt-2 text-sm text-white/85">
                I prioritize end-to-end type safety, scalable database
                normalization, efficient query execution, and clean component
                structures.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
