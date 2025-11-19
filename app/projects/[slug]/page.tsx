import Title from "@/src/components/Title";
import { getMarkdownBySlug, getMarkdownFiles } from "@/src/lib/markdown";
import { Metadata } from "next";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = getMarkdownBySlug("src/projects", slug);

  if (!project) {
    return <div className="text-center py-10">Project not found.</div>;
  }

  // Convert Markdown -> HTML
  const processedContent = remark()
    .use(html)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html)
    .processSync(project.content || "");

  const content = processedContent.toString();

  return (
    <>
      <section>
        <p className="text-sm text-gray-500">{project?.frontmatter.date}</p>
        <div className="flex flex-col gap-4">
          <div>
            <Title>{project?.frontmatter.title}</Title>
            <p className="text-sm text-gray-500">
              {project?.frontmatter.tags
                .map((tag: string) => `#${tag}`)
                .join(" ")}
            </p>
          </div>

          <img
            src={project?.frontmatter.bannerUrl}
            alt={project?.frontmatter.title}
            title={project?.frontmatter.title}
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
  const projects = getMarkdownFiles("src/projects");

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getMarkdownBySlug("src/projects", params.slug);

  return {
    title: project?.frontmatter?.title ?? "Proyek - Arza",
    description: project?.frontmatter?.description ?? "Proyek oleh Arza.",
    openGraph: {
      title: project?.frontmatter?.title,
      description: project?.frontmatter?.description,
    },
  };
}
