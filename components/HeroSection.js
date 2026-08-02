import React from "react";
import SectionShell from "./SectionShell"
import Image from "next/image";
import dev from "../public/dp.jpg";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineSolution } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

function HeroSection() {
  const data = [
    {
      id: 1,
      name: "Facebook",
      fragment: <AiFillFacebook />,
      link: "https://www.facebook.com/17aldrn/",
    },
    {
      id: 2,
      name: "Github",
      fragment: <AiFillGithub />,
      link: "https://github.com/17adie",
    },
    {
      id: 3,
      name: "LinkedIn",
      fragment: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/aldrinefacistol/",
    },
    {
      id: 4,
      name: "Resume",
      fragment: <AiOutlineSolution />,
      link: "/Aldrine-Facistol-Resume.pdf",
    },
    {
      id: 5,
      name: "Get in touch",
      fragment: <MdOutlineMail />,
      link: "#contact",
      // Same-page anchor, so it must not open a tab the way the others do
      internal: true,
    },
  ];

  const icons = data.map((v) => (
    <a
      key={v.id}
      href={v.link}
      target={v.internal ? undefined : "_blank"}
      rel={v.internal ? undefined : "noopener noreferrer"}
      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600"
    >
      <span className="group relative flex justify-center">
        {v.fragment}
        <span className="absolute top-10 scale-0 whitespace-nowrap transition-all rounded bg-gray-800 p-2 text-xs text-white text-center group-hover:scale-95">{v.name}</span>
      </span>
    </a>
  ));

  return (
    <SectionShell tone="a" fullHeight>
      <Fade cascade>
        <div className="relative mx-auto rounded-full w-60 h-60 mt-3 mb-5 overflow-hidden">
          <Image src={dev} alt="display photo" />
        </div>
        <div className="text-center p-1">
          <h1 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl lg:mt-5">Aldrine Facistol</h1>
          <p className="text-2xl py-1 md:text-3xl dark:text-gray-300">Full-Stack Developer</p>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          <p className="text-xs py-3 leading-5 text-gray-800 md:text-lg max-w-3xl mx-auto dark:text-gray-500">Full-stack developer with 5+ years of experience delivering web applications across the frontend and backend. Enjoy building scalable systems, improving user experiences, and solving real-world business challenges with technology.</p>
        </div>
      </Fade>
      <Fade direction="up" cascade>
        <div className="text-4xl flex justify-center gap-12 pt-2 text-gray-500">{icons}</div>
      </Fade>
    </SectionShell>
  );
}

export default HeroSection;
