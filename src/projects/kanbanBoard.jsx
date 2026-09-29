import { Bot, Layers, MousePointerClick, Radio } from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import { getNextProject, getProject } from "../data/projects";

const project = getProject("organizly");

const OrganizlyPage = () => (
  <CaseStudy
    title={project.title}
    eyebrow="Collaborative Workspace · Real-Time Systems"
    summary="Organizly is an AI-powered, real-time Kanban platform engineered with multi-tenant board authorization, drag-and-drop fractional positioning, and Socket.IO synchronization."
    liveUrl={project.liveUrl}
    sourceUrl="https://github.com/anshbravo"
    image={project.image}
    imageAlt="Organizly workspace illustration"
    imageClassName={project.imageClassName}
    imageFrameClassName={project.imageFrameClassName}
    facts={[
      { label: "Role", value: "Full-Stack Development · Data Modeling · UX" },
      { label: "AI", value: "Gemini-powered task breakdown and sprint risk insights" },
    ]}
    highlights={[
      {
        title: "Problem",
        copy: "Teams lose momentum when boards drift out of sync and large tasks sit unplanned.",
      },
      {
        title: "Approach",
        copy: "Combined live WebSocket updates with AI that decomposes work into actionable subtasks.",
      },
      {
        title: "Outcome",
        copy: "A shared workspace where every change appears instantly and planning takes seconds.",
      },
    ]}
    features={[
      {
        icon: Radio,
        title: "Live collaboration",
        copy: "Socket.IO keeps every board, card, and comment in sync across all connected teammates.",
      },
      {
        icon: MousePointerClick,
        title: "O(1) drag-and-drop",
        copy: "Fractional indexing reorders cards without recalculating the positions of the whole list.",
      },
      {
        icon: Bot,
        title: "AI task decomposition",
        copy: "Gemini generates subtasks and flags sprint risks so planning stays ahead of delivery.",
      },
      {
        icon: Layers,
        title: "RBAC & audit trail",
        copy: "Granular role permissions, an activity log, calendar views, and a global command palette.",
      },
    ]}
    stack={["React", "PostgreSQL", "Socket.IO", "Gemini API", "RBAC Middleware"]}
    detailTitle="Relational data meets real-time sync."
    detailCopy="Organizly pairs PostgreSQL relational modeling with low-latency WebSockets for instantaneous task coordination, while fractional positioning makes reordering cards cheap and conflict-free during drag-and-drop."
    next={getNextProject("organizly")}
  />
);

export default OrganizlyPage;
