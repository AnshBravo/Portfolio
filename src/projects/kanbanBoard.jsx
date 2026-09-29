import {
  Bot,
  Layers,
  MousePointerClick,
  Radio,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import { getNextProject, getProject } from "../data/projects";

const project = getProject("organizly");

const OrganizlyPage = () => (
  <CaseStudy
    title={project.title}
    eyebrow="Full-Stack · AI Kanban Workspace"
    summary="Organizly is an AI-powered, real-time collaborative Kanban workspace engineered with O(1) fractional reordering, multi-tenant RBAC authorization, and Google Gemini task decomposition."
    liveUrl={project.liveUrl}
    sourceUrl="https://github.com/anshbravo"
    image={project.image}
    imageAlt="Organizly workspace interface preview"
    imageClassName={project.imageClassName}
    imageFrameClassName={project.imageFrameClassName}
    facts={[
      { label: "Role", value: "Full-Stack Engineer · System Architecture" },
      {
        label: "Architecture",
        value: "PERN Stack (PostgreSQL, Express, React, Node) + TypeScript",
      },
      { label: "AI Integration", value: "Google Gemini SDK API" },
    ]}
    highlights={[
      {
        title: "Problem",
        copy: "Collaborative project boards suffer from laggy drag-and-drop state updates, heavy O(N) database index re-writes when moving tasks, and slow task planning overhead.",
      },
      {
        title: "Approach",
        copy: "Engineered floating-point fractional positioning for O(1) card positioning, integrated Google Gemini for automated goal decomposition, and connected Socket.IO for live board state sync.",
      },
      {
        title: "Outcome",
        copy: "A performant, multi-user workspace featuring role-based board permissions, automated AI sprint planning, real-time card transitions, and audit activity trails.",
      },
    ]}
    features={[
      {
        icon: MousePointerClick,
        title: "O(1) Fractional Positioning",
        copy: "Reorders cards and columns using floating-point indices, enabling instant drag-and-drop without $O(N)$ database index update rewrites.",
      },
      {
        icon: Bot,
        title: "Gemini AI Task Breakdown",
        copy: "Parses high-level user prompt goals and automatically generates structured subtask checklists, estimated effort, and sprint risks.",
      },
      {
        icon: Radio,
        title: "Real-Time WebSocket Sync",
        copy: "Socket.IO synchronizes column moves, status updates, card details, and comments instantly across all connected workspace members.",
      },
      {
        icon: ShieldCheck,
        title: "RBAC & Secure Audit Trail",
        copy: "Implements Role-Based Access Control middleware for workspace permissions alongside activity tracking logs and calendar views.",
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
      "Google Gemini API",
      "Tailwind CSS",
    ]}
    detailTitle="Relational precision, AI automation, real-time scale."
    detailCopy="Built with modular layered REST APIs and Prisma ORM, Organizly handles complex relational modeling across users, teams, boards, and subtask checklists. The combination of fractional positioning algorithms and Socket.IO real-time events ensures zero-latency user interaction even during heavy multi-user concurrent board editing."
    next={getNextProject("organizly")}
  />
);

export default OrganizlyPage;
