import React from "react"
import { Fade } from "react-awesome-reveal"
import SectionShell from "./SectionShell"
import SectionHeading from "./SectionHeading"
import CertSection from "./CertSection"
import { SECTIONS } from "../data/sections"
import { EXPERIENCE, EDUCATION } from "../data/experience"

function Role({ job, isLast }) {
  return (
    <li className="relative pl-8">
      {/* The rail is drawn per-item and stopped on the last one, so it ends at the final
          marker instead of trailing past it into the education block. */}
      {!isLast && <span className="absolute left-[5px] top-3 h-full w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />}
      <span
        className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-white dark:ring-gray-800 ${job.current ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"}`}
        aria-hidden="true"
      />

      <div className="pb-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-base font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
          <span className={`text-xs font-medium ${job.current ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-500"}`}>{job.period}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>

        <ul className="mt-3 space-y-2">
          {job.points.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function ExperienceSection() {
  return (
    <SectionShell tone="b" id={SECTIONS.experience.id}>
      <Fade>
        <SectionHeading eyebrow="Experience" title="Ten years, one direction" subtitle="Data entry to full-stack development, mostly spent replacing manual processes with systems people depend on." />

        <ol className="mx-auto mt-10 max-w-3xl">
          {EXPERIENCE.map((job, i) => (
            <Role key={`${job.company}-${job.period}`} job={job} isLast={i === EXPERIENCE.length - 1} />
          ))}
        </ol>

        <div className="mx-auto max-w-3xl border-t border-gray-200 pt-8 dark:border-gray-700/60">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">Education</h3>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{EDUCATION.degree}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{EDUCATION.school}</p>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-500">{EDUCATION.period}</span>
          </div>
        </div>

        <CertSection />
      </Fade>
    </SectionShell>
  )
}

export default ExperienceSection
