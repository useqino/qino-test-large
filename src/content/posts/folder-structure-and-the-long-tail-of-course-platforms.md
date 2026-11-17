---
title: "Folder Structure and the Long Tail of Course Platforms"
created-on: "2025-06-15T11:15:00Z"
updated-on: "2025-07-04T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
