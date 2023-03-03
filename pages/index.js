import Head from "next/head"


import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"

import ProjectSection from "@/components/ProjectSection"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aldrine Facistol</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
      </main>
    </div>
  )
}
