import Head from "next/head"

import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"

import ProjectSection from "@/components/ProjectSection"
import ContactSection from "@/components/ContactSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CertSection from "@/components/CertSection"
import Footer from "@/components/Footer"
import { SITE, SITE_TITLE } from "@/data/site"

const OG_IMAGE = `${SITE.url}${SITE.ogImage}`

export default function Home() {
  return (
    <div>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta
          name="description"
          content={SITE.description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="canonical"
          href={SITE.url}
        />

        {/* Open Graph — Facebook, LinkedIn, Messenger, Slack */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
        <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
        <meta property="og:image:alt" content={SITE.name} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter/X — "summary" keeps the portrait photo from being cropped flat */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={SITE.name} />

        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="transition-all bg-gray-100 dark:bg-gray-900">
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <CertSection />
        <ContactSection />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  )
}
