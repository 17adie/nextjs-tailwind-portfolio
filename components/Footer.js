import React from "react"
import { MdOutlineMail, MdPlace } from "react-icons/md"
import { SITE } from "../data/site"
import { SOCIALS } from "../data/socials"

function Footer() {
  return (
    // Continues the page's alternating tones. Contact above it is tone B, so the footer
    // takes tone A — it used to be white like Contact, which merged the two into one
    // undifferentiated block. Shorter padding than SectionShell: a footer shouldn't read
    // as another full section.
    <footer className="border-t border-gray-200 bg-gray-100 transition-colors duration-300 dark:border-gray-700/60 dark:bg-gray-900">
      <div className="px-5 py-10 md:px-20 lg:px-40">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display font-semibold text-gray-800 dark:text-gray-200">{SITE.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{SITE.role}</p>

            {/* Repeated here on purpose: the footer is where people look for an address
                after they've finished reading, and it's the one part of the page that's
                on screen at the moment they decide to reach out. */}
            <a href={`mailto:${SITE.email}`} className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-600 transition hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
              <MdOutlineMail />
              {SITE.email}
            </a>

            <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-gray-500 sm:justify-start dark:text-gray-500">
              <MdPlace />
              {SITE.location} · {SITE.availability}
            </p>
          </div>

          {/* The full list including Facebook — demoted out of the hero, but still here
              for anyone who wants it. */}
          <div className="flex gap-6 text-2xl text-gray-500 dark:text-gray-400">
            {SOCIALS.map((l) => (
              <a
                key={l.id}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.name}
                className="transition ease-in-out hover:-translate-y-1 hover:text-teal-600"
              >
                <l.Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 dark:border-gray-700/60 dark:text-gray-400 sm:flex-row sm:justify-between">
          {/* Evaluated when the page is built, so it refreshes on the next deploy */}
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
