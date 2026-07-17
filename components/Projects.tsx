import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-xl border bg-white p-6 shadow-md transition hover:shadow-xl"
            >

              {/* Placeholder for future project image */}
              <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-gray-200">
                <span className="text-gray-500">
                  Project Image
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-6 flex gap-4">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-black px-4 py-2 text-white"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-black px-4 py-2"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}