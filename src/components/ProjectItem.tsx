import Link from "next/link";

export default function ProjectItem({
  title,
  description,
  link,
  showThumbnail = false,
  thumbnailUrl,
}: {
  title: string;
  description: string;
  link: string;
  showThumbnail?: boolean;
  thumbnailUrl?: string;
}) {
  return (
    <Link href={link} className="flex flex-col gap-3">
      {showThumbnail && thumbnailUrl && (
        <img src={thumbnailUrl} alt={title} />
      )}
      <h2 className="font-medium text-white">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </Link>
  );
}