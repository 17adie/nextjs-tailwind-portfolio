import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      {/* https://fkhadra.github.io/react-toastify/introduction/ */}
      <ToastContainer pauseOnHover theme="light" hideProgressBar={false} autoClose={5000} position="top-right" />
    </ThemeProvider>
  )
}
