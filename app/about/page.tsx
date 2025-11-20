import Title from "@/src/components/Title";
import type { Metadata } from "next";

export default function Page() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>About Me</Title>
        <p className="text-neutral-300">
          I am a web programmer focused on growing and encouraging a more mature
          team workflow. I enjoy sharing insights, discussing new ideas, and
          helping identify opportunities for improvement. For me, learning and
          exchanging experiences are key to growing together in the tech world.
        </p>
        <p className="text-neutral-400 text-sm">
          📍 Currently based in Surabaya
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Experience</Title>
        <ul className="flex flex-col gap-3 text-neutral-300">
          <li>
            <strong className="text-white">Web Programmer</strong> — PT Xeno
            Persada Teknologi (January 2024 - Present)
          </li>
          <li>
            <strong className="text-white">
              Project-Based Virtual Intern Front End Developer
            </strong>{" "}
            — Core Initiative x Rakamin Academy (September 2023)
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Certificates</Title>
        <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-300">
          <li>
            Fundamental Web Application Development with React — Dicoding
            Indonesia (2023)
          </li>
          <li>Intermediate Web Development — Dicoding Indonesia (2022)</li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Tech Stack</Title>
        <div className="flex flex-wrap gap-2 text-neutral-200">
          {["Laravel", "React", "PostgreSQL", "MySQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Education</Title>
        <ul className="flex flex-col gap-3 text-neutral-300">
          <li>
            <strong className="text-white">Information System</strong> —
            Universitas Terbuka (August 2024 - Present)
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Contact</Title>
        <p className="text-neutral-300">
          Feel free to reach out for collaboration, freelance work, or just to
          connect!
        </p>
        <ul className="flex flex-col gap-1 text-neutral-400">
          <li>
            📧 <a href="mailto:zaarza03@gmail.com">zaarza03@gmail.com</a>
          </li>
          <li>
            💼{" "}
            <a
              href="https://linkedin.com/in/arzaqul"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/arzaqul
            </a>
          </li>
          <li>
            🌐{" "}
            <a
              href="https://github.com/arzaqulmughny"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/arzaqul
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "About Me - Arzaqul Mughny Al Fawwaz",
  description:
    "About me, Arzaqul Mughny Al Fawwaz, a web programmer focused on growing and encouraging a more mature team workflow.",
};
