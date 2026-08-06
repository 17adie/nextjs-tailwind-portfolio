# GitHub profile README

Copy the block below into a **new public repository named `17adie`** (the repo name must
match the username exactly) as `README.md`. GitHub then renders it at the top of
<https://github.com/17adie>.

Why this matters: the profile currently shows ~27 contributions in the last year, almost
all of them on this portfolio, and the pinned repos are mostly tutorial-scale with empty
descriptions. A reviewer who clicks through from a 5-year resume sees a beginner's
GitHub, and that mismatch creates doubt. The fix isn't to fake activity — it's to say
plainly where the real code lives.

---

```markdown
## Hi, I'm Aldrine 👋

Full-stack developer in Batangas, Philippines. I turn paper-based processes into
production web systems — mostly for government offices, where the data is sensitive,
the approvals are multi-level, and downtime isn't an option.

**A note on this profile:** most of my work from the last five years isn't here. It
lives in private repositories belonging to DOLE Regional Office IV-A and previous
employers. What I can show, I've written up as case studies instead:

- **[HRIS — Human Resource Information System](https://aldrinefacistol.vercel.app/work/hris)** —
  co-built with one other developer for a regional office of ~400 employees. 13+ modules,
  layered PHP/Slim 4 backend behind a REST API, JavaScript SPA, page-level access control
  by user role, and Server-Sent Events driving live approval dashboards.
- **[PTO-CEI Online Certification](https://aldrinefacistol.vercel.app/work/pto-cei)** —
  digitized an end-to-end certification workflow. Certificate issuance went from a
  hand-prepared task to a single click, with QR-code verification on every certificate.

📄 **[Portfolio](https://aldrinefacistol.vercel.app)** ·
**[Résumé](https://aldrinefacistol.vercel.app/Aldrine-Facistol-Resume.pdf)** ·
**[LinkedIn](https://www.linkedin.com/in/aldrinefacistol/)** ·
facistol.aldrine@gmail.com

### What I work with

**Backend:** PHP (Slim 4), MySQL, Node.js, Express, REST APIs
**Frontend:** JavaScript, React, Next.js, Tailwind CSS
**Also:** Role-based page access, Server-Sent Events, WebRTC, stored procedures, TCPDF
**Learning:** Laravel, Vue, Inertia.js

Open to full-time and remote roles.
```

---

## Two more things worth doing on the profile

1. **Unpin the tutorial repos.** `todo-list-php-oop`, `mern-auth` and
   `next-simple-crud-mysql` are the weakest signal on the page. Pin
   `mern-blog-project`, `nextjs-tailwind-portfolio` and `e-app` instead — three
   repos with something in them beats six where half are exercises.

2. **Add a one-line description to every pinned repo.** They're currently empty, so the
   pins read as abandoned. One sentence each, e.g.:
   - `nextjs-tailwind-portfolio` — "My portfolio, built with Next.js and Tailwind. Case studies for the government systems I can't open-source."
   - `mern-blog-project` — "Full-stack blog: React + Vite frontend, Express/MongoDB API, JWT auth. Deployed live."
   - `e-app` — "E-approval system built for a freelance client: admin portal, document approval flow, email notifications."
