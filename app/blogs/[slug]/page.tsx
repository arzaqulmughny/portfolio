/* eslint-disable @next/next/no-img-element */
import Title from "@/src/components/Title";
import { getMarkdownBySlug, getMarkdownFiles } from "@/src/lib/markdown";
import { Metadata } from "next";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = getMarkdownBySlug("src/articles", slug);

  if (!article) {
    return <div className="text-center py-10">Article not found.</div>;
  }

  // Convert Markdown -> HTML
  const processedContent = remark()
    .use(html)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html)
    .processSync(article.content || "");

  const content = processedContent.toString();

  return (
    <>
      <section>
        <p className="text-sm text-gray-500">{article?.frontmatter.date}</p>
        <div className="flex flex-col gap-4">
          <div>
            <Title>{article?.frontmatter.title}</Title>
            <p className="text-sm text-gray-500">
              {article?.frontmatter.tags
                .map((tag: string) => `#${tag}`)
                .join(" ")}
            </p>
          </div>

          <img
            src={article?.frontmatter.bannerUrl}
            alt={article?.frontmatter.title}
            title={article?.frontmatter.title}
            className="w-full"
          />

          <div
            className="markdown mt-5 prose prose-invert prose-headings:m-0 prose-headings:text-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const articles = getMarkdownFiles("src/articles");

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getMarkdownBySlug("src/articles", params.slug);

  return {
    title: article?.frontmatter?.title ?? "Blog",
    description: article?.frontmatter?.description ?? "Article by Arza",
    openGraph: {
      title: article?.frontmatter?.title,
      description: article?.frontmatter?.description,
    },
  };
}
