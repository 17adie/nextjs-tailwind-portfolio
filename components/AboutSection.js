import React from "react"
import { Fade } from "react-awesome-reveal"
import SectionShell from "./SectionShell"
import SectionHeading from "./SectionHeading"
import { SECTIONS } from "../data/sections"
import { ABOUT, HIGHLIGHTS } from "../data/about"

function AboutSection() {
  return (
    <SectionShell tone="b" id={SECTIONS.about.id}>
      <Fade>
        <SectionHeading eyebrow="About" title="Where the work comes from" />

        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {ABOUT.map((paragraph, i) => (
            <p
              key={i}
              // First paragraph carries the story, so it gets the larger size — the rest
              // are supporting detail and shouldn't compete with it.
              className={`leading-7 text-gray-700 dark:text-gray-300 ${i === 0 ? "text-base md:text-lg" : "text-sm md:text-base"}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Four numbers for the reviewer who reads nothing but numbers */}
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center dark:border-gray-700/60 dark:bg-gray-900/50">
              <dt className="font-display text-2xl font-bold text-teal-600 dark:text-teal-400">{h.value}</dt>
              <dd className="mt-1 text-xs leading-tight text-gray-600 dark:text-gray-400">{h.label}</dd>
            </div>
          ))}
        </dl>
      </Fade>
    </SectionShell>
  )
}

export default AboutSection
