// Project cards. photos[0] is the card cover; the rest fill the lightbox carousel.
// To add a shot: drop it in the matching public/projects/<name>/ folder, import it
// here, and append it to that project's photos array.
//
// `tier` splits the section in two. Everything used to render in one flat grid, which
// averaged a 13-module system a government office runs on against a weekend CRUD app —
// and a reviewer skimming a grid judges the weakest tile, not the strongest.
//
// `impact` is the one line a reviewer reads if they read nothing else, so it carries a
// number or a before/after rather than a description of the feature set.
//
// `slug` links to a case study page (see data/caseStudies.js). Only the projects with
// enough substance to fill one have it; the rest stop at the card.
import HrisDashboard from "../public/projects/hris/01-dashboard.png";
import HrisProfile from "../public/projects/hris/02-employee-profile.png";
import HrisCalendar from "../public/projects/hris/03-hr-calendar.png";
import HrisLogin from "../public/projects/hris/04-login.png";
import PtoDashboard from "../public/projects/pto-cei/01-client-dashboard.png";
import PtoLogin from "../public/projects/pto-cei/02-login.png";
import PtoRegistration from "../public/projects/pto-cei/03-registration.png";
import PtoRecovery from "../public/projects/pto-cei/04-account-recovery.png";
import FabDashboard from "../public/projects/tsi-fabrication/01-dashboard.png";
import FabLogin from "../public/projects/tsi-fabrication/02-login.png";
import FabRegistration from "../public/projects/tsi-fabrication/03-registration.png";
import FabUnitRegistration from "../public/projects/tsi-fabrication/04-unit-registration.png";
import AepDashboard from "../public/projects/aep-system/01-dashboard.png";
import ArmsAccounting from "../public/projects/arms/01-accounting-dashboard.png";
import ArmsWsDashboard from "../public/projects/arms/03-ws-dashboard.png";
import ArmsParameters from "../public/projects/arms/02-parameters.png";
import Alphalab from "../public/projects/alphalab.png";
import AtAccess from "../public/projects/ataccess-telemed-app.png";
import EApp from "../public/projects/eapp.png";
import BlogPost from "../public/projects/blog-project.png";

export const PROJECTS = [
  {
    title: "HRIS",
    slug: "hris",
    tier: "production",
    org: "DOLE Regional Office IV-A",
    // No year: the resume doesn't date this one, and a date I'd have inferred is a date
    // that could be wrong in front of an interviewer. Fill it in when you know it.
    year: "",
    impact: "~400 employees · 13+ modules · built by a team of 2",
    subtitle:
      "Human Resource Information System built from scratch with a 2-developer team for a government regional office of ~400 employees. Covers employee records, leave, overtime and CTO filing, multi-level approval routing, and employee self-service across 13+ modules.",
    demo_link: "",
    git_link: "",
    photos: [
      { src: HrisDashboard, caption: "Approval and workload dashboard" },
      { src: HrisProfile, caption: "Employee self-service PDS profile" },
      { src: HrisCalendar, caption: "HR calendar" },
      { src: HrisLogin, caption: "Sign in" },
    ],
    details:
      // "Page-level access control by user role" deliberately, not "RBAC" — access is
      // gated per page by role, not per action (add/edit/delete/view). Claiming the
      // fuller model is the kind of thing that unravels in an interview.
      "Layered backend (MVC + Services + DTO + Middleware) exposing a REST API to a JavaScript SPA, with page-level access control by user role, CSRF protection, rate limiting, and Server-Sent Events for live-updating approval dashboards.",
    stack: ["PHP", "Slim 4", "PDO", "MySQL", "JavaScript", "REST API", "SPA", "SSE", "Cron Job"],
  },
  {
    title: "PTO-CEI Online Certification",
    slug: "pto-cei",
    tier: "production",
    org: "DOLE Regional Office IV-A",
    year: "2023 – 2025",
    impact: "Certificate issuance: hand-prepared → one click",
    subtitle:
      "Digitized an end-to-end government certification workflow: application submission, evaluator and inspector assignment, system-generated inspection authorities, on-site inspection reporting, compliance review, order of payment, and automated certificate issuance. Applicants get their own portal to submit, track status in real time, and receive approved certificates by email — each carrying a QR code anyone can scan to verify authenticity.",
    demo_link: "",
    git_link: "",
    photos: [
      { src: PtoDashboard, caption: "Client dashboard" },
      { src: PtoLogin, caption: "Client sign in" },
      { src: PtoRegistration, caption: "Account registration" },
      { src: PtoRecovery, caption: "Account recovery" },
    ],
    details: "",
    stack: ["PHP", "MySQL", "PDO", "JavaScript", "Bootstrap", "TCPDF", "SPA"],
  },
  {
    title: "AEP Processing System",
    tier: "production",
    org: "DOLE Regional Office IV-A",
    year: "2026",
    impact: "Replaced legacy paper forms · maintained in production",
    subtitle:
      "Full-stack system for Alien Employment Permit processing, replacing legacy JOT paper forms with automated validation, structured data handling, and reporting. I maintain it in production — resolving data issues, handling user concerns, and generating reports for management.",
    demo_link: "",
    git_link: "",
    photos: [{ src: AepDashboard, caption: "Dashboard" }],
    details: "",
    stack: ["PHP", "MySQL", "PDO", "JavaScript", "Bootstrap", "TCPDF", "SPA"],
  },
  {
    title: "TSI Fabrication Online System",
    tier: "production",
    org: "DOLE Regional Office IV-A",
    year: "2025",
    impact: "Fully manual process → online, certificates auto-issued",
    subtitle:
      "Built from scratch to replace a fully manual process: online application, a digital evaluation workflow for evaluators, and certificates auto-generated and emailed the moment an application is approved.",
    demo_link: "",
    git_link: "",
    photos: [
      { src: FabDashboard, caption: "Dashboard" },
      { src: FabLogin, caption: "Sign in" },
      { src: FabRegistration, caption: "Account registration" },
      { src: FabUnitRegistration, caption: "Unit registration" },
    ],
    details: "",
    stack: ["PHP", "Slim 4", "PDO", "MySQL", "JavaScript", "SPA", "Bootstrap", "TCPDF"],
  },
  {
    title: "ARMS",
    tier: "production",
    org: "Alpha Laboratory Calamba",
    year: "2015 – 2023",
    impact: "Replaced lab paperwork · iterated over 5+ years in use",
    subtitle:
      "Record management system for water sample testing, tracking each test from ongoing through completed and ready for release. I later added a Sales and Payments module for transaction tracking and a real-time sales dashboard, plus an accounting module converted from the lab's legacy desktop software and customized to Alpha's own workflow.",
    demo_link: "",
    git_link: "",
    photos: [
      { src: Alphalab, caption: "Login" }, //
      { src: ArmsAccounting, caption: "Accounting dashboard" },
      { src: ArmsWsDashboard, caption: "Water sample monitoring dashboard" },
      { src: ArmsParameters, caption: "Test parameters setup" },
    ],
    details: "",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "SammyJs"],
  },
  {
    title: "ATaccess Teleconsultation",
    tier: "production",
    org: "Advance Medical Access Philippines",
    year: "2020 – 2022",
    impact: "Android + iOS · WebRTC video consultations",
    // Was a definition of what teleconsultation is. A reviewer already knows; what they
    // don't know is which parts were mine.
    subtitle:
      "Built the ATaccess doctor and patient app for Android and iOS — registration, video consultations, scheduling, e-prescriptions, and admin tools. Implemented the secure real-time video layer with WebRTC so it ran reliably on both platforms inside a Cordova WebView, and wrote the MySQL stored procedures behind the platform's core data operations.",
    demo_link: "https://ataccess.ph/app/",
    git_link: "",
    photos: [{ src: AtAccess, caption: "Teleconsultation app" }],
    details: "",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Framework7", "MySQL", "Cordova", "WebRTC"],
  },
  {
    title: "E-APP",
    tier: "side",
    org: "Freelance",
    year: "2022 – 2023",
    impact: "Admin portal, approval flow, email notifications",
    subtitle:
      "Built an e-approval system from the ground up for a freelance client — admin portal, document request and approval flow, email notifications, and reporting tools.",
    // The old demo pointed at 000webhostapp.com, which has since been shut down. A dead
    // demo link reads as an abandoned portfolio, so the card now links only to source.
    demo_link: "",
    git_link: "https://github.com/17adie/e-app",
    photos: [{ src: EApp, caption: "E-approval system" }],
    details: "",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    title: "MERN Blog Platform",
    tier: "side",
    org: "Personal project",
    // Undated in the resume — see the note on HRIS above
    year: "",
    impact: "Live deployment · JWT auth · full post CRUD",
    subtitle:
      "Full-stack blogging platform with user accounts and full create, read, update and delete post management on a React + Vite frontend, backed by a RESTful Node/Express API and MongoDB, deployed to a live cloud environment.",
    demo_link: "https://mern-blog-client-ljra.onrender.com",
    git_link: "https://github.com/17adie/mern-blog-project",
    photos: [{ src: BlogPost, caption: "Blog platform" }],
    details: "",
    stack: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Vite", "Tailwind CSS", "jwt"],
  },
];

export const PRODUCTION_PROJECTS = PROJECTS.filter((p) => p.tier === "production");
export const SIDE_PROJECTS = PROJECTS.filter((p) => p.tier === "side");
