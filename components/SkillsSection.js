import React from "react"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { BsCodeSlash } from "react-icons/bs"
import { CORE, ALSOUSE, LEARNING, CONCEPTS, TOOLS, AITOOLS } from "../data/skills"
import SectionShell from "./SectionShell"
import { SECTIONS } from "../data/sections";

// Vector marks for the stack entries that have no PNG in public/image.
// react-icons is already a dependency, so this adds no new package.

function Tile({ item, compact }) {
  // Entries with no brand mark anywhere (Slim, Inertia) fall back to a code glyph so
  // they still read as tiles instead of gaps — the label underneath names them.
  const Icon = item.icon || (item.img ? null : BsCodeSlash)

  // Every logo sits in an identically sized chip. The source PNGs carry their own
  // internal padding in wildly different amounts, so without a fixed box PHP renders
  // visually tiny next to HTML5 even at the same CSS size.
  const chip = compact ? "h-11 w-11 p-2.5" : "h-14 w-14 p-3"

  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className={`${chip} flex items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-0.5 group-hover:ring-teal-500/60 dark:bg-gray-700/40 dark:ring-gray-700`}
      >
        {/* alt is empty because the visible label already names it — otherwise a
            screen reader announces the same word twice */}
        {item.img && <Image className="h-full w-full object-contain" src={item.img} alt="" />}
        {Icon && <Icon className={`h-full w-full ${item.className || ""}`} style={item.color ? { color: item.color } : undefined} />}
      </div>
      <span className="text-center text-xs leading-tight text-gray-600 dark:text-gray-400">{item.name}</span>
    </div>
  )
}

function Group({ label, hint, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 dark:border-gray-700/60 dark:bg-gray-900/50">
      <div className="mb-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">{label}</h3>
        {hint && <span className="text-xs text-gray-500 dark:text-gray-500">{hint}</span>}
      </div>
      {children}
    </section>
  )
}

// Fixed columns instead of flex-wrap: centred wrapping left orphan rows (9 items
// then 2), which read as a layout bug rather than a deliberate grid.
function TileGrid({ items, compact }) {
  return (
    <div className="grid grid-cols-3 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
      {items.map((v) => (
        <Tile key={v.name} item={v} compact={compact} />
      ))}
    </div>
  )
}

function Pills({ items, tone = "teal" }) {
  const styles =
    tone === "teal"
      ? "border-teal-600/30 bg-teal-500/5 text-teal-700 dark:border-teal-400/30 dark:text-teal-300"
      : "border-gray-300 bg-gray-500/5 text-gray-600 dark:border-gray-600/60 dark:text-gray-400"

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((v) => (
        <span key={v} className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${styles}`}>
          {v}
        </span>
      ))}
    </div>
  )
}

function SkillsSection() {
  return (
    <SectionShell tone="b" id={SECTIONS.techStack.id}>
      <Fade>
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

        <div className="mx-auto mt-8 max-w-4xl space-y-4">
          <Group label="Core" hint="what I build with daily">
            <TileGrid items={CORE} />
          </Group>

          <Group label="Also work with">
            <TileGrid items={ALSOUSE} />
          </Group>

          <Group label="Currently learning">
            <TileGrid items={LEARNING} />
          </Group>

          <Group label="Concepts & practices">
            <Pills items={CONCEPTS} />
          </Group>

          <Group label="Tools">
            <TileGrid items={TOOLS} compact />
          </Group>

          <Group label="AI-assisted development">
            <Pills items={AITOOLS} tone="gray" />
          </Group>
        </div>
      </Fade>
    </SectionShell>
  )
}

export default SkillsSection
