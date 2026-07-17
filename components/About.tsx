import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-10 text-center text-4xl font-bold">
          About Me
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h3 className="mb-4 text-2xl font-semibold">
              Who I Am
            </h3>

            <p className="leading-8 text-gray-600">
              {portfolio.about}
            </p>

          </div>

          {/* Right Side */}
          <div className="rounded-xl border bg-white p-8 shadow-md">

            <h3 className="mb-6 text-2xl font-semibold">
              Quick Information
            </h3>

            <div className="space-y-4">

              <p>
                <strong>🎓 Degree:</strong> {portfolio.degree}
              </p>

              <p>
                <strong>🏫 University:</strong> {portfolio.university}
              </p>

              <p>
                <strong>📍 Location:</strong> {portfolio.location}
              </p>

              <p>
                <strong>💼 Title:</strong> {portfolio.title}
              </p>

              <p>
                <strong>🎯 Career Goal:</strong>
              </p>

              <p className="text-gray-600">
                {portfolio.careerObjective}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}