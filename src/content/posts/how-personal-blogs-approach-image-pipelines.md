---
title: "How Personal Blogs Approach Image Pipelines"
created-on: "2023-09-23T08:30:00Z"
updated-on: "2023-09-27T08:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
