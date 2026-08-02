import React, { useEffect, useRef, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { Oval } from "react-loading-icons"

// Modal image carousel. Rendered only while open, so the keyboard and scroll-lock
// effects tear down automatically on close.
function Lightbox({ photos, title, index, onIndexChange, onClose }) {
  const count = photos.length
  const closeRef = useRef(null)

  // Remembered per index rather than a single boolean, so returning to an image
  // already fetched shows it immediately instead of flashing the spinner again.
  const [loaded, setLoaded] = useState({})
  const isLoading = !loaded[index]
  const markLoaded = useCallback((i) => setLoaded((prev) => ({ ...prev, [i]: true })), [])

  // Neighbours of the current frame, for prefetching
  const neighbours = count > 1 ? [...new Set([(index + 1) % count, (index - 1 + count) % count])].filter((i) => i !== index) : []

  const go = useCallback(
    (delta) => onIndexChange((index + delta + count) % count),
    [index, count, onIndexChange]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    document.addEventListener("keydown", onKey)

    // Stop the page behind the overlay from scrolling
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [go, onClose])

  const current = photos[index]

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-2xl text-white hover:bg-white/20"
      >
        <MdClose />
      </button>

      {/* min-h reserves the caption line: not every photo has one, and without it the
          whole frame shifts up a line when navigating to an uncaptioned image. */}
      <div className="mb-2 min-h-[3.25rem] text-center text-white">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-300">{current.caption || " "}</p>
      </div>

      {/* Clicking the image itself must not close the overlay */}
      <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-6xl items-center justify-center gap-2">
        {count > 1 && (
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="shrink-0 rounded-full bg-white/10 p-2 text-3xl text-white hover:bg-white/20"
          >
            <MdChevronLeft />
          </button>
        )}

        {/* Fixed-height frame: without it the box resizes to each image's aspect ratio,
            so the arrows jump between frames and the spinner has no stable position. */}
        <div className="relative flex h-[75vh] min-w-0 flex-1 items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center" role="status" aria-live="polite">
              <Oval stroke="#14b8a6" strokeWidth={4} height="48" width="48" />
              <span className="sr-only">Loading image</span>
            </div>
          )}

          <Image
            key={index}
            src={current.src}
            alt={`${title} — ${current.caption || "screenshot"}`}
            className={`max-h-full w-auto rounded object-contain transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoadingComplete={() => markLoaded(index)}
            onError={() => markLoaded(index)}
            priority
          />
        </div>

        {count > 1 && (
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="shrink-0 rounded-full bg-white/10 p-2 text-3xl text-white hover:bg-white/20"
          >
            <MdChevronRight />
          </button>
        )}
      </div>

      {/* Warms the next and previous frames so navigation is instant rather than
          waiting on a fresh fetch each time. Zero-sized and hidden from a11y;
          `priority` is required because a 0x0 box never triggers lazy loading. */}
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        {neighbours.map((i) => (
          <Image key={i} src={photos[i].src} alt="" priority onLoadingComplete={() => markLoaded(i)} />
        ))}
      </div>

      {count > 1 && (
        <div onClick={(e) => e.stopPropagation()} className="mt-4 flex items-center gap-3">
          <div className="flex gap-2">
            {photos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onIndexChange(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-teal-400" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-300">
            {index + 1} / {count}
          </span>
        </div>
      )}
    </div>
  )

  // Portal to <body> so the overlay escapes the card's stacking context. Each card
  // sits inside a react-awesome-reveal <Fade>, whose transform/animation makes any
  // descendant `position: fixed` resolve against the card instead of the viewport —
  // which let sibling cards paint over the overlay.
  if (typeof document === "undefined") return null
  return createPortal(overlay, document.body)
}

export default Lightbox
