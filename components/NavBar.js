import React from "react"
import { useState, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { useTheme } from "next-themes"

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
      return <BsFillSunFill className="cursor-pointer text-2xl text-white" role="button" onClick={() => setTheme("light")} />
    } else {
      return <BsFillMoonStarsFill className="cursor-pointer text-2xl" role="button" onClick={() => setTheme("dark")} />
    }
  }

  //https://upmostly.com/next-js/how-to-create-a-scroll-to-top-button-in-next-js
  const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="py-3 flex justify-between mb-5 sticky top-0 z-50 bg-white dark:bg-inherit ">
      <h1 className="text-xl font-burtons dark:text-white cursor-pointer" onClick={scrollToTop}>
        af
      </h1>
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
