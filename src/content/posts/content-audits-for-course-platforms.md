---
title: "Content Audits for Course Platforms"
created-on: "2021-10-27T22:45:00Z"
updated-on: "2021-12-24T22:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
