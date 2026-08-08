import React from "react"

// Two alternating page tones. Sections carry the background themselves (rather than
// main) so the colour runs edge to edge; the horizontal padding that used to live on
// main now sits on the inner container.
const TONES = {
  a: "bg-gray-100 dark:bg-gray-900",
  b: "bg-white dark:bg-gray-800",
}

function SectionShell({ tone = "a", fullHeight = false, id, children }) {
  // fullHeight fills the first screen exactly: 100vh minus the navbar, which is
  // sticky and therefore still occupies space in normal flow above this section.
  // `relative` gives a full-height section a positioning context, so a child can be
  // pinned to the bottom of the screen (the hero's scroll cue).
  const fill = fullHeight ? "relative flex items-center min-h-[calc(100vh_-_var(--nav-h))]" : ""

  // scroll-mt offsets anchor jumps by the navbar height, otherwise the sticky bar
  // sits on top of the heading the visitor just jumped to.
  const anchor = id ? "scroll-mt-[var(--nav-h)]" : ""

  // A full-height section is already sized to the viewport, so the standard py-16 is
  // 128px of padding competing with the content for a fixed budget — on a 800px-tall
  // laptop that pushed the hero past the fold and hid its own scroll cue.
  const pad = fullHeight ? "py-8" : "py-16"

  return (
    <section id={id} className={`transition-colors duration-300 ${TONES[tone]} ${fill} ${anchor}`}>
      <div className={`w-full px-5 ${pad} md:px-20 lg:px-40`}>{children}</div>
    </section>
  )
}

export default SectionShell
