"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../data/portfolio";
import Container from "./ui/Container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-24"
    >
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            A selection of AI, Machine Learning, Computer Vision, and
            Generative AI applications I've developed.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black shadow">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status + Category */}
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="text-sm font-medium text-blue-600">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex items-center gap-4">
                  {!project.demo ? (
                    project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white transition hover:bg-black"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-5 py-3 text-gray-500">
                        <FaGithub />
                        Private
                      </span>
                    )
                  ) : null}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  ) : project.github ? null : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-gray-500">
                      <FaExternalLinkAlt />
                      Coming Soon
                    </span>
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