Nexila Technologies website prototype (multi-page)

Pages
  index.html           Home
  about-us.html        About Us
  courses.html         Course listing
  internship.html      Internship program page (apply form + 22 FAQs)
  hackathon.html       Hackathon 2026 page (interest form, rounds, prizes, FAQs)
  courses/<slug>.html  One page per course (34 courses), e.g. courses/mern.html

Shared files
  assets/styles.css    All styling (colour tokens at the top: navy, blue, orange)
  assets/app.js        React components and page content (courses, FAQs, syllabus)

How to run
  Open index.html in a browser. An internet connection is needed for the React,
  htm and Google Fonts CDN files. Or serve the folder: python3 -m http.server

Notes
  - To edit course content, search app.js for COURSELIST, DET (MERN details) and GEN_FAQ.
  - Forms are front-end only; connect them to email / CRM / Google Sheets.
  - ABOUT_PHOTO in app.js is where the About page photo goes.
  - For production SEO, build this as Next.js (server-rendered); these pages render in the browser.

  - Hackathon dates live in HK at the top of the hackathon section in app.js; the countdown, round statuses and registration note update from those dates.
