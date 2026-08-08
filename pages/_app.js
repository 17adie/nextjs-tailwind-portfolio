import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Inter, Space_Grotesk } from "next/font/google"
import RouteProgress from "@/components/RouteProgress"

// Downloaded and self-hosted at build time by next/font — no external request at
// runtime, so this costs nothing against the render path. Wired into
// tailwind.config.js as font-sans / font-display via the two CSS variables below.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// A grotesque for headings only. Body copy stays on Inter: two display faces fighting
// each other is worse than none.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* Declared at :root rather than on a wrapper element. Tailwind's preflight points
          html's font-family at fontFamily.sans, which now resolves through
          var(--font-sans) — if that variable is only defined on some div inside body,
          the declaration on html is invalid at computed-value time and the document
          falls back to Times New Roman. That also hit the Lightbox, which portals to
          document.body and so sits outside any wrapper. */}
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-display: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>

      {/* Outside <Component> so it survives the page swap it's reporting on */}
      <RouteProgress />

      <Component {...pageProps} />
      {/* https://fkhadra.github.io/react-toastify/introduction/ */}
      <ToastContainer pauseOnHover theme="light" hideProgressBar={false} autoClose={5000} position="top-right" />
    </ThemeProvider>
  )
}
