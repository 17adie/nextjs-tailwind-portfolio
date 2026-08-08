import React, { useState } from "react"
import Image from "next/image"
import { CERTIFICATES } from "../data/certificates"
import Lightbox from "./Lightbox"

// A footnote inside Experience rather than its own full section. Three course
// certificates rendered as 320x240 tiles under their own page heading read as the
// candidate's level; at this size they read as what they are — extra credit.
//
// They also used to link straight to the raw /_next/static/media/*.png file, which
// dropped the visitor onto a bare image with no way back. Now they open in the same
// lightbox the project screenshots use, so all three are browsable with arrow keys.
function CertSection() {
  const [index, setIndex] = useState(null)

  const photos = CERTIFICATES.map((c) => ({ src: c.image, caption: `${c.title} — ${c.org}` }))

  return (
    <div className="mx-auto mt-12 max-w-3xl border-t border-gray-200 pt-8 dark:border-gray-700/60">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">Continuing education</h3>

      <ul className="mt-4 flex flex-wrap gap-3">
        {CERTIFICATES.map((c, i) => (
          <li key={c.title}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2 pr-4 text-left transition hover:border-teal-500/60 dark:border-gray-700/60 dark:bg-gray-900/50"
            >
              <Image src={c.image} alt="" className="h-9 w-14 rounded object-cover" />
              <span>
                <span className="block text-xs font-semibold text-gray-700 dark:text-gray-300">{c.title}</span>
                <span className="block text-[11px] text-gray-500 dark:text-gray-500">{c.org}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {index !== null && <Lightbox photos={photos} title="Certificate" index={index} onIndexChange={setIndex} onClose={() => setIndex(null)} />}
    </div>
  )
}

export default CertSection
