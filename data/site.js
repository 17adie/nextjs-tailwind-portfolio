// Identity used by the page metadata, the hero and the footer. These strings used to
// live in three separate files, so a title change meant remembering all three — and a
// missed one silently desynced the page from its own search result.
export const SITE = {
  name: "Aldrine Facistol",
  role: "Full-Stack Developer",
  url: "https://aldrinefacistol.vercel.app",
  resume: "/Aldrine-Facistol-Resume.pdf",
  // Used for og:image / twitter:image. Kept separate from the hero portrait because
  // link previews want a different crop than a round avatar does.
  ogImage: "/dp.jpg",
  ogImageWidth: 1440,
  ogImageHeight: 1800,
  // Short, for <meta name="description"> and the link-preview card
  description: "Full-stack developer with 5+ years building web systems for government agencies and private companies. PHP, JavaScript, MySQL, React and Next.js.",
  // Longer, for the hero paragraph — deliberately a different string from the meta
  // description, which has to stay under ~155 characters to avoid being truncated.
  bio: "Full-stack developer with 5+ years of experience delivering web applications across the frontend and backend. Enjoy building scalable systems, improving user experiences, and solving real-world business challenges with technology.",
};

export const SITE_TITLE = `${SITE.name} — ${SITE.role}`;
