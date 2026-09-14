import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import TagList from "../components/project-detail/TagList";
import ImageGallery from "../components/project-detail/ImageGallery";
import TextBlock from "../components/project-detail/TextBlock";
import FindingBox from "../components/project-detail/FindingBox";
import FeatureList from "../components/project-detail/FeatureList";
import StatsGrid from "../components/project-detail/StatsGrid";
import ToolsList from "../components/project-detail/ToolsList";
import TestNote from "../components/project-detail/TestNote";
import ActionButtons from "../components/project-detail/ActionButtons";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="w-full min-h-screen p-8" style={{ backgroundColor: "#F4EFE6" }}>
        <p className="text-xl">Project not found.</p>
        <Link to="/" className="underline mt-4 inline-block">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8" style={{ backgroundColor: "#F4EFE6" }}>
      <div className="max-w-6xl mx-auto pt-4">
        <Link to="/work" className="flex items-center gap-2 text-sm w-fit hover:opacity-70 transition">
          <span>&larr;</span> Back to projects
        </Link>

        <div className="h-10"></div>

        <p className="text-3xl font-bold mb-2 inline-block border-b-4" style={{ borderColor: "#88B78B" }}>
          {project.title}
        </p>

        <TagList tags={project.tags} />

        <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
          {project.desc}
        </p>

        <ImageGallery images={project.images} title={project.title} />
        <TextBlock paragraphs={project.longDesc} />
        <FindingBox finding={project.usabilityFinding} color="#F3C89E" />
        <FindingBox finding={project.securityFinding} color="#C3D8E8" />
        <ToolsList tools={project.tools} />
        <FeatureList features={project.features} />
        <StatsGrid stats={project.stats} />
        <TestNote show={project.testNote} />
        <ActionButtons liveUrl={project.liveUrl} codeUrl={project.codeUrl} secondaryUrl={project.secondaryUrl} />
      </div>
    </div>
  );
}