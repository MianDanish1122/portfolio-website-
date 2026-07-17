import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {certifications.map((certificate) => (

            <div
              key={certificate.title}
              className="rounded-xl border bg-white p-6 shadow-md hover:shadow-xl transition"
            >

              <h3 className="text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="mt-2 text-blue-600">
                {certificate.issuer}
              </p>

              <p className="mt-1 text-gray-500">
                {certificate.year}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}