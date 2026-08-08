// Continuing education, deliberately presented as a small footnote rather than a
// headline gallery. Three course certificates displayed as large tiles undercut the
// 5-year production work above them — a reviewer reads "Back-End Development 101" as
// the level of the candidate rather than as extra credit.
import backEnd101 from "../public/cert/bayanacademy-backend-web-development-101.png";
import reactAdvanceScrimba from "../public/cert/scrimba-certificate-advanced-react.png";
import javascriptProgramming from "../public/cert/javascript-programming.png";

export const CERTIFICATES = [
  {
    title: "Advanced React",
    org: "Scrimba",
    image: reactAdvanceScrimba,
  },
  {
    // Was titled "Advanced React" with the Scrimba entry's name copied onto it, so the
    // page showed two identically-named certificates pointing at different images.
    title: "JavaScript Programming",
    org: "Bayan Academy",
    image: javascriptProgramming,
  },
  {
    title: "Back-End Web Development 101",
    org: "Bayan Academy",
    image: backEnd101,
  },
];
