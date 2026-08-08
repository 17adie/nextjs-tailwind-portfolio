// Work history, which the site previously didn't show at all — the strongest asset on
// the resume is an unbroken 2014-to-present arc, and a reviewer who only sees projects
// has no way to tell whether they were built over ten years or one weekend.
//
// Bullets stay impact-phrased ("replaced a manual process with X") rather than
// responsibility-phrased ("responsible for maintaining X"), which is how the resume
// already reads.
export const EXPERIENCE = [
  {
    role: "Computer Programmer",
    company: "H&K Business Support Inc. — DOLE Regional Office IV-A",
    location: "Calamba City, Laguna",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      "Built a full-stack web application for Alien Employment Permit (AEP) processing, replacing legacy paper forms with automated validation and structured data handling.",
      "Maintain and improve the system in production — resolving data issues, addressing user concerns, and generating reports.",
    ],
  },
  {
    role: "Computer Programmer / LEO III (ALI)",
    company: "DOLE Regional Office IV-A",
    location: "Calamba City, Laguna",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Built the TSI Fabrication Online System from scratch, replacing a fully manual process with an online workflow featuring digital evaluation and auto-generated certificates delivered by email.",
    ],
  },
  {
    role: "Computer Programmer",
    company: "H&K Business Support Inc. — DOLE Regional Office IV-A",
    location: "Calamba City, Laguna",
    period: "Oct 2023 – Sep 2025",
    points: [
      "Digitized 5 previously manual DOLE certification processes — PTO-CEI, CSHP, Rule 1020, AEP (Exclusion/Exemption) and No Pending Case — replacing paper workflows with online applications, a digital evaluation workflow, and certificates auto-generated and emailed on approval.",
      "Delivered PTO-CEI as the standout system: reduced certificate issuance from a hand-prepared task to a single click, and built a client-facing portal where applicants track application status in real time.",
      "Diagnosed and fixed bugs at the root cause to prevent recurrence, keeping systems reliable in production.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance (Remote)",
    location: "Remote",
    period: "Mar 2022 – Mar 2023",
    points: [
      "Added a Sales and Payments module to the ARMS system, enabling transaction tracking, payment management and a real-time sales dashboard.",
      "Built an E-Application system from the ground up — admin portal, document request and approval flow, email notifications, and reporting tools.",
    ],
  },
  {
    role: "IT Developer",
    company: "Advance Medical Access Philippines, Inc.",
    location: "Makati City, Metro Manila",
    period: "Mar 2020 – Jan 2022",
    points: [
      "Co-developed the ATaccess teleconsultation hybrid app for Android and iOS, featuring doctor/patient registration, video consultations, scheduling, e-prescriptions, and admin tools",
      "Implemented secure real-time video chat (WebRTC) running reliably across platforms via Apache Cordova WebView.",
      "Developed and maintained MySQL stored procedures supporting the platform's core data operations.",
    ],
  },
  {
    role: "Quality System Supervisor / IT",
    company: "Alpha Laboratory Calamba Phils., Corp.",
    location: "Calamba City, Laguna",
    period: "May 2015 – Feb 2020",
    points: [
      "Built the AlphaLab Record Management System (ARMS), replacing manual paperwork and simplifying record tracking for the lab department, then iterated on it for years as the team's needs changed.",
      "Managed office-wide IT support — computers, printers, networks and software.",
    ],
  },
  {
    role: "Data Specialist",
    company: "Alpha Laboratory Calamba Phils., Corp.",
    location: "Calamba City, Laguna",
    period: "May 2014 – May 2015",
    points: [
      "Handled data entry, document scanning, customer inquiries and reporting support while maintaining data confidentiality. This is the paperwork I later automated.",
    ],
  },
];

export const EDUCATION = {
  degree: "BS Information Technology",
  school: "City College of Calamba",
  period: "2010 – 2014",
  location: "Calamba City, Laguna",
};
