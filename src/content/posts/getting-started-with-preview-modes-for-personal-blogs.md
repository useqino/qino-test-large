---
title: "Getting Started with Preview Modes for Personal Blogs"
created-on: "2025-01-13T16:45:00Z"
updated-on: "2025-01-20T16:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about preview modes. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
