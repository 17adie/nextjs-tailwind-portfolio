import React from "react";
import SectionShell from "./SectionShell"
import Image from "next/image";
import dev from "../public/dp2.png";
import { MdOutlineMail, MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { SITE } from "../data/site";
import { SOCIALS } from "../data/socials";
import { SECTIONS } from "../data/sections";

function HeroSection() {
  // The shared profile links, plus a call to action that only belongs here — it's a
  // same-page anchor, not a profile, so it isn't part of SOCIALS.
  const links = [
    ...SOCIALS,
    { id: "contact-cta", name: "Get in touch", Icon: MdOutlineMail, link: `#${SECTIONS.contact.id}`, internal: true },
  ];

  const icons = links.map((v) => (
    <a
      key={v.id}
      href={v.link}
      target={v.internal ? undefined : "_blank"}
      rel={v.internal ? undefined : "noopener noreferrer"}
      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-teal-600"
    >
      <span className="group relative flex justify-center">
        <v.Icon />
        <span className="absolute top-10 scale-0 whitespace-nowrap transition-all rounded bg-gray-800 p-2 text-xs text-white text-center group-hover:scale-95">{v.name}</span>
      </span>
    </a>
  ));

  return (
    <SectionShell tone="a" fullHeight id={SECTIONS.home.id}>
      <Fade cascade>
        <div className="relative mx-auto rounded-full w-60 h-60 mt-3 mb-5 overflow-hidden">
          <Image src={dev} alt="display photo" />
        </div>
        <div className="text-center p-1">
          <h1 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl lg:mt-5">{SITE.name}</h1>
          <p className="text-2xl py-1 md:text-3xl dark:text-gray-300">{SITE.role}</p>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          <p className="text-xs py-3 leading-5 text-gray-800 md:text-lg max-w-3xl mx-auto dark:text-gray-500">{SITE.bio}</p>
        </div>
      </Fade>
      <Fade direction="up" cascade>
        <div className="text-4xl flex justify-center gap-12 pt-2 text-gray-500">{icons}</div>
      </Fade>

      {/* Pinned to the bottom of the full-height hero. It's a real anchor, not just a
          decoration, so clicking it goes somewhere. motion-safe keeps the bounce away
          from visitors who asked the OS to reduce motion. */}
      <a
        href={`#${SECTIONS.techStack.id}`}
        aria-label={`Scroll to ${SECTIONS.techStack.label}`}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-gray-400 transition hover:text-teal-600 dark:text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <MdKeyboardArrowDown className="text-2xl motion-safe:animate-bounce" />
      </a>
    </SectionShell>
  );
}

export default HeroSection;
