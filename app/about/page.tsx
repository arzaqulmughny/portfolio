import Title from "@/src/components/Title";
import Footer from "@/src/components/Footer";

export default function Page() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>About</Title>
        <p className="text-neutral-300">
          I am a software engineer with a passion for building web applications.
          I have experience working with Laravel, React, and other modern web
          technologies. I’m always looking for new challenges and opportunities
          to grow both technically and personally.
        </p>
        <p className="text-neutral-400 text-sm">📍 Based in Surabaya, Indonesia</p>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Experience</Title>
        <ul className="flex flex-col gap-3 text-neutral-300">
          <li>
            <strong className="text-white">Web Developer</strong> — PT Digital
            Inovasi (2023–Present)
            <br />
            Building and maintaining ERP modules using Laravel and PostgreSQL.
          </li>
          <li>
            <strong className="text-white">Frontend Intern</strong> —
            CreativeLabs (2022–2023)
            <br />
            Assisted in developing internal dashboards with React and Tailwind
            CSS.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Certificates</Title>
        <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-300">
          <li>Laravel Developer Certification — Udemy (2023)</li>
          <li>Frontend Web Development — Dicoding Indonesia (2022)</li>
          <li>Git & Version Control — Coursera (2022)</li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Tech Stack</Title>
        <div className="flex flex-wrap gap-2 text-neutral-200">
          {[
            "Laravel",
            "React",
            "PostgreSQL",
            "Tailwind CSS",
            "JavaScript",
            "PHP",
            "Git",
            "Docker",
          ].map((tech) => (
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
            <strong className="text-white">Bachelor of Computer Science</strong>{" "}
            — Tech University (2022–Present)
            <br />
            Focused on web development, database design, and software
            architecture.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Interests</Title>
        <p className="text-neutral-300">
          Outside of coding, I enjoy writing blog posts about technology,
          learning new programming languages, and exploring UI/UX design trends.
          I also love sharing what I’ve learned to help others grow in their
          developer journey.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Contact</Title>
        <p className="text-neutral-300">
          Feel free to reach out for collaboration, freelance work, or just to
          connect!
        </p>
        <ul className="flex flex-col gap-1 text-neutral-400">
          <li>
            📧 <a href="mailto:hello@arzaqul.dev">hello@arzaqul.dev</a>
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
              href="https://github.com/arzaqul"
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