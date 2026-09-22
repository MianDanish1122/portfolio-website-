"use client";

import { motion } from "framer-motion";

import { experience } from "../data/portfolio";
import Container from "./ui/Container";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-background py-24"
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
            Experience
          </h2>

          <p className="mt-4 text-muted">
            My professional roles, internships, and hands-on experience in AI and Data Science.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl border-l-2 border-border">

          {experience.map((job, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative mb-10 pl-10 last:mb-0"
            >

              {/* Timeline Dot */}
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background ${
                  index === 0 ? "bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]" : "bg-border"
                }`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-black/20"
              >

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>

                  {index === 0 && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm font-semibold text-accent">
                  {job.company}
                </p>

                {job.duration && (
                  <p className="mt-1 text-sm text-muted">
                    {job.duration}
                  </p>
                )}

                <ul className="mt-4 space-y-2 text-muted">
                  {job.bullets?.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-3 text-sm leading-6"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {job.technologies && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}
