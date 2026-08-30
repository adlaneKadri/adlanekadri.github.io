# Personal CV site redesign — design spec

**Repo:** `adlaneKadri/adlanekadri.github.io` (working branch: `redesign-2026`)
**Live URL:** https://adlanekadri.github.io/
**Pre-redesign snapshot:** tag `v1-original-2021`, pushed to `origin` — the old site is always one `git checkout v1-original-2021` away.

## Goal

Replace the 2021 StartBootstrap-based CV with a rebuilt, dark, professional single-page site that reflects the last 7 years of work at Innoscape (previously undersold as a 2-line "young student" bio) and drops content that's no longer accurate or wanted.

## Visual direction — "Console"

Chosen from three explored directions (see the [design canvas](https://claude.ai/code/artifact/3efca8ca-967e-4b48-95e7-61e8ade901bf) for the others).

- **Type:** Space Grotesk for display/headings, JetBrains Mono for body copy and labels.
- **Palette:** cool near-black background (oklch hue 240), single sharp green accent (oklch 0.80 0.16 155). No secondary accent.
- **Texture:** faint background grid, monospace micro-labels, numbered bullet markers, a light terminal/status-bar motif (`adlanekadri.github.io :: data-engineer`) used as chrome, not as a gimmick.
- **Layout:** single page, section-by-section, generous spacing, panel/card treatment for experience and education entries.

## Technical approach

- **Stack:** plain static HTML/CSS, no build step. No Bootstrap, no jQuery, no Gulp/node-sass. Custom CSS using Grid/Flexbox and CSS custom properties for the theme. Serves directly from GitHub Pages.
- **Bilingual:** single page with an EN/FR toggle (replacing the current split between `index.html` and a drifted `frenchResume.html`). Content for both languages lives in one place so they can't diverge again.
- **PDF:** a "Download CV" action that triggers the browser's print dialog against a dedicated print stylesheet (clean, light, 1–2 pages). No separate PDF file to maintain.
- **"View program" modal:** each university education entry gets two things — the existing link to the official program page, *and* a "View program" control that opens an in-page panel listing that program's coursework. Modal styling follows the Console direction (dark panel, backdrop dim, footer keeps the official-page link).

## Content changes

### Hero / About
- Drop the phone number entirely (was `(+33) 766 81 99 43` — removed from public exposure, by request).
- Replace the stale "young computer science student" bio with a summary reflecting 7 years as a Data Engineer: end-to-end data platforms, scraping/automation, cloud + on-prem infra, Microsoft Fabric, Power BI-adjacent work, two Master's degrees.
- Contact: both emails kept (`adlan68@live.fr`, `akadri@innoscape.com`). LinkedIn updated to `linkedin.com/in/adlane-kadri` (replacing the old `adlan-kadri-788b66138` slug). GitHub unchanged (`github.com/adlaneKadri`).

### Experience — Innoscape, Data Engineer (Jun 2019 – Present)
Title stays **Data Engineer** (scope expressed through the bullets, not a title change). Rewritten bullets:
- Web scrapers across competitor e-commerce sites in the **DIY/home-improvement retail sector**, France and international — sector described generically, no competitor names.
- Automation robots against partner platforms (authenticated sessions, CSV/Excel exports → process → store).
- Ownership of the Linux server fleet (AWS EC2 + on-premise — never "R720") running scheduled collection jobs; full ownership of the AWS RDS layer (schema, views, users, privileges, backup/retention scripts) — no specific retention duration stated.
- SQL views that the BI team's reports are built on, plus MySQL pre-validation queries — **not** a Power BI skill claim; he doesn't work in Power BI.
- Migration of legacy Hadoop/Spark/Scala pipelines (monitored via Kylo) to Microsoft Fabric: porting jobs to Fabric notebooks, migrating data from S3 into the Fabric Lakehouse, designing new pipelines from scratch for later projects.

### Education
Four entries, in reverse-chronological order:

| Program | Dates | Status |
|---|---|---|
| Master Big Data, Université Paris 8 | 2021–2022 | Graduated, 16/20. Course list **verified** against the official syllabus (12/14 items confirmed). |
| Master — Data Mining & Decision Systems, Sorbonne Paris Nord (Institut Galilée) | 2018–2020 | Completed (was shown "in progress"). Class ranking line removed. Course list is **memory only — no official source found**; needs your sanity check before it's published in the modal. |
| Master SII (Systèmes Informatiques Intelligents), USTHB | 2017–2018 | Unchanged. Coursework is thin and **memory only** (optimization/meta-heuristics, multi-agent systems, machine learning) — no official source found. |
| Licence ISIL, USTHB | 2015–2017 | Unchanged. Course list **verified** against the official program PDF. |

High school baccalaureate entry stays as-is (no modal — not a university program).

### Skills
- **Add:** Microsoft Fabric, AWS (EC2, RDS, S3), Puppeteer, Linux (server administration).
- **Remove:** Power BI, Tableau (he doesn't work hands-on in either; the BI-adjacent contribution is described in the experience bullets instead, not claimed as a tool skill). Tableau still appears inside the Sorbonne program's coursework list, since it was studied there.
- Everything else (Python, Java, PHP, HTML/CSS, npm, Selenium, pandas, NumPy, SciPy, Keras, OpenCV, Scikit-learn, requests, SAS, Oracle, MongoDB, MySQL, Git, LaTeX) stays.

### Projects & Contributions, Extracurricular, Languages, Operating Systems, Interests
Kept in full — polish the wording/English throughout (much of it was written 6 years ago), but preserve every entry and the underlying facts. No section removed.

Certificates section stays excluded, matching the current live site (it's currently commented out there).

## Open items needing your confirmation before those two modals go live
1. Sorbonne Paris Nord (EID2) coursework list — memory-only, unverified.
2. USTHB Master SII coursework list — memory-only, thin (only 3 items), unverified.

Everything else in this spec is settled.

## Out of scope
- No visitor login/auth system (the site remains a static public page).
- No new sections beyond the ones listed above.
- No change to how the site is hosted (stays on GitHub Pages via this repo).
