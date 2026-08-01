"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { portfolio, contact } from "../data/portfolio";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Hero() {

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white via-blue-50 to-cyan-50"
    >
      <Container>
        <div className="flex min-h-[90vh] flex-col items-center justify-between gap-16 py-20 lg:flex-row">

          {/* Left Side */}
          <div className="flex-1">

            <p className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              👋 Hello, I'm
            </p>

            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
              Muhammad Danish
            </h1>

            <h2 className="mb-6 text-2xl font-bold text-blue-600 lg:text-3xl">
              AI Engineer | Machine Learning Engineer | Generative AI Developer
            </h2>

            <p className="max-w-2xl text-lg leading-9 text-gray-600">
              Building intelligent AI systems that transform ideas into real-world applications through Machine Learning, LLMs, AI Agents, and Retrieval-Augmented Generation (RAG).
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                 View Projects
              </a>

              <Button
                href={portfolio.resume}
                variant="secondary"
                external
              >
                📄 Download Resume
              </Button>

            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-6">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 transition duration-300 hover:scale-110 hover:text-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 transition duration-300 hover:scale-110 hover:text-blue-600"
              >
                <FaLinkedin />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 transition duration-300 hover:scale-110 hover:text-blue-600"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-1 justify-center">

            <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-2 shadow-2xl">

              <Image
                src="/images/profile.jpg"
                alt={portfolio.name}
                width={380}
                height={380}
                priority
                className="rounded-full border-4 border-white object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}