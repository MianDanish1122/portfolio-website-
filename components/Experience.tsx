"use client";

import { experience } from "../data/portfolio";
import Container from "./ui/Container";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24"
    >
      <Container>

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Experience
          </h2>

          <p className="mt-4 text-gray-600">
            My professional internships and hands-on experience in AI and Data Science.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl border-l-4 border-blue-600">

          {experience.map((job, index) => (

            <div
              key={index}
              className="relative mb-10 ml-8"
            >

              {/* Timeline Dot */}
              <span className="absolute -left-[40px] top-2 h-4 w-4 rounded-full border-4 border-white bg-blue-600"></span>

              {/* Card */}
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <h3 className="text-xl font-semibold text-gray-900">
                  {job.role}
                </h3>

                <p className="mt-2 text-sm font-semibold text-blue-600">
                  {job.company}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {job.duration}
                </p>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {job.bullets?.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-3 text-sm leading-6"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}