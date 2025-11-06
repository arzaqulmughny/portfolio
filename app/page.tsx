import ArticleItem from "@/src/components/ArticleItem";
import ProjectItem from "@/src/components/ProjectItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";

export default function Home() {
  const articles = getMarkdownFiles("src/articles", { limit: 3 });

  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Hi! I&#39;m Arza 👋</Title>
        <p className="text-neutral-300">
          This is a space where I share the projects I’ve worked on and my
          thoughts through blog posts. Everything here reflects my journey of
          learning and growing in the world of technology.
        </p>

        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/arzaqul/"
              className="text-sky-500 text-sm hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arzaqul/"
              className="text-sky-500 text-sm hover:underline"
            >
              Github
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Latest articles</Title>
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
      </section>

      <section className="flex flex-col gap-5">
        <Title>Featured Projects</Title>
        <ul className="flex flex-col gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <ProjectItem
                title="ERP System"
                description="A web-based ERP built from scratch using Laravel, focusing on modular structure, data migration, and real-time stock sync."
                link="#"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
