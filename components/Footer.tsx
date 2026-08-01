"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { contact, portfolio } from "../data/portfolio";

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* About */}
          <div>

            <h2 className="text-3xl font-bold">
              {portfolio.name}
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              AI Engineer passionate about Machine Learning,
              Deep Learning, Generative AI, LLMs,
              Retrieval-Augmented Generation (RAG),
              AI Agents, and FastAPI.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 text-xl transition hover:bg-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 text-xl transition hover:bg-blue-600"
              >
                <FaLinkedin />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-4 text-xl transition hover:bg-blue-600"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row">

          <p className="text-sm text-gray-400">
            © 2026 Muhammad Danish. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}