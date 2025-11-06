import Footer from "@/src/components/Footer";
import ProjectItem from "@/src/components/ProjectItem";
import Title from "@/src/components/Title";

export default function Projects() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Projects</Title>
        <p className="text-neutral-300">
          A collection of projects I’ve worked on — both personal experiments
          and professional work done for companies. Each one reflects a step in
          my journey of learning and building meaningful software.
        </p>
      </section>

      {/* Personal Projects */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Personal Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Finance Tracker",
              description:
                "A simple web-based financial tracking app built with Go and React to help manage personal expenses efficiently.",
              link: "#",
            },
            {
              title: "Blog Platform",
              description:
                "A markdown-based blogging platform where I share tutorials and developer insights, built using Laravel and Inertia.js.",
              link: "#",
            },
            {
              title: "Task Manager",
              description:
                "A lightweight task management tool designed for productivity and minimalism, built using Next.js.",
              link: "#",
            },
          ].map((project, index) => (
            <li key={index}>
              <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
                showThumbnail={true}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Company Projects */}
      <section className="flex flex-col gap-5 mt-10">
        <h2 className="text-xl font-semibold">Company Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "ERP System",
              description:
                "A modular ERP system developed using Laravel and PostgreSQL to manage sales, purchasing, and inventory processes.",
              link: "#",
            },
            {
              title: "Warehouse Management Integration",
              description:
                "Developed stock synchronization logic between ERP and WMS, handling stock availability, in-transit goods, and real-time updates.",
              link: "#",
            },
            {
              title: "Internal Dashboard",
              description:
                "Built a React-based admin dashboard for monitoring logistics performance, using RESTful APIs and Tailwind UI.",
              link: "#",
            },
          ].map((project, index) => (
            <li key={index}>
              <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
                showThumbnail={true}
              />
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}