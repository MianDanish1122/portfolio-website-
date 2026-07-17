import { navigation } from "../data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 transition hover:text-blue-600"
        >
          Muhammad Danish
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium text-gray-600 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume/MUHAMMAD.DANISH.CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
