import Footer from "@/src/components/Footer";
import ProjectItem from "@/src/components/ProjectItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";

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
          A collection of projects I’ve worked on — both personal experiments
          and professional work done for companies. Each one reflects a step in
          my journey of learning and building meaningful software.
        </p>
      </section>

      {/* Personal Projects */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Personal Projects</h2>
        
        {personalProjects.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalProjects.map((project) => (
              <li key={project.slug}>
                <ProjectItem
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  link={`/projects/${project.slug}`}
                  showThumbnail={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-300">No personal projects available.</p>
        )}
      </section>

      {/* Company Projects */}
      <section className="flex flex-col gap-5 mt-10">
        <h2 className="text-xl font-semibold">Company Projects</h2>
        
        {companyProjects.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyProjects.map((project) => (
              <li key={project.slug}>
                <ProjectItem
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  link={`/projects/${project.slug}`}
                  showThumbnail={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-300">No company projects available.</p>
        )}
      </section>

      <Footer />
    </>
  );
}