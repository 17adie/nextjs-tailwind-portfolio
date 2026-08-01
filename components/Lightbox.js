import React, { useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md"

// Modal image carousel. Rendered only while open, so the keyboard and scroll-lock
// effects tear down automatically on close.
function Lightbox({ photos, title, index, onIndexChange, onClose }) {
  const count = photos.length
  const closeRef = useRef(null)

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

      <div className="mb-2 text-center text-white">
        <p className="text-lg font-semibold">{title}</p>
        {current.caption && <p className="text-sm text-gray-300">{current.caption}</p>}
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

        <Image
          src={current.src}
          alt={`${title} — ${current.caption || "screenshot"}`}
          className="max-h-[75vh] w-auto rounded object-contain"
          priority
        />

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
