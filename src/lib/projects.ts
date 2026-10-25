export type MediaBlock =
  | { kind: "video-loop"; src: string; poster: string; alt: string }
  | { kind: "youtube"; id: string; title: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      credit?: string;
      fit?: "cover" | "contain";
    }
  | { kind: "pending"; note: string };

export type ApproachBlock = {
  heading: string;
  body: string;
  media?: MediaBlock;
};

export type Project = {
  slug: string;
  title: string;
  flagship?: boolean;
  oneLiner: string;
  role: string;
  dates: string;
  context: string;
  hero: MediaBlock;
  problem: string;
  approach: ApproachBlock[];
  results: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "humanoid-grasping-thesis",
    title: "Passivity-Based Humanoid Grasping",
    flagship: true,
    oneLiner:
      "A white-box manipulation stack for the Unitree G1, taken from simulation to real hardware with a passivity-proven controller as the only finger actuator.",
    role: "MSc Thesis — University of Groningen",
    dates: "Apr 2026 – Sep 2026",
    context: "Netherlands. Unitree G1 + Inspire hand.",
    hero: {
      kind: "video-loop",
      src: "/media/video/thesis-grasp-loop.mp4",
      poster: "/media/photos/thesis-grasp-frame.jpg",
      alt: "Unitree G1 hand gripping a cylindrical object on a stool during a real grasp run",
    },
    problem:
      "Give a 5-finger humanoid hand a grip controller with a provable safety guarantee, not just a tuned PID, then carry that guarantee from a simulated hand through to a real one with no torque sensing at the fingers.",
    approach: [
      {
        heading: "Control and theory",
        body: "Port-Hamiltonian model of the 5-finger Inspire hand plus object. IDA-PBC energy shaping (gravity-compensated PID with integral action). A passivity proof shows the shaped Hamiltonian is a Lyapunov function. An admittance layer compensates for the real hand having no torque input.",
      },
      {
        heading: "Kinematics and planning",
        body: "URDF-driven DH parameters, forward kinematics, 6D geometric Jacobians, and damped-least-squares inverse kinematics for both arms and the waist. Path planning runs in Isaac Sim and on hardware; the right arm uses direct torque control via Pinocchio gravity compensation plus PD impedance.",
      },
      {
        heading: "Simulation",
        body: "Isaac Sim / Isaac Lab (OpenUSD scenes, ArticulationCfg) and MuJoCo, with analysis tooling that checks the dissipation inequality and step response.",
        media: {
          kind: "image",
          src: "/media/photos/thesis-isaac-sim-scene.jpg",
          alt: "Isaac Sim digital twin of the Unitree G1 holding a cylinder next to a bin on a table",
        },
      },
      {
        heading: "Perception",
        body: "RealSense D435i RGB-D, YOLO26 detection and masking, 3D localization into the base frame. LiDAR (Point-LIO SLAM) fused with depth for collision checking.",
      },
      {
        heading: "Sim-to-real",
        body: "Unitree DDS and Modbus TCP, with Docker bridging the G1's Ubuntu 20.04 Jetson to an Ubuntu 24.04 / ROS 2 Jazzy host. Friction identified with slip tests on PLA cubes and cylinders (μ ≈ 0.34–0.5), then matched in simulation by sweeping 0.1–0.7.",
      },
      {
        heading: "Safety framework",
        body: "Staged bring-up (dry-run, hands-only, arm+hand), a 600 g force limit, a 1000 g sensor-fault gate, a runaway watchdog, and velocity caps.",
      },
      {
        heading: "Hardware validation",
        body: "The HAND12 energy-based control layer — a mode-switched IDA-PBC law that shapes an impedance-style position controller in free space and a force-regulating law once contact is made — ran five full grasp-pipeline runs on the real G1, plus an arm-bench comparison against a position-PD baseline.",
        media: {
          kind: "image",
          src: "/media/photos/thesis-hw-lab-setup-grasp.jpg",
          alt: "Unitree G1 on its gantry rig gripping a red cylindrical test object on a stool",
          fit: "contain",
        },
      },
      {
        heading: "Logged telemetry",
        body: "Per-finger angle and contact force through grasp and lift-hold, checked against a guard band and the hand's own force limits. The thumb-yaw force channel is the one with the faulty sensor, excluded from the control loop and reported, not hidden.",
        media: {
          kind: "image",
          src: "/media/photos/thesis-grasp-telemetry.png",
          alt: "Plots of finger angle, contact force, and thumb-yaw force over time during a grasp-hold-lift-hold run",
          fit: "contain",
        },
      },
    ],
    results: [
      "5 full real-robot runs (18 Sep 2026), a 14-segment choreography each.",
      "Grip forces ≈110–480 g per finger (one flagged ring-finger outlier).",
      "Arm tracking error ≈0.001–0.03 rad.",
      "Logs exposed a faulty thumb-yaw sensor/actuator, documented rather than hidden.",
    ],
    stack: [
      "ROS 2 Jazzy",
      "Isaac Sim / Isaac Lab",
      "MuJoCo",
      "Pinocchio",
      "Docker",
      "Python",
      "Unitree SDK",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/PunjabdaJutt" },
      {
        label: "Conference paper (PDF)",
        href: "/media/docs/port-hamiltonian-grasping-paper.pdf",
      },
    ],
  },
  {
    slug: "humanoid-swarm-rovers",
    title: "Humanoid Testing with Autonomous Swarm Rovers",
    oneLiner:
      "Autonomous swarm rovers interacting with and following a humanoid robot, extending the same sensing and control toolkit to multi-agent ground robots.",
    role: "Research Assistant — University of Groningen humanoid lab",
    dates: "2026",
    context: "Part of the same humanoid-lab robotics work as the thesis.",
    hero: {
      kind: "youtube",
      id: "yIGzrHpH3yY",
      title: "Humanoid testing with autonomous swarm rovers",
    },
    problem:
      "Extend perception and autonomy from a single humanoid to a small fleet of ground rovers operating alongside it.",
    approach: [
      {
        heading: "Autonomous following",
        body: "Swarm rovers detect and track the humanoid and each other, demonstrating coordinated following behavior in the lab.",
      },
    ],
    results: [],
    stack: ["ROS 2", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/PunjabdaJutt" },
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=yIGzrHpH3yY",
      },
    ],
  },
  {
    slug: "self-balancing-bike",
    title: "Self-Balancing Bike: PID and Funnel Control",
    oneLiner:
      "Funnel control for a second-relative-degree nonlinear system, with constrained-tracking analysis and real hardware under current control.",
    role: "Control Engineering Project",
    dates: "Apr – Jun 2025",
    context: "MATLAB/Simulink, real bike hardware.",
    hero: {
      kind: "youtube",
      id: "xbVRN4Pcwng",
      title: "Self-balancing bike — PID and funnel control",
    },
    problem:
      "Keep a bike upright and on a tracked path using funnel control — a constrained-tracking approach that guarantees the error stays inside a prescribed, shrinking funnel — rather than a conventional fixed-gain PID.",
    approach: [
      {
        heading: "Funnel control",
        body: "Funnel control for a second-relative-degree nonlinear system in MATLAB/Simulink, with constrained-tracking analysis, transient response, robustness, and funnel-boundary compliance.",
      },
      {
        heading: "Signal processing",
        body: "Basic Kalman filtering and high/low-pass filtering on the bike's sensor signals, feeding current control on the real motor.",
      },
    ],
    results: [],
    stack: ["MATLAB", "Simulink", "Funnel Control", "Kalman Filtering"],
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=xbVRN4Pcwng" },
    ],
  },
  {
    slug: "differ-tokamak-divertor-control",
    title: "DIFFER: Advanced Divertor Control of Tokamak",
    oneLiner:
      "A MATLAB toolbox for nonlinear system identification and model-based stability analysis of fusion-reactor divertor control, delivered to DIFFER.",
    role: "Control Engineering Project — DIFFER (Dutch Institute for Fundamental Energy Research)",
    dates: "Sep 2025 – Feb 2026",
    context: "Fusion-reactor divertor control, delivered to DIFFER's GitLab.",
    hero: {
      kind: "image",
      src: "/media/photos/differ-institute-building.jpg",
      alt: "DIFFER — Dutch Institute for Fundamental Energy Research — building exterior",
    },
    problem:
      "Analyze and design stable control for the nonlinear, time-delayed dynamics of tokamak divertor heat and particle exhaust.",
    approach: [
      {
        heading: "System identification",
        body: "Nonlinear system identification and model-based analysis of fusion-reactor control dynamics, built into a reusable MATLAB toolbox.",
      },
      {
        heading: "Stability analysis",
        body: "Lur'e-form conversion, circle criterion and absolute stability analysis, Bode/Nyquist analysis, and Simulink validation under nonlinearity and time delay.",
        media: {
          kind: "image",
          src: "/media/photos/tokamak-jet-divertor.jpg",
          alt: "Sub-divertor structure of the Joint European Torus (JET) tokamak",
          credit:
            "X. Litaudon et al., \"Overview of the JET results in support to ITER,\" Nucl. Fusion 57 102001 (2017), fig. 10 — CC BY 3.0, via Wikimedia Commons",
        },
      },
      {
        heading: "Delivery",
        body: "Delivered to DIFFER's GitLab with documentation for reuse by the group.",
      },
    ],
    results: [],
    stack: ["MATLAB", "Simulink", "System Identification", "Lur'e Systems"],
    links: [],
  },
  {
    slug: "precision-chopper-mpc",
    title: "Precision Chopper MPC",
    oneLiner:
      "Finite-horizon MPC for a satellite chopper blade, rejecting vibration and compensating hysteresis and thermal drift against calibrated reference loads.",
    role: "Coursework — OptoMechatronics",
    dates: "Feb 2025",
    context: "Satellite chopper blade, blackbody and deep-space reference calibration.",
    hero: {
      kind: "image",
      src: "/media/photos/chopper-mirror-strut-assembly.jpg",
      alt: "Strut-mounted mirror and reference-mirror assembly used in the chopper calibration rig",
    },
    problem:
      "Control a satellite chopper blade precisely enough to calibrate against blackbody and deep-space reference loads, despite vibration, hysteresis, and thermal drift in the piezo actuator.",
    approach: [
      {
        heading: "Model-predictive control",
        body: "Finite-horizon MPC for vibration rejection, hysteresis compensation, and thermal and piezo-actuator compensation.",
      },
      {
        heading: "Calibration",
        body: "Current-loop design and filters, calibrated against blackbody and deep-space reference loads.",
      },
    ],
    results: [],
    stack: ["MATLAB", "Model Predictive Control", "Piezo Actuation"],
    links: [],
  },
  {
    slug: "airline-operational-continuity",
    title: "Airline Operational Continuity",
    oneLiner:
      "A systems-engineering V-model for keeping airline operations continuous through major disruptions, from requirements through verification and validation.",
    role: "Systems Engineering Project — GENESYS",
    dates: "Apr – Jun 2025",
    context: "Disruption scenarios: war, Icelandic volcanic airspace closure.",
    hero: {
      kind: "image",
      src: "/media/photos/systems-engineering-v-model.jpg",
      alt: "The systems-engineering V-model: requirements and design decomposition on the left, verification and validation on the right",
      credit: "V-model diagram, public domain, via Wikimedia Commons",
      fit: "contain",
    },
    problem:
      "Design a systems-engineering approach for airline continuity under major disruption scenarios such as war or volcanic airspace closure.",
    approach: [
      {
        heading: "V-model",
        body: "Requirements traceability, functional decomposition, and architecture definition in GENESYS.",
      },
      {
        heading: "Verification and validation",
        body: "Verification and validation plans built against the decomposed architecture.",
      },
    ],
    results: [],
    stack: ["Systems Engineering", "GENESYS", "V-Model"],
    links: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const person = {
  name: "Ammar Ahmed",
  roles: [
    "Control & Robotics Engineer",
    "Sim-to-Real Specialist",
    "Port-Hamiltonian Control",
  ],
  summary:
    "I'm a control theorist who ships on hardware. My work takes passivity-based control theory — proofs, not just tuned gains — from simulation in Isaac Sim and MuJoCo onto a real Unitree G1 humanoid.",
  heroImage: "/media/photos/hero-thesis-defence-presenting.jpg",
  email: "ammar.akhlaqahmed1@gmail.com",
  github: "https://github.com/PunjabdaJutt",
  youtube: "https://www.youtube.com/@ammarahmed7706",
  linkedin: "https://www.linkedin.com/in/ammar-akhlaq-ahmed/",
  resumeHref: "/media/docs/ammar-ahmed-cv.pdf",
  personalNote:
    "Beyond the lab, I enjoy talking to people, discovering new paradigms, and travelling.",
};

export type EducationEntry = {
  institution: string;
  degree: string;
  dates: string;
  detail: string;
  image?: { src: string; alt: string; credit?: string };
};

export const education: EducationEntry[] = [
  {
    institution: "University of Groningen",
    degree: "MSc Applied Mathematics: Systems & Control",
    dates: "Sep 2024 – Nov 2026 (expected)",
    detail:
      "Nonlinear control, robust control, model reduction, data and model identification, digital twins, and humanoid robotics.",
    image: {
      src: "/media/photos/campus-groningen-academy-building.jpg",
      alt: "University of Groningen, Academy Building",
    },
  },
  {
    institution: "Forman Christian College",
    degree: "BSc Mathematics",
    dates: "Sep 2018 – Apr 2023",
    detail:
      "Partial differential equations, topology and metric spaces, mechanics, waves and vibrations, vector analysis, group theory.",
    image: {
      src: "/media/photos/campus-forman-christian-college.webp",
      alt: "Forman Christian College, Lahore — main academic building",
      credit: "Photo: facebook.com/jjkhan.photography",
    },
  },
];

export type SkillCategory = {
  title: string;
  icon: "control" | "robot" | "simulation" | "perception" | "systems" | "tools";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Control Engineering",
    icon: "control",
    items: [
      "Nonlinear & Robust Control",
      "Port-Hamiltonian Systems",
      "Passivity-Based Control (IDA-PBC)",
      "Lyapunov Stability",
      "Funnel Control",
    ],
  },
  {
    title: "Robotics",
    icon: "robot",
    items: [
      "ROS 2 (Jazzy)",
      "URDF Modelling",
      "Forward / Inverse Kinematics",
      "Geometric Jacobians",
      "Sim-to-Real Transfer",
      "Dexterous Manipulation",
    ],
  },
  {
    title: "Simulation",
    icon: "simulation",
    items: ["Isaac Sim / Isaac Lab", "MuJoCo", "Pinocchio", "RViz2"],
  },
  {
    title: "Perception & Sensing",
    icon: "perception",
    items: [
      "RealSense RGB-D",
      "YOLO Object Detection",
      "LiDAR SLAM (Point-LIO)",
      "Sensor Fusion",
    ],
  },
  {
    title: "Systems Engineering",
    icon: "systems",
    items: ["V-Model", "GENESYS", "Verification & Validation", "System Identification"],
  },
  {
    title: "Math & Tools",
    icon: "tools",
    items: ["MATLAB / Simulink", "Python (NumPy, pandas)", "Git / GitHub", "Docker"],
  },
];
