import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="project" className="relative py-16 sm:py-20">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="section-title mt-3">
              Case studies shipped to production.
            </h2>
          </div>
          <p className="section-copy max-w-md">
            Full-stack web applications and interactive platforms covering
            real-time sync, AI integrations, PostgreSQL data modeling, and
            polished interfaces. Every project is live.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass-card group flex flex-col overflow-hidden p-3 transition-colors duration-300 hover:border-white/30"
            >
              <Link
                to={project.route}
                className={`relative block aspect-[4/3] overflow-hidden rounded-2xl ${project.imageFrameClassName}`}
                aria-label={`Read the ${project.title} case study`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${project.imageClassName}`}
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </Link>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6">
                  <Link
                    to={project.route}
                    className="btn-secondary flex-1 px-4! py-2.5! text-xs!"
                  >
                    Case study
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-black! flex-1 px-4! py-2.5! text-xs!"
                  >
                    Live site
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
