import Link from "next/link";
import { notFound } from "next/navigation";
import { Media } from "@/components/Media";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <header className="px-6 pt-10 pb-10 sm:px-10 lg:px-16">
        <Link href="/#work" className="font-mono text-sm text-muted transition hover:text-accent">
          ← Selected work
        </Link>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.oneLiner}
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs text-muted">
          <div>
            <dt className="uppercase tracking-wide">Role</dt>
            <dd className="mt-1 text-foreground">{project.role}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide">Dates</dt>
            <dd className="mt-1 text-foreground">{project.dates}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide">Context</dt>
            <dd className="mt-1 text-foreground">{project.context}</dd>
          </div>
        </dl>
      </header>

      <div className="px-6 sm:px-10 lg:px-16">
        <Media media={project.hero} />
      </div>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              The problem
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-base leading-relaxed text-foreground">
              {project.problem}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:px-10 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Approach
        </p>
        <div className="mt-10 flex flex-col gap-8">
          {project.approach.map((block) => (
            <div
              key={block.heading}
              className="panel panel-hover grid gap-8 p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 lg:self-center">
                <h3 className="text-lg font-semibold text-foreground">
                  {block.heading}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
              {block.media && (
                <div className="lg:col-span-6 lg:col-start-7">
                  <Media media={block.media} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {project.results.length > 0 && (
        <section className="border-t border-border px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                Results
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="panel flex flex-col gap-3 p-6 sm:p-8">
                {project.results.map((r) => (
                  <li
                    key={r}
                    className="max-w-xl text-base leading-relaxed text-foreground"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border px-6 py-16 sm:px-10 lg:px-16">
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent-ink">
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full bg-accent-soft px-3 py-1">
              {tag}
            </li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2.5 transition hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-border px-6 py-16 sm:px-10 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          Next project
        </p>
        <Link
          href={`/projects/${next.slug}`}
          className="mt-3 inline-block text-2xl font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          {next.title} →
        </Link>
      </footer>
    </article>
  );
}
