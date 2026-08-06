import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SectionShell from "./SectionShell"
import SectionHeading from "./SectionHeading"
import { SECTIONS } from "../data/sections";
import Image from "next/image";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { MdArrowForward } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import Lightbox from "./Lightbox";
import usePendingRoute from "../hooks/usePendingRoute";
import { PRODUCTION_PROJECTS, SIDE_PROJECTS } from "../data/projects";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const textRef = useRef(null);

  const caseStudyHref = project.slug ? `/work/${project.slug}` : null;
  const isOpening = usePendingRoute(caseStudyHref);

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

  return (
    <div className="transition-all flex h-full flex-col rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700/60">
      <button type="button" onClick={() => setLightboxIndex(0)} aria-label={`View ${project.title} screenshots`} className="group relative block w-full cursor-pointer overflow-hidden">
        {/* The zoom lives on this wrapper, not the <Image>, so the scrim is scaled by
            the same transform — on the image itself the gradient stayed put while the
            picture grew out from under it. */}
        <div className="relative transition duration-200 ease-in group-hover:scale-110">
          <Image className="object-cover h-44 w-full rounded-t" src={cover.src} alt={`${project.title} — ${cover.caption || "screenshot"}`} />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
        </div>
        {photos.length > 1 && <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">1 / {photos.length}</span>}
      </button>

      <div className="flex flex-1 flex-col px-4 py-4">
        {/* Where and when, so a reviewer can tell paid production work from a weekend
            build without reading the description */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
          <div className="flex shrink-0 text-xl text-teal-600">
            {project.git_link && (
              <a href={project.git_link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`}>
                <AiFillGithub />
              </a>
            )}
            {project.demo_link && (
              <a href={project.demo_link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="ml-2">
                <AiOutlineLink />
              </a>
            )}
          </div>
        </div>

        {/* Sits under the title now, in sentence case. It used to lead the card in
            uppercase with wide tracking — which gave the loudest line on every card to
            the least distinguishing fact, since five of the six production projects
            share this one employer. Kept rather than dropped: the year carries recency
            and the client is what separates paid government work from a side project.
            Year is optional — a couple aren't dated on the resume, and rendering the
            separator unconditionally left a trailing "·". */}
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {project.org}
          {project.year && ` · ${project.year}`}
        </p>

        {/* The one line that gets read if nothing else does */}
        {project.impact && <p className="mt-2 text-xs font-semibold text-teal-700 dark:text-teal-400">{project.impact}</p>}

        <p ref={textRef} className={`mt-2 text-sm text-gray-700 dark:text-gray-400 ${expanded ? "" : "clamp-4"}`}>
          {project.subtitle}
        </p>
        {(isTruncated || expanded) && (
          <button type="button" onClick={() => setExpanded((prev) => !prev)} aria-expanded={expanded} className="mt-1 self-start text-xs font-semibold text-teal-600 hover:text-teal-500 focus:outline-none">
            {expanded ? "See less" : "See more"}
          </button>
        )}

        {/* mt-auto pins the tags and the case-study link to the bottom of the card
            regardless of description length, so a row of cards lines up */}
        <div className="mt-auto pt-4">
          {/* Was a row of "#Tag" in seven rotating colours cycled by array position.
              Three problems: the colour carried no meaning (PHP came out pink on one
              card and orange on the next, implying a taxonomy that doesn't exist), six
              of the seven failed WCAG AA on the light-theme card — the yellow sat at
              1.28:1 on white, effectively invisible — and the "#" read as a clickable
              social tag when nothing here is clickable. One quiet colour instead, in
              the same chip the case-study page uses for its Stack list. */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-teal-600/30 bg-teal-500/5 px-2 py-0.5 text-[11px] font-medium text-teal-700 dark:border-teal-400/30 dark:text-teal-300"
              >
                {s}
              </span>
            ))}
          </div>

          {project.slug && (
            // Filled primary button, full-width, deliberately sitting at the bottom of
            // the card. The previous treatment — a small teal text link with an arrow —
            // read as more metadata: it lived directly under a row of teal chips, so
            // the eye grouped them all as "tags." A filled CTA in the strongest colour
            // on the card, at the widest possible size, is the pattern reviewers scan
            // for when they're deciding whether to go deeper. `aria-busy` narrates the
            // pending state for screen readers.
            <Link
              href={caseStudyHref}
              aria-busy={isOpening}
              // `group` lets the arrow shift right on hover — the button itself is the
              // hover source, so its own :hover state can drive a child's transform.
              // py-3 (not py-2.5) so the target hits the 44px minimum a fingertip needs
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-3 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              {isOpening ? "Opening" : "Read the case study"}
              {isOpening ? (
                // border-current keeps the ring on the button's own text colour, and
                // border-t-transparent is what makes the spin visible
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <MdArrowForward className="text-base transition group-hover:translate-x-0.5" />
              )}
            </Link>
          )}
        </div>
      </div>

      {lightboxIndex !== null && <Lightbox photos={photos} title={project.title} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </div>
  );
}

function Grid({ projects }) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Fade cascade damping={0.08} triggerOnce className="h-full">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </Fade>
    </div>
  );
}

function ProjectSection() {
  return (
    <SectionShell tone="a" id={SECTIONS.works.id}>
      <SectionHeading
        eyebrow="Works"
        title="Systems people actually use"
        subtitle="Most of these run inside government offices and can't be linked publicly, so each card opens its own screenshots."
      />

      <div className="mx-auto mt-10 max-w-6xl">
        {/* Two tiers rather than one flat grid. Mixing a 13-module HRIS in with a
            weekend build invited a reviewer to average them. */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Production systems</h3>
        <Grid projects={PRODUCTION_PROJECTS} />

        <h3 className="mt-14 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">Side projects</h3>
        <Grid projects={SIDE_PROJECTS} />
      </div>
    </SectionShell>
  );
}

export default ProjectSection;
