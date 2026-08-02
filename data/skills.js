// Grouped by how much of it is actually shipped work, mirroring the resume's own
// split. A flat grid implied equal depth across everything, which overstated the
// 'currently learning' entries.
import Html5 from "../public/image/html5.png";
import Css from "../public/image/css.png";
import JavaScript from "../public/image/js.png";
import ReactJs from "../public/image/reactjs.png";
import ExpressJs from "../public/image/expressjs.png";
import NodeJs from "../public/image/nodejs.png";
import NextJs from "../public/image/nextjs.png";
import VueJs from "../public/image/vuejs.png";
import Framework7 from "../public/image/framework7.png";
import Bootstrap from "../public/image/bootstrap.png";
import Tailwind from "../public/image/tailwind.png";
import MySql from "../public/image/mysql.png";
import MongoDB from "../public/image/mongodb.png";
import Firebase from "../public/image/firebase.png";
import AdobePS from "../public/image/adobeps.png";
import Php from "../public/image/php.png";

import { SiGit, SiLaravel, SiJquery, SiPostman, SiApachecordova, SiComposer, SiNpm, SiGithub } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

// Grouped by how much of it is actually shipped work, mirroring the resume's own
// split. A flat grid implied equal depth across everything, which overstated the
// "currently learning" entries.
export const CORE = [
  { name: "PHP", img: Php },
  { name: "Slim 4", className: "text-teal-600 dark:text-teal-500" },
  { name: "JavaScript", img: JavaScript },
  { name: "MySQL", img: MySql },
  { name: "HTML5", img: Html5 },
  { name: "CSS3", img: Css },
];

export const ALSOUSE = [
  { name: "ReactJs", img: ReactJs },
  { name: "NodeJs", img: NodeJs },
  { name: "ExpressJs", img: ExpressJs },
  { name: "NextJs", img: NextJs },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "Tailwind", img: Tailwind },
  { name: "Bootstrap", img: Bootstrap },
  { name: "MongoDB", img: MongoDB },
  { name: "Firebase", img: Firebase },
  { name: "Framework7", img: Framework7 },
  { name: "Cordova", icon: SiApachecordova, className: "text-gray-600 dark:text-gray-300" },
];

export const LEARNING = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "VueJs", img: VueJs },
  { name: "Inertia.js", className: "text-teal-600 dark:text-teal-500" },
];

// No logos exist for these, and they are the strongest signal on the resume —
// architecture and platform work rather than framework familiarity.
export const CONCEPTS = [
  "REST APIs", //
  "Single-Page Applications",
  "OOP",
  "MVC",
  "Role-Based Access Control",
  "Server-Sent Events",
  "WebRTC",
  "Stored Procedures",
  "Cron Jobs",
];

// Deliberately monochrome and smaller — a secondary tier that shouldn't compete
// with the stack above it.
export const TOOLS = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub },
  { name: "Composer", icon: SiComposer },
  { name: "npm", icon: SiNpm },
  { name: "Postman", icon: SiPostman },
  { name: "Photoshop", img: AdobePS },
];

// Rendered as text rather than logos: only OpenAI has a brand mark in the icon set,
// so a logo row would be three identical fallback glyphs.
export const AITOOLS = [
  "ChatGPT", //
  "Claude",
  "GitHub Copilot",
  "Codex",
];
