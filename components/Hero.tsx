"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { portfolio, contact, stats } from "../data/portfolio";
import Container from "./ui/Container";
import StatCounter from "./ui/StatCounter";

const HeroVisual = dynamic(() => import("./ui/HeroVisual"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <HeroVisual />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <Container>
        <div className="relative flex min-h-[90vh] flex-col items-center justify-center gap-14 py-24 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-accent">
              👋 Hello, I&apos;m
            </p>

            <h1 className="mb-4 text-5xl font-bold leading-tight text-foreground lg:text-7xl">
              {portfolio.name}
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-accent lg:text-3xl">
              AI/ML Engineer
            </h2>

            <p className="mx-auto max-w-2xl text-base text-muted lg:mx-0 lg:text-lg">
              {portfolio.subtitle}
            </p>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted lg:mx-0">
              {portfolio.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-colors duration-300 hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/20"
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
              </motion.a>

              <a
                href={portfolio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-6 py-3 font-semibold text-muted transition duration-300 hover:text-accent"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-2xl text-muted transition duration-300 hover:scale-110 hover:text-accent"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-muted transition duration-300 hover:scale-110 hover:text-accent"
              >
                <FaLinkedin />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-2xl text-muted transition duration-300 hover:scale-110 hover:text-accent"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-1 justify-center"
          >
            <div className="rounded-full bg-gradient-to-br from-accent to-accent-secondary p-1.5 shadow-2xl shadow-accent/10">
              <Image
                src="/images/profile.jpg"
                alt={portfolio.name}
                width={340}
                height={340}
                priority
                className="rounded-full border-4 border-background object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
