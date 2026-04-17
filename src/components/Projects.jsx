import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import tripNomadImage from "../assets/projects cover images/Trip Nomad.png";
import bmiCaliImage from "../assets/projects cover images/Black & White Minimalist Business Logo.png";
import kaizenaiImage from "../assets/projects cover images/kaizenai.png";

const projects = [
  {
    id: 1,
    title: "Trip Nomad",
    category: "Travel Tech · AI Experience",
    summary:
      "A guided itinerary builder that translates user intent into practical travel suggestions through conversational UX.",
    impact: "Case study on intent-driven UI and clean interaction flow.",
    image_url: tripNomadImage,
    route: "/projects/tripnomad",
    stack: ["React", "Framer Motion", "Gemini API"],
  },
  {
    id: 2,
    title: "Kaizen AI",
    category: "Productivity · Habit System",
    summary:
      "An AI-assisted productivity interface that decomposes ambitious goals into clear, repeatable micro-actions.",
    impact: "Focus on clarity, momentum, and persuasive product UX.",
    image_url: kaizenaiImage,
    route: "/projects/kaizen",
    stack: ["React", "Tailwind", "Motion UI"],
  },
  {
    id: 3,
    title: "BMI Calculator",
    category: "Utility · UX Refinement",
    summary:
      "A functional health utility reimagined with elevated visual hierarchy, better feedback loops, and conversion-ready design.",
    impact: "Showcases evolution from basic script to branded product experience.",
    image_url: bmiCaliImage,
    route: "/projects/bmicali",
    stack: ["JavaScript", "UI Architecture", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section id="project" className="relative py-16 sm:py-20">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="space-y-5"
        >
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title max-w-3xl">Case studies designed with product intent and execution quality.</h2>
          <p className="section-copy max-w-3xl">
            Each project combines interface strategy, visual refinement, and frontend engineering discipline. Explore
            the breakdowns for architecture, decisions, and outcomes.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <Link
                to={project.route}
                className="group grid gap-0 lg:grid-cols-[1.15fr_0.85fr]"
                aria-label={`Open case study for ${project.title}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="h-full w-full min-h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="section-eyebrow">{project.category}</p>
                    <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{project.title}</h3>
                    <p className="mt-4 text-sm text-white/70 sm:text-base">{project.summary}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/45">{project.impact}</p>
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">
                    Read case study
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;