import React, { useState, useEffect, useRef } from "react";
import SectionShell from "./SectionShell"
import Image from "next/image";

// Gallery screenshots. To add another shot to a project, drop the file in the
// matching public/projects/<name>/ folder, import it here, and append it to that
// project's `photos` array. photos[0] is what the card shows.
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
import ArmsParameters from "../public/projects/arms/02-parameters.png";

import Alphalab from "../public/projects/alphalab.png";
import AtAccess from "../public/projects/ataccess-telemed-app.png";
import EApp from "../public/projects/eapp.png";
import QrCodeGenerator from "../public/projects/qr-code-generator.png";
import CrudPhpOop from "../public/projects/crud-php-oop.png";
import ReactPortfolio from "../public/projects/my-portfolio.png";
import MemeGenerator from "../public/projects/meme-generator-project.png";
import TenziesGame from "../public/projects/tenzies-game.png";
import AddCart from "../public/projects/simple-add-to-cart.png";
import ResortApp from "../public/projects/ResortApp-3.png";
import NextCrud from "../public/projects/next-crud-mysql.png";
import JsFinalProject from "../public/projects/js-todolist-fn.png";
import BlogPost from "../public/projects/blog-project.png";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import Lightbox from "./Lightbox";

// Cycled per stack tag; wraps so a project can list more tags than there are colors
const gradient_color = ["#FF007F", "#FF5C4C", "#FF8933", "#FFB719", "#FFE500", "#48A71D", "#AC2C7B"];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const textRef = useRef(null);

  const photos = project.photos;
  const cover = photos[0];

  // Show "See more" only when the text is genuinely being cut off, so short
  // descriptions don't get a toggle that reveals nothing. Measured rather than
  // guessed from character count, so it stays correct when the copy is edited.
  useEffect(() => {
    const el = textRef.current;
    if (!el || expanded) return;

    const measure = () => setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [expanded]);

  const have_git = (link) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <AiFillGithub />
    </a>
  );

  const have_demo = (link) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <AiOutlineLink />
    </a>
  );

  return (
    <div className="transition-all max-w-xs h-full rounded overflow-hidden bg-white dark:bg-gray-800 relative">
      <button type="button" onClick={() => setLightboxIndex(0)} aria-label={`View ${project.title} screenshots`} className="group relative block w-full cursor-pointer overflow-hidden">
        <Image className="object-cover h-48 w-96 rounded p-3 group-hover:scale-110 ease-in duration-200" src={cover.src} alt={project.title} />
        {photos.length > 1 && <span className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">1 / {photos.length}</span>}
      </button>
      <div className="px-3 py-4 mb-16">
        <div className="flex items-baseline justify-between">
          <div className="font-bold text-xl mb-2">{project.title} </div>
          <div className="flex text-2xl text-teal-600">
            <span>{project.git_link != "" ? have_git(project.git_link) : ""}</span>
            <span className="ml-2">{project.demo_link != "" ? have_demo(project.demo_link) : ""}</span>
          </div>
        </div>
        {/* min-h reserves 4 lines so every collapsed card is the same height */}
        <p ref={textRef} className={`text-gray-700 text-sm dark:text-gray-500 min-h-[5rem] ${expanded ? "" : "clamp-4"}`}>
          {project.subtitle}
        </p>
        {(isTruncated || expanded) && (
          <button type="button" onClick={() => setExpanded((prev) => !prev)} aria-expanded={expanded} className="mt-1 text-xs font-semibold text-teal-600 hover:text-teal-500 focus:outline-none">
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
      <div className="px-3 py-1 pb-2 absolute bottom-0 left-0 right-0">
        {project.stack.map((s, i) => (
          <span key={i} className="text-xs inline-block text-white mr-2 mt-2  row-end-auto" style={{ color: gradient_color[i % gradient_color.length] }}>
            #{s}
          </span>
        ))}
      </div>

      {lightboxIndex !== null && <Lightbox photos={photos} title={project.title} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </div>
  );
}

function ProjectSection() {
  let data = [
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
      stack: ["PHP", "Slim 4", "PDO", "MySQL", "JavaScript", "REST API", "SPA", "RBAC", "SSE", "Cron Job"],
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
      photos: [{ src: Alphalab }, { src: ArmsAccounting, caption: "Accounting dashboard" }, { src: ArmsParameters, caption: "Test parameters setup" }],
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

  const ProjectCards = data.map((v, i) => <ProjectCard key={i} project={v} />);

  return (
    <SectionShell tone="a">
      <h2 className="text-2xl font-bold mb-6 text-center">My Works</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className="max-w-5xl mx-auto">
        <div className="mt-5 flex flex-wrap gap-7 justify-center">
          <Fade>{ProjectCards}</Fade>
        </div>
      </div>
    </SectionShell>
  );
}

export default ProjectSection;
