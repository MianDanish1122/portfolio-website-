import { skills } from "../data/portfolio";
import Container from "./ui/Container";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-24">
      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Technical Skills</h2>
          <p className="mt-3 text-gray-600">
            Technologies and tools I use to build AI-powered applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <SkillCard title="Programming" items={skills.programming} />
          <SkillCard title="Machine Learning" items={skills.machineLearning} />
          <SkillCard title="Deep Learning" items={skills.deepLearning} />
          <SkillCard title="Generative AI" items={skills.generativeAI} />
          <SkillCard title="Backend" items={skills.backend} />
          <SkillCard title="Tools" items={skills.tools} />

        </div>
      </Container>
    </section>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <h3 className="mb-5 text-xl font-bold text-blue-600">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}