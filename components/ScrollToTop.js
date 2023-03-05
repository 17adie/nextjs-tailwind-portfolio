//https://upmostly.com/next-js/how-to-create-a-scroll-to-top-button-in-next-js
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

const ScrollToTop = () => {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default ScrollToTop
