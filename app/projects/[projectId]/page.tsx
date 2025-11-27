import { notFound } from "next/navigation";
import { getProjectById } from "../../../data/projects";
import { ProjectDetail } from "../../../components/projects/ProjectDetail";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export function generateStaticParams() {
  // This will generate static pages for all projects at build time
  const projects = [
    { projectId: "payment-escrow" },
    { projectId: "mentorship-platform" },
    { projectId: "design-build" },
    { projectId: "youtube-portfolio" },
  ];

  return projects;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
