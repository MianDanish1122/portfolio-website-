import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Title */}
      <h1 className="mb-4 text-5xl font-bold">
        {project.title}
      </h1>

      {/* Description */}
      <p className="mb-8 text-lg text-gray-600">
        {project.description}
      </p>

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="mb-10 w-full rounded-xl shadow-lg"
      />

      {/* Technologies */}
      <h2 className="mb-4 text-2xl font-semibold">
        Technologies
      </h2>

      <div className="mb-10 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="rounded-lg bg-gray-900 px-6 py-3 text-white"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}