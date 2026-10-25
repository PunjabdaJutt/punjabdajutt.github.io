import Link from "next/link";
import {
  Camera,
  CubeTransparent,
  FlowArrow,
  GitBranch,
  Robot,
  Sliders,
} from "@phosphor-icons/react/dist/ssr";
import { Media } from "@/components/Media";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { HeroTypewriter } from "@/components/HeroTypewriter";
import { education, person, projects, skillCategories } from "@/lib/projects";

const icons = {
  control: Sliders,
  robot: Robot,
  simulation: CubeTransparent,
  perception: Camera,
  systems: FlowArrow,
  tools: GitBranch,
} as const;

export default function Home() {
  const [flagship, ...rest] = projects;
  const simulationBlock = flagship.approach.find(
    (b) => b.heading === "Simulation",
  );
  const hardwareBlock = flagship.approach.find(
    (b) => b.heading === "Hardware validation",
  );
  const telemetryBlock = flagship.approach.find(
    (b) => b.heading === "Logged telemetry",
  );
  const caseCards = [simulationBlock, hardwareBlock, telemetryBlock].filter(
    (b): b is NonNullable<typeof b> => Boolean(b?.media),
  );

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[90vh] items-end overflow-hidden sm:min-h-screen"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${person.heroImage})` }}
          role="img"
          aria-label="Ammar Ahmed presenting his MSc thesis on real-robot grasping"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(20,20,20,0.1) 0%, rgba(20,20,20,0.55) 60%, rgba(20,20,20,0.92) 100%)",
          }}
        />
        <div className="relative w-full px-6 pb-14 pt-32 sm:px-10 sm:pb-20 lg:px-16">
          <p className="font-mono text-sm text-white/80">Hi, I&apos;m</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {person.name}
          </h1>
          <p className="mt-4 min-h-[2.5rem] max-w-xl font-mono text-lg text-white/90 sm:text-xl">
            <HeroTypewriter roles={person.roles} />
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {person.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href="#thesis"
              className="rounded-full bg-white px-5 py-2.5 font-semibold text-foreground transition hover:opacity-90"
            >
              Explore Thesis Work
            </a>
            <a
              href={person.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/50 bg-white/10 px-5 py-2.5 text-white backdrop-blur transition hover:border-white hover:bg-white/20"
            >
              View Resume
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/50 bg-white/10 px-5 py-2.5 text-white backdrop-blur transition hover:border-white hover:bg-white/20"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Thesis — flagship showcase */}
      <section id="thesis" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Flagship — MSc Thesis
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {flagship.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {flagship.role} · {flagship.dates} · {flagship.context}
          </p>

          {/* Featured showcase */}
          <div className="panel mt-10 grid gap-8 overflow-hidden p-6 lg:grid-cols-12 lg:gap-10 lg:p-10">
            <div className="flex lg:col-span-6 lg:items-center">
              {flagship.hero.kind === "video-loop" ? (
                <video
                  className="mx-auto aspect-[9/16] max-h-[640px] w-auto rounded-2xl bg-surface object-contain"
                  src={flagship.hero.src}
                  poster={flagship.hero.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={flagship.hero.alt}
                />
              ) : (
                <Media media={flagship.hero} />
              )}
            </div>
            <div className="lg:col-span-6 lg:self-center">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                Problem
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {flagship.problem}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {flagship.results.map((r) => (
                  <li
                    key={r}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-accent-ink">
                {flagship.stack.map((tag) => (
                  <li key={tag} className="rounded-full bg-accent-soft px-2.5 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                href={`/projects/${flagship.slug}`}
                className="mt-6 inline-block font-mono text-sm text-accent transition hover:underline"
              >
                Read the full case study →
              </Link>
            </div>
          </div>

          {/* Case grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {caseCards.map((block) => (
              <article
                key={block.heading}
                className="panel panel-hover flex flex-col overflow-hidden"
              >
                {block.media && <Media media={block.media} />}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {block.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {block.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-t border-border px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Education
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {education.map((entry) => (
              <article
                key={entry.institution}
                className="panel panel-hover flex flex-col overflow-hidden"
              >
                {entry.image && (
                  <div className="aspect-[21/9] w-full overflow-hidden bg-surface">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={entry.image.src}
                      alt={entry.image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.institution}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-accent">
                    {entry.degree}
                  </p>
                  <p className="font-mono text-xs text-muted">{entry.dates}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {entry.detail}
                  </p>
                  {entry.image?.credit && (
                    <p className="mt-1 font-mono text-[11px] text-muted/70">
                      {entry.image.credit}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Control and systems-engineering work outside the thesis.
          </p>
          <div className="mt-10">
            <ProjectsGrid projects={rest} />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Technical Skills
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => {
              const Icon = icons[category.icon];
              return (
                <div key={category.title} className="panel flex flex-col gap-3 p-6">
                  <Icon size={24} weight="duotone" className="text-accent" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5 font-mono text-[11px] text-accent-ink">
                    {category.items.map((item) => (
                      <li key={item} className="rounded-full bg-accent-soft px-2 py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aspirations */}
      <section
        id="aspirations"
        className="border-t border-border px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Aspirations
          </p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
            Where this goes next
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground">
            Where this goes next is Vision-Language-Action (VLA) models —
            closing the loop from perception and language straight into
            control, instead of treating them as separate stages. I&apos;m
            currently working with students on a Vision-Language Model (VLM)
            pipeline for autonomous picking and placement of objects, in
            collaboration with Philips.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground">
            I&apos;m looking for roles in robotics control and simulation —
            manipulation, humanoid locomotion, and low-level motion control —
            along with adjacent work in nonlinear and model-predictive control
            and systems engineering.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            My interest spans humanoid and mobile manipulation robotics,
            fusion and energy-systems control, and precision mechatronics.
            Open to roles across the Netherlands, the wider EU, the UK, and
            the US, available after my MSc in November 2026.
          </p>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="border-t border-border px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-3 text-base text-muted">
            Let&apos;s talk about robotics, simulation, or control.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {person.personalNote}
          </p>
          <a
            href={`mailto:${person.email}`}
            className="mt-6 text-lg font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:text-accent"
          >
            {person.email}
          </a>
          <div className="mt-6 flex gap-4 font-mono text-sm">
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-foreground transition hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-foreground transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={person.youtube}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-foreground transition hover:border-accent hover:text-accent"
            >
              YouTube
            </a>
          </div>
          <p className="mt-10 font-mono text-xs text-muted">
            © {new Date().getFullYear()} {person.name}
          </p>
        </div>
      </footer>
    </>
  );
}
