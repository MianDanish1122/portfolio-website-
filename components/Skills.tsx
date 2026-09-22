"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaRobot,
  FaBrain,
  FaMagic,
  FaServer,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

import { skills } from "../data/portfolio";
import Container from "./ui/Container";

const tagContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const categories = [
  {
    title: "Programming",
    icon: <FaCode />,
    items: skills.programming,
  },
  {
    title: "Machine Learning",
    icon: <FaRobot />,
    items: skills.machineLearning,
  },
  {
    title: "Deep Learning",
    icon: <FaBrain />,
    items: skills.deepLearning,
  },
  {
    title: "Generative AI",
    icon: <FaMagic />,
    items: skills.generativeAI,
  },
  {
    title: "Backend / AI Applications",
    icon: <FaServer />,
    items: skills.backend,
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    items: skills.frontend,
  },
  {
    title: "Tools / Infrastructure",
    icon: <FaTools />,
    items: skills.tools,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-surface py-24"
    >
      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <h2 className="text-4xl font-bold text-foreground">
            Technical Skills
          </h2>

          <p className="mt-4 text-muted">
            Technologies and tools I use to build modern AI applications.
          </p>

        </motion.div>

        {/* Skill Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-lg shadow-black/20 transition-colors hover:border-accent/40"
            >

              <div className="mb-5 flex items-center gap-3">

                <div
                  className={`rounded-lg p-3 text-xl ${
                    index % 2 === 0
                      ? "bg-accent-soft text-accent"
                      : "bg-accent-ai-soft text-accent-ai"
                  }`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>

              </div>

              <motion.div
                variants={tagContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >

                {category.items.map((item) => (

                  <motion.span
                    key={item}
                    variants={tagItem}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent transition hover:bg-accent hover:text-background"
                  >
                    {item}
                  </motion.span>

                ))}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}