import ArticleItem from "@/src/components/ArticleItem";
import ProjectItem from "@/src/components/ProjectItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";

export default function Home() {
  const articles = getMarkdownFiles("src/articles", { limit: 3 });
  const projects = getMarkdownFiles("src/projects", { limit: 3 });

  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Halo, saya Arza👋</Title>
        <p className="text-neutral-300">
          Ini adalah ruang tempat saya membagikan proyek yang saya kerjakan dan
          pemikiran saya melalui tulisan blog. Semuanya di sini mencerminkan
          perjalanan saya dalam belajar dan berkembang di dunia teknologi.
        </p>

        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/arzaqul/"
              className="text-sky-500 text-sm hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/arzaqulmughny"
              className="text-sky-500 text-sm hover:underline"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Artikel Terbaru</Title>
        {articles.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <ArticleItem
                  date={article.frontmatter.date}
                  title={article.frontmatter.title}
                  tags={article.frontmatter.tags}
                  href={`/blogs/${article.slug}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-300">No articles available.</p>
        )}
      </section>

      <section className="flex flex-col gap-5">
        <Title>Proyek Terbaru</Title>
        {projects.length > 0 ? (
          <ul className="flex flex-col gap-6">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectItem
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  link={`/projects/${project.slug}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-300">No projects available.</p>
        )}
      </section>
    </>
  );
}
