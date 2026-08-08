import { MdOutlineHome, MdCode, MdWorkOutline, MdOutlineMail, MdPersonOutline, MdTimeline } from "react-icons/md";

// Single source for section anchors. The navbar's hrefs and the id each SectionShell
// renders used to be typed independently — renaming one and forgetting the other broke
// the link with no build error, no lint warning, and no visible symptom except a link
// that quietly scrolled nowhere. Both sides now read from here.
export const SECTIONS = {
  home: { id: "home", label: "Home", Icon: MdOutlineHome },
  about: { id: "about", label: "About", Icon: MdPersonOutline },
  works: { id: "works", label: "Works", Icon: MdWorkOutline },
  experience: { id: "experience", label: "Experience", Icon: MdTimeline },
  techStack: { id: "tech-stack", label: "Tech Stack", Icon: MdCode },
  contact: { id: "contact", label: "Contact", Icon: MdOutlineMail },
};

// Nav order is the page order, and the page order is what a reviewer with 30 seconds
// should hit first: who I am, then the proof, then the history behind it, then the
// toolset. Tech Stack used to sit directly under the hero, which put a grid of ~40
// logos ahead of any evidence that they'd been used for anything.
//
// Certificates no longer has an entry: three course certificates don't warrant a
// top-level nav slot, so they sit as a footnote inside Experience.
export const NAV_LINKS = [SECTIONS.home, SECTIONS.about, SECTIONS.works, SECTIONS.experience, SECTIONS.techStack, SECTIONS.contact];
