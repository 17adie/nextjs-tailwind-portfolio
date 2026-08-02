import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineSolution } from "react-icons/ai";
import { SITE } from "./site";

// Profile links shared by the hero and the footer. The hero's "Get in touch" entry is
// deliberately NOT here — it's a page call-to-action anchored at #contact, not a
// profile, and putting it here would force the footer to filter the list it renders.
export const SOCIALS = [
  {
    id: 1,
    name: "Facebook",
    Icon: AiFillFacebook,
    link: "https://www.facebook.com/17aldrn/",
  },
  {
    id: 2,
    name: "Github",
    Icon: AiFillGithub,
    link: "https://github.com/17adie",
  },
  {
    id: 3,
    name: "LinkedIn",
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/aldrinefacistol/",
  },
  {
    id: 4,
    name: "Resume",
    Icon: AiOutlineSolution,
    link: SITE.resume,
  },
];
