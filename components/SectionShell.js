import React from "react"

// Two alternating page tones. Sections carry the background themselves (rather than
// main) so the colour runs edge to edge; the horizontal padding that used to live on
// main now sits on the inner container.
const TONES = {
  a: "bg-gray-100 dark:bg-gray-900",
  b: "bg-white dark:bg-gray-800",
}

function SectionShell({ tone = "a", fullHeight = false, children }) {
  // fullHeight fills the first screen exactly: 100vh minus the navbar, which is
  // sticky and therefore still occupies space in normal flow above this section.
  const fill = fullHeight ? "flex items-center min-h-[calc(100vh_-_var(--nav-h))]" : ""

  return (
    <section className={`transition-colors duration-300 ${TONES[tone]} ${fill}`}>
      <div className="w-full px-5 py-16 md:px-20 lg:px-40">{children}</div>
    </section>
  )
}

export default SectionShell
