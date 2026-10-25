# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind v4 + motion + Phosphor icons + `next/font`. Content as MDX or typed data files. Static export. Confirmed by the user on 2026-10-25.

## Users

Robotics and control hiring engineers and researchers at companies in the Netherlands/Europe, UK, and US. They skim; every project needs a visual or video in the first screen. Secondary audience: anyone evaluating the user for control/systems engineering or robotics simulation roles.

## Product Purpose

A personal portfolio site for a control-theory graduate (MSc, expected Nov 2026) that shows projects, aspirations, and target industries to robotics/control hiring audiences. It exists to get a skimming hiring engineer to understand, in one screen per project, what was built and what results it produced. Success is a hiring manager spending enough time on a project page to want to talk. It is explicitly not a CV replica: no work history, no volunteering, no employment chronology.

## Positioning

"A control theorist who ships on hardware." The differentiator a neighboring candidate could not truthfully claim: passivity-based (IDA-PBC / Port-Hamiltonian) control theory carried from proof through simulation (Isaac Sim, MuJoCo) to real sim-to-real deployment on a humanoid robot (Unitree G1 + Inspire hand), with real-hardware run data, not just simulated or theoretical results.

## Operating Context

- Site map: one home page (hero, selected work, aspirations, contact) + one case-study page per project (6 projects).
- Every case-study page follows the same template: title/one-sentence result/role/dates/context → media (video or hero image first) → the problem → approach (3-5 blocks, figures where possible) → result (only numbers that exist in source material) → stack tags → links (GitHub/report/video) → next project.
- YouTube embeds are lazy (facade thumbnail first) so they don't cost page-load time.
- Media pipeline: raw source video/photos (from `Desktop\PICs`, ~1.2 GB) are re-encoded before shipping — H.264 MP4 (~720p–1080p, <10 MB, muted autoplay loops) with WebM fallback if needed, photos converted to AVIF/WebP at multiple widths. Raw originals stay out of the repo.

## Capabilities and Constraints

- Six candidate projects, in priority order: (1) MSc thesis — passivity-based humanoid grasping on Unitree G1, flagship; (2) humanoid testing with autonomous swarm rovers; (3) self-balancing bike (PID/funnel control); (4) DIFFER tokamak divertor control; (5) precision chopper MPC (OptoMechatronics); (6) airline operational continuity (systems engineering, GENESYS). An optional 7th: Humanoid Lab Toolkit, as a small card rather than a case study.
- Only show concrete numeric results where they exist in source material (`cv.md`); never invent metrics.
- **Confidentiality:** resolved 2026-10-25 — the user confirmed all projects, including DIFFER and the swarm-rovers work, are clearable for public display.
- **Full-stack framing:** the robotics work should read as one continuous stack the user owns end to end — Isaac Sim virtual environment through to physical autonomous pick-and-place on real hardware — not a list of disconnected demos.
- **Content not yet provided, unresolved:** the actual thesis PDF/slide deck (a separate file, `Untitled presentation.pptx` in the PICs folder, turned out to be an unrelated general "future of humanoid robotics" talk, not the thesis deck — see Evidence on Hand), grasp-log plots, confirmation of which `PICs` video clips show the user's actual grasp runs vs. unrelated G1 footage, `cv.md`/`profile.yml` source files (referenced from a separate "career-ops-44" project, not present in this repo), LinkedIn About/Featured text (LinkedIn blocks automated reading).
- **GitHub:** `github.com/PunjabdaJutt` confirmed as the account to link/feature.
- **YouTube:** `youtube.com/@ammarahmed7706` confirmed as the channel holding the bike-balancing (PID/funnel control), swarm-rover-following, and autonomous handshaking videos.
- **Open product decisions, unresolved (do not infer):** whether to include a contact form vs. email/links only; whether to link a CV PDF; whether the site states the need for visa sponsorship; final industries list beyond robotics/fusion/precision-mechatronics (automotive, space, semiconductor, defence?); whether to crop or skip presentation photos that show other people in the background.
- Theme confirmed by the user 2026-10-25: light. Recorded here because it is a durable brief constraint; exact palette/type execution still belongs to design work.

## Brand Commitments

- Headline directly under the name is deliberately left blank, per the user's existing profile convention — open to revisiting if it reads as broken rather than deliberate.
- No "passionate about", "seamless", "cutting-edge" language; first-person, plain tone.
- Typography preference: Geist- or Satoshi-style sans + a mono face for data/labels; no Inter.
- One desaturated accent color; explicit ban on the purple/blue AI-glow look.
- Layout preference: asymmetric, left-aligned text with media at right; large project entries, not a 3-card grid.
- Motion preference: low — scroll reveal and hover only, under 300ms, `prefers-reduced-motion` respected.

## Evidence on Hand

- Planning doc `PORTFOLIO_STRUCTURE.md` (this repo) — detailed per-project technical summaries for all 6 projects, written from `cv.md`/`profile.yml` (not present in this repo) and three YouTube videos.
- YouTube channel `youtube.com/@ammarahmed7706`: bike-balancing PID/funnel control, autonomous swarm-rover following, and autonomous robotic handshaking videos.
- `C:\Users\ammar\OneDrive\Desktop\PICs` media inventory, confirmed usable:
  - `WhatsApp Image 2026-10-25 at 11.44.49.jpeg` — the user with three labmates dressing the G1 (on its gantry) in a red Rijksuniversiteit Groningen t-shirt. Shows the full team, not the user alone.
  - `IMG_8802.MOV` — real grasp footage; the ~20s mark shows the G1's hand gripping a red cylindrical object on the stool. 40s+ pans to an unrelated control-room shot.
  - `1733045790373.jpg` — University of Groningen Academy Building (campus photo), for the intro/about section.
  - `1757194891330.jpg` — DIFFER institute building exterior.
  - Thesis presentation photos `IMG_8775`–`IMG_8808` (JPG) — the user presenting; real but photos-of-a-screen quality, not source figures.
  - `Untitled presentation.pptx` — **not the thesis deck.** It's an unrelated general "future of humanoid robotics" talk. Most of its images are stock photos (one Dreamstime-watermarked) and figures from other labs' published papers (VoxPoser, LeVERB) — none of those are usable. One slide image (G1 on the gantry with the red cylinder, same rig as `IMG_8802.MOV`) is genuinely the user's own and is usable.
- `C:\Users\ammar\Documents\Thesis\LaTeX\` (the real thesis project, confirmed usable): `Conference_Paper.pdf` ("Port-Hamiltonian Control for Grasping with a Unitree Humanoid") and its `images/` folder — real hardware grasp photos, grasp-force/thumb-yaw telemetry plots, and an Isaac Sim screenshot. In use on the thesis case-study page and linked as a PDF.
- `C:\Users\ammar\OneDrive\Desktop\PICs\chopper.jpg` — a strut-mounted mirror/reference-mirror assembly diagram, used as the Precision Chopper MPC hero per the user's direction.
- Tokamak/divertor image for DIFFER: sourced externally from Wikimedia Commons (JET sub-divertor structure, CC BY 3.0, Litaudon et al. 2017, credited on-page) since no such photo exists in the user's own files.
- GENESYS diagram: user confirmed the current honest "not yet provided" placeholder is fine as-is.
- No grasp-log data export beyond what's in the thesis `images/` folder, and no Simulink block diagram for the chopper project, have been supplied. State remaining absences; do not fabricate placeholders for them.

## Product Principles

1. The work leads, the interface recedes — Experience mode. Portfolio, not dashboard.
2. Every project must be legible in one skimmed screen — hero visual or video first, not a wall of text.
3. Never show confidential, unconfirmed, or unverified footage — provenance honesty over visual completeness.
4. Numbers only where they exist in source material; no invented metrics or testimonials.
5. All 6 (or 7) project pages share one template so they read as a deliberate set, not ad-hoc pages.

## Accessibility & Inclusion

`prefers-reduced-motion` must be respected across all scroll-reveal and hover animation. No further accessibility standard has been specified by the user yet.
