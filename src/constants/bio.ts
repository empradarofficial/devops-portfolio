/**
 * Personal bio constants — single source of truth.
 * Update values here; site config, SEO, contact, and resume derive from this file.
 */
export const BIO = {
  fullName: "Muhammad Waqas",
  firstName: "Muhammad",
  lastName: "Waqas",
  shortName: "MW",
  jobTitle: "Senior Blokchain Developer",
  email: "waqas@dafilabs.com",
  location: "Remote · Worldwide",
  availability: "Open to architecture consulting and select engagements",
  /** Public site URL (portfolio) */
  portfolioUrl: "https://muhammadwaqas.dev",
  /** Resume file name inside /public/resume/ */
  resumeFileName: "Muhammad-Waqas-Resume.pdf",
  linkedinUrl: "https://linkedin.com/in/muhammadwaqas",
  githubUrl: "https://github.com/muhammadwaqas",
  twitterHandle: "@mwaqas",
} as const;

/** Absolute public path to the resume PDF */
export const RESUME_PATH = `/resume/${BIO.resumeFileName}` as const;

/** mailto: link derived from email */
export const EMAIL_HREF = `mailto:${BIO.email}` as const;
