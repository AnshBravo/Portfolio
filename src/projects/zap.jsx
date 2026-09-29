import { Gauge, RefreshCw, ShieldCheck, Zap } from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import { getNextProject, getProject } from "../data/projects";

const project = getProject("zap");

const ZapPage = () => (
  <CaseStudy
    title={project.title}
    eyebrow="Full-Stack · High-Performance Platform"
    summary="Zap is a high-throughput full-stack web application built for real-time task workflows, responsive state synchronization, and a seamless user experience from the first click."
    liveUrl={project.liveUrl}
    sourceUrl="https://github.com/anshbravo"
    image={project.image}
    imageAlt="Zap platform logo"
    imageClassName={project.imageClassName}
    imageFrameClassName={project.imageFrameClassName}
    facts={[
      { label: "Role", value: "Full-Stack Development · UI Engineering" },
      { label: "Deployment", value: "Vercel edge & serverless infrastructure" },
    ]}
    highlights={[
      {
        title: "Problem",
        copy: "Workflow tools often feel sluggish, with laggy updates and heavy interfaces that interrupt focus.",
      },
      {
        title: "Approach",
        copy: "Built a lean client with optimized API requests, client-side caching, and instant optimistic UI feedback.",
      },
      {
        title: "Outcome",
        copy: "A fast, dependable platform that stays responsive under load and keeps navigation fluid.",
      },
    ]}
    features={[
      {
        icon: Zap,
        title: "Instant interactions",
        copy: "Optimistic updates and lightweight components keep every action feeling immediate.",
      },
      {
        icon: RefreshCw,
        title: "Real-time state sync",
        copy: "Data stays consistent between client and server without manual refreshes.",
      },
      {
        icon: Gauge,
        title: "Performance-first build",
        copy: "Client-side caching and fast hydration minimize load times and wasted requests.",
      },
      {
        icon: ShieldCheck,
        title: "Secure by default",
        copy: "Authenticated sessions and CSRF protection guard every user-facing operation.",
      },
    ]}
    stack={["React", "Tailwind CSS", "Framer Motion", "Serverless APIs", "Vercel"]}
    detailTitle="Low latency, resilient by design."
    detailCopy="Engineered with a focus on fluid client-server interaction, Zap uses modern full-stack patterns to deliver real-time updates with instant UI responsiveness and resilient error handling, so concurrent operations never block the user."
    next={getNextProject("zap")}
  />
);

export default ZapPage;
