// Identity used by the page metadata, the hero and the footer. These strings used to
// live in three separate files, so a title change meant remembering all three — and a
// missed one silently desynced the page from its own search result.
export const SITE = {
  name: "Aldrine Facistol",
  role: "Full-Stack Developer",
  url: "https://aldrinefacistol.vercel.app",
  resume: "/Aldrine-Facistol-Resume.pdf",
  // Plain text, rendered as a mailto on the page. A recruiter who won't use a contact
  // form previously had to open the resume PDF to find an address — the form was the
  // only channel on the page, and it depends on a third-party service staying alive.
  email: "facistol.aldrine@gmail.com",
  location: "Batangas, Philippines",
  // Recruiters filter on this, and it costs one line to answer
  availability: "Open to full-time and remote roles",
  // Used for og:image / twitter:image. A 1200x630 card rather than the portrait: link
  // previews crop to roughly 1.91:1, which sliced a 1440x1800 photo to a chin.
  ogImage: "/og-card.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  // Short, for <meta name="description"> and the link-preview card
  description: "Full-stack developer with 5+ years building web systems for government agencies and private companies. PHP, JavaScript, MySQL, React and Next.js.",
  // Metadata only — no longer rendered in the hero, which leads with the role instead.
  // Still used for og:image:alt / twitter:image:alt because this exact sentence is
  // baked into public/og-card.png, so the alt text has to describe what's in the image.
  tagline: "I turn paper-based processes into production web systems.",
  // Hero paragraph — deliberately a different string from the meta description, which
  // has to stay under ~155 characters to avoid being truncated. Describes the range of
  // the work rather than one system: the specifics live on the project cards and the
  // case studies, so the hero doesn't rise and fall with a single project.
  // Doesn't open with "Full-stack developer" — that's the headline directly above it in
  // the hero, and repeating it read as a stutter.
  bio: "5+ years building web applications for government agencies and private companies — employee records, certification and permit workflows, and a teleconsultation platform. I work across the stack in PHP, JavaScript and MySQL, with React and Next.js on the frontend.",
};

export const SITE_TITLE = `${SITE.name} — ${SITE.role}`;
