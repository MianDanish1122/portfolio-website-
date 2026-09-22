"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 100;
        const height = (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive((section as HTMLElement).id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/75 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-foreground"
        >
          Muhammad Danish
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">

          {navigation.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className={`group relative font-medium transition duration-300 ${
                  active === item.href.replace("#", "")
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 rounded-full bg-accent transition-all duration-300 ${
                    active === item.href.replace("#", "")
                      ? "w-full"
                      : "group-hover:w-full"
                  }`}
                />
              </a>

            </li>

          ))}

        </ul>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 font-medium text-background shadow-lg shadow-accent/10 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong focus:outline-none focus:ring-2 focus:ring-accent md:block"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-foreground transition duration-300 hover:text-accent md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >

            <ul className="flex flex-col p-6">

              {navigation.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 transition-colors duration-200 ${
                      active === item.href.replace("#", "")
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </a>

                </li>

              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-lg bg-accent px-4 py-3 text-center font-medium text-background transition hover:bg-accent-strong"
              >
                Hire Me
              </a>

            </ul>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}