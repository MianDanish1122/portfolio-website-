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
      ? "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-background font-medium hover:bg-accent-strong transition"
      : "inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-foreground font-medium hover:border-accent hover:text-accent transition";

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