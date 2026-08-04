// Project cards. photos[0] is the card cover; the rest fill the lightbox carousel.
// To add a shot: drop it in the matching public/projects/<name>/ folder, import it
// here, and append it to that project's photos array.
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
import NextCrud from "../public/projects/next-crud-mysql.png";
import BlogPost from "../public/projects/blog-project.png";

export const PROJECTS = [
  {
    title: "HRIS",
    subtitle: "Human Resource Information System built from scratch with a 2-developer team for a government regional office of ~400 employees. Covers employee records, leave, overtime and CTO filing, multi-level approval routing, and employee self-service across 13+ modules.",
    demo_link: "",
    git_link: "",
    photos: [
      { src: HrisDashboard, caption: "Approval and workload dashboard" },
      { src: HrisProfile, caption: "Employee self-service PDS profile" },
      { src: HrisCalendar, caption: "HR calendar" },
      { src: HrisLogin, caption: "Sign in" },
    ],
    details: "Layered backend (MVC + Services + DTO + Middleware) exposing a REST API to a JavaScript SPA, with role-based access control, CSRF protection, rate limiting, and Server-Sent Events for live-updating approval dashboards.",
    stack: ["PHP", "Slim 4", "PDO", "MySQL", "JavaScript", "REST API", "SPA", "SSE", "Cron Job"],
  },
  {
    title: "PTO-CEI Online Certification",
    subtitle: "Digitized the end-to-end certification workflow, replacing a largely manual process with a centralized system that manages application submission, evaluator and inspector assignment, system-generated inspection authorities, on-site inspection reporting, compliance review, order of payment generation, certificate approval, and automated certificate issuance. Built a client portal where applicants can submit requests, monitor real-time application status, and receive approved certificates via email. Implemented QR code verification for certificate authenticity, enabling anyone to validate the legitimacy of issued certificates instantly.",
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
    subtitle: "Full-stack system for Alien Employment Permit processing, replacing legacy paper forms with automated validation, structured data handling, and reporting. Maintained in production.",
    demo_link: "",
    git_link: "",
    photos: [{ src: AepDashboard, caption: "Dashboard" }],
    details: "",
    stack: ["PHP", "MySQL", "PDO", "JavaScript", "Bootstrap", "TCPDF", "SPA"],
  },
  {
    title: "TSI Fabrication Online System",
    subtitle: "Built from scratch to replace a fully manual process, with an online application and digital evaluation workflow and certificates auto-generated and emailed on approval.",
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
    title: "Blog Post",
    subtitle: "My first VITE + MERN (MongoDB, ExpressJs, ReactJs, NodeJs) project: a blog with user accounts, where you can easily add, update, and delete posts.",
    demo_link: "https://mern-blog-client-ljra.onrender.com",
    git_link: "https://github.com/17adie/mern-blog-project",
    photos: [{ src: BlogPost }],
    details: "",
    stack: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Vite", "Tailwind CSS", "jwt"],
  },
  {
    title: "ARMS",
    subtitle: "Record management system for water sample testing, tracking each test from ongoing through completed and ready for release. Includes a Sales and Payments module for monitoring customer transactions, plus an accounting module converted from the lab's legacy desktop accounting software and customized to Alpha's own workflow.",
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
    title: "ATAccess",
    subtitle: "A teleconsultation app enables remote consultations with healthcare professionals for diagnosis and treatment of medical conditions, reducing the need for in-person visits.",
    demo_link: "https://ataccess.ph/app/",
    git_link: "",
    photos: [{ src: AtAccess }],
    details: "",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Framework7", "MySQL", "Cordova"],
  },
  {
    title: "E-APP",
    subtitle: "An e-approval system streamlines approval processes by allowing electronic requests, reviews, and approvals of documents or forms, increasing organizational efficiency.",
    demo_link: "https://e-approval.000webhostapp.com/",
    git_link: "https://github.com/17adie/e-app",
    photos: [{ src: EApp }],
    details: "",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    title: "NextJs CRUD App",
    subtitle: "A simple web application that allows users to perform CRUD operations on data stored in a MySQL database. It provides four basic functionalities: Create, Read, Update, and Delete.",
    demo_link: "",
    git_link: "https://github.com/17adie/next-simple-crud-mysql",
    photos: [{ src: NextCrud }],
    details: "",
    stack: ["NextJs", "ReactJs", "Tailwind", "MySQL"],
  },
];
