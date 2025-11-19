import Link from "next/link";

export default function ProjectItem({
  title,
  description,
  link,
  showThumbnail = false,
}: {
  title: string;
  description: string;
  link: string;
  showThumbnail?: boolean;
}) {
  return (
    <Link href={link}>
      <h2 className="font-medium text-neutral-500">{title}</h2>
      {showThumbnail && (
        <img src="https://i.ibb.co/1R3323n/laravel.png" alt="" />
      )}
      <p className="text-white">{description}</p>
    </Link>
  );
}