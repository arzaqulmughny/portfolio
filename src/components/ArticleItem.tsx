import Link from "next/link";

export default function ArticleItem({
  date = "No Date",
  title = "No Title",
  href = "/",
  tags = [],
}: {
  date: string;
  title: string;
  href: string;
  tags: string[];
}) {
  return (
    <div>
      <span className="text-neutral-500">{date}</span>
      <h2 className="font-medium hover:underline cursor-pointer">
        <Link href={href}>{title}</Link>
      </h2>
      <span className="text-neutral-400 text-sm">
        {tags.map((tag) => `#${tag}`).join(" ")}
      </span>
    </div>
  );
}
