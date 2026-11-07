import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SEO } from "../src/seo/seoData.js";

const SITE = "https://www.nexilatechnologies.com";
const DIST = path.resolve("dist");

const originalHTML = fs.readFileSync(
  path.join(DIST, "index.html"),
  "utf8"
);

for (const [route, page] of Object.entries(SEO)) {
  const canonical = `${SITE}${route === "/" ? "/" : `${route}/`}`;

  const meta = `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:title" content="${page.ogTitle || page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.ogTitle || page.title}" />
    <meta name="twitter:description" content="${page.description}" />
  `;

  const html = originalHTML.replace(
    /<title>.*?<\/title>/,
    ""
  ).replace(
    "</head>",
    `${meta}</head>`
  );

  const outputFolder =
    route === "/"
      ? DIST
      : path.join(DIST, route.slice(1));

  fs.mkdirSync(outputFolder, { recursive: true });

  fs.writeFileSync(
    path.join(outputFolder, "index.html"),
    html
  );

  console.log("SEO generated:", route);
}

console.log("All SEO pages generated!");