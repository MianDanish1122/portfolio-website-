import Image from "next/image";
import { projects } from "../data/portfolio";
import Container from "./ui/Container";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Featured Projects</h2>

          <p className="mt-3 text-gray-600">
            A selection of AI and Machine Learning projects showcasing my
            technical skills and practical experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full bg-gray-100">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}