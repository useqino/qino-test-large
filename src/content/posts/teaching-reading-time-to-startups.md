---
title: "Teaching Reading Time to Startups"
created-on: "2026-03-04T19:45:00Z"
updated-on: "2026-04-29T19:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
