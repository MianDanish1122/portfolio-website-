"use client";

import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

import { achievements } from "../data/portfolio";
import Container from "./ui/Container";

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            Awards &amp; Achievements
          </h2>

          <p className="mt-4 text-muted">
            Recognition from hackathons, competitions, and venture-building programs.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="flex gap-4 rounded-xl border border-border bg-surface-elevated p-5 shadow-sm transition-colors duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-black/20"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-ai-soft text-accent-ai">
                <FaTrophy />
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                )}
              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}
