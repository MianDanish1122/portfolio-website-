import { experience } from "../data/portfolio";
import Container from "./ui/Container";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="mt-3 text-gray-600">
            My internships and professional journey in Artificial Intelligence.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded bg-blue-200"></div>

          {experience.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 top-2 h-7 w-7 rounded-full border-4 border-white bg-blue-600 shadow"></div>

              {/* Card */}
              <div className="rounded-2xl bg-gray-50 p-6 shadow-md transition duration-300 hover:shadow-xl">

                <h3 className="text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="mt-1 font-semibold text-blue-600">
                  {item.company}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.duration}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}