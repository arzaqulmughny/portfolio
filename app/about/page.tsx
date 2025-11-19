import Title from "@/src/components/Title";
import type { Metadata } from "next";

export default function Page() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <Title>Tentang Saya</Title>
        <p className="text-neutral-300">
          Saya seorang web programmer yang fokus berkembang dan mendorong cara
          kerja tim yang lebih matang. Saya senang berbagi wawasan, berdiskusi
          tentang ide baru, dan membantu melihat peluang peningkatan. Bagi saya,
          belajar dan bertukar pengalaman adalah kunci untuk tumbuh bersama di
          dunia teknologi.
        </p>
        <p className="text-neutral-400 text-sm">
          📍 Saat ini berlokasi di Surabaya
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Pengalaman</Title>
        <ul className="flex flex-col gap-3 text-neutral-300">
          <li>
            <strong className="text-white">Web Programmer</strong> — PT Xeno
            Persada Teknologi (Januari 2024 - Saat ini)
            <br />
            Menjadi bagian dari tim pengembangan web dan mendukung proses
            pengembangan aplikasi.
          </li>
          <li>
            <strong className="text-white">
              Project-Based Virtual Intern Front End Developer
            </strong>{" "}
            — Core Initiative x Rakamin Academy (September 2023)
            <br />
            Menyelesaikan beberapa tugas sebagai Front End Web Developer,
            seperti membuat website yang menggunakan data dari RESTful API dan
            memakai tools umum seperti Docker sebagai lingkungan pengembangan.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Sertifikat</Title>
        <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-300">
          <li>
            Belajar Fundamental Aplikasi Web dengan React — Dicoding Indonesia
            (2023)
          </li>
          <li>
            Belajar Pengembangan Web Intermediate — Dicoding Indonesia (2022)
          </li>
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
        <Title>Pendidikan</Title>
        <ul className="flex flex-col gap-3 text-neutral-300">
          <li>
            <strong className="text-white">Sistem Informasi</strong> —
            Universitas Terbuka (Agustus 2024 – Saat ini)
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <Title>Kontak</Title>
        <p className="text-neutral-300">
          Jangan ragu untuk menghubungi saya untuk kolaborasi, pekerjaan
          freelance, atau sekadar berkenalan!
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
  title: "Tentang Saya - Arzaqul Mughny Al Fawwaz",
  description: "Tentang saya, Arzaqul Mughny Al Fawwaz, seorang web programmer yang fokus berkembang dan mendorong cara kerja tim yang lebih matang.",
};
