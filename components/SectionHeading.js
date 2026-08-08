import React from "react"

// Every section repeated the same h2 + teal rule, so an eyebrow or a subtitle had to be
// hand-built each time. Centralising it also keeps the display font in one place.
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center">
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">{eyebrow}</p>}
      <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">{title}</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      {subtitle && <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
