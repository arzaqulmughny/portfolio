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
    <Link href={link} className="flex flex-col gap-3 group">
      {showThumbnail && thumbnailUrl && (
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-800">
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}
      <h2 className="font-medium text-white truncate group-hover:underline">
        {title}
      </h2>
      <p
        className="text-neutral-400 group-hover:underline"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>
    </Link>
  );
}
