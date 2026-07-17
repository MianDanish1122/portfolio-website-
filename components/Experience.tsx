import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Experience
        </h2>

        <div className="space-y-8">

          {experience.map((job) => (

            <div
              key={job.company}
              className="rounded-xl border bg-white p-8 shadow-md hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">
                {job.role}
              </h3>

              <p className="text-blue-600 font-semibold mt-1">
                {job.company}
              </p>

              <p className="text-gray-500 text-sm mb-4">
                {job.duration}
              </p>

              <p className="text-gray-600 leading-7">
                {job.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}