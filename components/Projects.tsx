"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../data/portfolio";
import Container from "./ui/Container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-surface py-24"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-foreground">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-muted">
            A selection of AI, Machine Learning, Computer Vision, and
            Generative AI applications I&apos;ve developed.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-lg shadow-black/20 transition-colors duration-300 hover:border-accent/40 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay revealing tech stack on hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-surface-elevated via-surface-elevated/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-background shadow">
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
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="text-sm font-medium text-accent">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.demo ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-background transition hover:bg-accent-strong"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-muted">
                      <FaExternalLinkAlt />
                      Coming Soon
                    </span>
                  )}

                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-foreground transition hover:border-accent hover:text-accent"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-muted">
                      <FaGithub />
                      Private
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
