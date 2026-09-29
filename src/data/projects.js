import tripNomadImage from "../assets/projects cover images/Trip Nomad.png";
import zapImage from "../assets/projects cover images/Zap logo white.png";
import organizlyImage from "../assets/projects cover images/Organizly hero.png";

export const projects = [
  {
    slug: "tripnomad",
    title: "Trip Nomad",
    category: "AI Travel Platform",
    description:
      "An AI travel assistant that turns loose preferences into structured destinations and day-by-day itineraries.",
    image: tripNomadImage,
    imageClassName: "object-cover",
    imageFrameClassName: "bg-zinc-900",
    route: "/projects/tripnomad",
    liveUrl: "https://tripnomad.netlify.app",
    tags: ["React", "Gemini API", "Framer Motion"],
  },
  {
    slug: "zap",
    title: "Zap",
    category: "Full-Stack Social Network",
    description:
      "A PERN + TypeScript social platform with real-time messaging, live notifications, and direct-to-S3 media uploads.",
    image: zapImage,
    imageClassName: "object-contain p-10",
    imageFrameClassName: "bg-white",
    route: "/projects/zap",
    liveUrl: "https://zap-kappa-lac.vercel.app",
    tags: ["TypeScript", "PostgreSQL", "Socket.IO", "AWS S3"],
  },
  {
    slug: "organizly",
    title: "Organizly",
    category: "AI Collaborative Kanban",
    description:
      "An AI-powered Kanban workspace with O(1) drag-and-drop reordering, Gemini task breakdowns, and real-time multi-user sync.",
    image: organizlyImage,
    imageClassName: "object-contain p-10",
    imageFrameClassName: "bg-gradient-to-br from-violet-200/90 via-white to-sky-100",
    route: "/projects/organizly",
    liveUrl: "https://kanban-ai-five-blue.vercel.app",
    tags: ["TypeScript", "Gemini API", "Socket.IO", "RBAC"],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
