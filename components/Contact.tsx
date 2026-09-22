"use client";

import { motion } from "framer-motion";
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
      className="bg-background py-24"
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
            Get In Touch
          </h2>

          <p className="mt-4 text-muted">
            I&apos;m currently open to AI/ML Engineer and Generative AI
            opportunities.
          </p>

        </motion.div>

        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-border bg-surface p-8 shadow-lg shadow-black/20"
          >

            <h3 className="mb-8 text-2xl font-bold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-muted hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-accent" />
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted">
                    {contact.location}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-border bg-surface p-8 shadow-lg shadow-black/20"
          >

            <h3 className="mb-8 text-2xl font-bold text-foreground">
              Connect With Me
            </h3>

            <div className="space-y-5">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-accent hover:bg-accent-soft"
              >
                <FaGithub className="text-3xl text-foreground transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-semibold text-foreground">
                    GitHub
                  </p>
                  <p className="text-sm text-muted">
                    View my projects
                  </p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-accent hover:bg-accent-soft"
              >
                <FaLinkedin className="text-3xl text-accent transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-semibold text-foreground">
                    LinkedIn
                  </p>
                  <p className="text-sm text-muted">
                    Connect professionally
                  </p>
                </div>
              </a>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}