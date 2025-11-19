import ArticleItem from "@/src/components/ArticleItem";
import Title from "@/src/components/Title";
import { getMarkdownFiles } from "@/src/lib/markdown";
import type { Metadata } from "next";


export default function Page() {
  const articles = getMarkdownFiles("src/articles");

  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Blog</Title>
        <p className="text-neutral-300">
          Kumpulan artikel yang saya tulis untuk membagi pengetahuan dan
          pengalaman tentang teknologi, pengembangan perangkat lunak, dan dunia
          kerja.
        </p>
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

export const metadata: Metadata = {
  title: "Blog - Arzaqul Mughny Al Fawwaz",
  description: "Kumpulan artikel yang saya tulis untuk membagi pengetahuan dan pengalaman tentang teknologi, pengembangan perangkat lunak, dan dunia kerja.",
};
