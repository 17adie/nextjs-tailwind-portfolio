import { MdOutlineHome, MdCode, MdWorkOutline, MdSchool, MdOutlineMail } from "react-icons/md";

// Single source for section anchors. The navbar's hrefs and the id each SectionShell
// renders used to be typed independently — renaming one and forgetting the other broke
// the link with no build error, no lint warning, and no visible symptom except a link
// that quietly scrolled nowhere. Both sides now read from here.
export const SECTIONS = {
  home: { id: "home", label: "Home", Icon: MdOutlineHome },
  techStack: { id: "tech-stack", label: "Tech Stack", Icon: MdCode },
  works: { id: "works", label: "Works", Icon: MdWorkOutline },
  certificates: { id: "certificates", label: "Certificates", Icon: MdSchool },
  contact: { id: "contact", label: "Contact", Icon: MdOutlineMail },
};

// Nav order is the page order
export const NAV_LINKS = [SECTIONS.home, SECTIONS.techStack, SECTIONS.works, SECTIONS.certificates, SECTIONS.contact];
