import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
      : "inline-flex items-center justify-center rounded-lg border border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition";

  // External links
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // Internal page anchors (#about, #skills, #projects...)
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  // Normal Next.js navigation
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}