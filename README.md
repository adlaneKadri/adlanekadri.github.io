# [Adlane Kadri — Data Engineer](https://adlanekadri.github.io/)

Personal CV site. Static HTML and CSS, no framework and no build step — clone it and open `index.html`.

**[View live](https://adlanekadri.github.io/)**

## Structure

```
index.html          the whole page (English in the markup)
assets/css/style.css  theme + print stylesheet
assets/js/app.js      French translations, language toggle, program modals
img/profile.jpg
```

## Notes

- **Bilingual.** English lives in the HTML so the page works with JavaScript disabled and stays indexable. French is applied from the `FR` dictionary at the top of `assets/js/app.js`, keyed to the `data-i18n` attributes in the markup. Adding or changing text means touching both places — they sit right next to each other by design, so the two versions can't silently drift apart the way the old separate `frenchResume.html` did.
- **Print / PDF.** "CV.PDF" triggers the browser's print dialog against a dedicated print stylesheet (light background, tighter spacing, chrome hidden). There is no separate PDF file to keep up to date.
- **Education modals.** Each degree has a "view program" button opening its coursework, plus a link to the official university page. Every course list is taken from the institution's own published curriculum.

## History

Rebuilt from scratch in 2026. The previous version (2019–2021, based on the
[StartBootstrap Resume](https://startbootstrap.com/template-overviews/resume) template with Bootstrap 4, jQuery and Gulp) is preserved at the `v1-original-2021` tag:

```
git checkout v1-original-2021
```

## License

[MIT](LICENSE)
