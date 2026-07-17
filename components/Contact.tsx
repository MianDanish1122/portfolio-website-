import { contact } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Contact Me
        </h2>

        <div className="rounded-xl border bg-white p-10 shadow-md">

          <div className="space-y-5">

            <p>
              📧 <strong>Email:</strong> {contact.email}
            </p>

            <p>
              📱 <strong>Phone:</strong> {contact.phone}
            </p>

            <p>
              📍 <strong>Location:</strong> {contact.location}
            </p>

            <p>
              💻 <strong>GitHub:</strong>{" "}
              <a
                href={contact.github}
                className="text-blue-600"
                target="_blank"
              >
                {contact.github}
              </a>
            </p>

            <p>
              💼 <strong>LinkedIn:</strong>{" "}
              <a
                href={contact.linkedin}
                className="text-blue-600"
                target="_blank"
              >
                {contact.linkedin}
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}