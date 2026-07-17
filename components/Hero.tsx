import Image from "next/image";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 py-24 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <p className="mb-3 text-blue-600 font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="mb-4 text-6xl font-bold">
            {portfolio.name}
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-600">
            {portfolio.subtitle}
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
            {portfolio.about}
          </p>

          <div className="flex gap-4">

            <button className="rounded-lg bg-black px-6 py-3 text-white">
              View Projects
            </button>

            <a
              href={portfolio.resume}
              target="_blank"
              className="rounded-lg border border-black px-6 py-3"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex-1 flex justify-center">

          <Image
            src="/images/profile.jpg"
            alt="Muhammad Danish"
            width={380}
            height={380}
            className="rounded-full shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}