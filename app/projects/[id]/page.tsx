import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectById, getThumbnail } from "@/lib/projects";
import ProjectDetail from "@/components/layout/sections/project-detail";
import Footer from "@/components/layout/sections/footer";

interface PageParams {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: PageParams) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <>
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Ahmed Kinan Ghbash`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — Ahmed Kinan Ghbash`,
      description: project.oneLiner,
      type: "website",
      images: [{ url: getThumbnail(project), alt: project.title }],
    },
    robots: { index: true, follow: true },
  };
}
