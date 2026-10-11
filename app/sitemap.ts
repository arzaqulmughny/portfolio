export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { getMarkdownFiles } from "@/src/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://arza.my.id";

  // Get all article data
  const articles = getMarkdownFiles("src/articles");
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/blogs/${article.slug}`,
    lastModified: new Date(),
  }));

  // Get all projects data
  const projects = getMarkdownFiles("src/projects");
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...projectUrls,
  ];
}
