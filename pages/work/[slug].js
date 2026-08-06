import React, { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { MdArrowBack, MdOutlineMail } from "react-icons/md"
import Footer from "@/components/Footer"
import Lightbox from "@/components/Lightbox"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { CASE_STUDY_SLUGS, getCaseStudy } from "@/data/caseStudies"
import { SITE } from "@/data/site"

// Statically generated at build time — there are two of these and they change when the
// data file changes, so there's nothing to render per-request.
export function getStaticPaths() {
  return {
    paths: CASE_STUDY_SLUGS.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const study = getCaseStudy(params.slug)
  if (!study) return { notFound: true }

  // next/image import objects survive serialisation; the React icon components on the
  // project record would not, so only the fields this page renders are passed through.
  return {
    props: {
      study: {
        ...study,
        project: {
          title: study.project.title,
          photos: study.project.photos,
          stack: study.project.stack,
          impact: study.project.impact,
        },
      },
    },
  }
}

function Block({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-6 text-gray-700 md:text-base dark:text-gray-300">
          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudy({ study }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { project } = study

  const title = `${study.title} — Case study | ${SITE.name}`

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={study.tagline} />
        <link rel="canonical" href={`${SITE.url}/work/${study.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={study.tagline} />
        <meta property="og:url" content={`${SITE.url}/work/${study.slug}`} />
        <meta property="og:image" content={`${SITE.url}${SITE.ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-5 py-10 md:py-16">
          <Link href="/#works" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
            <MdArrowBack />
            Back to all work
          </Link>

          <header className="mt-8">
            <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-gray-100">{study.title}</h1>
            <p className="mt-3 text-base leading-7 text-gray-600 md:text-lg dark:text-gray-400">{study.tagline}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:grid-cols-4 dark:border-gray-700/60 dark:bg-gray-800/40">
              {study.meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">{m.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">{m.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <Block title="The problem">
            <div className="space-y-4">
              {study.problem.map((p, i) => (
                <p key={i} className="text-sm leading-7 text-gray-700 md:text-base dark:text-gray-300">
                  {p}
                </p>
              ))}
            </div>
          </Block>

          <Block title="How it's built">
            <Bullets items={study.approach} />
          </Block>

          {/* Screenshots sit mid-page rather than at the top: the reader needs to know
              what the system does before a dashboard means anything to them. */}
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Screens</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group overflow-hidden rounded-xl ring-1 ring-gray-200 transition hover:ring-teal-500/60 dark:ring-gray-700/60"
                >
                  <Image src={photo.src} alt={`${project.title} — ${photo.caption || "screenshot"}`} className="h-40 w-full object-cover transition duration-200 group-hover:scale-105" />
                  {photo.caption && <span className="block bg-white px-3 py-2 text-left text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">{photo.caption}</span>}
                </button>
              ))}
            </div>
          </section>

          <Block title="What I built">
            <Bullets items={study.myScope} />
          </Block>

          {/* Only rendered when there was someone else on the project — on a solo build
              an empty "collaborated with" heading raises a question rather than answering
              one. */}
          {study.collaborated.length > 0 && (
            <Block title="Built with my co-developer">
              <Bullets items={study.collaborated} />
            </Block>
          )}

          <Block title="Decisions worth explaining">
            <div className="space-y-5">
              {study.decisions.map((d) => (
                <div key={d.title} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700/60 dark:bg-gray-800/40">
                  <h3 className="font-display text-base font-bold text-gray-900 dark:text-gray-100">{d.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-gray-300">{d.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Where it landed">
            <Bullets items={study.results} />
          </Block>

          <section className="mt-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-lg border border-teal-600/30 bg-teal-500/5 px-3 py-1.5 text-xs font-medium text-teal-700 dark:border-teal-400/30 dark:text-teal-300">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700/60 dark:bg-gray-800/40">
            <p className="font-display text-lg font-bold text-gray-900 dark:text-gray-100">Want the longer version?</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">Happy to walk through the architecture, the tradeoffs, or anything that didn&apos;t work the first time.</p>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(`About your ${study.project.title} case study`)}`}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <MdOutlineMail className="text-lg" />
              {SITE.email}
            </a>
          </div>
        </div>

        <ScrollToTopButton />
      </main>

      {lightboxIndex !== null && (
        <Lightbox photos={project.photos} title={project.title} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}

      <Footer />
    </div>
  )
}
