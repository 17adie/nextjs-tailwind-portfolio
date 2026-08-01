import Head from "next/head"

import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"

import ProjectSection from "@/components/ProjectSection"
import ContactSection from "@/components/ContactSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CertSection from "@/components/CertSection"

const SITE_URL = "https://aldrinefacistol.vercel.app"
const TITLE = "Aldrine Facistol — Full-Stack Developer"
const DESCRIPTION =
  "Full-stack developer with 5+ years building web systems for government agencies and private companies. PHP, JavaScript, MySQL, React and Next.js."
const OG_IMAGE = `${SITE_URL}/dp.jpg`

export default function Home() {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="canonical"
          href={SITE_URL}
        />

        {/* Open Graph — Facebook, LinkedIn, Messenger, Slack */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aldrine Facistol" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="1800" />
        <meta property="og:image:alt" content="Aldrine Facistol" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter/X — "summary" keeps the portrait photo from being cropped flat */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Aldrine Facistol" />

        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="transition-all bg-gray-100 px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <CertSection />
        <ContactSection />
        <ScrollToTopButton />
      </main>
    </div>
  )
}
