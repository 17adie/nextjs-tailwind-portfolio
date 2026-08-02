import React from "react"
import { useState, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { useTheme } from "next-themes"
import { AttentionSeeker } from "react-awesome-reveal"
import ScrollToTop from "../components/ScrollToTop"
function NavBar() {
  // To avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
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
    <nav className="py-3 flex justify-between sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 px-5 md:px-20 lg:px-40">
      <button
        type="button"
        aria-label="Scroll back to top"
        className="text-xl font-burtons dark:text-white cursor-pointer"
        onClick={() => ScrollToTop()}
      >
        af
      </button>
      <ul className="flex items-center">
        <li>{renderThemeChanger()}</li>
        {/* <li>
          <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-md ml-8" href="#">
            Resume
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
