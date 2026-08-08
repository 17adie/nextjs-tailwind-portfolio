// Grouped by layer rather than by confidence. The previous split ("core" / "also work
// with" / concepts / tools / AI tools) ran to six groups and ~40 entries, which reads as
// keyword stuffing — and listing OOP, MVC and Cron Jobs as skills signals junior, which
// works against a 5-year resume. Anything that only ever appeared on one project
// (Framework7, Cordova, jQuery, Photoshop) now lives in that project's stack tags
// instead, where it reads as "used here" rather than "this is what I am".
import Html5 from "../public/image/html5.png";
import Css from "../public/image/css.png";
import JavaScript from "../public/image/js.png";
import ReactJs from "../public/image/reactjs.png";
import ExpressJs from "../public/image/expressjs.png";
import NodeJs from "../public/image/nodejs.png";
import NextJs from "../public/image/nextjs.png";
import VueJs from "../public/image/vuejs.png";
import Bootstrap from "../public/image/bootstrap.png";
import Tailwind from "../public/image/tailwind.png";
import MySql from "../public/image/mysql.png";
import MongoDB from "../public/image/mongodb.png";
import Php from "../public/image/php.png";

import { SiGit, SiLaravel, SiPostman, SiComposer, SiNpm, SiGithub } from "react-icons/si";

// The layer most of the shipped work lives in
export const BACKEND = [
  { name: "PHP", img: Php },
  { name: "Slim 4", className: "text-teal-600 dark:text-teal-500" },
  { name: "MySQL", img: MySql },
  { name: "NodeJs", img: NodeJs },
  { name: "ExpressJs", img: ExpressJs },
  { name: "MongoDB", img: MongoDB },
];

export const FRONTEND = [
  { name: "JavaScript", img: JavaScript },
  { name: "ReactJs", img: ReactJs },
  // Claimed rather than "learning": this site is built and shipped in it
  { name: "NextJs", img: NextJs },
  { name: "Tailwind", img: Tailwind },
  { name: "Bootstrap", img: Bootstrap },
  { name: "HTML5", img: Html5 },
  { name: "CSS3", img: Css },
];

export const LEARNING = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "VueJs", img: VueJs },
  { name: "Inertia.js", className: "text-teal-600 dark:text-teal-500" },
];

// Kept, but trimmed to the ones that are genuinely architecture and platform work.
// These are the strongest signal on the resume and the things worth being asked about
// in an interview — OOP and MVC are table stakes and were diluting the list.
export const CONCEPTS = [
  "REST APIs", //
  "Single-Page Applications",
  // Not "Role-Based Access Control": the four government systems gate access per page
  // by role, not per action. The narrower label is the one that survives an interview.
  "Role-based page access",
  "Server-Sent Events",
  "WebRTC",
  "Stored Procedures",
];

// Deliberately monochrome and smaller — a secondary tier that shouldn't compete
// with the stack above it.
export const TOOLS = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub },
  { name: "Composer", icon: SiComposer },
  { name: "npm", icon: SiNpm },
  { name: "Postman", icon: SiPostman },
  // No brand mark for either of these in react-icons 4.7.1, so they fall through to the
  // code glyph the way Slim 4 and Inertia.js do — the label underneath names them.
  // Importing a non-existent SiNavicat/SiHostinger would resolve to undefined and emit
  // a webpack "export not found" warning for no gain.
  { name: "Navicat" },
  { name: "Hostinger" },
];
