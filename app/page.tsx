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
        <Title>Hello, I&apos;am Arza👋</Title>
        <p className="text-neutral-300">
          I&apos;m a software engineer based in Indonesia. I enjoy building web
          applications and solving complex problems. In my free time, I like to
          share my knowledge and experience.
        </p>
        <p className="text-neutral-300">
          I&apos;m currently open to new opportunities where I can contribute my
          skills, grow as a software engineer, and build impactful web
          applications. Feel free to reach out if you&apos;re looking for a
          developer to join your team or collaborate on a project.
        </p>

        <ul className="flex gap-4">
          <li>
            <a
              href="https://docs.google.com/document/d/1qCu7fx35izZEI3tY-46sj7UGhJhLBONniEkDobK_yZk/export?format=pdf"
              className="text-sky-500 text-sm hover:underline"
              target="_blank"
              download="Arzaqul Mughny - Resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/deck/895WvwjVeLF6iLntZ1EadF/Arzaqul-Mughny---Portfolio-2026?node-id=1-27&t=TffCbE2xF5S6kZ68-1"
              className="text-sky-500 text-sm hover:underline"
              target="_blank"
            >
              Portfolio
            </a>
          </li>
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
        <Title>Writing</Title>
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
        <Title>Latest Projects</Title>
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
