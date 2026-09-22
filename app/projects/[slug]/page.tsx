import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/portfolio";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Title */}
      <h1 className="mb-4 text-5xl font-bold text-foreground">
        {project.title}
      </h1>

      {/* Description */}
      <p className="mb-8 text-lg text-muted">
        {project.description}
      </p>

      {/* Image */}
      <div className="relative mb-10 h-96 w-full overflow-hidden rounded-xl border border-border shadow-lg shadow-black/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Technologies */}
      <h2 className="mb-4 text-2xl font-semibold text-foreground">
        Technologies
      </h2>

      <div className="mb-10 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent-soft px-4 py-2 text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:bg-accent-strong"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            <FaGithub />
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}
