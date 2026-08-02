import React, { useState, useEffect, useRef } from "react";
import SectionShell from "./SectionShell"
import { SECTIONS } from "../data/sections";
import Image from "next/image";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import Lightbox from "./Lightbox";
import { PROJECTS } from "../data/projects";

// Cycled per stack tag; wraps so a project can list more tags than there are colors
const gradient_color = ["#FF007F", "#FF5C4C", "#FF8933", "#FFB719", "#FFE500", "#48A71D", "#AC2C7B"];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const textRef = useRef(null);

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

  const have_git = (link) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <AiFillGithub />
    </a>
  );

  const have_demo = (link) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <AiOutlineLink />
    </a>
  );

  return (
    <div className="transition-all max-w-xs h-full rounded overflow-hidden bg-white dark:bg-gray-800 relative">
      <button type="button" onClick={() => setLightboxIndex(0)} aria-label={`View ${project.title} screenshots`} className="group relative block w-full cursor-pointer overflow-hidden">
        {/* The zoom lives on this wrapper, not the <Image>, so the scrim is scaled by
            the same transform — on the image itself the gradient stayed put while the
            picture grew out from under it. */}
        <div className="relative transition duration-200 ease-in group-hover:scale-110">
          <Image className="object-cover h-48 w-96 rounded p-3" src={cover.src} alt={project.title} />
          {/* Inset by 3 to match the image's own p-3, so it covers the picture rather
              than the card padding around it. Square corners on purpose: padding on an
              <img> insets the picture but border-radius applies to the border box, so
              the visible picture has sharp corners — a rounded scrim curved away from
              them and let an undimmed white sliver show through. */}
          <span className="pointer-events-none absolute inset-x-3 top-3 h-24 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
        </div>
        {photos.length > 1 && <span className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">1 / {photos.length}</span>}
      </button>
      <div className="px-3 py-4 mb-16">
        <div className="flex items-baseline justify-between">
          <div className="font-bold text-xl mb-2">{project.title} </div>
          <div className="flex text-2xl text-teal-600">
            <span>{project.git_link != "" ? have_git(project.git_link) : ""}</span>
            <span className="ml-2">{project.demo_link != "" ? have_demo(project.demo_link) : ""}</span>
          </div>
        </div>
        {/* min-h reserves 4 lines so every collapsed card is the same height */}
        <p ref={textRef} className={`text-gray-700 text-sm dark:text-gray-500 min-h-[5rem] ${expanded ? "" : "clamp-4"}`}>
          {project.subtitle}
        </p>
        {(isTruncated || expanded) && (
          <button type="button" onClick={() => setExpanded((prev) => !prev)} aria-expanded={expanded} className="mt-1 text-xs font-semibold text-teal-600 hover:text-teal-500 focus:outline-none">
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
      <div className="px-3 py-1 pb-2 absolute bottom-0 left-0 right-0">
        {project.stack.map((s, i) => (
          <span key={i} className="text-xs inline-block text-white mr-2 mt-2  row-end-auto" style={{ color: gradient_color[i % gradient_color.length] }}>
            #{s}
          </span>
        ))}
      </div>

      {lightboxIndex !== null && <Lightbox photos={photos} title={project.title} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </div>
  );
}

function ProjectSection() {

  const ProjectCards = PROJECTS.map((v, i) => <ProjectCard key={i} project={v} />);

  return (
    <SectionShell tone="a" id={SECTIONS.works.id}>
      <h2 className="text-2xl font-bold mb-6 text-center">My Works</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className="max-w-5xl mx-auto">
        <div className="mt-5 flex flex-wrap gap-7 justify-center">
          <Fade>{ProjectCards}</Fade>
        </div>
      </div>
    </SectionShell>
  );
}

export default ProjectSection;
