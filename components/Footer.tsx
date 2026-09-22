"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { contact, portfolio } from "../data/portfolio";
import { navigation } from "../data/navigation";

export default function Footer() {

  return (
    <footer className="border-t border-border bg-surface text-foreground">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* About */}
          <div>

            <h2 className="text-3xl font-bold">
              {portfolio.name}
            </h2>

            <p className="mt-4 leading-8 text-muted">
              AI/ML Engineer building real applications with Machine
              Learning, Generative AI, LLMs, Retrieval-Augmented
              Generation (RAG), AI Agents, and FastAPI.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-muted hover:text-accent">
                    {item.name}
                  </a>
                </li>
              ))}

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
                aria-label="GitHub"
                className="rounded-full border border-border p-4 text-xl transition hover:border-accent hover:text-accent"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-4 text-xl transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full border border-border p-4 text-xl transition hover:border-accent hover:text-accent"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row">

          <p className="text-sm text-muted">
            © 2026 Muhammad Danish. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-medium text-background transition hover:bg-accent-strong"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}