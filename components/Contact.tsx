"use client";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { contact } from "../data/portfolio";
import Container from "./ui/Container";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <Container>

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600">
            I'm currently open to AI Engineer, Machine Learning Engineer,
            and Generative AI opportunities.
          </p>

        </div>

        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="mb-8 text-2xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">
                    {contact.location}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Social Links */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <h3 className="mb-8 text-2xl font-bold">
              Connect With Me
            </h3>

            <div className="space-y-5">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border p-4 transition hover:border-blue-600 hover:bg-blue-50"
              >
                <FaGithub className="text-3xl" />
                <div>
                  <p className="font-semibold">
                    GitHub
                  </p>
                  <p className="text-sm text-gray-500">
                    View my projects
                  </p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border p-4 transition hover:border-blue-600 hover:bg-blue-50"
              >
                <FaLinkedin className="text-3xl text-blue-600" />
                <div>
                  <p className="font-semibold">
                    LinkedIn
                  </p>
                  <p className="text-sm text-gray-500">
                    Connect professionally
                  </p>
                </div>
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}