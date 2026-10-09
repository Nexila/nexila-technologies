import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.nexilatechnologies.com" || "http://98.130.92.168" || "http://localhost:5173";

const SEO = {
  "/": {
    title: "Software Training Institute in Tambaram | Nexila Tech",
    description:
      "Nexila Technologies: software training institute in Tambaram, Chennai. Job-focused IT courses, live projects, internships and career support. Book a free demo.",
    keywords:
      "software training institute in Tambaram, IT training institute in Chennai, software courses in Tambaram, full stack training Tambaram, internship in Tambaram, placement training Chennai, free demo class",
    ogTitle: "Learn. Build. Get Hired.",
    type: "WebPage",
  },

  "/about-us": {
    title: "About Nexila Technologies | IT Training Institute, Tambaram",
    description:
      "About Nexila Technologies, a software training and development company in Tambaram, Chennai, building practical IT skills with live projects and mentoring.",
    keywords:
      "IT training company Tambaram, software training and development company Chennai, practical IT training, trainers, live projects",
    ogTitle: "About Nexila Technologies",
    type: "AboutPage",
  },

  "/courses": {
    title: "IT Courses in Tambaram, Chennai | Nexila Technologies",
    description:
      "Explore 35 IT courses at Nexila Technologies, Tambaram: Full Stack, Cloud, Data, Testing, RPA, Mobile and more. Beginner to advanced, classroom and live online.",
    keywords:
      "software courses in Chennai, full stack course Tambaram, cloud computing course, data science course Chennai, software testing course, RPA training, online IT courses",
    ogTitle: "IT Courses in Tambaram, Chennai",
    type: "CollectionPage",
  },

  "/it-internship-for-students-tambaram-chennai": {
    title: "IT Internship for Students in Tambaram, Chennai | Nexila",
    description:
      "Software internship for college students in Tambaram, Chennai. 2 to 8 weeks, live projects, mentor guidance, certificate and recommendation letter. Apply now.",
    keywords:
      "IT internship in Tambaram, internship for students in Chennai, software development internship, internship for engineering students, full stack internship, python internship, AI ML internship Chennai, DevOps internship",
    ogTitle: "IT Internship for Students in Chennai",
    type: "WebPage",
  },

  "/nexila-hackathon-2026": {
    title: "Nexila Hackathon 2026 | AI & Programming Hackathon",
    description:
      "Nexila Hackathon 2026: AI and programming hackathon for college students in Tamil Nadu. Teams of 2 to 4, online rounds, offline finals, ₹50,000 prize pool.",
    keywords:
      "hackathon 2026 Chennai, AI hackathon Tamil Nadu, college hackathon, programming competition for students, hackathon in Tambaram, student coding competition",
    ogTitle: "Nexila Hackathon 2026",
    type: "Event",
  },

  "/contact-us": {
    title: "Contact Nexila Technologies | Software Training, Tambaram",
    description:
      "Contact Nexila Technologies in West Tambaram, Chennai - 600045. Call +91 980 306 1234, email us or book a free consultation on courses and internships.",
    keywords:
      "software training institute Tambaram address, Nexila Technologies phone number, free consultation, IT training Chennai contact, West Tambaram",
    ogTitle: "Contact Us",
    type: "ContactPage",
  },

  // Course SEO entries. Keep each course's exact SEO URL here.
  "/courses/java": {
    title: "Java Training in Tambaram, Chennai | Nexila",
    description:
      "Java training in Tambaram, Chennai. Learn to code with hands-on practice, expert trainers, projects and career support. Classroom and live online.",
    keywords:
      "Java course in Chennai, Java training institute Chennai, best Java training in Tambaram, Java online course, programming course",
    ogTitle: "Java Training",
    type: "Course",
  },

  "/courses/python-course": {
    title: "Python Training in Tambaram, Chennai | Nexila",
    description:
      "Python training in Tambaram, Chennai. Learn to code with hands-on practice, expert trainers, projects and career support. Classroom and live online.",
    keywords:
      "Python course in Chennai, Python training institute Chennai, best Python training in Tambaram, Python online course, programming course",
    ogTitle: "Python Training",
    type: "Course",
  },

  "/courses/aws-certification-training": {
    title: "AWS Training & Certification in Tambaram, Chennai | Nexila",
    description:
      "AWS Training & Certification training in Tambaram, Chennai. Hands-on cloud skills for modern IT roles, with expert trainers, projects and career support.",
    keywords:
      "AWS Training & Certification course in Chennai, AWS training institute Chennai, AWS training in Tambaram, AWS online course, cloud computing course",
    ogTitle: "AWS Training & Certification",
    type: "Course",
  },

  "/courses/aws-devops": {
    title: "AWS with DevOps Training in Tambaram, Chennai | Nexila",
    description:
      "AWS with DevOps training in Tambaram, Chennai. Hands-on cloud skills for modern IT roles, with expert trainers, projects and career support.",
    keywords:
      "AWS with DevOps course in Chennai, AWS with DevOps training institute Chennai, AWS with DevOps training in Tambaram, AWS with DevOps online course, cloud computing course",
    ogTitle: "AWS with DevOps Training",
    type: "Course",
  },

  "/courses/azure": {
    title: "Azure Training in Tambaram, Chennai | Nexila",
    description:
      "Azure training in Tambaram, Chennai. Hands-on cloud skills for modern IT roles, with expert trainers, projects and career support. Classroom and live online.",
    keywords:
      "Azure course in Chennai, Azure training institute Chennai, best Azure training in Tambaram, Azure online course, cloud computing course",
    ogTitle: "Azure Training",
    type: "Course",
  },

  "/courses/mern-full-stack-training": {
    title: "MERN Full Stack Training in Tambaram, Chennai | Nexila",
    description:
      "MERN Full Stack training in Tambaram, Chennai: MongoDB, Express.js, React, Node.js. 120 days, 90 hours, real projects, completion certificate. Free demo.",
    keywords:
      "MERN Full Stack course in Chennai, MERN Full Stack training institute Chennai, best MERN Full Stack training in Tambaram, MERN Full Stack online course, full stack developer course",
    ogTitle: "MERN Full Stack Training",
    type: "Course",
  },

  // Add the remaining course entries from your SEO spreadsheet here.
};

function setMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname === "/"
        ? "/"
        : location.pathname.replace(/\/+$/, "");

    const page = SEO[path];

    if (!page) {
      console.warn("SEO metadata not configured for:", path);
      return;
    }

    const canonical = `${SITE}${path === "/" ? "/" : `${path}/`}`;

    document.title = page.title;

    setMeta("name", "description", page.description);
    setMeta("name", "keywords", page.keywords);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Nexila Technologies");
    setMeta("property", "og:title", page.ogTitle || page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", canonical);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.ogTitle || page.title);
    setMeta("name", "twitter:description", page.description);

    let canonicalLink = document.head.querySelector(
      'link[rel="canonical"]',
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonical;

    const schema = {
      "@context": "https://schema.org",
      "@type": page.type || "WebPage",
      name: page.title,
      description: page.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: "Nexila Technologies",
        url: `${SITE}/`,
      },
    };

    let script = document.getElementById("dynamic-seo-schema");

    if (!script) {
      script = document.createElement("script");
      script.id = "dynamic-seo-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
}
