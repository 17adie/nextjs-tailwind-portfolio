import React from "react"
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineSolution } from "react-icons/ai"

const links = [
  { name: "Facebook", icon: <AiFillFacebook />, href: "https://www.facebook.com/17aldrn/" },
  { name: "GitHub", icon: <AiFillGithub />, href: "https://github.com/17adie" },
  { name: "LinkedIn", icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/aldrinefacistol/" },
  { name: "Resume", icon: <AiOutlineSolution />, href: "/Aldrine-Facistol-Resume.pdf" },
]

function Footer() {
  return (
    // Continues the page's alternating tones — Contact above it is tone A, so the
    // footer takes tone B. Shorter padding than SectionShell: a footer shouldn't
    // read as another full section.
    <footer className="border-t border-gray-200 bg-white transition-colors duration-300 dark:border-gray-700/60 dark:bg-gray-800">
      <div className="px-5 py-10 md:px-20 lg:px-40">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Aldrine Facistol</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
          </div>

          <div className="flex gap-6 text-2xl text-gray-500 dark:text-gray-400">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.name}
                className="transition ease-in-out hover:-translate-y-1 hover:text-teal-600"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 dark:border-gray-700/60 dark:text-gray-400 sm:flex-row sm:justify-between">
          {/* Evaluated when the page is built, so it refreshes on the next deploy */}
          <p>© {new Date().getFullYear()} Aldrine Facistol. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
