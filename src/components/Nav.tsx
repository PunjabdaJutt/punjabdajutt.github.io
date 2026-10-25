import Link from "next/link";
import { person } from "@/lib/projects";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-panel/85 px-6 py-5 backdrop-blur-md sm:px-10 lg:px-16">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm tracking-tight text-foreground"
        >
          Ammar Ahmed
        </Link>
        <nav className="hidden flex-wrap items-center gap-1 font-mono text-sm text-muted sm:flex">
          <Link
            href="/#thesis"
            className="rounded-full px-3 py-1.5 transition hover:bg-accent-soft hover:text-foreground"
          >
            Thesis
          </Link>
          <Link
            href="/#education"
            className="rounded-full px-3 py-1.5 transition hover:bg-accent-soft hover:text-foreground"
          >
            Education
          </Link>
          <Link
            href="/#projects"
            className="rounded-full px-3 py-1.5 transition hover:bg-accent-soft hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="rounded-full px-3 py-1.5 transition hover:bg-accent-soft hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            className="rounded-full px-3 py-1.5 transition hover:bg-accent-soft hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <a
          href={person.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-border px-4 py-1.5 font-mono text-sm text-foreground transition hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
