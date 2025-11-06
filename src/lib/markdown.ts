import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Reads markdown files from a given directory.
 * @param folder - Relative path from the project root (default: "src/articles")
 * @param limit - Maximum number of items to return (optional)
 * @returns Array of objects containing { slug, frontmatter }
 */
export function getMarkdownFiles(folder = "src/articles", { limit }: { limit?: number } = {}) {
  const dirPath = path.join(process.cwd(), folder);

  // Validate directory
  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ Directory "${folder}" not found.`);
    return [];
  }

  // Get all .md or .mdx files
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  // Read and parse each file
  const items = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const filePath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContents);

    return { slug, frontmatter };
  });

  // Optional: sort by date if provided
  items.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0).getTime();
    const dateB = new Date(b.frontmatter.date || 0).getTime();
    return dateB - dateA;
  });

  // Limit the number of results
  return limit ? items.slice(0, limit) : items;
}

/**
 * Reads a single markdown file by folder and slug.
 * @param folder - Relative path from the project root (default: "src/articles")
 * @param slug - File name without extension (e.g., "my-first-post")
 * @returns Object containing { slug, frontmatter, content } or null if not found
 */
export function getMarkdownBySlug(folder = "src/articles", slug: string) {
  const dirPath = path.join(process.cwd(), folder);
  const filePathMd = path.join(dirPath, `${slug}.md`);
  const filePathMdx = path.join(dirPath, `${slug}.mdx`);

  // Check which file exists (.md or .mdx)
  let filePath = "";
  if (fs.existsSync(filePathMd)) filePath = filePathMd;
  else if (fs.existsSync(filePathMdx)) filePath = filePathMdx;
  else {
    console.warn(`⚠️ File "${slug}" not found in "${folder}".`);
    return null;
  }

  // Read file content and parse frontmatter
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContents);

  return { slug, frontmatter, content };
}
