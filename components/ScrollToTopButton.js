import React, { useEffect, useState } from "react"
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import ScrollToTop from "../components/ScrollToTop"
function ScrollToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("asd")
      if (window.scrollY > 500) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  return (
    <div className="fixed bottom-0 right-0 h-16 w-16">
      {backToTopButton && (
        <BsFillArrowUpSquareFill
          size={25}
          className="text-teal-500 cursor-pointer"
          onClick={() => ScrollToTop()}
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
