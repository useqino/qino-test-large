---
title: "What Product Teams Get Wrong About Slug Design"
created-on: "2026-10-07T01:00:00Z"
updated-on: "2026-10-29T01:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
