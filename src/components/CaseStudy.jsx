import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = ({
  title,
  eyebrow,
  summary,
  liveUrl,
  sourceUrl,
  image,
  imageAlt,
  imageClassName = "object-cover",
  imageFrameClassName = "",
  facts = [],
  highlights = [],
  features = [],
  stack = [],
  detailTitle,
  detailCopy,
  next,
}) => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.05]);

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070d]/70 backdrop-blur-xl">
        <div className="premium-container flex items-center justify-between py-5">
          <Link
            to="/#project"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft size={13} />
            All projects
          </Link>
          <div className="flex items-center gap-6">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              Live site
              <ExternalLink size={13} />
            </a>
            {next && (
              <Link
                to={next.route}
                className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white sm:inline-flex"
              >
                Next project
                <ArrowRight size={13} />
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="premium-container space-y-16 pb-20 pt-30 sm:space-y-20 sm:pt-34">
        <section className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
            <p className="section-copy">{summary}</p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Live Project
                <ExternalLink size={15} />
              </a>
              {sourceUrl && (
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Github size={15} />
                  GitHub
                </a>
              )}
            </div>

            {facts.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/50">{fact.label}</p>
                    <p className="mt-2 text-sm text-white/85">{fact.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live site`}
            style={{ y: imageY, scale: imageScale }}
            className="glass-card group block overflow-hidden p-3 sm:p-4"
          >
            <div className="mb-3 flex items-center gap-1.5 px-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 truncate rounded-full bg-white/[0.06] px-3 py-1 text-[10px] tracking-wide text-white/50">
                {liveUrl.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <div className={`overflow-hidden rounded-2xl ${imageFrameClassName}`}>
              <img
                src={image}
                alt={imageAlt}
                className={`h-[320px] w-full transition-transform duration-700 group-hover:scale-[1.03] sm:h-[440px] ${imageClassName}`}
              />
            </div>
          </motion.a>
        </section>

        {highlights.length > 0 && (
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
        )}

        {features.length > 0 && (
          <section className="space-y-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Key features</p>
              <h2 className="section-title mt-3">What makes it work.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="glass-card flex gap-4 p-5 sm:p-6"
                  >
                    {Icon && (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-sky-100">
                        <Icon size={18} />
                      </span>
                    )}
                    <div>
                      <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{feature.copy}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        )}

        <section className="glass-card p-6 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="section-eyebrow">Execution details</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{detailTitle}</h2>
              <p className="mt-4 text-sm text-white/75 sm:text-base">{detailCopy}</p>
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
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit Live Project
              <ExternalLink size={15} />
            </a>
            {next && (
              <Link to={next.route} className="btn-secondary">
                Next: {next.title}
                <ArrowRight size={15} />
              </Link>
            )}
            <Link to="/#project" className="btn-secondary">
              Back to all projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudy;
