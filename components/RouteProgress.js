import React, { useEffect, useRef, useState } from "react"
import Router from "next/router"

// A thin bar across the top of the viewport during client-side navigation.
//
// Next fetches the target page's JS chunk and its getStaticProps JSON before it swaps
// the view. That gap is short but not invisible, and with no feedback it reads as a
// dead click followed by an abrupt jump — the page appears to lag, then teleport.
function RouteProgress() {
  // idle → loading → done → idle. `run` remounts the animated element so the keyframe
  // restarts on every navigation rather than only the first.
  const [phase, setPhase] = useState("idle")
  const [run, setRun] = useState(0)
  const hideTimer = useRef(null)

  useEffect(() => {
    const start = () => {
      clearTimeout(hideTimer.current)
      setRun((n) => n + 1)
      setPhase("loading")
    }

    const done = () => {
      clearTimeout(hideTimer.current)
      setPhase("done")
      hideTimer.current = setTimeout(() => setPhase("idle"), 250)
    }

    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", done)
    // Without this a cancelled or failed navigation would leave the bar stuck mid-run
    Router.events.on("routeChangeError", done)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", done)
      Router.events.off("routeChangeError", done)
      clearTimeout(hideTimer.current)
    }
    // The Router singleton, deliberately, not useRouter(): Next hands out a NEW router
    // object on every navigation, so a [router] dependency re-runs this effect right
    // after each route change. The cleanup would then clearTimeout the pending hide
    // timer set microseconds earlier by routeChangeComplete, and the bar would stay on
    // screen at full width forever. Router.events is a stable singleton emitter, so
    // this subscribes once for the life of the app.
  }, [])

  const visible = phase !== "idle"

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-[200] h-0.5 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {visible && (
          <div
            // Remounting on `run` is what replays the keyframe
            key={run}
            className="h-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.7)]"
            style={
              phase === "loading"
                ? { animation: "route-progress 6s cubic-bezier(0.1, 0.8, 0.2, 1) forwards" }
                : // Snap from wherever the animation reached to full on arrival
                  { width: "100%", transition: "width 150ms ease-out" }
            }
          />
        )}
      </div>

      {/* The bar is decorative to a screen reader, so announce the state in words */}
      {phase === "loading" && (
        <span role="status" aria-live="polite" className="sr-only">
          Loading page
        </span>
      )}
    </>
  )
}

export default RouteProgress
