import ProjectItem from "@/src/components/ProjectItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";
import type { Metadata } from "next";

export default function Projects() {
  const projects = getMarkdownFiles("src/projects");

  const personalProjects = projects.filter(
    (project) => project.frontmatter.category === "personal"
  );

  const companyProjects = projects.filter(
    (project) => project.frontmatter.category === "company"
  );

  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Projects</Title>
        <p className="text-neutral-300">
          A collection of projects I’ve built, from personal experiments to
          professional work, all part of my journey in creating meaningful
          software.
        </p>
      </section>

      {/* Company Projects */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Company Projects</h2>

        {companyProjects.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-15">
            {companyProjects.map((project) => (
              <li key={project.slug}>
                <ProjectItem
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  link={`/projects/${project.slug}`}
                  showThumbnail={true}
                  thumbnailUrl={project.frontmatter.bannerUrl}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500">No company projects available.</p>
        )}
      </section>

      {/* Personal Projects */}
      <section className="flex flex-col gap-5 mt-10">
        <h2 className="text-xl font-semibold">Personal Projects</h2>

        {personalProjects.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-15">
            {personalProjects.map((project) => (
              <li key={project.slug}>
                <ProjectItem
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  link={`/projects/${project.slug}`}
                  showThumbnail={true}
                  thumbnailUrl={project.frontmatter.bannerUrl}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500">No personal projects available.</p>
        )}
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects - Arzaqul Mughny Al Fawwaz",
  description:
    "A collection of projects I’ve built, from personal experiments to professional work, part of my journey in creating software.",
};
