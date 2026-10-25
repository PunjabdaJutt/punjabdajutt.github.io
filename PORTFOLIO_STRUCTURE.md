# Portfolio: Structure and Content Plan (draft v0.1)

Status: planning only. No code yet. Everything marked **[DECIDE]** or **[NEED]** is open for our discussion.
Sources: `cv.md` and `profile.yml` (career-ops-44), three YouTube videos, `Desktop\PICs`. LinkedIn blocked automated access (HTTP 999), so nothing from LinkedIn is used yet.

---

## 1. Purpose and positioning

- **Purpose:** show projects, aspirations and target industries. Not a CV replica, no work history, no volunteering.
- **Mode (Impeccable):** *Experience*. The work leads and the interface recedes.
- **One-line positioning:** control theorist who ships on hardware. *(from profile.yml; reword freely)*
- **Audience:** robotics and control hiring engineers and researchers in Europe, the UK and the US. They skim, so every project needs a visual or video in the first screen.
- **Headline under name:** deliberately left blank per your profile preference. **[DECIDE]** whether the site should break this rule.

## 2. Site map (single page + one page per project)

```
/                      Home: hero, featured work, aspirations, contact
/projects/<slug>       Case study per project (6 pages)
```

Home sections, in order:

1. **Hero:** name, one-line positioning, the strongest media (G1 grasp video), links (GitHub, LinkedIn, email).
2. **Selected work:** 6 project entries, thesis largest.
3. **Aspirations and industries:** short, honest, specific. See section 5.
4. **Contact:** email and links. No form. **[DECIDE]**

Nav: Work, Aspirations, Contact. Optional CV PDF link. **[DECIDE]**

## 3. Projects (in display order)

### 3.1 Passivity-Based Humanoid Grasping (MSc thesis), flagship
*Netherlands, Apr 2026 to Sep 2026. University of Groningen. Unitree G1 + Inspire hand.*

- **Summary:** a white-box manipulation stack for the Unitree G1: perception, kinematics, planning, simulation and control, with a Port-Hamiltonian controller as the only finger actuator, taken from simulation to real hardware.
- **Control and theory:** Port-Hamiltonian model of the 5-finger Inspire hand plus object. IDA-PBC energy shaping (gravity-compensated PID with integral action). Passivity proof: the shaped Hamiltonian is a Lyapunov function. Admittance layer, because the real hand has no torque input.
- **Kinematics and planning:** URDF-driven DH parameters, FK, 6D geometric Jacobians, damped-least-squares IK for both arms and the waist. Path planning in Isaac Sim and on hardware. Direct torque control (Pinocchio gravity compensation + PD impedance) on the right arm.
- **Simulation:** Isaac Sim/Isaac Lab (OpenUSD scenes, `ArticulationCfg`) and MuJoCo. Analysis tooling that checks the dissipation inequality and step response.
- **Perception:** RealSense D435i RGB-D, YOLO26 detection and masking, 3D localization into the base frame. LiDAR (Point-LIO SLAM) fused with depth for collision checking.
- **Sim-to-real:** Unitree DDS and Modbus TCP, with Docker bridging the G1's Ubuntu 20.04 Jetson to an Ubuntu 24.04 / ROS 2 Jazzy host. Friction identified with slip tests on PLA cubes and cylinders (mu about 0.34 to 0.5), then matched in simulation (swept 0.1 to 0.7).
- **Safety framework:** staged bring-up (dry-run, hands-only, arm+hand), 600 g force limit, 1000 g sensor-fault gate, runaway watchdog, velocity caps.
- **Results:** 5 full real-robot runs (18 Sep 2026), 14-segment choreography each. Grip forces about 110 to 480 g per finger (one flagged ring-finger outlier), arm tracking error about 0.001 to 0.03 rad. Logs exposed a faulty thumb-yaw sensor/actuator, documented.
- **Stack tags:** ROS 2 Jazzy, Isaac Sim/Lab, MuJoCo, Pinocchio, Docker, Python, Unitree SDK.
- **Media:**
  - YouTube: *Autonomous Hand Shaking with constraints on movement and Grasping* (https://youtu.be/C8PnN_p4V58). **[DECIDE]** confirm this belongs to the thesis.
  - Thesis defence photos from `PICs` (slides: robot model wireframes, simulation video, real-robot grasping, CRBA mass matrix). **[NEED]** the slide deck itself, so I can pull the figures out of it instead of using photos of a screen.
  - Robot clips from `PICs` (see section 6).
- **[NEED]** thesis PDF or repo link, plot figures from the grasp logs, an Isaac Sim screenshot or recording.

### 3.2 Humanoid Testing with Autonomous Swarm Rovers
- **Video:** https://youtu.be/yIGzrHpH3yY
- **[NEED]** what this was (course, research assistant work, or the SORTED project), what you built, and what the rovers did. Not in `cv.md`, so I can't write it. Possibly linked to the Research Assistant humanoid-lab work. **[NEED]** confidentiality check.

### 3.3 Self-Balancing Bike: PID and Funnel Control
*Apr to Jun 2025.*
- **Video:** https://youtu.be/xbVRN4Pcwng
- Funnel control for a second-relative-degree nonlinear system in MATLAB/Simulink, with constrained-tracking analysis, transient response, robustness and funnel-boundary compliance. Basic Kalman filtering and high/low-pass filtering on the bike signals.
- **[NEED]** your part of the real-bike work. `cv.md` has a note that "current control on the real motor" is not on the CV until you confirm the hardware setup and your role.

### 3.4 DIFFER: Advanced Divertor Control of Tokamak
*Sep 2025 to Feb 2026.*
- MATLAB toolbox for nonlinear system identification and model-based analysis of fusion-reactor control. Lur'e-form conversion, circle criterion and absolute stability, Bode/Nyquist analysis, Simulink validation under nonlinearity and time delay. Delivered to the DIFFER GitLab with documentation.
- **[NEED]** a figure (circle-criterion plot or stability region) and DIFFER's confidentiality clearance. Nothing is shown until you confirm.

### 3.5 Precision Chopper MPC (OptoMechatronics)
*Feb 2025.*
- Finite-horizon MPC for a satellite chopper blade: vibration rejection, hysteresis, thermal and piezo-actuator compensation, calibration against blackbody and deep-space reference loads. Current-loop design and filters (coursework).
- **[NEED]** Simulink plots or a block diagram.

### 3.6 Airline Operational Continuity (Systems Engineering, GENESYS)
*Apr to Jun 2025.*
- V-model concept for airline continuity during major disruptions (war, Icelandic volcanic airspace closure): requirements traceability, functional decomposition, architecture, verification and validation plans.
- **[NEED]** a diagram export from GENESYS. This one is lower priority and supports the systems-engineering story.

### 3.7 Optional: Humanoid Lab Toolkit
Docker and ROS 2 bridge setup, Unitree SDK guides, Isaac Sim integration guides and Obsidian tutorials built as a Research Assistant. A small card, not a case study. **[DECIDE]**

## 4. Case-study page template

Every project page uses the same structure so they read as a set:

1. **Title, one-sentence result, role, dates, context** (course, thesis or internship).
2. **Media:** video or hero image first.
3. **The problem.**
4. **Approach:** 3 to 5 short blocks, each with a figure where possible.
5. **Result:** concrete numbers only where they exist in `cv.md`.
6. **Stack tags.**
7. **Links:** GitHub, report, video.
8. **Next project.**

## 5. Aspirations and industries (draft, needs your input)

Grounded in `profile.yml`. Industries beyond robotics are **[NEED]**.

- **Target roles:** Robotics Control Engineer (manipulation and humanoid), Robotics Simulation & Control Engineer (Isaac Sim, MuJoCo, ROS 2), Low-Level / Motion Control Engineer. Secondary: control and systems engineering (nonlinear, MPC, system identification). Adjacent: systems engineering / V&V.
- **Industries (proposed):** humanoid and mobile manipulation robotics; fusion and energy systems control; precision mechatronics and aerospace instrumentation. **[DECIDE]** what to add or drop (automotive, space, semiconductor equipment, defence?).
- **Regions:** Netherlands/Europe, UK, US. Open to relocation. Needs visa sponsorship. **[DECIDE]** whether the site states this. Many people do, because it saves a wasted conversation.
- **Level:** graduate / entry, available after MSc (expected Nov 2026).
- **Tone:** first person, plain, 60 to 100 words. No "passionate about", "seamless", "cutting-edge".

## 6. Media inventory (from `Desktop\PICs`, 1.2 GB, all dated 22 Sep 2026)

| Group | Files | What it shows | Use |
|---|---|---|---|
| Thesis presentation photos | IMG_8775 to 8783, 8785 to 8788, 8790 to 8799, 8805, 8808 (26 JPG, 2 to 6 MB each) | You presenting the thesis (slides: robot wireframes, simulation video, real-robot grasping, CRBA mass matrix) | 2 or 3 at most, e.g. "defence" and "real-robot grasping slide". Better to replace slide photos with the original figures. |
| Robot photo | IMG_E0425.JPG (dated 20 Sep) | G1 standing in the lab | Possible hero or still |
| Presentation video | IMG_8789.MOV (40 s, 271 MB) | You presenting the "Simulation to real hardware" slide | Probably not used |
| G1 on gantry / stand clips | IMG_8800.MOV (5 s), IMG_8802.MOV (65 s, 639 MB), WFWV2307.MP4 (27 s) | G1 hanging from a gantry or on a stool, arm and hand motion | Candidate real-hardware clips for the thesis page |
| G1 standing / walking clips | IMG_8804.MOV (21 s), IMG_8806.MOV (1 s), IMG_8807.MOV (11 s), IQVG5699.MP4 (25 s) | G1 standing and walking or balancing on the floor | **[DECIDE]** only if relevant to your thesis. Walking is not your work, so I'd skip them or label them honestly. |

Honest note: I only sampled two frames per video, so I haven't confirmed which clips show an actual grasp. Please tell me which clips show your grasp runs.

Media handling for the site:
- Re-encode videos to H.264 MP4 (about 720p to 1080p, under 10 MB each, muted autoplay loops) and a WebM fallback if needed. The raw 639 MB MOV can't ship.
- Convert photos to AVIF/WebP at several widths, and keep originals out of the repo.
- YouTube videos embed lazily (a facade thumbnail first, so no page-load cost).
- People appear in the background of some presentation photos. **[DECIDE]** crop or skip.

## 7. Visual direction (pending skills + your taste)

Starting point only, to be refined with `impeccable init/shape`:

- Dark or light? **[DECIDE]** Robotics media (white lab, silver robot) would sit well on a light, near-white neutral ground. Technical tone via a mono typeface for data and labels.
- One accent colour, desaturated. No purple or blue-glow AI look (taste-skill ban).
- Type: Geist or Satoshi-style sans plus a mono. No Inter.
- Layout: asymmetric, not centered hero. Left-aligned text with media at right, large project entries rather than a 3-card grid.
- Motion: low. Scroll reveal and hover only. Under 300 ms, `prefers-reduced-motion` respected.
- Possible signature element: a small live-looking data readout (for example the grasp force trace from the 18 Sep runs) as a hero or divider. Needs the real log data to be honest. **[NEED]** log export.

## 8. Technical plan (summary of earlier analysis)

Next.js (App Router) + TypeScript + Tailwind v4 + motion + Phosphor icons + `next/font`, content as MDX or typed data files, static export. Install happens when we start building, not before.

## 9. Open items checklist

**From you**
- [ ] Which YouTube videos belong to which project (assumed from titles) and the story behind the swarm rovers video
- [ ] Which `PICs` clips show your actual grasp runs
- [ ] Thesis slide deck or PDF, repo links, log plots, Isaac Sim screenshot
- [ ] GitHub repos to feature (`github.com/PunjabdaJutt`)
- [ ] Confidentiality: DIFFER and SORTED
- [ ] Aspirations and industries wording, and whether to state visa sponsorship need
- [ ] LinkedIn content (it blocks automated reading; paste the About, Featured and project text here if you want it used)
- [ ] Light or dark, and how bold
- [ ] Domain name, photo, CV download

**From me, once the above is settled**
- [ ] Run `impeccable init` to write PRODUCT.md and DESIGN.md
- [ ] Scaffold the project and install dependencies
- [ ] Compress and organize media
- [ ] Build home, then the thesis page, then the others
