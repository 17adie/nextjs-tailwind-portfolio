import React from "react"
import { useState, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { MdMenu, MdClose } from "react-icons/md"
import { useTheme } from "next-themes"
import { AttentionSeeker } from "react-awesome-reveal"
import ScrollToTop from "../components/ScrollToTop"
import { NAV_LINKS } from "../data/sections"
import { SITE } from "../data/site"


function NavBar() {
  // To avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Escape closes the mobile menu — expected of anything that opens over content
  useEffect(() => {
    if (!menuOpen) return

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [menuOpen])

  // Highlights whichever section is currently being read. A scroll listener would fire
  // on every frame and force a layout read per section; the observer only wakes when a
  // boundary crosses the band below.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return

        // Two sections can straddle the band mid-scroll; the higher one is the one
        // actually being read.
        const topmost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b))
        setActiveId(topmost.target.id)
      },
      // A band across the upper third of the viewport rather than the whole screen,
      // so only one section qualifies as "current" at a time.
      { rootMargin: "-25% 0px -65% 0px" }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    const isDark = currentTheme === "dark"

    // The icon used to carry role="button" and the onClick itself. An <svg> is not a
    // focusable element and role alone doesn't make it one, so the only way to change
    // the theme was with a mouse — no Tab, no Enter, no screen-reader activation. It
    // also had no accessible name. A real <button> gets all of that for free.
    return (
      <AttentionSeeker effect={isDark ? "heartBeat" : "jello"}>
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="flex cursor-pointer items-center text-2xl text-gray-700 dark:text-white"
        >
          {isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>
      </AttentionSeeker>
    )
  }

  return (
    // `sticky` is already a positioned value, so the mobile panel below can anchor to
    // this element without an extra `relative` (which would fight it for `position`).
    // The panel hangs off the bar rather than growing it, keeping --nav-h — and so the
    // hero's full-height calc — constant.
    <nav className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 px-5 md:px-20 lg:px-40">
      <div className="py-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Scroll back to top"
          className="text-xl font-burtons dark:text-white cursor-pointer"
          onClick={() => ScrollToTop()}
        >
          af
        </button>

        {/* Full links appear at lg, not md: six labels plus the logo, toggle and résumé
            button do not fit inside the md padding without wrapping. The icons that used
            to sit beside each label are gone from this row — adding About and Experience
            took it to six items, and at that width the icons were what pushed it over.
            They're still in the mobile panel, where there's a column of room for them. */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-medium transition ${
                    isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-5">
          {/* A call to action that stays on screen for the whole scroll, rather than only
              at the top and bottom of the page */}
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-teal-600/40 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-500 hover:text-white lg:inline-block dark:border-teal-400/40 dark:text-teal-300 dark:hover:bg-teal-500 dark:hover:text-white"
          >
            Résumé
          </a>

          {renderThemeChanger()}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul
          id="mobile-menu"
          className="absolute left-0 right-0 top-full lg:hidden border-t border-gray-200 bg-gray-100 px-5 pb-3 shadow-lg dark:border-gray-700/60 dark:bg-gray-900"
        >
          {NAV_LINKS.map(({ id, label, Icon }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-3 py-3 text-sm font-medium transition ${
                    isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-700 hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
                  }`}
                >
                  <Icon className="text-lg" />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default NavBar
