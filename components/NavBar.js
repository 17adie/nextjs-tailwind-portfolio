import React from "react"
import { useState, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { MdMenu, MdClose, MdOutlineHome, MdCode, MdWorkOutline, MdSchool, MdOutlineMail } from "react-icons/md"
import { useTheme } from "next-themes"
import { AttentionSeeker } from "react-awesome-reveal"
import ScrollToTop from "../components/ScrollToTop"

// Each target is a SectionShell with a matching id, which also supplies the
// scroll-mt offset so the sticky bar doesn't cover the heading on arrival.
const NAV_LINKS = [
  { href: "#home", label: "Home", Icon: MdOutlineHome },
  { href: "#tech-stack", label: "Tech Stack", Icon: MdCode },
  { href: "#works", label: "Works", Icon: MdWorkOutline },
  { href: "#certificates", label: "Certificates", Icon: MdSchool },
  { href: "#contact", label: "Contact", Icon: MdOutlineMail },
]

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
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean)
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

    if (currentTheme === "dark") {
      return (
        <AttentionSeeker effect="heartBeat">
          <BsFillSunFill
            className="cursor-pointer text-2xl text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </AttentionSeeker>
      )
    } else {
      return (
        <AttentionSeeker effect="jello">
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </AttentionSeeker>
      )
    }
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

        {/* Full links appear at lg, not md: five icon+label pairs plus the logo and
            toggle do not fit inside the md padding without wrapping. */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label, Icon }) => {
            const isActive = activeId === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-1.5 text-sm font-medium transition ${
                    isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                  }`}
                >
                  <Icon className="text-base" />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-5">
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
          {NAV_LINKS.map(({ href, label, Icon }) => {
            const isActive = activeId === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
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
