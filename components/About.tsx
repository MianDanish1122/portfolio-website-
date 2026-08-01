"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBullseye,
  FaBrain,
} from "react-icons/fa";

import { portfolio } from "../data/portfolio";
import Container from "./ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <Container>

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-4 text-gray-600">
            Building intelligent AI systems that transform ideas into real-world applications.
          </p>

        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Who I Am
            </h3>

            <p className="leading-9 text-gray-600">
              I am an <strong>AI Engineer</strong> with a Bachelor's degree in Artificial Intelligence, passionate about designing and deploying intelligent systems powered by <strong>Machine Learning, Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and Generative AI</strong>.
            </p>

            <p className="mt-6 leading-9 text-gray-600">
              I enjoy transforming complex business challenges into scalable AI solutions—from predictive machine learning models and computer vision applications to production-ready LLM-powered assistants and AI automation tools. I focus on writing clean, maintainable code and building end-to-end AI applications using modern frameworks such as <strong>Python, FastAPI, LangChain, PyTorch, TensorFlow, and cloud-based AI services</strong>.
            </p>

            <p className="mt-6 leading-9 text-gray-600">
              Driven by continuous learning and innovation, my goal is to contribute to high-impact AI products that deliver measurable value and solve real-world problems at scale.
            </p>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gray-50 p-8 shadow-lg"
          >

            <h3 className="mb-8 text-3xl font-bold">
              Quick Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaGraduationCap className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Degree
                  </p>

                  <h4 className="font-semibold">
                    {portfolio.degree}
                  </h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaBrain className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    University
                  </p>

                  <h4 className="font-semibold">
                    {portfolio.university}
                  </h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <h4 className="font-semibold">
                    {portfolio.location}
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaBullseye className="text-blue-600" />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Career Goal
                  </p>

                  <p className="mt-2 leading-7 text-gray-600">
                    {portfolio.careerObjective}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-full bg-blue-100 p-3">
                  <FaBrain className="text-blue-600" />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Specialization
                  </p>

                  <p className="mt-2 leading-7 text-gray-600">
                    {portfolio.specialization}
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}