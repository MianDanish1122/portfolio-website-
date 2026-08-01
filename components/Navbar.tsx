"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navigation } from "../data/navigation";
import { portfolio } from "../data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900"
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
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 ${
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
          className="hidden rounded-full bg-blue-600 px-5 py-2 text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 md:block"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-700 transition duration-300 hover:text-blue-600 md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t bg-white md:hidden">

          <ul className="flex flex-col p-6">

            {navigation.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 ${
                    active === item.href.replace("#", "")
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </a>

              </li>

            ))}

            <a
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-lg bg-blue-600 px-4 py-3 text-center text-white"
            >
              Download Resume
            </a>

          </ul>

        </div>

      )}

    </header>
  );
}