---
title: "A Checklist for Image Pipelines Aimed at Agencies"
created-on: "2025-10-11T10:30:00Z"
updated-on: "2025-12-06T10:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
