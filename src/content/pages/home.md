---
title: "qino Demo"
tagline: "The flat-file Markdown CMS with first-class relations and type safety."
"featured-posts":
  - "posts/the-smallest-useful-cms.md"
  - "posts/why-folder-structure-is-api.md"
  - "posts/content-modeling-without-an-orm.md"
  - "posts/a-checklist-for-alt-text-aimed-at-solo-developers.md"
  - "posts/a-practical-guide-to-pull-request-reviews-for-news-publishers.md"
  - "posts/author-profiles-lessons-from-startups.md"
  - "posts/content-linting-and-the-long-tail-of-technical-writers.md"
  - "posts/debugging-reading-time-as-e-commerce-catalogs.md"
  - "posts/getting-started-with-mdx-components-for-content-editors.md"
  - "posts/how-nonprofits-approach-taxonomies.md"
  - "posts/measuring-build-caching-as-technical-writers.md"
  - "posts/notes-on-open-graph-tags-for-open-source-projects.md"
  - "posts/rethinking-alt-text-for-startups.md"
  - "posts/search-indexing-lessons-from-large-archives.md"
  - "posts/static-site-builds-patterns-that-work-for-startups.md"
  - "posts/ten-questions-about-draft-handling-from-nonprofits.md"
  - "posts/the-case-for-taxonomies-among-course-platforms.md"
  - "posts/what-large-archives-get-wrong-about-headless-cmses.md"
---

qino keeps your content in plain Markdown and JSON, validates it with your schemas, and gives you typed getters that resolve relations without a database in the loop.

## Why?

Most Markdown CMSes treat content files as opaque blobs. You get a string of Markdown and a loose bag of metadata, and it's up to you to parse, validate, and stitch it together into something usable. This is a leaky abstraction that leads to a lot of boilerplate and runtime errors.

qino's goal is to make content relationships first-class citizens, and to provide a type-safe API for working with them. By declaring relations in your collection schemas, you get:

- **Compile-time guarantees** that your content files are well-formed and that your relations point to valid targets.
- **Ergonomic getters** that resolve relations for you, so you can work with fully
  typed data objects instead of raw Markdown and metadata.
