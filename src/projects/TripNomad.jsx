import CaseStudy from "../components/CaseStudy";
import { getNextProject, getProject } from "../data/projects";

const project = getProject("tripnomad");

const TripNomadPage = () => (
  <CaseStudy
    title={project.title}
    eyebrow="Travel Tech · Product Case Study"
    summary="Trip Nomad is an AI-powered travel assistant built to simplify planning. The product converts loose user preferences into structured destination options and practical itinerary suggestions."
    liveUrl={project.liveUrl}
    image={project.image}
    imageAlt="Trip Nomad project preview"
    imageClassName={project.imageClassName}
    imageFrameClassName={project.imageFrameClassName}
    facts={[
      { label: "Role", value: "Frontend Development · UX Structuring · Motion Design" },
      { label: "Goal", value: "Reduce planning friction and improve decision confidence." },
    ]}
    highlights={[
      {
        title: "Problem",
        copy: "Travel planning tools often overload users with data, creating friction before decision-making even starts.",
      },
      {
        title: "Approach",
        copy: "Designed a guided prompt flow where user intent translates into clear destination and itinerary recommendations.",
      },
      {
        title: "Outcome",
        copy: "A cleaner product experience with better content hierarchy and confidence-driven interactions.",
      },
    ]}
    stack={["React", "Framer Motion", "Gemini API", "Responsive Layout System"]}
    detailTitle="From intent to itinerary in a focused UI."
    detailCopy="The interface architecture prioritizes readability and progressive disclosure. Each interaction step reveals only the information users need, helping them move from curiosity to action without cognitive overload."
    next={getNextProject("tripnomad")}
  />
);

export default TripNomadPage;
