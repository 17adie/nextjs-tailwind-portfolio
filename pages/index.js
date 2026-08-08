import Head from "next/head"

import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectSection from "@/components/ProjectSection"
import ExperienceSection from "@/components/ExperienceSection"
import ContactSection from "@/components/ContactSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import Footer from "@/components/Footer"
import { SITE, SITE_TITLE } from "@/data/site"
import { SOCIALS } from "@/data/socials"

const OG_IMAGE = `${SITE.url}${SITE.ogImage}`

// Tells search engines this page is a person rather than an organisation, and ties the
// portfolio to the GitHub and LinkedIn profiles as the same identity. Cheap to add and
// it's what powers a knowledge-panel style result for a name query.
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  description: SITE.description,
  url: SITE.url,
  image: OG_IMAGE,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batangas",
    addressCountry: "PH",
  },
  sameAs: SOCIALS.filter((s) => s.name !== "Resume").map((s) => s.link),
  knowsAbout: ["PHP", "Slim Framework", "JavaScript", "MySQL", "React", "Next.js", "Node.js", "REST APIs", "Access control", "Server-Sent Events", "WebRTC"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "City College of Calamba",
  },
}

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
        <meta property="og:image:alt" content={`${SITE.name} — ${SITE.tagline}`} />
        <meta property="og:locale" content="en_US" />

        {/* Now a wide card rather than "summary": the image is a purpose-built 1200x630
            graphic, so it should fill the preview instead of sitting in a thumbnail. */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={`${SITE.name} — ${SITE.tagline}`} />

        <link
          rel="icon"
          href="/favicon.ico"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </Head>
      <main className="transition-all bg-gray-100 dark:bg-gray-900">
        <NavBar />
        <HeroSection />
        {/* Order is what a reviewer with 30 seconds should hit first: who, then the
            proof, then the history behind it, then the toolset. Tech Stack used to sit
            directly under the hero, which put ~40 logos ahead of any evidence they'd
            been used for anything. Certificates no longer has its own section — it's a
            footnote inside Experience. */}
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  )
}
