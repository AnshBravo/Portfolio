import {
  MessageSquare,
  CloudUpload,
  ShieldCheck,
  Database,
  Radio,
  Sparkles,
} from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import { getNextProject, getProject } from "../data/projects";

const project = getProject("zap");

const ZapPage = () => (
  <CaseStudy
    title={project.title}
    eyebrow="Full-Stack · Social Networking Platform"
    summary="Zap is a full-stack social networking application engineered for real-time messaging, instant notifications, and direct cloud media uploads with optimized relational data modeling."
    liveUrl={project.liveUrl}
    sourceUrl="https://github.com/anshbravo"
    image={project.image}
    imageAlt="Zap platform preview"
    imageClassName={project.imageClassName}
    imageFrameClassName={project.imageFrameClassName}
    facts={[
      { label: "Role", value: "Full-Stack Engineer · System Architecture" },
      {
        label: "Architecture",
        value: "PERN Stack (PostgreSQL, Express, React, Node) + TypeScript",
      },
      {
        label: "Deployment",
        value: "Vercel Client & Express/Node Web Service",
      },
    ]}
    highlights={[
      {
        title: "Problem",
        copy: "Traditional social web feeds suffer from high server processing overhead during image uploads, sluggish page refreshes, and delayed user notifications.",
      },
      {
        title: "Approach",
        copy: "Implemented an S3 presigned URL pipeline for direct client-to-cloud media uploads, Socket.IO for duplex communication, and indexed PostgreSQL queries via Prisma ORM.",
      },
      {
        title: "Outcome",
        copy: "A performant social platform with instant messaging, live notification feeds, secure token authentication, and optimized paginated query responses.",
      },
    ]}
    features={[
      {
        icon: Radio,
        title: "Real-Time Socket.IO Engine",
        copy: "Powers instant 1-on-1 messaging, live user online/offline status indicators, and instant notification alerts.",
      },
      {
        icon: CloudUpload,
        title: "Direct AWS S3 Pipeline",
        copy: "Utilizes AWS SDK presigned URLs allowing client browsers to upload media directly to S3, bypassing application server memory limits.",
      },
      {
        icon: Database,
        title: "PostgreSQL & Prisma ORM",
        copy: "Relational schema design supporting follower networks, post interactions (likes, comments), and paginated feed indexing.",
      },
      {
        icon: ShieldCheck,
        title: "JWT & HTTP-Only Auth",
        copy: "Secure token-based authentication paired with custom authorization middleware protecting API routes and websocket connections.",
      },
    ]}
    stack={[
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "AWS S3",
      "Tailwind CSS",
    ]}
    detailTitle="High concurrency, direct cloud delivery."
    detailCopy="Designed with a modular layered architecture, Zap decouples media transport from application processing through AWS S3 presigned endpoints. WebSockets maintain persistent duplex connections for real-time engagement while Prisma manages relational integrity across posts, interactions, and user profiles."
    next={getNextProject("zap")}
  />
);

export default ZapPage;
