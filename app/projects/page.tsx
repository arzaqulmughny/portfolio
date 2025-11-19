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
        <Title>Proyek</Title>
        <p className="text-neutral-300">
          Kumpulan proyek yang pernah saya buat, mulai dari eksperimen pribadi hingga pekerjaan
          profesional. Semuanya menjadi bagian dari perjalanan saya dalam
          belajar dan membangun software yang bermanfaat.
        </p>
      </section>

      {/* Personal Projects */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Proyek Pribadi</h2>

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
          <p className="text-neutral-300">Belum ada proyek pribadi.</p>
        )}
      </section>

      {/* Company Projects */}
      <section className="flex flex-col gap-5 mt-1">
        <h2 className="text-xl font-semibold">Proyek Perusahaan</h2>

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
          <p className="text-neutral-300">Belum ada proyek perusahaan.</p>
        )}
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Proyek - Arzaqul Mughny Al Fawwaz",
  description: "Kumpulan proyek yang pernah saya buat, mulai dari eksperimen pribadi hingga pekerjaan profesional.",
};
