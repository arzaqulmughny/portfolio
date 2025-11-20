import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      'href': '/',
      'title': 'Home'
    },
    {
      'href': '/blogs',
      'title': 'Blog'
    },
    {
      'href': '/projects',
      'title': 'Projects'
    },
    {
      'href': '/about',
      'title': 'About Me'
    },
  ];

  return (
    <>
      <nav className="pt-10">
        <ul className="flex gap-8 text-white">
          {links.map((link, index) => (
            <li key={index} className={`hover:underline cursor-pointer`}><Link href={link.href}>{link.title}</Link></li>
          ))}
        </ul>
      </nav>
    </>
  );
}
