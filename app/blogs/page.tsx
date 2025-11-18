import ArticleItem from "@/src/components/ArticleItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";

export default function Page() {
  const articles = getMarkdownFiles("src/articles");

  return (
    <>
      <section>
        <Title>Articles</Title>
      </section>

      <section>
        <ul className="flex flex-col gap-10">
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
    </>
  );
}