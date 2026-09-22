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
      className="bg-surface py-24"
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

          <h2 className="text-4xl font-bold text-foreground">
            About Me
          </h2>

          <p className="mt-4 text-muted">
            {portfolio.about}
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

            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Who I Am
            </h3>

            <p className="leading-9 text-muted">
              I&apos;m an <strong className="text-foreground">AI/ML Engineer</strong> who builds real AI applications — from Retrieval-Augmented Generation (RAG) pipelines and multi-agent systems to production-facing LLM services. My work spans <strong className="text-foreground">Machine Learning, Deep Learning, Generative AI, and Computer Vision</strong>, backed by a BS in Artificial Intelligence.
            </p>

            <p className="mt-6 leading-9 text-muted">
              I ship end-to-end: training and evaluating models, designing RAG and agentic workflows, and exposing them through <strong className="text-foreground">FastAPI</strong> services consumed by modern web frontends. My toolkit includes <strong className="text-foreground">Python, LangChain/LangGraph, PyTorch, TensorFlow, vector databases, and Supabase</strong>.
            </p>

            <p className="mt-6 leading-9 text-muted">
              I care about clean, maintainable code and systems that hold up outside a notebook — the goal is always a working application, not just a proof of concept.
            </p>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-surface-elevated p-8 shadow-lg shadow-black/20"
          >

            <h3 className="mb-8 text-3xl font-bold text-foreground">
              Quick Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-accent-soft p-3">
                  <FaGraduationCap className="text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Degree
                  </p>

                  <h4 className="font-semibold text-foreground">
                    {portfolio.degree}
                  </h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-accent-soft p-3">
                  <FaBrain className="text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted">
                    University
                  </p>

                  <h4 className="font-semibold text-foreground">
                    {portfolio.university}
                  </h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-accent-soft p-3">
                  <FaMapMarkerAlt className="text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Location
                  </p>

                  <h4 className="font-semibold text-foreground">
                    {portfolio.location}
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-full bg-accent-soft p-3">
                  <FaBullseye className="text-accent" />
                </div>

                <div>

                  <p className="text-sm text-muted">
                    Career Goal
                  </p>

                  <p className="mt-2 leading-7 text-muted">
                    {portfolio.careerObjective}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-full bg-accent-soft p-3">
                  <FaBrain className="text-accent" />
                </div>

                <div>

                  <p className="text-sm text-muted">
                    Specialization
                  </p>

                  <p className="mt-2 leading-7 text-muted">
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
