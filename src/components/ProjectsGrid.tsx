"use client";

import { useState } from "react";
import Link from "next/link";
import { Media } from "@/components/Media";
import type { Project } from "@/lib/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 3;
  const visible = expanded ? projects : projects.slice(0, visibleCount);
  const remaining = projects.length - visibleCount;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}
            className="panel panel-hover flex flex-col overflow-hidden"
          >
            <div className="relative">
              <Media media={project.hero} />
              <span className="absolute left-3 top-3 rounded-full bg-panel/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-foreground backdrop-blur">
                {project.stack[0]}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-accent">
                {project.role} · {project.dates}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.oneLiner}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent transition hover:underline"
                >
                  Case study →
                </Link>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-border px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent hover:text-accent"
          >
            {expanded ? "Show fewer projects" : `View ${remaining} more projects`}
          </button>
        </div>
      )}
    </div>
  );
}
