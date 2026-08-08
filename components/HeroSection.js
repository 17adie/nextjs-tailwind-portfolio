import React from "react";
import SectionShell from "./SectionShell"
import Image from "next/image";
import dev from "../public/dp2.png";
import { MdKeyboardArrowDown, MdArrowForward, MdFileDownload } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { SITE } from "../data/site";
import { HERO_SOCIALS } from "../data/socials";
import { SECTIONS } from "../data/sections";

function HeroSection() {
  const icons = HERO_SOCIALS.map((v) => (
    <a
      key={v.id}
      href={v.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={v.name}
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
      <Fade cascade damping={0.15}>
        <div className="relative mx-auto rounded-full w-32 h-32 sm:w-44 sm:h-44 mb-4 overflow-hidden">
          <Image src={dev} alt={`${SITE.name}, ${SITE.role}`} priority />
        </div>
        {/* The availability badge and the location line both moved out of here. They
            still appear on the page — availability in the Contact heading and the
            footer, location in the footer and the Person schema — so a recruiter
            filtering on either can still find it without the hero carrying it. */}
        <div className="text-center p-1">
          <h1 className="font-display text-4xl py-1 text-teal-600 font-bold tracking-tight md:text-6xl">{SITE.name}</h1>

          {/* The role, at the largest size after the name. The specifics that used to
              sit here now live in the bio below, which keeps the proof on the first
              screen without competing with the title for attention. */}
          <p className="font-display text-2xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">{SITE.role}</p>

          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />

          <p className="text-sm py-1 leading-6 text-gray-600 md:text-base max-w-2xl mx-auto dark:text-gray-400">{SITE.bio}</p>
        </div>
      </Fade>

      <Fade direction="up" cascade damping={0.2}>
        {/* Real buttons rather than a row of equal-weight icons: a reviewer should not
            have to guess which of six links is the one to click. */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`#${SECTIONS.works.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 sm:w-auto"
          >
            View my work
            <MdArrowForward />
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-teal-500 hover:text-teal-600 sm:w-auto dark:border-gray-600 dark:text-gray-200 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            <MdFileDownload />
            Download résumé
          </a>
        </div>

        <div className="text-3xl flex justify-center gap-10 pt-5 text-gray-500">{icons}</div>
      </Fade>

      {/* Pinned to the bottom of the full-height hero. It's a real anchor, not just a
          decoration, so clicking it goes somewhere. motion-safe keeps the bounce away
          from visitors who asked the OS to reduce motion. */}
      <a
        href={`#${SECTIONS.about.id}`}
        aria-label={`Scroll to ${SECTIONS.about.label}`}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-gray-400 transition hover:text-teal-600 dark:text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <MdKeyboardArrowDown className="text-2xl motion-safe:animate-bounce" />
      </a>
    </SectionShell>
  );
}

export default HeroSection;
