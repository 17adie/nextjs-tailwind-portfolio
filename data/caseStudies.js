// Long-form writeups for the two projects with enough substance to fill one. The cards
// on the home page can only carry a paragraph, which left the depth of this work
// invisible — a reviewer had no way to tell a 13-module system apart from a CRUD demo.
//
// Everything here is drawn from the resume. The "decisions" sections state the choice
// and the tradeoff it answers; they're the intended interview openers, so they should
// stay in language the author can defend out loud.
import { PROJECTS } from "./projects";

const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug);

export const CASE_STUDIES = {
  hris: {
    slug: "hris",
    title: "HRIS — Human Resource Information System",
    tagline: "A government office of ~400 employees, moved off paper by two developers.",
    meta: [
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Team", value: "2 developers" },
      { label: "Org", value: "DOLE Regional Office IV-A" },
      { label: "Users", value: "~400 employees" },
    ],
    problem: [
      "A DOLE regional office ran employee records, leave, overtime and CTO (compensatory time off) applications on paper. Every application was hand-carried through a chain of approvers, and employee records — including the Personal Data Sheet the government requires — lived in physical folders and spreadsheets.",
      "The office needed one system covering the whole employee lifecycle, with the approval chain encoded in software rather than in whoever happened to be at their desk. Two of us built it from scratch.",
    ],
    approach: [
      "A layered PHP backend on Slim 4 — MVC, a Services layer and Middleware, plus a DTO for validated import rows — exposing a REST API.",
      "A vanilla-JavaScript single-page application — RequireJS for AMD module loading and page.js for client-side routing — consuming that API on a shared base template so every module started from the same foundation.",
      "MySQL for persistence. Bulk employee imports don't block on email: each new account's credentials are written to a database-backed email queue and delivered by a scheduled cron job running in the background.",
      "13+ modules on that one foundation: employee management, leave, overtime, CTO, approval workflows and employee self-service.",
    ],
    myScope: [
      "The application foundation every module is built on — the layered backend exposing the REST API, and the SPA base template.",
      "The employee self-service PDS profile end to end — personal data, education, work history, eligibilities and attachments.",
      "The security layer: page-level access control by user role, CSRF protection, rate limiting, secure session management and security headers.",
      "Automated document generation — PDF forms, Excel and Word exports — and bulk employee import with validation, where each new account's credentials are queued in a database-backed email queue and sent by a background cron job so the import never waits on the mail server.",
    ],
    collaborated: [
      "The leave, overtime and CTO filing workflows with status tracking.",
      "The multi-level approval and delegation workflow, which routes each application to the correct approver automatically and reassigns when someone delegates.",
      "The real-time layer: in-app notifications, one-on-one HR chat, and live-updating approval dashboards.",
    ],
    decisions: [
      {
        title: "Server-Sent Events for the approval dashboards, not polling",
        body: "Approvers keep a dashboard open while they work through a queue, and a stale queue causes double-handling of the same application. SSE holds one long-lived connection per viewer and pushes updates as they happen, which suits a dashboard that reads constantly and writes rarely — and unlike WebSockets it runs over plain HTTP, so it needed no additional infrastructure on the office's existing stack.",
      },
      {
        title: "Cursor-based polling for HR chat",
        body: "Chat needed to survive the connection dropping and resume from wherever it left off. Each poll sends the last message cursor it saw and receives only what arrived after it, so a reconnect can't miss messages or replay ones already shown — and the server never has to hold per-conversation connection state.",
      },
      {
        title: "A shared foundation before any feature",
        body: "With 13+ modules planned and two developers working in parallel, the risk was two divergent codebases meeting in the middle. Building the layered backend and the SPA base template first meant every module after it inherited the same routing, validation, auth and error handling instead of reinventing them.",
      },
      {
        title: "Security treated as part of the foundation",
        body: "The system holds government Personal Data Sheets — full personal, family and employment history for every employee. Page-level access control by user role, CSRF protection, rate limiting, hardened session management and security headers went into the shared foundation, so a new module is protected by default rather than protected if the developer remembered. Access is gated per page by role — it governs which parts of the system a role can reach, not which actions they can take inside one.",
      },
    ],
    results: [
      "One system covering 13+ modules for ~400 employees, replacing a paper process end to end.",
      "Applications route themselves to the right approver, with delegation handled by the system rather than by hand.",
      "Bulk employee import with validation and automated PDF/Excel/Word generation eliminated hours of manual encoding.",
      "Approvers see their queue update live instead of reloading to find out whether anything changed.",
    ],
  },

  "pto-cei": {
    slug: "pto-cei",
    title: "PTO/CEI Online Application",
    tagline: "A government certification workflow, from hand-prepared certificates to one click.",
    meta: [
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Team", value: "2 developers" },
      { label: "Timeline", value: "~6 months" },
      { label: "Users", value: "Applicants, evaluators, PO inspectors, RO focal" },
    ],
    problem: [
      "Getting a PTO-CEI certificate meant filing on paper, then calling the office to find out what stage the application had reached. On the office side, evaluators and inspectors were assigned by hand, inspection authorities were typed up individually, and each approved certificate was hand-prepared.",
      "The whole chain — submission, assignment, inspection, compliance review, payment, approval, issuance — had to move online without losing the checks built into the paper version.",
    ],
    approach: [
      "Two applications on a shared backend — an office-facing admin app (evaluators, PO inspectors, RO focal) and a client-facing portal for applicant establishments — talking to the same MySQL database through one PHP controllers/model layer.",
      "Vanilla PHP with PDO for data access, jQuery and Bootstrap on the frontend (SB Admin 2 as the base), rakit/validation for request rules, and Laminas Escaper for output escaping.",
      "A staged workflow moving each application through submission → evaluator and PO-inspector assignment → system-generated inspection authorities (batch generation, separately for electrical and mechanical) → on-site inspection reporting → compliance review → order of payment → final approval → automated certificate issuance.",
      "Certificates rendered as PDFs with TCPDF and delivered by PHPMailer the moment they're approved.",
      "A QR code on every certificate resolving to a public verification endpoint. Each check records who verified — IP address, browser, device — leaving an audit trail without asking the verifier to sign in.",
    ],
    myScope: [
      "The applicant-facing client app end to end: registration, account recovery and password reset, the applicant portal for submitting and tracking applications, and receiving approved certificates.",
      "The public QR-verification page — an unauthenticated route that resolves a certificate token, returns the record, and logs who checked (IP, browser, device) for the audit trail.",
      "Shared the admin side with my co-developer, contributing to the office-facing workflow that supports evaluators, PO inspectors and RO focal.",
    ],
    collaborated: [
      "The admin side — the office-facing workflow covering evaluator and inspector assignment, batch authority generation, on-site inspection reporting, compliance review, order of payment and final certificate approval — was built together with my co-developer.",
    ],
    decisions: [
      {
        title: "Two apps sharing one API, not one combined interface",
        body: "The office and the applicants have almost no overlap in what they need to do, and mixing them in one interface would have meant either two role-toggled variants of every screen or a heavy client-side branching layer. Two separate apps on a shared backend keeps each surface focused on its own audience — the office gets a full workbench, applicants get a small portal — while sharing one MySQL schema and one PHP model layer so a business rule doesn't have to be maintained twice.",
      },
      {
        title: "QR verification instead of a certificate registry lookup",
        body: "A PDF certificate is trivial to alter, and the people who need to check one — employers, other agencies — have no reason to have an account on the system. Printing a QR code that resolves to a public verification endpoint means anyone holding the document can confirm it against the issuing system in one scan, with no login and no phone call to the office. Every check is logged with the verifier's IP, browser and device, so the office can see who's checking what without adding friction to the check itself.",
      },
      {
        title: "Applicant accounts rather than reference numbers",
        body: "Most of the office's inbound calls were status questions. Giving applicants their own accounts turned that into something they could answer themselves, and gave the system somewhere to deliver approved certificates that isn't an email attachment sent to whoever filed the request.",
      },
      {
        title: "Batch-generating inspection authorities per discipline",
        body: "Inspection authorities were typed by hand for each application — slow and a source of transcription errors in exactly the details an inspection depends on. Generating them from the application record means the document can't disagree with the data it came from, and batching them per discipline (electrical, mechanical) lets one inspector receive a merged authority covering several applications in one trip.",
      },
    ],
    results: [
      "Certificate issuance went from a manual, hand-prepared task to a single click.",
      "Applicants submit and track their own applications online, and receive approved certificates by email automatically on approval.",
      "Anyone can verify a certificate's authenticity by scanning its QR code — no account needed.",
      "The full evaluation chain — assignment, inspection, compliance, payment, approval — runs in one system instead of across paper and follow-up calls.",
    ],
  },
};

// Photos and stack tags stay in projects.js so the card and the case study can't drift
export const getCaseStudy = (slug) => {
  const study = CASE_STUDIES[slug];
  if (!study) return null;
  return { ...study, project: bySlug(slug) };
};

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES);
