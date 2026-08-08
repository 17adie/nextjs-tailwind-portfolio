import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineSolution } from "react-icons/ai";
import { SITE } from "./site";

// Profile links shared by the hero and the footer. The hero's "Get in touch" entry is
// deliberately NOT here — it's a page call-to-action anchored at #contact, not a
// profile, and putting it here would force the footer to filter the list it renders.
//
// Order is hiring order: the two links a recruiter actually opens, then the resume.
// The footer renders this whole list; `heroIcon` picks the subset the first screen
// shows as icons, so the hero stays down to the two profiles worth browsing.
export const SOCIALS = [
  {
    id: 1,
    name: "Github",
    Icon: AiFillGithub,
    link: "https://github.com/17adie",
    heroIcon: true,
  },
  {
    id: 2,
    name: "LinkedIn",
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/aldrinefacistol/",
    heroIcon: true,
  },
  {
    id: 3,
    name: "Resume",
    Icon: AiOutlineSolution,
    link: SITE.resume,
    // Excluded from the hero icons, not from the site. The résumé already has a
    // labelled button in the hero's call-to-action row and a second one in the navbar;
    // a third entry point — an unlabelled icon sitting directly under the button that
    // does the same thing — splits attention instead of adding a route.
    heroIcon: false,
  },
  {
    id: 4,
    name: "Facebook",
    Icon: AiFillFacebook,
    link: "https://www.facebook.com/17aldrn/",
    // A personal profile. Leading the first screen with it invites a reviewer to judge
    // the wrong account, so it stays in the footer for anyone who goes looking.
    heroIcon: false,
  },
];

// The icon row under the hero's buttons: profiles only
export const HERO_SOCIALS = SOCIALS.filter((s) => s.heroIcon);
